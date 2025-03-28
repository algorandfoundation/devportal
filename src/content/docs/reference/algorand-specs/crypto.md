---
numbersections: true
title: "Algorand Cryptographic Primitive Specification"
date: \today
abstract: >
  Algorand relies on a set of cryptographic primitives to guarantee
  the integrity and finality of data.  This document describes these
  primitives.
pandoc-latex-environment:
  tcolorbox: [box]
  info-box: [info]
  warning-box: [warning]
  error-box: [error]
---

# Algorand Cryptographic Primitive Specification

## Representation

As a preliminary for guaranteeing cryptographic data integrity,
Algorand represents all inputs to cryptographic functions (i.e., a
cryptographic hash, signature, or verifiable random function) via a
canonical and domain-separated representation.

### Canonical Msgpack

Algorand uses a version of [msgpack][msgpack] to produce canonical
encodings of data. Algorand's msgpack encodings are valid msgpack
encodings, but the encoding function is deterministic to ensure a
canonical representation that can be reproduced to verify signatures.
A canonical msgpack encoding in Algorand must follow these rules:

1.  Maps must contain keys in lexicographic order;
2.  Maps must omit key-value pairs where the value is a zero-value,
    unless otherwise specified;
3.  Positive integer values must be encoded as "unsigned" in msgpack,
    regardless of whether the value space is semantically signed or
    unsigned;
4.  Integer values must be represented in the shortest possible
    encoding;
5.  Binary arrays must be represented using the "bin" format family
    (that is, use the most recent version of msgpack rather than the
    older msgpack version that had no "bin" family).

For an exhaustive list of msgpack encodings for all relevant data structures, please refer to the non-normative [Algorand General Infrastructure Overview](https://github.com/CoinFabrik/algorand-specs/blob/main/dev/infrastructure-overview.md).

### Domain Separation

Before an object is input to some cryptographic function, it is
prepended with a multi-character domain-separating prefix. Note that all domain separators must be "prefix free" (that is, they should not be concatenated).
The list below specifies each prefix (in quotation marks):

- For cryptographic primitives:
  - "OT1" and "OT2": One Time signatures. The first and second layers of keys used for
    [ephemeral signatures](#ephemeral-key-signature).
  - "MA": Merkle Array node, an internal node in a [Merkle tree](#merkle-tree).
  - "MB": A bottom leaf in a vector commitment [vector commitment](#vector-commitment).
  - "KP": Is a public key used by the Merkle siganture scheme [Merkle Signature Scheme](merklesignaturescheme)
  - "spc": A coin used as part of the state proofs construction.
  - "spp": Participant's information (state proof pk and weight) used for state proofs.
  - "sps": A signature from a specific participant that is used for state proofs.
  - "spv": Verification context for a state proof (used in fast catchup).
- In the [Algorand Ledger][ledger-spec]:
  - "BH": A _Block Header_.
  - "B256": A _Light Block Header_ hashed with SHA-256.
  - "BR": A _Balance Record_.
  - "GE": A _Genesis_ configuration.
  - "spm": A state proof message.
  - "STIB": A _SignedTxnInBlock_ that appears as part of the leaf in the Merkle tree of transactions.
  - "TL": A leaf in the Merkle tree of transactions.
  - "TX": A _Transaction_.
  - "TG": A _Transaction group_.
  - "SpecialAddr": A prefix used to generate designated addresses for specific functions, such as sending state proof transactions.
- In the [Algorand Byzantine Fault Tolerance protocol][abft-spec]:
  - "AS": An _Agreement Selector_, which is also a [VRF](#verifiable-random-function) input.
  - "CR": A _Credential_.
  - "SD": A _Seed_.
  - "PL": A _Payload_.
  - "PS": A _Proposer Seed_.
  - "VO": A _Vote_.
  - "PK": For participation keys, public keys registered and used to participate in consensus.
- In other places:
  - "MX": An arbitrary message used to prove ownership of a
    cryptographic secret.
  - "NPR": A message which proves a peer's stake in an Algorand
    networking implementation.
  - "TE": An arbitrary message reserved for testing purposes.
  - "Program": A TEAL bytecode program.
  - "ProgData": Data which is signed within TEAL bytecode programs.
  - "appID": for application indices.
  - "arc": for reserving _Algorand Request for Comments_ (ARC) related hashes. These prefixes should be of the form "arcXXXX" where "XXXX" corresponds to the 0-padded ARC number.
  - "NIC": For Network Identity Challenges.
  - "NIR": For Network Identity Challenge responses.
  - "NIV": For Network Identity Verification messages.
  - "OA": For online Accounts.
  - "ORP": For online round parameters.
  - "PF": For flat paysets.

> [!NOTE]
> Auctions are deprecated, however the prefixes are still reserved in code. These are the following:
>
> - "aB": A _Bid_.
> - "aD": A _Deposit_.
> - "aO": An _Outcome_.
> - "aP": Auction parameters.
> - "aS": A _Settlement_.

## Hash Functions

### SHA512/256

Algorand uses the [SHA-512/256 algorithm][sha] as its primary
cryptographic hash function.

Algorand uses this hash function to (1) commit to data for signing and
for the Byzantine Fault Tolerance protocol, and (2) rerandomize its
random seed.

### SHA256

Algorand uses [SHA-256 algorithm][sha256] for hashing [Light Block Headers](see the non-normative [Algorand Ledger Overview](TODO_LINK) for more details on this structure) and to generate an extra commitment on a given payset included in a block.
This potentially enables verification of Algorand's state and transactions on external platforms that may not natively support SHA512_256 (such as other blockchain Virtual Machines where a SHA-256 opcode would be more commonly available than SHA-512_256).

### SUBSET-SUM

Algorand uses [SUBSET-SUM algorithm][sumhash] which is a quantum-resilient hash function.
This hash function is used in two specific applications in an Algorand node:

- to create Merkle Trees for State Proofs, and
- for cryptographic commitments in the Merkle Tree structure used for the two level ephemeral signature scheme, described in the [ephemeral key signature](#ephemeral-key-signature) section below. You may also refer to the [Algorand Participation Key Specification](TODO_LINK).

## Digital Signature

### ED25519

Algorand uses the [ed25519][ed25519] digital signature scheme to sign
data.

Algorand changes the [ed25519][ed25519] verification algorithm in the following way (using notation from [ed25519][ed25519]):

- Reject if `R` or `A` (PK) are equal to one of the following (non-canonical encoding - this check is actually required by [ed25519][ed25519] but not all libraries implement it)

  - `0100000000000000000000000000000000000000000000000000000000000080`
  - `ECFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF`
  - `EEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7F`
  - `EEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF`
  - `EDFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF`
  - `EDFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7F`
  - a point which holds `(x,y) where: 2**255 -19 <= y <= 2**255.` Where we remind that `y` is defined as the encoding of the point with the right-most bit cleared

- Reject if `A` (PK) is equal to one of the following: (small order points)

  - `0100000000000000000000000000000000000000000000000000000000000000`
  - `ECFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7F`
  - `0000000000000000000000000000000000000000000000000000000000000080`
  - `0000000000000000000000000000000000000000000000000000000000000000`
  - `C7176A703D4DD84FBA3C0B760D10670F2A2053FA2C39CCC64EC7FD7792AC037A`
  - `C7176A703D4DD84FBA3C0B760D10670F2A2053FA2C39CCC64EC7FD7792AC03FA`
  - `26E8958FC2B227B045C3F489F2EF98F0D5DFAC05D3C63339B13802886D53FC05`
  - `26E8958FC2B227B045C3F489F2EF98F0D5DFAC05D3C63339B13802886D53FC85`

- Reject non-canonical `S` (this check is actually required by [ed25519][ed25519] but not all libraries implement it)<br>

```
 0 <= s < L
 (where
  L = 2^252+27742317777372353535851937790883648493)
```

- Use the cofactor equation (this is the default verification equation in [ed25519][ed25519]):<br>

```
  [8][S]B = [8]R + [8][K]A'
```

### FALCON

Algorand uses a [deterministic][deterministic-falcon] version of the [falcon scheme][falcon]. Falcon is a quantum resilient and SNARK friendly digital signature scheme used to sign in State Proofs. Falcon signatures contain a
`salt version`. Algorand only accepts signatures where the `salt version = 0`.

The library defines the following sizes:

- `Publickey` = 1793 bytes
- `Privatekey` = 2305 bytes
- Signatures
  - `CT-format` = 1538 bytes
  - `Compressed format` = variable length up to a maximum size of 1423 bytes .

For Falcon key generation, Algorand uses 48 byte random seeds.

## Verifiable Random Function

Algorand uses a Verifiable Random Function (_VRF_) to obtain pseudo-random numbers and
a proof, so that they may be verified deterministically and in polynomial time.\
VRFs are a fundamental piece in the [seed computation algorithm](abft.md#seed) and in the [sortition](#cryptographic-sortition) algorithm used in every step of the [consensus algorithm](abft.md).
For a function $f$ to be considered a _VRF_ it needs to have both

- a compact, implicit representation, which doesn't enable one to evaluate $f$ efficiently. This will be the public key $PK$.
- a compact, explicit representation, which enables anyone to evaluate $f$ efficiently. This will be the secret key $SK$.
  Obviously, this secret key will be hard to compute from $PK$.

Additionaly, we need a probabilistic generating algorithm $G$ outputting a public key with its matching secret key.

A deeper explanation of the theoretical aspects of _VRFs_ can be found [here](https://people.csail.mit.edu/silvio/Selected%20Scientific%20Papers/Pseudo%20Randomness/Verifiable_Random_Functions.pdf). See also the [VRF IRTF Standard](https://datatracker.ietf.org/doc/rfc9381/).

In the VRF algorithm, we have:

- A VRF secret key $VRF_{sk}$ is an [ed25519](#ed25519) 64 byte key, where the latter 32 bytes are the precomputed public key.

- A VRF public key $VRF_{pk}$. These are 32 bytes, and are usually concatenated to the 32 byte $VRF_{sk}$ (see above). It can be used to verify VRF proofs.

- A VRF proof $\pi$ is an 80 byte long sequence. A proof $\pi$ for a message can be generated with a secret key and verified against a public key, like a signature.
  For a given message and $VRF_{pk}$, the $VRF_{out}$ that can be computed from a proof is unique.

- A VRF output hash $VRF_{out}$ is a 64 byte pseudorandom value that can be computed by providing a VRF proof $\pi$. Note that given a valid proof, the output hash is guaranteed to be unique.

- A message $msg$ to be signed, which is taken as an opaque byte sequence of arbitrary length $|msg|$.

There are 3 key functions involved in the _VRF_ signing scheme:

- $\mathsf{VRF_{prove}}(VRF_{sk}, msg)$\
  Takes an arbitrary input message and a secret key and computes a proof.

- $\mathsf{VRF_{proofToHash}}(\pi)$\
  Takes an arbitrary valid proof, and computes a VRF output hash.

- $\mathsf{VRF_{verify}}(\pi, VRF_{pk}, msg)$\
  Takes a proof, output hash, and corresponding public key and input message, and returns $true$ if the verification succeeds; that is, if the proof $\pi$ (and therefore the corresponding output hash $VRF_{out}$) is the result of signing the message $msg$ with the secret key corresponding to the public key $VRF_{pk}$.\
   Otherwise it returns $false$.

Formally, the signing and verification functions are bound by the following relation

$$
\mathsf{VRF_{verify}}(\pi, VRF_{pk}, msg) = \mathsf{True} \leftrightarrow \\
\mathsf{VRF_{prove}}(VRF_{sk}, msg) = \pi
$$

In pseudocode, a VRF proof $\pi$ computation works in the following way:

\begin{algorithm}
\caption{VRF Proof Generation}
\begin{algorithmic}[1]
\Function{$VRF_{prove}$}{$VRF_{sk}$, $msg$}
\State $(x, Y, truncated\_hashed\_sk) \gets VRF\_expand\_sk(VRF_{sk})$
\State $H := Hash2Curve_{elligator2\_25519}(Y, msg)$
\State $\Gamma := x*H$
\State $k := VRF\_Nonce(truncated\_hashed\_sk, point2bytes(H))$

    \State $c = \mathsf{ECVRF\_HashPoints}(H, \Gamma, k*B, k*H)$
    \State $c[16:32] := 0$

    \State $pi[0:32] := point2bytes(\Gamma)$
    \State $\pi[32:48] := c$
    \State $\pi[48:80] := c * x + k$

    \State \Return $\pi$

\EndFunction
\end{algorithmic}
\end{algorithm}

\begin{algorithm}
\caption{Expand Secret Key for VRF}
\begin{algorithmic}[1]
\Function{$vrf\_expand\_sk$}{$VRF_{sk}$}
\State $h \gets \textsc{SHA-512/256}(VRF_{sk}, 32)$

    \State $h[0] \gets h[0] \mathbin{\&} 248$
    \State $h[31] \gets h[31] \mathbin{\&} 127$
    \State $h[31] \gets h[31] \mathbin{|} 64$

    \State $x \gets h[0:32]$
    \State $truncated\_hashed\_sk \gets h[32:64]$

    \State $Y \gets VRF_{sk}[32:64]$

    \State \Return $(x, Y, truncated\_hashed\_sk)$

\EndFunction
\end{algorithmic}
\end{algorithm}

First, the $\mathsf{VRF\_expand\_sk}(VRF_{sk})$ algorithm is used to obtain a public point $Y$ and private scalar $x$ representation of the public and private keys respectively (remember the $VRF_{sk}$ contains the $VRF_{pk}$ in its top 32 bytes). The key expansion also outputs a 32-byte truncated and hashed $VRF_{sk}$, useful for the following computation steps.\
The $\mathsf{Hash2Curve_{elligator2\_25519}}(.)$ function hashes the $Y$ point obtained previously using the _Elligator2_ algorithm.\
We then obtain a point $\Gamma$ (by multiplying the private scalar $x$ with the result from the previous step) and a scalar $k$ through the use of $\mathsf{VRF\_nonce(.)}$ (its full definition included in the [VRF IRTF Standard](https://datatracker.ietf.org/doc/rfc9381/)).\
Afterwards, the function $\mathsf{ECVRF\_HashPoints(.)}$ takes four points and hashes them into a 16 byte sequence. Note that in the input for this function, $B$ is the basis point. Since the hash takes only 16 bytes, the rest of the $c$ scalar is padded with 0s.\
Finally, the proof $\pi$ is computed and returned. Its value is determined as follows:

- the first 32 bytes are the $\Gamma$ point, taken as a byte sequence,
- the following 16 bytes are the significant bytes of the $c$ scalar (without the 0-padding), and finally
- the last 32 bytes are $c * x + k$.

For a more in depth dive on the rationale behind these functions, along with the formal definition of all intermediate and helper functions, please refer to the [VRF IRTF Standard](https://datatracker.ietf.org/doc/rfc9381/).

Note that the output hash may be derived from the proof $\pi$ alone, so this suffices as output to generate the _VRF output hash_.

> [!NOTE]
> For more detail on Algorand's VRF implementation on top of the Sodium Crypto Library see [Appendix A](#appendix-a-algorand-sodium-fork-specification).

## Cryptographic Sortition

We now give some preliminary definitions of relevant constructs for the Sortition Algorithm. For more detail on these, please refer to the [Algorand Byzantine Fault Tolerance Protocol Formal Specification](abft.md).

Let an $Account \ A$ be an object representing a $user$ (also called a $player$ in the aforementioned document).\
An $Account$ is opaque save for a unique identifying address $I$ and a 64 bit integer field $userMoney_r$, which represents its participating stake in a given moment in time. In the case of the [ABFT protocol](abft.md), a notion of "time" in discrete units is represented by a monotonically increasing round number $r$.\
For convenience, we call each unit $i$, with $0 \leq i < userMoney_r$, a $sub-user$.

Furthermore, let a _committee_ be a subset of $sub-users$ across all $Accounts$ in a given round $r$. A _committee_'s expected size and threshold size are protocol constants dependent on the currently executing protocol _step_ $s$ (see the [Elementary Data Types section](abft.md#elementary-data-types) on the [ABFT Specification document](abft.md)). The notion of Protocol ``time" is completed by the period number $p$, another non-negative integer that intutiviely corresponds to the number of previous attempts at reaching consensus for a given round $r$ (see the non-ideal protocol run examples in [ABFT Overview](abft-overview.md) for examples of the relevance of period $p$).

The _Cryptographic Sortition algorithm_ is then a procedure to deterministically and verifiably randomly self-select a certain amount of $sub-users$ as defined above (units of monetary value), weighted by the total amount of $sub-users$ available for the given $r$ across all accounts, according to a statistical expectation of _Committee_ size (for a given $(r,p,s)$).

The following table serves as a reference for all variables involved in the sortition definition.

| Variable                             | Type           | Description                                                                                                                   |
| ------------------------------------ | -------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| $\tau$                               | 64 bit integer | Committee expected size                                                                                                       |
| $userMoney$ or $w$                   | microAlgo      | Accounts’ stake                                                                                                               |
| j                                    | uint64         | Pseudorandom integer representing how many $sub-users$ were chosen for a given $user (or how many times a $user$ was chosen). |
| VrfProof ($\pi$)                     | [80]byte       | VRF proof (as defined in the [VRF section](#verifiable-random-function)).                                                     |
| VrfPubkey ($VRF_{pk}$ or simply PK)  | [32]byte       | Public key used to verify VRF proofs                                                                                          |
| VrfPrivkey ($VRF_{sk}$ or simply SK) | [64]byte       | Secret/private key used for producing VRF proofs.                                                                             |
| VrfOutput ($VRF_{out}$)              | [64]byte       | Unique pseudorandom value that can be computed from a VrfProof.                                                               |

> [!NOTE]
> In the reference implementation, the $j$ value is stored as `weight`, and represented by the multiplicity of a given credential.

Algorand uses the cryptographic sortition algorithm to select both a block proposer and a set of voters; a committee. In this algorithm, a weight is associated with each user which will be influenced by the amount of stake they own. Both the proposer and the committee are chosen secretly so malicious users don't know who to attack until the message of the selected users gets broadcasted.

To read in more detail please refer to the original [paper](https://people.csail.mit.edu/nickolai/papers/gilad-algorand-eprint.pdf) section 5.

This algorithm, that is run for every user participating in consensus, makes use of VRFs and a binomial distribution walk to output a pseudorandom integer $j$, a 64 bit unsigned integer value that goes from $0$ to $2^{64} - 1$. Said value can then be verified by any third party provided they have knowledge of the public key PK of the user that was selected and the resulting VRF proof $\pi$.

Conceptually, the proof algorithm is used to execute a VRF for some given input data and a given secret VRF key, outputting a 80 byte string which we refer to as sortition proof $\pi$. The [seed](https://github.com/algorand/go-algorand/blob/8832ed5346489f88b1da00178627c99a54f0c216/agreement/proposal.go#L167) used for this randomness is the one that was calculated in the previous round.

Sortition manages to pseudo-randomly but verifiably (through VRF) choose a user with probability proportional to their weight $w$ (i.e., stake) by returning a $j$ parameter, which indicates the number of times that specific user was chosen. The following algorithm describes the cryptographic sortition process.

\begin{algorithm}[H]
\caption{Sortition}
\label{algo:sortition}
\begin{algorithmic}[1]
\State $<hash, \pi> \gets $$ VRF*{sk}$(seed $\left | \right |$ role)
\State $p \gets \frac{\tau}{W}$
\State $j \gets 0$
\While{$\frac{hash}{2^{\textit{hashlenBits}}}\notin \left[ \sum*{k=0}^j\mathsf{B}(k;w,p), \sum\_{k=0}^{j+1}\mathsf{B}(k;w,p) \right)$}
            \State $j \gets j+1$
\EndWhile
\State \Return $<hash, \pi, j> $
\end{algorithmic}
\caption{\underline{Sortition}}
\end{algorithm}

> [!NOTE]
> In the reference implementation, the sortition algorithm is implemented by the [Select](https://github.com/algorand/sortition/blob/9ffbb4eb8f7b0acb233c9e6dcc5d1fa030350a94/sortition.go#L44) function.

Algorithmically, every monetary unit the user has is considered a “sub-user”, this way we ensure that users with more stake have better chances of being selected. As it was already said, part of the selection process is given by the binomial walk. This binomial function is defined by 64 bit float N, the total stake of the user and the probability float P given by $\frac{committeSize}{totalMoney}$. Then, the probability that exactly $j$ out of the $w$ (the user’s weight) sub-users are selected follows the binomial distribution $B(n, p)$.

$B(j, w, p) = \binom{w}{j}p^{j}(1-p)^{w-j}$ with j $\in$ [0, w]

To determine how many “sub-users” are chosen, the sortition algorithm divides the range [0, 1) in consecutive ranges $I^{j}$ of this form:

$I^{j}= \left[ \sum_{k=0}^{j} B(k; w, p), \sum_{k=0}^{j+1} B(k; w, p) \right)$

If the ratio given by $\frac{hash}{2^{hashLenBits}}$ falls inside the range defined by $I^{j}$, then, the user has exactly $j$ sub-users.

The loop defined in the algorithm can also be understood as sampling the probability function by using its cumulative probability function. In every iteration, Sortition checks if the ratio falls inside the interval defined by $I^j$. By having more stake, you have better chances of getting a greater $j$.

Consider the following example:

\tikzset{every picture/.style={line width=0.75pt}}

\begin{tikzpicture}[x=0.75pt,y=0.75pt,yscale=-1,xscale=1]
\path (250,165); %set diagram left start at 0, and has height of 165

%Straight Lines [id:da503433134604765]
\draw [color={rgb, 255:red, 74; green, 144; blue, 226 } ,draw opacity=1 ][line width=1.5] (569.67,20) -- (569.67,42) ;
%Straight Lines [id:da45941851454107085]
\draw [color={rgb, 255:red, 74; green, 144; blue, 226 } ,draw opacity=1 ][line width=1.5] (517.15,20.39) -- (517.15,78.39) ;
%Straight Lines [id:da6738532663774055]
\draw [color={rgb, 255:red, 74; green, 144; blue, 226 } ,draw opacity=1 ][line width=1.5] (463.67,21) -- (464.33,139) ;
%Straight Lines [id:da6733001672655502]
\draw [color={rgb, 255:red, 208; green, 2; blue, 27 } ,draw opacity=1 ] (471.33,135) -- (471.33,150.5) ;
%Straight Lines [id:da25157721447681913]
\draw [color={rgb, 255:red, 208; green, 2; blue, 27 } ,draw opacity=1 ] (451.33,145) -- (451.35,150.62) ;
%Straight Lines [id:da9738753098580923]
\draw [color={rgb, 255:red, 208; green, 2; blue, 27 } ,draw opacity=1 ] (571.33,42) -- (570.71,150.34) ;
%Straight Lines [id:da7953002236696781]
\draw [color={rgb, 255:red, 208; green, 2; blue, 27 } ,draw opacity=1 ] (561.33,44) -- (561.1,150.34) ;
%Straight Lines [id:da853324636667885]
\draw [color={rgb, 255:red, 208; green, 2; blue, 27 } ,draw opacity=1 ] (550.67,46) -- (550.76,151.34) ;
%Straight Lines [id:da8982316982481086]
\draw [color={rgb, 255:red, 208; green, 2; blue, 27 } ,draw opacity=1 ] (540.67,50) -- (541.15,149.34) ;
%Straight Lines [id:da650135100710894]
\draw [color={rgb, 255:red, 208; green, 2; blue, 27 } ,draw opacity=1 ] (530.67,58) -- (530.55,151.34) ;
%Straight Lines [id:da8584648451159059]
\draw [color={rgb, 255:red, 208; green, 2; blue, 27 } ,draw opacity=1 ] (520.67,70) -- (520.95,151.34) ;
%Straight Lines [id:da29883063935002463]
\draw [color={rgb, 255:red, 208; green, 2; blue, 27 } ,draw opacity=1 ] (510.33,89.87) -- (510.33,150) ;
%Straight Lines [id:da050800138392920746]
\draw [color={rgb, 255:red, 208; green, 2; blue, 27 } ,draw opacity=1 ] (500.67,102) -- (500.95,150.34) ;
%Straight Lines [id:da1839990412123288]
\draw [color={rgb, 255:red, 208; green, 2; blue, 27 } ,draw opacity=1 ] (490.67,115) -- (490.67,152) ;
%Straight Lines [id:da3162328487867495]
\draw [color={rgb, 255:red, 208; green, 2; blue, 27 } ,draw opacity=1 ] (481.33,127) -- (481.23,151.31) ;
%Straight Lines [id:da7584916270746415]
\draw [color={rgb, 255:red, 208; green, 2; blue, 27 } ,draw opacity=1 ] (461.33,141) -- (461.33,150) ;
%Straight Lines [id:da13372029009846542]
\draw [line width=0.75] (410.95,150.84) -- (451.35,150.62) -- (590.95,149.84) (420.94,148.78) -- (420.96,152.78)(430.94,148.73) -- (430.96,152.73)(440.94,148.67) -- (440.96,152.67)(450.94,148.62) -- (450.96,152.62)(460.94,148.56) -- (460.96,152.56)(470.94,148.51) -- (470.96,152.51)(480.94,148.45) -- (480.96,152.45)(490.94,148.4) -- (490.96,152.4)(500.94,148.34) -- (500.96,152.34)(510.93,148.28) -- (510.96,152.28)(520.93,148.23) -- (520.96,152.23)(530.93,148.17) -- (530.96,152.17)(540.93,148.12) -- (540.96,152.12)(550.93,148.06) -- (550.96,152.06)(560.93,148.01) -- (560.96,152.01)(570.93,147.95) -- (570.96,151.95)(580.93,147.9) -- (580.96,151.9)(590.93,147.84) -- (590.96,151.84) ;
%Curve Lines [id:da48828716628638014]
\draw [line width=1.5] (423.1,150.51) .. controls (430.35,150.39) and (437.08,149.44) .. (443.33,147.85) .. controls (449.58,146.25) and (467.7,138.13) .. (476.91,130.72) .. controls (486.11,123.3) and (508.01,93.25) .. (513.27,85.38) .. controls (518.54,77.51) and (528.16,42.78) .. (571.33,42) ;
%Straight Lines [id:da5821273310950263]
\draw (421.33,159.87) -- (420.68,5) ;
\draw [shift={(420.67,2)}, rotate = 89.76] [fill={rgb, 255:red, 0; green, 0; blue, 0 } ][line width=0.08] [draw opacity=0] (8.93,-4.29) -- (0,0) -- (8.93,4.29) -- cycle ;
%Shape: Star [id:dp5203349417661393]
\draw [color={rgb, 255:red, 65; green, 117; blue, 5 } ,draw opacity=1 ][fill={rgb, 255:red, 126; green, 211; blue, 33 } ,fill opacity=1 ] (513.66,79.62) -- (515.33,82.99) -- (519.05,83.53) -- (516.36,86.16) -- (516.99,89.87) -- (513.66,88.12) -- (510.33,89.87) -- (510.97,86.16) -- (508.27,83.53) -- (512,82.99) -- cycle ;
%Straight Lines [id:da634979711236738]
\draw [line width=0.75] (409.95,21) -- (450.35,20.78) -- (589.95,20) (462.94,18.71) -- (462.96,22.71)(515.93,18.41) -- (515.96,22.41)(568.93,18.12) -- (568.96,22.12) ;

% Text Node
\draw (122,117) node [anchor=north west][inner sep=0.75pt] [align=left] {};
% Text Node
\draw (413,153) node [anchor=north west][inner sep=0.75pt] [font=\scriptsize] [align=left] {0\\};
% Text Node
\draw (410,33) node [anchor=north west][inner sep=0.75pt] [font=\scriptsize] [align=left] {1};
% Text Node
\draw (456.33,9.5) node [anchor=north west][inner sep=0.75pt] [font=\scriptsize,color={rgb, 255:red, 45; green, 93; blue, 150 } ,opacity=1 ] [align=left] {1};
% Text Node
\draw (509.33,9) node [anchor=north west][inner sep=0.75pt] [font=\scriptsize,color={rgb, 255:red, 45; green, 93; blue, 150 } ,opacity=1 ] [align=left] {2};
% Text Node
\draw (563.33,9) node [anchor=north west][inner sep=0.75pt] [font=\scriptsize,color={rgb, 255:red, 45; green, 93; blue, 150 } ,opacity=1 ] [align=left] {3};
% Text Node
\draw (510.33,153) node [anchor=north west][inner sep=0.75pt] [font=\tiny,color={rgb, 255:red, 45; green, 93; blue, 150 } ,opacity=1 ] [align=left] {\textcolor[rgb]{0.82,0.01,0.11}{9}};
% Text Node
\draw (569.71,153.34) node [anchor=north west][inner sep=0.75pt] [font=\tiny,color={rgb, 255:red, 45; green, 93; blue, 150 } ,opacity=1 ] [align=left] {\textcolor[rgb]{0.82,0.01,0.11}{15}};
% Text Node
\draw (375,-15) node [anchor=north west][inner sep=0.75pt] [align=left] {\textbf{\textcolor[rgb]{0.29,0.56,0.89}{Bob's monetary units (sub-users)}}};
% Text Node
\draw (375,165) node [anchor=north west][inner sep=0.75pt] [align=left] {\textbf{\textcolor[rgb]{0.82,0.01,0.11}{Alice's monetary units (sub-users)}}};

\end{tikzpicture}

- In blue, we have the partitions given by a user named Bob with low stake.
- In red, we have the range defined by a user named Alice with more stake.

Let’s say we ran the algorithm for two different accounts, Bob and Alice, and superimposed the results to get this cumulative probability function (or _cdf_). The x-axis represents the $j$ values. The y-axis represents the probability of having $j$ $sub-users$ selected. The cumulative probability function determines the probability of having 1 $sub-user$ selected, the probability of having 2 $sub-users$ selected, and so on;
this is $P(j=1) + P(j=2) + …$ as you go trough every possible value for $j$.

The green star is the ratio that we are using to return the corresponding $j$ value by comparing it with the _cdf_. It’s easy to see that given more stake participating in consensus, there is a higher probability of having a higher $j$ value. In this case, when the ratio falls inside the red range, $j = 9$ but when it falls inside the blue range, $j = 1$.

## Merkle tree

Algorand uses a Merkle tree to commit to an array of elements and
to generate and verify proofs of elements against such a commitment. They are fundamental to generate a cryptographic commitment to the contents of the `payset` field in block assembly (see the [Algorand Ledger Specification](ledger.md) for more details on this field and the general anatomy of a block), for the tree structure in the two level ephemeral key scheme (see the [Algorand Participation Keys Specification](parkeys.md)) and to build [State Proofs](#state-proofs).\
The Merkle tree algorithm is defined for a dense array of N elements
numbered 0 through N-1. We now describe how to commit to an array (to
produce a commitment in the form of a root hash), what a proof looks like,
and how to verify a proof for one or more elements.

Since there is at most one valid proof that can be efficiently computed
for a given position, element, and root commitment, we do not formally
define an algorithm for generating a proof. Any algorithm that
generates a valid proof (i.e., which passes verification) is correct.
A reasonable strategy for generating a proof is to follow the logic
of the proof verifier and fill in the expected left- and right-sibling
values in the proof based on the internal nodes of the Merkle tree built
up during commitment.

The Merkle tree can be created using one of the supported [hash functions](#hash-functions).

### Commitment

To commit to an array of N elements, each element is first hashed
to produce a 32-byte hash value, together with the appropriate
[domain-separation prefix](#domain-separation); this produces a list
of N hashes. If N=0, then the commitment is all-zero (i.e., 32 zero
bytes). Otherwise, the list of N 32-byte values is repeatedly reduced
to a shorter list, as described below, until exactly one 32-byte value
remains; at that point, this resulting 32-byte value is the commitment.

The reduction procedure takes pairs of even-and-odd-indexed values in
the list (for instance, the values at positions 0 and 1; the values at
positions 2 and 3; and so on) and hashes each pair to produce a single
value in the reduced list (respectively, at position 0; at position
1; and so on). To hash two values into a single value, the reduction
procedure concatenates the [domain-separation prefix](#domain-separation) "MA" together with
the two values (in the order they appear in the list), and then applies
the hash function. When a list has an odd number of values, the last
value is paired together with an all-zero value (i.e., 32 zero bytes).

The pseudocode for the commitment algorithm is as follows:

```python
def commit(elems):
  hashes = [H(elem) for elem in elems]
  return reduce(hashes)

def reduce(hashes):
  if len(hashes) == 0:
    return [0 for _ in range(32)]
  if len(hashes) == 1:
    return hashes[0]
  nexthashes = []
  while len(hashes) > 0:
    left = hashes[0]
    right = hashes[1] if len(hashes) > 1 else [0 for _ in range(32)]
    hashes = hashes[2:]
    nexthashes.append(H("MA" + left + right))
  return reduce(nexthashes)
```

### Proofs

Logically, to verify that an element appears at some position P in the
array, the verifier runs a variant of the commit procedure to compute
a candidate root hash, and then checks if the resulting root hash is
equal to the expected commitment value. The key difference is that the
verifier does not have access to the entire list of committed elements;
the verifier just has some subset of elements (one or more), along with the
positions at which these elements appear. Thus, the verifier needs to
know the siblings (the `left` and `right` values used in the `reduce()`
function above) to compute its candidate root hash. The list of these
siblings constitutes the proof; thus, a proof is a list of zero or more
32-byte hash values. Algorand defines a deterministic order in which
the verification procedure expects to find siblings in this proof, so no
additional information is required as part of the proof (in particular,
no information about which part of the Merkle tree each proof element
corresponds to).

### Verifying a proof

The following pseudocode defines the logic for verifying a proof (a
list of 32-byte hashes) for one or more elements, specified as a list
of position-element pairs, sorted by position in the array, against a
root commitment. The function `verify` returns `True` if `proof` is a
valid proof for all elements in `elems` being present at their positions
in the array committed to by `root`. (The pseudocode might raise an
exception due to accessing the proof past the end; this is equivalent
to returning `False`.) The function implements a variant of `reduce()`
for a sparse array, rather than a fully-populated one.

```python
def verify(elems, proof, root):
  if len(elems) == 0:
    return len(proof) == 0
  if len(elems) == 1 and len(proof) == 0:
    return elems[0].pos == 0 && elems[0].hash == root

  i = 0
  nextelems = []
  while i < len(elems):
    pos = elems[i].pos
    poshash = elems[i].hash
    sibling = pos ^ 1
    if i+1 < len(elems) and elems[i+1].pos == sibling:
      sibhash = elems[i+1].hash
      i += 2
    else:
      sibhash = proof[0]
      proof = proof[1:]
      i += 1
    if pos&1 == 0:
      h = H("MA" + poshash + sibhash)
    else:
      h = H("MA" + sibhash + poshash)
    nextelems.append({"pos": pos/2, "hash": h})

  return verify(nextelems, proof, root)
```

## Vector commitment

Algorand uses [Vector Commitments][vector-commitment], which allows for concisely committing to an ordered (indexed) vector of data entries, based on Merkle trees.

# State Proofs

State Proofs (aka. Compact Certificates) allow external parties to efficiently validate
Algorand blocks. The [technical report][compactcert] provides the
overall approach of state proofs; this section describes the
specific details of how state proofs are realized in Algorand.

As a brief summary of the technical report, state proofs operate
in three steps:

- The first step is to commit to a set of participants that are eligible
  to produce signatures, along with a weight for each participant.
  In Algorand's case, these end up being the online accounts, and the
  weights are the account balances.

- The second step is for each participant to sign the same message, and
  broadcast this signature to others. In Algorand's case, the message would contain
  a commitment on blocks in a specific period.

- The third step is for relays to collect these signatures from a
  large fraction of participants (by weight) and generate a state
  proof. Given a sufficient number of signatures, a relay
  can form a state proof, which effectively consists of a
  small number of signatures, pseudo-randomly chosen out of all of
  the signatures.

Note the reference to Algorand's underlying architecture: we assume the existence of a working [consensus mechanism](abft.md) and makes use of _Relay nodes_ (see the non-normative [Network Layer Overview](network-overview.md) for details on how different kinds of nodes work on a Network Layer level).

Relays are responsible for collecting all signatures that will
be used to build the compact certificate, and relaying any
signatures they receive to other _Relay nodes_ in the system,
so that all _Relay nodes_ have all of the signatures. _Participation nodes_ send their signatures to _Relay nodes_, but do not receive
signatures from other nodes.

Each node in the system (both
relay and non-relay) chooses several _Relay nodes_ to which it
will send its messages (see [Network Overview](network-overview.md) for details on how this may be implemented).\
For _Relay nodes_, this forms a network of
relays so that signatures propagate between them in relatively
few hops. For _Participation nodes_, this ensures that their signatures
will be quickly propagated across _Relay nodes_, even if some
_Relay nodes_ might be faulty.\
See the [technical report][compactcert] section VIII (_Implementing Certificate Formation In A Decentralized Setting_) for more details on these structural aspects.

The resulting state proof proves that at least some `provenWeight`
of participants have signed the message. The actual weight of
all participants that have signed the message must be greater than
`provenWeight`.

## Participant commitment

The state proof scheme requires a commitment to a dense array of participants,
in some well-defined order. In order to grantee this property, Algorand uses Vector Commitment.
Leaf hashing is done in the following manner:

$$
leaf = hash(``spp" || Weight || KeyLifeTime || StateProofPK), \\
\text{for each online participant.}
$$

where:

- _Weight_ is a 64-bit, little-endian integer representing the participant's balance in MicroAlgos

- _KeyLifeTime_ is a 64-bit, little-endian constant integer with value of 256

- _StateProofPK_ is a 512-bit string representing the participant's merkle signature scheme commitment.

## Signature format

Similarly to the participant commitment, the state proof scheme requires a commitment
to a signature array. Leaf hashing is done in the following manner:

$$
leaf = hash("sps" || L || serializedMerkleSignature), \\ \text{for each online participant.}
$$

where:

- _L_ is a 64-bit, little-endian integer representing the participant's `L` value as described in the [technical report][compactcert].

- _serializedMerkleSignature_ representing a merkleSignature of the participant [merkle signature binary representation](https://github.com/algorandfoundation/specs/blob/master/dev/partkey.md#signatures)

When a signature is missing in the signature array, i.e the prover didn't receive a signature for this slot. The slot would be
decoded as an empty string. As a result the vector commitment leaf of this slot would be the hash value of the constant domain separator "MB" (the bottom leaf)

## Choice of revealed signatures

As described in the [technical report][compactcert] section IV.A, a
state proof contains a pseudorandomly chosen set of signatures.
The choice is made using a coin. In Algorand's implementation, the
coin derivation is made in the following manner:

$$
Hin = (``spc" || version || \\ participantCommitment || LnProvenWeight || \\ signatureCommitment || signedWeight || stateproofMessageHash )
$$

where:

- $version$ is an 8-bit constant with value of 0

- $participantCommitment$ is a 512-bit string representing the vector commitment root on the participant array

- $LnProvenWeight$ an 8-bit string representing the natural logarithm value $\ln(ProvenWeight)$ with 16 bits of precision, as described in
  [SNARK-Friendly Weight Threshold Verification][weight-threshold]

- $signatureCommitment$ is a 512-bit string representing the vector commitment root on the signature array

- $signedWeight$ is a 64-bit, little-endian integer representing the state proof signed weight

- $stateproofMessageHash$ is a 256-bit string representing the message that would be verified by the state proof. (it would be the hash result of the state proof message)

For short, we refer below to the revealed signatures simply as 'reveals'.

We compute:

$R = SHAKE256(Hin)$

Then, for every reveal, we:

- Extract a 64-bit string from $R$.
- Use rejection sampling and extract additional 64-bit string from $R$ if needed.

This would grantee having a uniform random coin in $[0,signedWeight)$.

## State proof format

A State proof consists of seven fields:

- The Vector commitment root to the array of signatures, under msgpack
  key `c`.

- The total weight of all signers whose signatures appear in the array
  of signatures, under msgpack key `w`.

- The Vector commitment proof for the signatures revealed above, under msgpack
  key `S`.

- The Vector commitment proof for the participants revealed above, under msgpack
  key `P`.

- The Falcon signature salt version, under msgpack key `v`, is the expected salt version of
  every signature in the state proof.

- The set of revealed signatures, chosen as described in section IV.A
  of the [technical report][compactcert], under msgpack key `r`. This set is stored as a
  msgpack map. The key of the map is the position in the array of the
  participant whose signature is being revealed. The value in the map
  is a msgpack struct with the following fields:

  - The participant information, encoded as described [above](#participant-commitment),
    under msgpack key `p`.

  - The signature information, encoded as described [above](#signature-format),
    under msgpack key `s`.

- A sequence of positions, under msgpack key `pr`. The sequence defines the order of the
  participant whose signature is being revealed. i.e

$$
  PositionsToReveal = [IntToInd(coin_{0}),...,IntToInd(coin_{numReveals-1})]
$$

where $IntToInd(.)$ and $numReveals$ are defined in the [technical report][compactcert], section IV.

Note that, although the state proof contains a commitment to
the signatures, it does not contain a commitment to the participants.
The set of participants must already be known in order to verify a
state proof. In practice, a commitment to the participants is
stored in the block header of an earlier block, and in the state proof message that was
proven by the previous state proof.

## State proof validity

A state proof is valid for the message hash,
with respect to a commitment to the array of participants,
if:

- The depth of the vector commitment for the signature and the participant information
  should be less than or equal to 20.

- All falcon signatures should have the same salt version and it should
  by equal to the salt version specified in state proof

- The number of reveals in the state proof should be less than of equal to 640

- Using the trusted Proven Weight (supplied by the verifier), The state proof should pass
  the [SNARK-Friendly Weight Threshold Verification][weight-threshold] check.

- All of the participant and signature information that appears in
  the reveals is validated by the Vector commitment proofs for the participants
  (against the commitment to participants, supplied by the verifier)
  and signatures (against the commitment in the state proof itself), respectively.

- All of the signatures are valid signatures for the message hash.

- For every $i \in {0,...,numReveals-1}$ there is a reveal in map denote by $r_{i}$, where $r_{i} \gets T[_PositionsToReveal[i]]$
  and $r_{i}.Sig.L \leq coin_{i} < r_{i}.Sig.L + r_{i}.Part.Weight$.

  T is defined in the [technical report][compactcert], section IV.

## Setting security strength

- ${target_C}$: "classical" security strength. This is set to ${k+q}$ (${k+q}$ are defined in section IV.A of the [technical report][compactcert]). The goal is to have ${\leq 1/2^{k}}$ probability of breaking the state proof by an attacker that makes up to ${2^{q}}$ hash evaluations/queries. We use ${target_C}$ = 192, which corresponds to, for example, ${k=128}$ and ${q=64}$, or ${k=96}$ and ${q=96}$.
- ${target_{PQ}}$: "post-quantum" security strength. This is set to ${k+2q}$, because at a cost of about ${2^q}$, a quantum attacker can search among up to ${2^{2q}}$ hash evaluations (this is a highly attacker-favorable estimate). We use ${target_{PQ} = 256}$, which corresponds to, for example, ${k=128}$ and ${q=64}$, or ${k=96}$ and ${q=80}$.

## Bounding The Number of Reveals

In order for the SNARK prover for State Proofs to be efficient enough, we must impose an upper bound ${MaxReveals_{C}}$ on the number of "reveals" the SP can contain, while still reaching its target security strength ${target_C = 192}$. Concretely, for now we wish to set ${MaxReveals_{C} = 480}$.

Similarly, the quantum-secure verifier aims for a larger security strength of ${target_{PQ} = 256}$, and we can also impose an upper bound ${MaxReveals_{PQ}}$ on the number of reveals it can handle (recall that a smaller number of reveals means that $signedWeight/provenWeight$ must be larger in order to reach a particular security strength, so we cannot set ${MaxReveals_{C}}$ or ${MaxReveals_{PQ}}$ too low).

To generate a SNARK proof, we need to be able to "downgrade" a valid SP with ${target_{PQ}}$ strength into one with merely ${target_{C}}$ strength, by truncating some of the reveals to stay within the bounds.

First, let us prove that a valid SP with ${NumReveals_{PQ}}$ number of reveals that satisfies Equation (5) in [SNARK-Friendly Weight Threshold Verification][weight-threshold] for a given ${target_{C}}$ can be "downgraded" to have

${NumReveals_{C}} = ceiling({NumReveals_{PQ}} * {target_{C}} / {target_{PQ}})$.

We remark that values $d, b, T, Y$, and $D$ (in [SNARK-Friendly Weight Threshold Verification][weight-threshold]) only depend on $signedWeight$, but not the number of reveals nor the target.
Hence, we just need to prove that:

${NumReveals_{C}} \geq {target_{C}} * T * Y / D$,

which implies it is sufficient to prove:

${NumReveals_{PQ}} * {target_{C}} / {target_{PQ}} \geq {target_{C}} * T * Y / D$.

Since ${target_{C}} > 0$ and ${target_{PQ}} > 0$, we get just need to prove that:

${NumReveals_{PQ}} \geq {target_{PQ}} * T * Y / D$.

This last inequality holds since the SP satisfies Equation (5).

For a given ${MaxReveals_{C}}$ and the desired security strengths, we need to calculate a suitable ${target_{PQ}}$ bound so that the following property holds:

- Any valid SP with a strength of at least ${target_{PQ}}$, and at most ${MaxReveals_{PQ}}$ reveals, can be truncated to a valid SP with a strength of at most ${target_{C}}$, and at least ${MaxReveals_{C}}$ reveals.

Since the "downgraded" state proof has ${NumReveals_{C}} = ceiling({NumReveals_{PQ}} * {target_{C}} / {target_{PQ}})$, and ${NumReveals_{PQ}} \leq {MaxReveals_{PQ}}$, and ${NumReveals_{C}} \leq {MaxReveals_{C}}$ we get

${MaxReveals_{C}} \leq ceiling({MaxReveals_{PQ}} * {target_{C}} / {target_{PQ}})$

and we can set

${MaxReveals_{C}} \leq ceiling({MaxReveals_{PQ}} * {target_{C}} / {target_{PQ}})$.

Since the quantum-secure verifier is not bottlenecked by reveals, we can take ${MaxReveals_{PQ}} \leq floor({MaxReveals_{C}} * {target_{PQ}} / {target_C})$ to be an equality, i.e., ${MaxReveals_{PQ}} = floor(...)$. Therefore we need to set ${MaxReveals_{PQ}}$ to 640.

[ledger-spec]: https://github.com/algorand/spec/ledger.md
[abft-spec]: https://github.com/algorand/spec/abft.md
[sha]: https://doi.org/10.6028/NIST.FIPS.180-4
[sha256]: https://datatracker.ietf.org/doc/html/rfc4634
[sumhash]: https://github.com/algorandfoundation/specs/blob/master/dev/cryptographic-specs/sumhash-spec.pdf
[ed25519]: https://tools.ietf.org/html/rfc8032
[msgpack]: https://github.com/msgpack/msgpack/blob/master/spec.md
[merklesignaturescheme]: https://github.com/algorandfoundation/specs/blob/master/dev/partkey.md
[falcon]: https://falcon-sign.info/falcon.pdf
[deterministic-falcon]: https://github.com/algorandfoundation/specs/blob/master/dev/cryptographic-specs/falcon-deterministic.pdf
[vector-commitment]: https://github.com/algorandfoundation/specs/blob/master/dev/cryptographic-specs/merkle-vc-full.pdf
[compactcert]: https://eprint.iacr.org/archive/2020/1568/20210330:194331
[weight-threshold]: https://github.com/algorandfoundation/specs/blob/master/dev/cryptographic-specs/weight-thresh.pdf

# Appendix A: Algorand Sodium Fork Specification

Here we specify all relevant functions in the Algorand Sodium Fork code. We include key examples (in both the reference implementation and C++) of usage.
It is recommended for implementers, in order to avoid introducing bugs and to maintain security standards, to use the Algorand Sodium Fork as is, and provide C wrappers for the language of choice.

## Relevant constants

- `uint64 crypto_vrf_ietfdraft03_PUBLICKEYBYTES`, an unsigned integer that represents the size in bytes of a VRF public key. Set to 32.

- `uint64 crypto_vrf_ietfdraft03_SECRETKEYBYTES`, an unsigned integer that represents the size in bytes of a VRF secret key. Set to 64.

- `uint64 crypto_vrf_ietfdraft03_SEEDBYTES`, an unsigned integer that represents the size in bytes of a VRF seed. Set to 32.

- `uint64 crypto_vrf_ietfdraft03_PROOFBYTES`, an unsigned integer that represents the size in bytes of a VRF proof (notated as $\pi$ throughout this specification). Set to 80.

- `uint64 crypto_vrf_ietfdraft03_OUTPUTBYTES`, an unsigned integer that represents the size in bytes of a VRF output hash. Set to 64.

- `crypto_sign_ed25519_BYTES`, an unsigned integer that represents the size in bytes of an ED25519 signature. Set to 32.

- `crypto_sign_ed25519_PUBLICKEYBYTES`, an unsigned integer that represents the size in bytes of an ED25519 public key. Set to 32.

- `crypto_sign_ed25519_SECRETKEYBYTES`, an unsigned integer that represents the size in bytes of a ED25519 secret key. Set to 64.

- `crypto_sign_ed25519_SEEDBYTES`, an unsigned integer that represents the size in bytes of an ED25519 seed. Set to 64.

## Relevant functions

What follows is a list of the externally available interface, used in the reference implementation as a cornerstone to compute commitee membership for consensus and the `seed` field in all blocks.

### Functions to be used externally for VRFs

- `void crypto_vrf_keypair_from_seed(unsigned char *pk, unsigned char *sk, const unsigned char *seed)`\
  Takes as input a `seed` of size 32 bytes as a source of randomness.\
  The function returns a VRF keypair in the form of two byte arrays, `pk` of size `crypto_vrf_ietfdraft03_PUBLICKEYBYTES` bytes and `sk` of size `crypto_vrf_ietfdraft03_SECRETKEYBYTES` bytes by argument pointers, which are respectively the public and private VRF keys generated using the `seed` as source of randomness.

- `crypto_vrf_prove(unsigned char *proof, const unsigned char *sk, const unsigned char *m, unsigned long long mlen)`\
  Takes as input a secret key and a message as byte arrays, and the length of the message in bytes.\
  Returns a VRF proof $\pi$, as a byte array of size `crypto_vrf_ietfdraft03_PROOFBYTES` bytes, by argument pointer (`*proof`).

- `crypto_vrf_proof_to_hash(unsigned char *hash, const unsigned char *proof)`\
  Computes the VRF output hash from a valid proof $\pi$, passed as argument as a constant reference to a byte array `*proof`. The return value is a reference to an array of bytes of size `crypto_vrf_ietfdraft03_OUTPUTBYTES`.

- `crypto_vrf_sk_to_pk(unsigned char *pk, const unsigned char *skpk)`\
  Computes the public key from a given secret key.
  Since the 64 byte secret key `skpk` already contains the $VRF_{pk}$ precomputed on its highest 32 bytes, it functionally just copies these top 32 bytes into the returning pointer `pk`.

- `bool crypto_vrf_verify(unsigned char *output, const unsigned char *pk, const unsigned char *proof, const unsigned char *m, unsigned long long mlen)`\
  Verifies a VRF run. Outputs `true` or `false` according to whether the passed data constitutes a valid VRF run or not.

### Functions to be used externally for _ED25519_ signatures

- `int crypto_sign_ed25519_seed_keypair(unsigned char *pk, unsigned char *sk, const unsigned char *seed)`\
  Takes as input a seed of 32 bytes as a source of randomness.
  The function generates an Ed25519 keypair and returns it through argument pointers:

  - `pk` of size `crypto_sign_ed25519_PUBLICKEYBYTES` bytes for the public key
  - `sk` of size `crypto_sign_ed25519_SECRETKEYBYTES` bytes for the secret key.

- `int crypto_sign_ed25519_detached(unsigned char *sig, unsigned long long *siglen_p, const unsigned char *m, unsigned long long mlen, const unsigned char *sk)`\
  Takes as input a secret key, a message as byte arrays, and the length of the message in bytes.
  Returns an Ed25519 signature of 64 bytes through the `sig` argument pointer and optionally sets the signature length at `siglen_p` to 64.
  The function is a wrapper that calls the internal implementation `_crypto_sign_ed25519_detached(.)` with the prehashed flag set to 0.

- `int crypto_sign_ed25519_bv_compatible_verify_detached(const unsigned char *sig, const unsigned char *m, unsigned long long mlen, const unsigned char *pk)`
  Verifies an Ed25519 signature against a message and public key.
  Takes as input a signature, a message, the message length, and a public key.
  Returns 0 if the signature is valid, or -1 if the signature is invalid.

- `int crypto_sign_ed25519_sk_to_pk(unsigned char *pk, const unsigned char *sk)`\
  Extracts the public key from a given secret key.
  Takes as input a secret key byte array and returns the corresponding public key through the `pk` argument pointer.
  The implementation simply copies the public key portion (last 32 bytes) from the secret key, which already contains both seed and public key.

- `int crypto_sign_ed25519_sk_to_seed(unsigned char *seed, const unsigned char *sk)`\
  Extracts the original seed from a given secret key.
  Takes as input a secret key byte array and returns the seed through the `seed` argument pointer.
  The implementation copies the first 32 bytes of the secret key, which contains the original random seed.

> [!NOTE]
> In detached mode, signatures are stored without attaching a copy of the original message to them.
> For more details see the [Libsodium Official Documentation](https://doc.libsodium.org/public-key_cryptography/public-key_signatures#detached-mode).

## Key usage examples

> [!NOTE]
> The C Sodium library needs to call `sodium_init()` once at the start of a node.
> Note that this initialisation function will return a -1 in case of failure.

The following is an example of Seed computation, provided in the C++ language. It leverages VRFs to rerandomize the Seed periodically. See the [ABFT formal spec.](abft.md) and the [ABFT overview](abf-overview.md) for further detail on the underlying seed computation algorithm.

```cpp
void DeriveSeed(stSeedAndProof& SeedAndProof, Account& a, unsigned int period, unsigned int round){
  unsigned char* PrevSeed = Ledger.SeedLookup(round - SeedLookback);
  unsigned char* alpha = nullptr;

  //compute seed proof and preliminary hash
  if (period == 0){
    VRFOutput VRFOutSeed = RunVRF(a, PrevSeed, 32);
    std::memcpy(&SeedAndProof.Seed, &VRFOutSeed.VRFHash, 32);
    std::memcpy(&SeedAndProof.Proof, &VRFOutSeed.VRFProof, 80);

    alpha = SeedAndProof.Seed;

    std::string VRFConcatAddress = std::string(&VRFOutSeed.VRFHash[0], &VRFOutSeed.VRFHash[64]) + std::to_string(a.AccountAddress);
    Hash_SHA256(alpha, (unsigned char*)(VRFConcatAddress.c_str()), VRFConcatAddress.size());
  }
  else{
    SeedAndProof.Proof = {0};
    Hash_SHA256(&alpha, PrevSeed, 32);
  }

  if (round % (SeedLookback*SeedRefreshInterval) < SeedLookback){
    std::string alphaConcatDigestLookup = std::string((char*)(alpha)) + std::string((char*)(Ledger.DigestLookup(round - SeedLookback*SeedRefreshInterval)));

    Hash_SHA256((unsigned char*)(SeedAndProof.Seed.c_str()), (unsigned char*)(alphaConcatDigestLookup.c_str()), alphaConcatDigestLookup.size());
  }
  else Hash_SHA256((unsigned char*)(SeedAndProof.Seed.c_str()), alpha, 32);
}
```

The following is an example of a wrapper to run VRFs, used in binomial walk, provided in the C++ language. See the [VRF](#verifiable-random-function) section in this document for more details on how these functions are conceptually defined.

```cpp
VRFOutput ParticipationNode::RunVRF(Account& a, unsigned char* bytes, uint64_t bytesLen)
{
  VRFOutput out;

  //returns -1 if decoding the public key fails. Otherwise returns 0.
  int valid = crypto_vrf_prove(out.VRFProof, a.VRFKeys.VRFPrivKey, bytes, bytesLen);
  assert(valid == 0);

  crypto_vrf_proof_to_hash(&out.VRFHash, out.VRFProof);
  return out;
}
```
