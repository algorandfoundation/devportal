---
numbersections: true
title: "Algorand Byzantine Fault Tolerance Protocol Specification"
date: \today
abstract: >
  The _Algorand Byzantine Fault Tolerance protocol_ is an interactive protocol which produces a sequence of common information between a set of participants.
pandoc-latex-environment:
  tcolorbox: [box]
  info-box: [info]
  warning-box: [warning]
  error-box: [error]
---

# Conventions and Notation

This specification defines a _player_ to be a unique participant in
this protocol.

This specification describes the operation of a single _correct_
player. A correct player follows this protocol exactly and is
distinct from a _faulty_ player. A faulty player may deviate from
the protocol in any way, so this specification does not describe the
behavior of those players.

Correct players do not follow distinct protocols, so this
specification describes correct behavior with respect to a single,
implicit player. When the protocol must describe a player distinct
from the implicit player (for example, a message which originated from
another player), the protocol will use subscripts to distinguish
different players. Subscripts are omitted when the player is
unambiguous. For instance, a player might be associated with some
"address" $I$; if this player is the $k$-th player in the protocol,
then this address may also be denoted $I_k$.

This specification will describe certain objects as _opaque_. This
document does not specify the exact implementation of opaque objects,
but it does specify the subset of properties required of any
implementation of some opaque object.

Opaque data definitions and semantics may be specified in other
documents, which this document will cite when available.

All integers described in this document are unsigned.

# Parameters

$\newcommand \FilterTimeout {\mathrm{FilterTimeout}}$

$\newcommand \DeadlineTimeout {\mathrm{DeadlineTimeout}}$

The protocol is parameterized by the following constants:

- $\lambda, \lambda_{0min}, \lambda_{0max}, \lambda_f, \Lambda, \Lambda_0$ are values representing durations of time.
- $\delta_s, \delta_r$ are positive integers (the "seed lookback" and
  "seed refresh interval") that represents amounts of _rounds_.

For convenience, we define $\delta_b$ (the "balance lookback") to be
$2\delta_s\delta_r$.

We define $\FilterTimeout(p)$ on period $p$ as follows:

- If $p = 0$ and a sufficient history of lowest credential arrival times is available (the protocol needs to have been operational for a certain time in order to be able to compute a statistically significant 95th percentile of credentials deemed prioritary by the ["lowest credential" criteria](#special-values); you may refer to the non-normative [Algorand Byzantine Fault Tolerance Protocol Overview](abft-overview.md#dynamic-filter-timeout) for implementative details on this mechanism):
  The $\FilterTimeout(p)$ is calculated dynamically based on the lower 95th percentile of observed
  lowest credential per round arrival times.

  - $10\lambda_{0min} <= \FilterTimeout(p) <= 2\lambda_{0max}$

- If $p \ne 0$:
  - $\FilterTimeout(p) = 4$ seconds (which coincides with $2\lambda$)
  > [!NOTE]
  > This value is currently hardcoded in the reference implementation, however it should be equal to $2\lambda$.

We define $\DeadlineTimeout(p)$ on period $p$ as follows:

- If $p = 0$:
  - $\DeadlineTimeout(p) = \Lambda_0$
- If $p \ne 0$:
  - $\DeadlineTimeout(p) = \Lambda + \lambda$

Algorand sets $\delta_s = 2$ rounds, $\delta_r = 80$ rounds, $\lambda = 2$ seconds, $\lambda_{0min} = 0.25$ seconds,
$\lambda_{0max} = 1.75$ seconds, $\lambda_f = 5$ minutes, $\Lambda = 15$ seconds, and $\Lambda_0 = 4$ seconds.

# Identity, Authorization, and Authentication

$\newcommand \pk {\mathrm{pk}}$
$\newcommand \sk {\mathrm{sk}}$
$\newcommand \fv {\text{first}}$
$\newcommand \lv {\text{last}}$
$\newcommand \Sign {\mathrm{Sign}}$
$\newcommand \Verify {\mathrm{Verify}}$
$\newcommand \Rand {\mathrm{Rand}}$

$\newcommand \Bbar {\bar{B}}$
$\newcommand \taubar {\bar{\tau}}$

A player is uniquely identified by a 256-bit string $I$ called an
_address_.

Each player owns exactly one _participation keypair_. A participation
keypair consists of a _public key_ $\pk$ and a _secret key_ $\sk$.
A keypair is an opaque object which is defined in the [specification
of participation keys in Algorand][partkey-spec]. Each participation
keypair is valid for a range of rounds $[r_\fv, r_\lv]$.

Let $m, m'$ be arbitrary sequences of bits, $B_k, \Bbar$ be 64-bit integers
representing balances in microalgos with rewards applied,
$\tau, \taubar$ be 32-bit integers, and $Q$ be a 256-bit string. Let
$(\pk_k, \sk_k)$ be some valid keypair.

A secret key supports a _signing_ procedure

$$
y := \Sign(m, m', \sk_k, B_k, \Bbar, Q, \tau, \taubar)
$$

where $y$ is opaque and cryptographically resistant to tampering,
where defined. Signing is not defined on many inputs: for any given
input, signing may fail to produce an output.

The following functions are defined on $y$:

- _Verifying_:
  $\Verify(y, m, m', \pk_k, B_k, \Bbar, Q, \tau, \taubar) = w$, where
  $w$ is a 64-bit integer called the _weight_ of $y$. $w \neq 0$ if
  and only if $y$ was produced by signing by $\sk_k$ (up to
  cryptographic security). $w$ is uniquely determined given fixed
  values of $m', \pk_k, B_k, \Bbar, Q, \tau, \taubar$.

- _Comparing_: Fixing the inputs $m', \Bbar, Q, \tau, \taubar$ to a
  signing operation, there exists a total ordering on the outputs
  $y$. In other words, if
  $f(\sk, B) = \Sign(m, m', \sk, B, \Bbar, Q, \tau, \taubar) = y$,
  and $S = \{(\sk_0, B_0), (\sk_1, B_1), \ldots, (\sk_n, B_n)\}$, then
  $\{f(x) | x \in S\}$ is a totally ordered set. We write that
  $y_1 < y_2$ if $y_1$ comes before $y_2$ in this ordering.

- _Generating Randomness_: Let $y$ be a valid output of a signing
  operation with $\sk_k$. Then $rand = \Rand(y, \pk_k)$ is defined to be a pseudorandom 256-bit integer (up to cryptographic security). $rand$ is uniquely determined given fixed values of
  $m', \pk_k, B_k, \Bbar, Q, \tau, \taubar$.

The signing procedure is allowed to produce a nondeterministic output,
but the functions above must be well-defined with respect to a given
input to the signing procedure (e.g., a procedure that implements
$\Verify(\Sign(\ldots))$ always returns the same value).

# The Ledger of Entries

$\newcommand \Digest {\mathrm{Digest}}$
$\newcommand \Encoding {\mathrm{Encoding}}$

$\newcommand \Seed {\mathrm{Seed}}$
$\newcommand \Record {\mathrm{Record}}$
$\newcommand \DigestLookup {\mathrm{DigestLookup}}$
$\newcommand \Stake {\mathrm{Stake}}$

$\newcommand \ValidEntry {\mathrm{ValidEntry}}$
$\newcommand \Entry {\mathrm{Entry}}$

An _entry_ is a pair $e = (o, Q)$ where $o$ is some opaque object, and
$Q$ is a 256-bit integer called a _seed_. For a detailed definition of this object, see the [Algorand Ledger Specification](../md/ledger.md).

The following functions are defined on $e$:

- _Encoding_: $\Encoding(e) = x$ where $x$ is a variable-length
  bitstring.

- _Summarizing_: $\Digest(e) = h$ where $h$ is a 256-bit integer
  ($h$ should be a cryptographic commitment to the contents of $e$).

A _ledger_ is a sequence of entries $L = (e_1, e_2, \ldots, e_n)$. A
_round_ $r$ is some 64-bit index into this sequence.

The following functions are defined on $L$:

- _Validating_: $\ValidEntry(L, o) = 1$ if and only if $o$ is _valid_
  with respect to $L$. This validity property is opaque.

- _Seed Lookup_: If $e_r = (o_r, Q_r)$, then $\Seed(L, r)$ = $Q_r$.

- _Record Lookup_: $\Record(L, r, I_k) = (\pk_{k,r}, B_{k,r}, r_\fv, r_\lv)$ for some address $I_k$, some public key $\pk_{k,r}$, and some 64-bit integer $B_{k,r}$. $r_\fv$ and $r_\lv$ define the first valid and last valid rounds for this participating account.

- _Digest Lookup_: $\DigestLookup(L, r) = \Digest(e_r)$.

- _Total Stake Lookup_: We use $\mathcal{K}_{r_b,r_v}$ to represent all players with participation keys
  at $r_b$ that are eligible to vote at $r_v$.
  Let $\mathcal{K}_{r_b,r_v}$ be the set of all $k$ for which $(\pk_{k,r_b}, B_{k,r_b}, r_\fv, r_\lv) = \Record(L, r_b, I_k)$ and $r_\fv \leq r_v \leq r_\lv$ holds.
  Then $\Stake(L, r_b, r_v) = \sum_{k \in \mathcal{K}_{r_b,r_v}} B_{k,r_b}$.

A ledger may support an opaque _entry generation_ procedure

$$
o := \Entry(L, Q)
$$

which produces an object $o$ for which $\ValidEntry(L, o) = 1$.
See the _block assembly_ section in the [Algorand Ledger Overview](../md/ledger-overview.md) for implementative details on this procedure.

# Messages

Players communicate with each other by exchanging _messages_. A message is an opaque object containing arbitrary data save for the fields defined below. For a detailed overview on message composition, whether consensus or other types, see the [Algorand Network Overview](../md/network-overview.md).

## Elementary Data Types

$\newcommand \Propose {\mathit{propose}}$
$\newcommand \Soft {\mathit{soft}}$
$\newcommand \Cert {\mathit{cert}}$
$\newcommand \Late {\mathit{late}}$
$\newcommand \Redo {\mathit{redo}}$
$\newcommand \Down {\mathit{down}}$
$\newcommand \Next {\mathit{next}}$

$\newcommand \CommitteeSize {\mathrm{CommitteeSize}}$
$\newcommand \CommitteeThreshold {\mathrm{CommitteeThreshold}}$

$\newcommand \Proposal {\mathrm{Proposal}}$
$\newcommand \Hash {\mathrm{Hash}}$

A _period_ $p$ is a 64-bit integer.

A _step_ $s$ is an 8-bit integer. Steps are named for clarity, and
are defined as follows:

- $\Propose = 0$
- $\Soft = 1$
- $\Cert = 2$
- $\Late = 253$
- $\Redo = 254$
- $\Down = 255$
- $\Next_s = s+3$

The following functions are defined on $s$:

- _Committee Size_: $\CommitteeSize(s)$ is a 64-bit integer
  defined as follows:
  $$
  \CommitteeSize(s) = \left\{
  \begin{array}{rl}
       20 & : s = \Propose \\
     2990 & : s = \Soft \\
     1500 & : s = \Cert \\
      500 & : s = \Late \\
     2400 & : s = \Redo \\
     6000 & : s = \Down \\
     5000 & : \text{otherwise}
  \end{array}
  \right.
  $$
- _Committee Threshold_: $\CommitteeThreshold(s)$ is a 64-bit integer
  defined as follows:
  $$
  \CommitteeThreshold(s) = \left\{
  \begin{array}{rl}
       0 & : s = \Propose \\
    2267 & : s = \Soft \\
    1112 & : s = \Cert \\
     320 & : s = \Late \\
    1768 & : s = \Redo \\
    4560 & : s = \Down \\
    3838 & : \text{otherwise}
  \end{array}
  \right.
  $$

A _proposal-value_ is a tuple
$v = (I, p, \Digest(e), \Hash(\Encoding(e)))$ where $I$ is an
address (the "original proposer"), $p$ is a period (the "original period"),
and $\Hash$ is some cryptographic hash function. The special proposal-value where all
fields are the zero-string is called the bottom proposal $\bot$.

## Votes

$\newcommand \Vote {\mathrm{Vote}}$
$\newcommand \Equivocation {\mathrm{Equivocation}}$

Let $I$ be an address, $r$ be a round, $p$ be a period, $s$ be a step,
and $v$ be a proposal-value, let $x$ be a canonical encoding of the
5-tuple $(I, r, p, s, v)$, and let $x'$ be a canonical encoding of the
4-tuple $(I, r, p, s)$. Let $y$ be an arbitrary bitstring.
Then we say that the tuple

$$
(I, r, p, s, v, y)
$$

is a _vote from $I$ for $v$ at round $r$, period $p$,
step_ $s$ (or _a vote from $I$ for $v$ at $(r, p, s)$ )_,
denoted $\Vote(I, r, p, s, v)$.

[Link to reference implementation.](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/agreement/vote.go#L152)

Moreover, let $L$ be a ledger where $|L| \geq \max\{\delta_b, \delta_s\}$.
Let $(\sk, \pk)$ be a keypair, $B, \Bbar$ be 64-bit integers, $Q$ be a
256-bit integer, and $\tau, \taubar$ 32-bit integers. We say that
this vote is _valid with respect to_ $L$ (or simply _valid_ if $L$ is
unambiguous) if the following conditions are true:

> [!NOTE]
> The reference implementation builds an [asynchronous vote verifier](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/agreement/asyncVoteVerifier.go#L52), which builds a verification pool and under the hood uses two different verifying routines: one for [regular unauthenticated votes](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/agreement/vote.go#L97), and one for [unauthenticated equivocation votes](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/agreement/vote.go#L193). See the non-normative [Algorand ABFT Overview](../md/abft-overview.md) for further detail.

- $r \leq |L| + 2$

- Let $v = (I_{orig}, p_{orig}, d, h)$. If $s = 0$, then $p_{orig} \le p$.
  Furthermore, if $s = 0$ and $p = p_{orig}$, then $I = I_{orig}$.



- If $s \in \{\Propose, \Soft, \Cert, \Late, \Redo\}$, $v \neq \bot$.
  Conversely, if $s = \Down$, $v = \bot$.

- Let $(\pk, B, r_\fv, r_\lv) = \Record(L, r - \delta_b, I)$,
  $\Bbar = \Stake(L, r - \delta_b, r)$, $Q = \Seed(L, r - \delta_s)$,
  $\tau = \CommitteeThreshold(s)$, and
  $\taubar = \CommitteeSize(s)$.
  Then $\Verify(y, x, x', \pk, B, \Bbar, Q, \tau, \taubar) \neq 0$ and
  $r_\fv \leq r \leq r_\lv$.

Observe that valid votes contain outputs of the $\Sign$ procedure;
i.e., $y := \Sign(x, x', \sk, B, \Bbar, Q, \tau, \taubar)$.

Informally, these conditions check the following:

- The vote is not too far in the future for $L$ to be able to validate.

- "Propose"-step votes can either propose a new proposal-value for this period
  ($p_{orig} = p$) or claim to "re-propose" a value originally proposed in an
  earlier period ($p_{orig} < p$). But they can't claim to "re-propose" a value
  from a future period. And if the proposal-value is new ($p_{orig} = p$) then
  the "original proposer" must be the voter.

- The $\Propose$, $\Soft$, $\Cert$, $\Late$, and $\Redo$ steps must vote for an
  actual proposal. The $\Down$ step must only vote for $\bot$.

- The last condition checks that the vote was properly signed by a voter who
  was selected to serve on the committee for this round, period, and step,
  where the committee selection process uses the voter's stake and keys as of
  $\delta_b$ rounds before the vote and the seed as of $\delta_s$ rounds before the vote. It also checks if the vote's round is
  within the range associated with the voter's participation key.

An _equivocation vote pair_ or _equivocation vote_
$\Equivocation(I, r, p, s)$ is a pair of votes which differ in
their proposal values. In other words,

$$
\begin{aligned}
\Equivocation(I, r, p, s)
 = (&\Vote(I, r, p, s, v_1), \\
    &\Vote(I, r, p, s, v_2))
\end{aligned}
$$

for some $v_1 \neq v_2$.

An equivocation vote pair is _valid with respect to_ $L$ (or simply
_valid_ if $L$ is unambiguous) if both of its constituent votes are
also valid with respect to $L$.

## Bundles

$\newcommand \Bundle {\mathrm{Bundle}}$

Let $V$ be any set of votes and equivocation votes. We say that $V$
_is a bundle for $v$ in round $r$, period $p$, and step_ $s$
(or a _bundle for $v$ at_ $(r, p, s)$), denoted
$\Bundle(r, p, s, v)$.

[Link to reference implementation](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/agreement/bundle.go#L46).

Moreover, let $L$ be a ledger where $|L| \geq \max\{\delta_b, \delta_s\}$. We
say that this bundle is _valid with respect to_ $L$ (or simply _valid_
if $L$ is unambiguous) if the following conditions are true:

> [!NOTE]
> The reference implementation makes use of an asynchronous [Bundle verifying function](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/agreement/bundle.go#L147). For further detail see the non-normative [Algorand ABFT Overview](../md/abft-overview.md).

- $s \neq 0$ (there are no bundles for the $\Propose$ step).

- Every element $a_i \in V$ is valid with respect to $L$.

- $|V| \leq \CommitteeThreshold(s)$. Intutively, a bundle where every vote's weight is exactly one is the largest possible bundle.

- For any two elements $a_i, a_j \in V$, $I_i \neq I_j$.



- For any element $a_i \in V$, $r_i = r, p_i = p, s_i = s$.



- For any element $a_i \in V$, either $a_i$ is a vote and
  $v_i = v$, or $a_i$ is an equivocation vote.

- Let $w_i$ be the weight of the signature in $a_i$. Then
  $\sum_i w_i \geq \CommitteeThreshold(s)$.

## Proposals

$\newcommand \Payload {\mathrm{Payload}}$

Let $e = (o, s)$ be an entry and $y$ be the output of a $\Sign$
procedure. The pair $(e, y)$ is a _proposal_ or a _proposal payload_.

Moreover, let $L$ be a ledger where $|L| \geq \delta_b$,
and let $v = (I, p, h, x)$ be some proposal-value. We say that
this proposal is _a valid proposal matching $v$ with respect
To $L$_ (or simply that this proposal _matches $v$_ if $L$ is
unambiguous) if the following conditions are true:

- $\ValidEntry(L, e) = 1$.

- $h = \Digest(e)$.

- $x = \Hash(\Encoding(e))$.

- The seed $s$ and seed proof are valid as specified in the following section.

- Let $(\pk, B, r_\fv, r_\lv) = \Record(L, r - \delta_b, I)$.
  If $p = 0$, then $\Verify(y, Q_0, Q_0, \pk, 0, 0, 0, 0, 0) \neq 0$.

- Let $(\pk, B, r_\fv, r_\lv) = \Record(L, r - \delta_b, I)$.
  Then $r_\fv \leq r \leq r_\lv$.

If $e$ matches $v$, we write $e = \Proposal(v)$.

## Seed

Informally, the protocol interleaves $\delta_s$ seeds in an alternating
sequence. Each seed is derived from a seed $\delta_s$ rounds in the past through
either a hash function or through a VRF, keyed on the entry
proposer. Additionally, every $\delta_s\delta_r$ rounds, the digest of a previous entry
(specifically, from round $r - \delta_s\delta_r$) is hashed into the result. The seed
proof is the corresponding VRF proof, or 0 if the VRF was not used.

> [!NOTE]
> This section makes use of the $\mathrm{VRF.Prove}(.)$, $\mathrm{VRF.ProofToHash}(.)$ and $\mathrm{VRF.Verify}(.)$ functions, which are low level cryptographic functions defined in the reference implementation's Algorand Sodium Fork. They respectively output a $mathrm{VRF}$ proof and a $mathrm{VRF}$ hash for a given input, and perform verification of a $mathrm{VRF}$ run. For details on the input structure and inner workings, please refer to the Appendix A section in the [Algorand Crypto Specification](../md/crypto.md).

More formally, suppose $I$ is a correct proposer in round $r$ and period $p$.
Let $(\pk, B, r_\fv, r_\lv) = \Record(L, r - \delta_b, I)$ and $\sk$ be the secret key
corresponding to $\pk$. Let $\alpha$ be a 256-bit integer. Then $I$ computes
the seed proof $y$ for a new entry as follows:

- If $p = 0$:
  - $y = \mathrm{VRF.Prove}(\Seed(L, r-\delta_s), \sk)$
  - $\alpha = \Hash(I || \mathrm{VRF.ProofToHash}(y))$
- If $p \ne 0$:
  - $y = 0$
  - $\alpha = \Hash(\Seed(L, r-\delta_s))$

Now $I$ computes the seed $Q$ as follows:

$$
Q = \left\{
\begin{array}{rl}
  \Hash(\alpha || \DigestLookup(L, r-\delta_s\delta_r)) & : (r \bmod \delta_s\delta_r) < \delta_s \\
  \Hash(\alpha) & : \text{otherwise}
\end{array}
\right.
$$

The seed is valid if the following verification procedure succeeds:

1. Let $(\pk, B, r_\fv, r_\lv) = \Record(L, r - \delta_b, I)$; let $q_0 = \Seed(L, r-\delta_s)$.

2. If $p = 0$, check $\mathrm{VRF.Verify}(y, q_0, \pk)$, immediately returning
   failure if verification fails. Let
   $q_1 = \Hash(I||\mathrm{VRF.ProofToHash}(y))$ and continue to step 4.

3. If $p \ne 0$, let $q_1 = \Hash(q_0)$. Continue.

4. If $r \equiv (r \bmod \delta_s) \mod \delta_r\delta_s$, then check
   $Q = \Hash(q_1||\DigestLookup(L, r-\delta_s\delta_r))$. Otherwise,
   check $Q = q_1$.

Note: Round $r$ leader selection and committee selection both use the seed from
$r - \delta_s$ and the balances / public keys from $r - \delta_b$.

Note: For reproposals, the period $p$ used in this section is the _original_
period, not the reproposal period.

For a detailed overview of the seed computation algorithm and some explanatory examples, please refer to the non-normative [Algorand ABFT Overview](../md/abft-overview.md).

# State Machine

$\newcommand \Player {\mathrm{Player}}$
$\newcommand \abold {\mathbf{a}}$
$\newcommand \vbar {\bar{v}}$
$\newcommand \Timer {\mathcal{T}}$

This specification defines the Algorand agreement protocol as a state
machine. The input to the state machine is some serialization of
events, which in turn results in some serialization of network
transmissions from the state machine.

We can define the operation of the state machine as transitions
between different states. A transition $N$ maps some initial state
$S_0$, a ledger $L_0$, and an event $\textbf{e}$ to an output state $S_1$, an
output ledger $L_1$, and a sequence of output network transmissions
$\abold = (a_1, a_2, \ldots, a_n)$.
We write this as

$$
N(S_0, L_0, \textbf{e}) = (S_1, L_1, \abold).
$$

If no transmissions are output, we write that $\abold = \epsilon$.

## Events

The state machine _receives_ two types of events as inputs.

1. _message events_: A message event is received when a vote, a
   proposal, or a bundle is received. A message event is simply
   written as the message that is received.
2. _timeout events_: A timeout event is received when a specific
   amount of time passes after the beginning of a period. A timeout
   event $\lambda$ seconds after period $p$ begins is denoted
   $t(\lambda, p)$.

For more detail on the way these events may be constructed from an implementation point of view, please refer to the non-normative [Algorand ABFT Overview](../md/abft-overview.md).

## Outputs

The state machine produces a series of network transmissions as
output. In each transmission, the player broadcasts a vote, a
proposal, or a bundle to the rest of the network.

A player may perform a special broadcast called a _relay_. In a
relay, the data received from another peer is broadcast to all peers
except for the sender.

A broadcast action is simply written as the message to be
transmitted. A relay action is written as the same message except
with an asterisk. For instance, an action to relay a vote is written
as $\Vote^*(r, p, s, v)$.

For implementation details on relay and broadcasting actions, please refer to the non-normative [Algorand Network Overview](../md/network-overview.md).

# Player State Definition

$\newcommand \sbar {\bar{s}}$

We define the _player state_ $S$ to be the following tuple:

$$
S = (r, p, s, \sbar, V, P, \vbar)
$$

where

- $r$ is the current round,
- $p$ is the current period,
- $s$ is the current step,
- $\sbar$ is the _last concluding step_,
- $V$ is the set of all votes,
- $P$ is the set of all proposals, and
- $\vbar$ is the _pinned_ value.

We say that a player has _observed_

- $\Proposal(v)$ if $\Proposal(v) \in P$
- $\Vote(r, p, s, v)$ if $\Vote(r, p, s, v) \in V$
- $\Bundle(r, p, s, v)$ if $\Bundle(r, p, s, v) \subset V$
- that round $r$ (period 0) has _begun_ if there exists some $p$ such
  that $\Bundle(r-1, p, \Cert, v)$ was also observed for some $v$
- that round $r$, period $p > 0$ has _begun_ if there exists some $p$
  such that either
  - $\Bundle(r, p-1, s, v)$ was also observed for some
    $s > \Cert, v$, or
  - $\Bundle(r, p, \Soft, v)$ was observed for some $v$.

An event causes a player to observe something if the player has not
observed that thing before receiving the event and has observed that
thing after receiving the event. For instance, a player may observe a
vote $\Vote$, which adds this vote to $V$:

$$
 N((r, p, s, \sbar, V, P, \vbar), L_0, \Vote)
= ((r', p', \ldots, V \cup \{\Vote\}, P, \vbar'), L_1, \ldots).
$$

We abbreviate the transition above as

$$
 N((r, p, s, \sbar, V, P, \vbar), L_0, \Vote)
 = ((S \cup \Vote, P, \vbar), L_1, \ldots).
$$

Note that _observing_ a message is distinct from _receiving_ a
message. A message which has been received might not be observed (for
instance, the message may be from an old round). Refer to the [relay rules](#relay-rules) for details.

## Special Values

We define two functions $\mu(S, r, p), \sigma(S, r, p)$, which are
defined as follows:

The _frozen value_ $\mu(S, r, p)$ is defined as the proposal-value $v$ in the proposal vote in round
$r$ and period $p$ that minimizes a credential priority function $prio(v)$. Consider $w_j$ is the weight of said proposal vote for $v$, and $y$ is the result of the signing procedure for $v$, then the priority function is defined as

$$
prio(v) = \min_{i \in [0, w_j)} \{ \mathsf{H}(\mathrm{VRF.ProofToHash}(y) \ || \ i)\},
$$

where $w_j$ is the weight of the proposal vote for player $I$.

More formally then, let

$$
V_{r, p} = \{\Vote(I, r, p, 0, v) | \Vote \in V\}
$$

where $V$ is the set of votes in $S$. Then if $\Vote_l(r, p, 0, v_{min})$
is the vote such that

$$
\forall \ \Vote(I,r,p,0,v) \in V_{r, p}, v_{min} \neq v \implies prio(v_{min}) < prio(v),
$$

then $\mu(S, r, p) = v_{min}$.\
If $V_{r, p}$ is empty, then $\mu(S, r, p) = \bot$.

The _staged value_ $\sigma(S, r, p)$ is defined as the sole proposal-value for which
there exists a soft-bundle in round $r$ and period $p$. More formally,
suppose $\Bundle(r, p, \Soft, v) \subset V$. Then
$\sigma(S, r, p) = v$.

If no such soft-bundle exists, then $\sigma(S, r, p) = \bot$.

If there exists a proposal-value $v$ such that $\Proposal(v) \in P$
and $\sigma(S, r, p) = v$, we say that $v$ is _committable for round
$r$, period_ $p$ (or simply that $v$ is _committable_ if $(r, p)$ is
unambiguous).

> [!NOTE]
> The current implementation constructs a [Proposal Tracker](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/agreement/proposalTracker.go#L93) which amongst other things, is in charge of handling both frozen and staged value tracking.

# Relay Rules

Here we describe how players handle message events.

Whenever the player receives a message event, it may decide to _relay_
that or another message. In this case, the player will produce that
output before producing any subsequent output (which may result from
the player's observation of that message; see the [broadcast
rules](#broadcast-rules) below).

A player may receive messages from a peer which indicates that the
peer is misbehaving. These cases are marked with an asterisk (\*) and
enable the node to perform a special action (e.g., disconnect from the
peer). For implementation examples on what these special actions may be see the non-normative [Algorand Network Overview](../md/network-overview.md).

We say that a player _ignores_ a message if it produces no outputs on
receiving that message.

## Votes

On receiving a vote $Vote_k(r_k, p_k, s_k, v)$ a player

- Ignores\* it if $\Vote_k$ is malformed or trivially invalid.
- Ignores\* it if $\Vote_k \in V$.
- Ignores it if $s = 0$ and $\Vote_k$ is an equivocation.
- Ignores it if $s > 0$ and $\Vote_k$ is a second equivocation.
- Ignores it if $s \not \in \{\Next_{[0...252]}, \Down\}$ and $v = \bot$.
- Ignores it if $s = \Down$ and $v \neq \bot$.
- Ignores it if

  - $r_k \notin [r,r+1]$ or
  - $r_k = r + 1$ and either
    - $p_k > 0$ or
    - $s_k \in (\Next_0, \Late)$ or
  - $r_k = r$ and one of
    - $p_k \notin [p-1,p+1]$ or
    - $p_k = p + 1$ and $s_k \in (\Next_0, \Late)$ or
    - $p_k = p$ and $s_k \in (\Next_0, \Late)$ and $s_k \notin [s-1,s+1]$ or
    - $p_k = p - 1$ and $s_k \in (\Next_0, \Late)$ and
      $s_k \notin [\sbar-1,\sbar+1]$.

- Otherwise, relays $\Vote_k$, observes it, and then produces any
  consequent output (in the specific case that the vote $\Vote_k$ was a valid first equivocation, the observation\* may also result in the peer being flagged).

Specifically, if a player ignores the vote,

$$
N(S, L, \Vote_k(r_k, p_k, s_k, v)) = (S, L, \epsilon)
$$

while if a player relays the vote,

$$
 N(S, L, \Vote_k(r_k, p_k, s_k, v))
= (S' \cup \Vote(I, r_k, p_k, s_k, v), L',
   (\Vote_k^*(r_k, p_k, s_k, v),\ldots)).
$$

## Bundles

On receiving a bundle $\Bundle(r_k, p_k, s_k, v)$ a player

- Ignores\* it if $\Bundle(r_k, p_k, s_k, v)$ is malformed or trivially invalid.
- Ignores it if
  - $r_k \neq r$ or
  - $r_k = r$ and $p_k + 1 < p$.
- Otherwise, observes the votes in $\Bundle(r_k, p_k, s_k, v)$ in
  sequence. If there exists a vote which causes the player to observe
  some bundle $\Bundle(r_k, p_k, s_k, v')$ for some $s_k$, then the
  player relays $\Bundle(r_k, p_k, s_k, v')$, and then executes any
  consequent action; if there does not, the player ignores it.

Specifically, if the player ignores the bundle without observing its
votes,

$$
N(S, L, \Bundle(r_k, p_k, s_k, v)) = (S, L, \epsilon);
$$

while if a player ignores the bundle but observes its votes,

$$
N(S, L, \Bundle(r_k, p_k, s_k, v))
= (S' \cup \Bundle(r_k, p_k, s_k, v), L, \epsilon);
$$

and if a player, on observing the votes in the bundle, observes a
bundle for some value (not necessarily distinct from the bundle's
value),

$$
N(S, L, \Bundle(r_k, p_k, s_k, v))
= (S' \cup \Bundle(r_k, p_k, s_k, v), L',
   (\Bundle^*(r_, p_k, s_k, v'), \ldots)).
$$

## Proposals

On receiving a proposal $\Proposal(v)$ a player

- Relays $\Proposal(v)$ if $\sigma(S, r+1, 0) = v$.
- Ignores\* it if it is malformed or trivially invalid.
- Ignores it if $\Proposal(v) \in P$.
- Relays $\Proposal(v)$, observes it, and then produces any
  consequent output,
  if $v \in \{\sigma(S, r, p), \vbar, \mu(S, r, p)\}$.
- Otherwise, ignores it.

Specifically, if the player ignores a proposal,

$$
N(S, L, \Proposal(v)) = (S, L, \epsilon)
$$

while if a player relays the proposal _after_ checking if it is valid,

$$
N(S, L, \Proposal(v))
= (S' \cup \Proposal(v), L', (\Proposal^*(v), \ldots)).
$$

However, in the first condition above, the player relays
$\Proposal(v)$ _without_ checking if it is valid. Since the proposal
has not been seen to be valid, the player cannot observe it yet, so

$$
N(S, L, \Proposal(v)) = (S, L, (\Proposal^*(v))).
$$

Note: An implementation may _buffer_ a proposal in this case.
Specifically, an implementation which relays a proposal without
checking that it is valid may optionally choose to replay this event
when it observes that a new round has begun (see [below](#internal-transitions)). In this case, on the conclusion of a new round, this
proposal is processed once again as input.

Implementations may store and relay fewer proposals than specified
here to improve efficiency. However, implementations are always
required to relay proposals which match the following proposal-values
(where $r$ is the current round and $p$ is the current period):

- $\vbar$
- $\sigma(S, r, p), \sigma(S, r, p-1)$
- $\mu(S, r, p)$ if $\sigma(S, r, p)$ is not set and $\mu(S, r, p+1)$
  if $\sigma(S, r, p+1)$ is not set

# Internal Transitions

After receiving message events, the player may update some components of its state.

## New Round

When a player observes that a new round $(r, 0)$ has begun, the player
sets $\sbar := s, \vbar := \bot, p := 0, s := 0$. Specifically,
if a new round has begun,

$$
 N((r-i, p, s, \sbar, V, P, \vbar), L, \ldots)
 = ((r, 0, 0, s, V', P', \bot), L', \ldots)
$$

for some $i > 0$.

[Link to reference implementation](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/agreement/player.go#L454).

## New Period

When a player observes that a new period $(r, p)$ has begun, the
player sets $\sbar := s, s := 0$. Also, the player sets $\vbar := v$ if
the player has observed $\Bundle(r, p-1, s, v)$ given some values $s > \Cert$
(or $s = \Soft$), $v \neq \bot$; if none exist, the player sets $\vbar :=
\sigma(S, r, p-i)$ if it exists, where $p-i$ was the player's period
immediately before observing the new period; and if none exist, the
player does not update $\vbar$.

In other words, if $\Bundle(r, p-1, s, v) \in V'$ for some
$v \neq \bot, s > \Cert$ or $s = \Soft$,

$$
 N((r, p-i, s, \sbar, V, P, \vbar), L, \ldots)
 = ((r, p, 0, s, V', P, v), L', \ldots);
$$

and otherwise, if $\Bundle(r, p-1, s, \bot) \in V'$ for some $s > \Cert$
with $\sigma(S, r, p-i)$ defined,

$$
 N((r, p-i, s, \sbar, V, P, \vbar), L, \ldots)
 = ((r, p, 0, s, V', P, \sigma(S, r, p-i)), L', \ldots);
$$

and otherwise

$$
 N((r, p-i, s, \sbar, V, P, \vbar), L, \ldots)
 = ((r, p, 0, s, V', P, \vbar), L', \ldots);
$$

for some $i > 0$ (where $S = (r, p-i, s, \sbar, V, P, \vbar))$.

[Link to reference implementation](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/agreement/player.go#L411).

## Garbage Collection

When a player observes that either a new round or a new period
$(r, p)$ has begun, then the player _garbage-collects_ old state. In
other words,

$$
 N((r-i, p-i, s, \sbar, V, P, \vbar), L, \ldots)
 = ((r, p, \sbar, 0, V' \setminus V^*_{r, p}, P' \setminus P^*_{r, p},
    \vbar), L, \ldots).
$$

where

$$
\begin{aligned}
V^*_{r, p}
 &=    \{\Vote(I, r', p', \sbar, v) | \Vote \in V, r' < r\} \\
 &\cup \{\Vote(I, r', p', \sbar, v) | \Vote \in V, r' = r, p' + 1 < p\}
\end{aligned}
$$

and $P^*_{r, p}$ is defined similarly.

## New Step

A player may also update its step after receiving a timeout event.

On observing a timeout event of $\FilterTimeout(p)$ for period $p$, the player sets
$s := \Cert$.

On observing a timeout event of $\DeadlineTimeout(p)$ for period $p$, the
player sets $s := \Next_0$.

On observing a timeout event of
$\DeadlineTimeout(p) + 2^{s_t}\lambda + u$ where
$u \in [0, 2^{s_t}\lambda)$ sampled uniformly at random, the player sets
$s := s_t = \Next_{s_t-3}$.

[Link to reference implementation.](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/agreement/player.go#L94)

In other words,

$$
\begin{aligned}
  &N((r, p, s, \sbar, V, P, \vbar), L, t(\FilterTimeout(p), p))
 &&= ((r, p, \Cert, \sbar, V, P, \vbar), L', \ldots) \\
  &N((r, p, s, \sbar, V, P, \vbar), L, t(\DeadlineTimeout(p), p))
 &&= ((r, p, \Next_0, \sbar, V, P, \vbar), L', \ldots) \\
  &N((r, p, s, \sbar, V, P, \vbar), L,
     t(\DeadlineTimeout(p) + 2^{s_t}\lambda + u, p))
 &&= ((r, p, \Next_{s_t-3}, \sbar, V, P, \vbar), L', \ldots).
 \end{aligned}
$$

# Broadcast Rules

Upon observing messages or receiving timeout events, the player state
machine emits network outputs, which are externally visible. The
player may also append an entry to the ledger.

A correct player emits only valid votes. Suppose the player is
identified with the address $I$ and possesses the secret key $\sk$,
and the agreement is occurring on the ledger $L$. Then the player
constructs a vote $\Vote(I, r, p, s, v)$ by doing the following:

- Let $(\pk, B, r_\fv, r_\lv) = \Record(L, r - \delta_b, I)$,
  $\Bbar = \Stake(L, r - \delta_b)$, $Q = \Seed(L, r - \delta_s)$,
  $\tau = \CommitteeThreshold(s)$, $\taubar = \CommitteeSize(s).$

- Encode $x := (I, r, p, s, v), x' := (I, r, p, s).$

- Try to set $y := \Sign(x, x', \sk, B, \Bbar, Q, \tau, \taubar).$

If the signing procedure succeeds, the player broadcasts
$\Vote(I, r, p, s, v) = (I, r, p, s, v, y)$. Otherwise, the player
does not broadcast anything.

For certain broadcast vote-messages specified here, a node is
forbidden to _equivocate_ (i.e., produce a pair of votes which contain
the same round, period, and step but which vote for different proposal
values). These messages are marked with an asterisk (\*) below. To
prevent accidental equivocation after a power failure, nodes should
checkpoint their state to crash-safe storage before sending these
messages.\
For further detail on these checkpoint strategies, please refer to the non-normative [Algorand Ledger Overview](../md/ledger-overview.md). For an in depth review of broadcasting functionalities, you may refer to the non-normative [Algorand Network Overview](../md/network-overview.md).

## Resynchronization Attempt

Where specified, a player attempts to resynchronize. A
resynchronization attempt involves the following stages.

First, the player broadcasts its _freshest bundle_, if one exists.
We define a partial order relation of _freshness_, $f_>$, in a hypothetical set of complete bundles observed for the same round $r$. Given two distinct complete observed bundles, $Bundle_e(r,p_e,s_e,v_e)$ and $Bundle_o(r,p_o,s_o,v_o)$, then:

- $Bundle_e(r,p_e,\Cert,v_e) \ f_> \ Bundle_o(r,p_o,s_o,v_o)$ (note that it is implicitly assumed that $s_o \neq \Cert$), or else
- $s_o, s_e \neq \Cert$ and $Bundle_e(r,p+i,s_e,v_e) \ f_> \ Bundle_o(r,p,s_o,v_o)$, with $i>0$, or else
- $Bundle_e(r,p,\Next_s,v_e) \ f_> \ Bundle_o(r,p,\Soft,v_o)$, otherwise
- $Bundle_e(r,p,\Next_s,v_e) \ f_> \ Bundle_o(r,p,\Soft,v_o)$.

For all other cases, the relation is undefined.
[Here is the freshness relation in the reference implementation.](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/agreement/events.go#L745)

Second, if the player broadcasted a bundle $\Bundle(r, p, s, v)$,
and $v \neq \bot$, then the player broadcasts $\Proposal(v)$ if the
player has it.

Third, if no $Proposal(v)$ associated to the freshest bundle exists, the protocol still falls back to relaying the pinned value $\bar{v}$ for liveness.

> [!NOTE]
> In the reference implementation, resynchronization attempts are performed by the `partitionPolicy(.)` function. You may find it [here](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/agreement/player.go#L518).

Specifically, a resynchronization attempt corresponds to no additional
outputs if no freshest bundle exists

$$
N(S, L, \ldots) = (S', L', \ldots),
$$

corresponds to a broadcast of the freshest bundle after a relay output and before
any subsequent broadcast outputs, if said bundle exists, no
matching proposal exists, and the pinned value $\bar{v} = \bot$ for the same round,

$$
N(S, L, \ldots) = (S', L', (\ldots, \Bundle^*(r, p, s, v), \ldots)),
$$

corresponds to a broadcast of the freshest bundle and the pinned value for the same round after a relay output and before
any subsequent broadcast outputs, if said bundle exists, no
matching proposal exists, and a pinned value $\bar{v}$ for the same round exists,

$$
N(S, L, \ldots) = (S', L', (\ldots, \Bundle^*(r, p, s, v), \bar{v}, \ldots)),
$$

and otherwise corresponds to a broadcast of both a bundle and its associated
proposal after a relay output and before any subsequent broadcast
outputs

$$
 N(S, L, \ldots) = (S', L',
    (\ldots, \Bundle^*(r, p, s, v), \Proposal(v), \ldots)).
$$

## Proposals

On observing that $(r, p)$ has begun, the player attempts to
resynchronize, and then

- if $p = 0$ or there exists some $s > \Cert$ where
  $\Bundle(r, p-1, s, \bot)$ was observed, then a player generates a
  new proposal $(v', \Proposal(v'))$ and then broadcasts
  $(\Vote(I, r, p, 0, v'), \Proposal(v'))$.

- if $p > 0$ and there exists some $s_0 > \Cert, v$ where
  $\Bundle(r, p-1, s_0, v)$ was observed, while there exists no
  $s_1 > \Cert$ where $\Bundle(r, p-1, s_1, \bot)$ was observed,
  then the player broadcasts $\Vote(I, r, p, 0, v)$. Moreover, if
  $\Proposal(v) \in P$, the player then broadcasts $\Proposal(v)$.

A player generates a new proposal by executing the entry-generation
procedure and by setting the fields of the proposal
accordingly. Specifically, the player creates a proposal payload
$((o, s), y)$ by setting
$o := \Entry(L), Q := \Seed(L, r-1)$,
$y := \Sign(Q, Q, 0, 0, 0, 0, 0, 0)$,
and $s := \Rand(y, \pk)$ if $p = 0$ and $s := \Hash(\Seed(L, r-1))$
otherwise. This consequently defines the matching proposal-value
$v = (I, p, \Digest(e), \Hash(\Encoding(e))).$

For an in depth overview of how proposal generation may be implemented, you may refer to the [Algorand Ledger Overview](../md/ledger-overview.md).

In other words, if the player generates a new proposal,

$$
N(S, L, \ldots) = (S', L', (\ldots, \Vote(I, r, p, 0, v'), \Proposal(v'))),
$$

while if the player broadcasts an old proposal,

$$
N(S, L, \ldots) = (S', L', (\ldots, \Vote(I, r, p-1, 0, v), \Proposal(v)))
$$

if $\Proposal(v) \in P$ and

$$
N(S, L, \ldots) = (S', L', (\ldots, \Vote(I, r, p-1, 0, v)))
$$

otherwise.

## Reproposal Payloads

A proposal rebroadcasting behavior is in place to further mitigate the chance of players reaching certification on a proposal-value for which its corresponding proposal has not been observed.

On observing $\Vote(I, r, p, 0, v)$, if $\Proposal(v) \in P$ then the
player broadcasts $\Proposal(v)$.

In other words, if $\Proposal(v) \in P$,

$$
N(S, L, \Vote(I, r, p, 0, v)) = (S', L', (\Proposal(v))).
$$

## Filtering

On observing a timeout event of $\FilterTimeout(p)$ (where
$\mu = (H, H', l, p_\mu) = \mu(S, r, p)$),

- if $\mu \neq \bot$ and if

  - $p_\mu = p$ or
  - there exists some $s > \Cert$ such that
    $\Bundle(r, p-1, s, \mu)$ was observed.
    then the player broadcasts $\Vote(I, r, p, \Soft, \mu)$.

- if there exists some $s_0 > \Cert$ such that
  $\Bundle(r, p-1, s_0, \vbar)$ was observed and there exists no
  $s_1 > \Cert$ such that $\Bundle(r, p-1, s_1, \bot)$ was
  observed, then the player broadcasts\*
  $\Vote(I, r, p, \Soft, \vbar)$.

- otherwise, the player does nothing.

For a detailed overview of how the filtering step may be implemented, please refer to the non-normative [Algorand ABFT Overview](../md/abft-overview.md).

In other words, in the first case above,

$$
N(S, L, t(\FilterTimeout(p), p)) = (S, L, \Vote(I, r, p, \Soft, \mu));
$$

while in the second case above,

$$
N(S, L, t(\FilterTimeout(p), p)) = (S, L, \Vote(I, r, p, \Soft, \vbar));
$$

and if neither case is true,

$$
N(S, L, t(\FilterTimeout(p), p)) = (S, L, \epsilon).
$$

## Certifying

On observing that some proposal-value $v$ is committable for its
current round $r$, and some period $p' \geq p$ (its current period),
if $s \leq \Cert$, then then the player broadcasts\*
$\Vote(I, r, p, \Cert, v)$. (It can be shown that this occurs either
after a proposal is received or a soft-vote, which can be part of a
bundle, is received).

For a detailed overview of how the certification step may be implemented, please refer to the non-normative [Algorand ABFT Overview](../md/abft-overview.md).

In other words, if observing a soft-vote causes a proposal-value to
become committable,

$$
 N(S, L, \Vote(I, r, p, \Soft, v))
 = (S', L, (\ldots, \Vote(I, r, p, \Cert, v)));
$$

while if observing a bundle causes a proposal-value to become
committable,

$$
 N(S, L, \Bundle(r, p, \Soft, v))
 = (S', L, (\ldots, \Vote(I, r, p, \Cert, v)));
$$

and if observing a proposal causes a proposal-value to become
committable,

$$
 N(S, L, \Proposal(v))
 = (S', L, (\ldots, \Vote(I, r, p, \Cert, v)));
$$

as long as $s \leq \Cert$.

## Commitment

On observing $\Bundle(r, p, \Cert, v)$ for some value $v$, the player
_commits_ the entry $e$ corresponding to $\Proposal(v)$; i.e., the
player appends $e$ to the sequence of entries on its ledger $L$.
(Evidently, this occurs either after a vote is received or after a
bundle is received.)

For further details on how entry commitment may be implemented, please refer to the [Algorand Ledger Overview](../md/ledger-overview.md).

In other words, if observing a cert-vote causes the player to commit
$e$,

$$
 N(S, L, \Vote(I, r, p, \Cert, v))
 = (S', L || e, \ldots));
$$

while if observing a bundle causes the player to commit $e$,

$$
 N(S, L, \Bundle(r, p, \Cert, v))
 = (S', L || e, \ldots)).
$$

> [!NOTE]
> Occasionally, an implementation may not have $e$ at the point
> $e$ becomes committed. In this case, the implementation may wait
> until it receives $e$ somehow (perhaps by requesting peers for $e$).
> Alternatively, the implementation may continue running the protocol
> until it receives $e$. However, if the protocol chooses to continue
> running, it may not transmit any vote for which $v \neq \bot$ until it
> has committed $e$. Note that in either case the implementation should update its period in case the certification bundle's period is greater than the current period in the state machine.\
> This rare occurance is acknowledged [here](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/agreement/player.go#L375) in the reference implementation.

## Recovery

On observing a timeout event of

- $T = \DeadlineTimeout(p)$ or
- $T = \DeadlineTimeout(p) + 2^{s_t}\lambda + r$ where
  $r \in [0, 2^{s_t}\lambda)$ sampled uniformly at random,

the player attempts to resynchronize and then broadcasts\*
$\Vote(I, r, p, \Next_h, v)$ where

- $v = \sigma(S, r, p)$ if $v$ is committable in $(r, p)$,
- $v = \vbar$ if there does not exist a $s_0 > \Cert$ such that
  $\Bundle(r, p-1, s_0, \bot)$ was observed and there exists an
  $s_1 > \Cert$ such that $\Bundle(r, p-1, s_1, \vbar)$ was
  observed,
- and $v = \bot$ otherwise.

Note that the broadcast vote is for step $\Next_0$ if $T = \DeadlineTimeout(p)$, and is for $\Next_{s_t-3}$ in any other case.

[Link to reference implementation.](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/agreement/player.go#L214)

For a detailed overview of how the recovery routine may be implemented, please refer to the non-normative [Algorand ABFT Overview](../md/abft-overview.md).

In other words, if a proposal-value $v$ is committable in the current
period,

$$
N(S, L, t(T, p)) = (S', L, (\ldots, \Vote(I, r, p, \Next_h, v)));
$$

while in the second case,

$$
N(S, L, t(T, p)) = (S', L, (\ldots, \Vote(I, r, p, \Next_h, \vbar)));
$$

and otherwise,

$$
N(S, L, t(T, p)) = (S', L, (\ldots, \Vote(I, r, p, \Next_h, \bot))).
$$

## Fast Recovery

On observing a timeout event of $T = k\lambda_f + r$ where $k$ is a positive
integer and $r \in [0, \lambda_f)$ sampled uniformly at random, the player
attempts to resynchronize. Then,

- The player broadcasts\* $\Vote(I, r, p, \Late, v)$ if $v = \sigma(S, r, p)$ is
  committable in $(r, p)$.
- The player broadcasts\* $\Vote(I, r, p, \Redo, \vbar)$ if there does not exist
  a $s_0 > \Cert$ such that $\Bundle(r, p-1, s_0, \bot)$ was observed and there
  exists an $s_1 > \Cert$ such that $\Bundle(r, p-1, s_1, \vbar)$ was
  observed.
- Otherwise, the player broadcasts\* $\Vote(I, r, p, \Down, \bot)$.

Finally, the player broadcasts all $\Vote(I, r, p, \Late, v) \in V$, all
$\Vote(I, r, p, \Redo, v) \in V$, and all $\Vote(I, r, p, \Down, \bot) \in V$
that it has observed.

[Link to reference implementation.](https://github.com/algorand/go-algorand/blob/b6e5bcadf0ad3861d4805c51cbf3f695c38a93b7/agreement/player.go#L150)

For a detailed pseudocode overview of the fast recovery routine, along with protocol recovery run examples, please refer to the non-normative [Algorand ABFT Overview](../md/abft-overview.md).

[partkey-spec]: https://github.com/algorandfoundation/specs/blob/master/dev/partkey.md
