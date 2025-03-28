---
numbersections: true
title: 'Algorand Ledger State Machine Specification'
date: \today
abstract: >
  Algorand replicates a state and the state's history between protocol
  participants.  This state and its history is called the _Algorand Ledger_.
pandoc-latex-environment:
  tcolorbox: [box]
  info-box: [info]
  warning-box: [warning]
  error-box: [error]
---

\newcommand{\Prev}{\mathrm{Prev}}
\newcommand{\GenesisID}{\mathrm{GenesisID}}
\newcommand{\GenesisHash}{\mathrm{GenesisHash}}
\newcommand{\Hash}{\mathrm{Hash}}
\newcommand{\Seed}{\mathrm{Seed}}
\newcommand{\Stake}{\mathrm{Stake}}
\newcommand{\Units}{\mathrm{RewardUnits}}
\newcommand{\Record}{\mathrm{Record}}
\newcommand{\pk}{\mathrm{pk}}
\newcommand{\ie}{\mathrm{ie}}
\newcommand{\floor}[1]{\lfloor #1 \rfloor}
\newcommand{\TxSeq}{\mathrm{TxSeq}}
\newcommand{\TxCommit}{\mathrm{TxCommit}}
\newcommand{\Tx}{\mathrm{Tx}}
\newcommand{\TxTail}{\mathrm{TxTail}}
\newcommand{\RekeyTo}{\mathrm{RekeyTo}}
\newcommand{\TxType}{\mathrm{TxType}}
\newcommand{\sppk}{\mathrm{sppk}}
\newcommand{\nonpart}{\mathrm{nonpart}}
\newcommand{\spk}{\mathrm{spk}}

\pagebreak

# Algorand Ledger State Machine Specification

The following document presents a formal specification of the Algorand Ledger.

A blockchain may be modelled as a state machine, where a state at a point in time is defined by succesive, periodical application of a discrete transition function over an initial state, and there is no final state.\
We call this initial state [Genesis](#genesis), the transition function is a full iteration of a decentralized consensus protocol (see the [Algorand Byzantine Fault Tolerance Specification](abft.md)), and the output of said transition is a cryptographically commited, well defined public record of the changes performed to the previous state. We call each of these records a [Block](#blocks), and the entire history of blocks since the initial _Genesis_ block constitutes the Ledger.

This specification aims to normatively define the data structures, operations, and invariants associated with the Ledger. For further detail on non-normative and implementative aspects, you may refer to the [Algorand Ledger Overview](ledger-overview.md).

# Parameters

What follows is a list of parameters and constants used throughout this document. For each we provide its current value in the [reference implementation](LINK) (with the corresponding unit whenever applicable), and a brief explanation of its main purpose.

## Ledger Parameters

|           Parameter            | Value                 | Explanation                                                                                                                                                                                            |
| :----------------------------: | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|          $t_{\delta}$          | 25 seconds            | Maximum difference between successive timestamps.                                                                                                                                                      |
|           $T_{\max}$           | 1000                  | Length of the transaction tail.                                                                                                                                                                        |
|           $B_{\max}$           | 5,242,880 bytes       | Maximum number of transaction bytes in a block.                                                                                                                                                        |
|           $b_{\min}$           | 100,000 microAlgos    | Minimum balance for any address.                                                                                                                                                                       |
|           $f_{\min}$           | 1000 microAlgos       | Minimum processing fee for any transaction.                                                                                                                                                            |
|           $V_{\max}$           | 128                   | Maximum length of protocol version strings.                                                                                                                                                            |
|           $N_{\max}$           | 1024 bytes            | Maximum length of a transaction note string.                                                                                                                                                           |
|           $G_{\max}$           | 16                    | Maximum number of transactions allowed in a transaction group.                                                                                                                                         |
|             $\tau$             | 9000                  | Number of votes needed to execute a protocol upgrade.                                                                                                                                                  |
|           $\delta_d$           | 10,000 rounds         | Number of rounds over which an upgrade proposal is open.                                                                                                                                               |
|      $\delta_{x_{\min}}$       | 10,000 rounds         | Minimum number of rounds needed to prepare for an upgrade.                                                                                                                                             |
|      $\delta_{x_{\max}}$       | 250,000 rounds        | Maximum number of rounds needed to prepare for an upgrade.                                                                                                                                             |
|           $\delta_x$           | 140,000 rounds        | Default number of rounds needed to prepare for an upgrade.                                                                                                                                             |
|           $\omega_r$           | 500,000 rounds        | Rate at which the reward rate is refreshed.                                                                                                                                                            |
|              $A$               | 1,000,000 microAlgos  | Size of an earning unit.                                                                                                                                                                               |
|   $MaxPartkeyValidityRounds$   | $256\times(2^{16})-1$ | The maximum size of the difference between _vote first_ and _vote last_ in a `keyreg` transaction                                                                                                      |
|          $maxAppArgs$          | 16                    | The maximum number of distinct application arguments in an Application Call transaction.                                                                                                               |
|        $maxAppArgsSize$        | 2048 bytes            | The maximum size of the application arguments in an Application Call transaction.                                                                                                                      |
|    $maxExpiredPartAccounts$    | 32                    | The maximum size of the _expired participation accounts_ slice in a block header.                                                                                                                      |
|   $maxSuspendedPartAccounts$   | 32                    | The maximum size of the suspended participation accounts\_ slice in a block header.                                                                                                                    |
| $\delta_{c_0}$, $\delta_{c_1}$ | 400, 200              | Active challenge lookback parameters. By being subtracted from the current round, they generate the interval $[r-\delta_{c_0}, r-\delta_{c_1}]$; the range of rounds for _active challenge_ responses. |
|     $ProposalAssemblyTime$     | 0.5 seconds           | Deadline since the beginning of a round for a block to be assembled in order to propose.                                                                                                               |
|       $MaxAssetUnitName$       | 8                     | The maximum length (in bytes) of the asset unit name                                                                                                                                                   |
|     $MaxAssetDisplayName$      | 32                    | The maximum length (in bytes) of the asset display name                                                                                                                                                |
|      $MaxAssetUrlLength$       | 96                    | The maximum length (in bytes) of the asset URL length                                                                                                                                                  |

## State Proofs Parameters

| Parameter      | Value                  | Explanation                                                                                                      |
| -------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------- |
| $\delta_{SP}$  | 256                    | Number of rounds between state proofs.                                                                           |
| $\delta_{SPB}$ | 16                     | Delay (lookback) in rounds for online participant information committed to in the block header for state proofs. |
| $N_{SP}$       | 1024                   | Maximum number of online accounts included in the vector commitment of state proofs participants.                |
| $KQ_{SP}$\*    | 256                    | Security parameter for state proofs.                                                                             |
| $f_{SP}$       | $\frac{30}{100}2^{32}$ | Fraction of participants proven to have signed by a state proof.                                                 |

\*$KQ_{SP} = 256$ is the value set for state proofs of type $0$. In the future, other types of state proof might be added. $KQ_{SP} = target_{PQ}$ is set to achieve post-quantum security for state proofs. For more detail on this constant and its implications, please refer to the [Algorand Cryptographic Primitive Specification](crypto.md#state-proofs).

## States

A _Ledger_ is a sequence of states which comprise the common information
established by some instantiation of the Algorand protocol. A Ledger is
identified by a string called the _genesis identifier_, as well as a
_genesis hash_ that cryptographically commits to the starting state of
the Ledger. Each state consists of the following components:

- The _round_ of the state, which indexes into the ledger's sequence of
  states.

- The _genesis identifier_ and _genesis hash_, which identify the ledger
  to which the state belongs.

- The current _protocol version_ and the _upgrade state_.

- A _timestamp_, which is informational and identifies when the state was first
  proposed.

- A _seed_, which is a source of randomness used to [establish consensus on the
  next state][abft-spec].

- The current _account state_, which holds account balances and [participation keys](partkey.md#votingparticipation-keys) for all stakeholding addresses.

- The current _box state_, which holds mappings from $(app_{id}, boxName)$
  tuples to box contents of arbitrary bytes. See Box related opcodes in the [Algorand Virtual Machine Specification](avm.md#box-access).

## Blocks

A _block_ is a data structure which specifies the transition between states.
The data in a block is divided between the _block header_ and its _block body_.\
The block header contains the following components:

- The block's _round_, which matches the round of the state it is transitioning
  into. (The block with round 0 is special in that this block specifies not a
  transition but rather the entire initial state, which is called the _genesis
  state_. This block is correspondingly called the [_genesis block_](#genesis)).
  The round is stored under msgpack key `rnd`.

- The block's _genesis identifier_ and _genesis hash_, which match the
  genesis identifier and hash of the states it transitions between (in other words, they remain constant since the initial state forwards).\
  The genesis identifier is stored under msgpack key `gen`, and the genesis
  hash is stored under msgpack key `gh`.

- The block's _upgrade vote_, which results in the new upgrade state. The
  block also duplicates the upgrade state of the state it transitions into.
  The msgpack representation of the components of the upgrade vote are described
  in detail below.

- The block's _timestamp_, which matches the timestamp of the state it
  transitions into. The timestamp is stored under msgpack key `ts`.

- The block's [_seed_](abft.md#seed), which matches the seed of the state it transitions into.
  The seed is stored under msgpack key `seed`.

- A cryptographic commitment to the block's _transaction sequence_, described
  below, stored under msgpack key `txn`.

- A cryptographic commitment, using the [SHA256 hash function](crypto.md#sha256), to the block's _transaction sequence_ (aka. _payset_), described below, stored under msgpack key `txn256`.

- The block's _previous hash_, which is the cryptographic hash of the previous
  block in the sequence. Note that the previous hash of the [genesis block](#genesis) is 0. The previous hash is stored under msgpack key `prev`.

- The block's _transaction counter_, which is the total number of transactions
  issued prior to this block. This count starts from the first block with a
  protocol version that supported the transaction counter. The counter is
  stored in msgpack field `tc`.

- The block's _proposer_, which is the address of the account that
  proposed the block. The proposer is stored in msgpack field `prp`.

- The block's _fees collected_ is the sum of all fees paid by transactions in
  the block and is stored in msgpack field `fc`.

- The block's _expired participation accounts_, which contains an
  optional list of account addresses. These accounts' [participation key](partkey.md#votingparticipation-keys) expire by the end of the current round, with exact rules below.
  The list is stored in msgpack key `partupdrmv`.

- The block's _suspended participation accounts_, which contains an
  optional list of account addresses. These accounts have neither
  recently demonstrated their availability nor participated. The specific rules for this qualifiaction are detailed below. The list is stored in msgpack key `partupdabs`.

> [!NOTE]
> Some fields are deprecated, but we include them here for completeness, as they are still
> a part of produced blocks for compatibility reasons. However, the underlying systems that
> update or utilize them have otherwise been disabled.
>
> - The block's _reward updates_, which results in the new reward state. The
>   block also duplicates the reward state of the state it transitions into.
>   The msgpack representation of the components of the reward updates are described
>   in detail below.
> - The potential _bonus incentive_ is the amount, in MicroAlgos, that
>   may be paid to the proposer of this block beyond the amount
>   available from fees. It is stored in msgpack field `bi`. It may be
>   set during a consensus upgrade, or else it must be equal to the
>   value from the previous block in most rounds, or be 99% of the
>   previous value (rounded down) if the round of this block is 0
>   modulo 1,000,000.
> - The _proposer payout_ is the actual amount that is moved from the
>   $I_f$ to the proposer, and is stored in msgpack field `pp`. If the
>   proposer is not eligible, as described below, the _proposer payout_
>   must be 0. The proposer payout must not exceed
>   - The sum of the _bonus incentive_ and half of the _fees collected_.
>   - The fee sink balance minus 100,000 microAlgos.

A proposer is incentive _eligible_ if the account's `IncentiveEligible` flag is `true` _and_ its _online_ balance is between 30,000 Algos and 70 million Algos.

The _expired participation accounts_ list is valid as long as:

- the [participation keys](partkey.md#votingparticipation-keys) of all the accounts in the slice are expired by the end of the round,
- the accounts themselves would have been _online_ at the end of the round if they were not included in the list, and
- the number of elements in the list is less than or equal to $maxExpiredPartAccounts$ (currently set to 32).
  A block proposer may not include all such accounts in the list and may even
  omit the list completely.

The _suspended participation accounts_ list is valid if, for each
included address:

- the number of elements in the list is less than or equal to $maxSuspendedPartAccounts$ (currently set to 32),
- the account is _online_,
- it is incentive _eligible_, and
- it is either _absent_ or _failing a challenge_ as of the current round.

An account is said to be _absent_ if its `LastHeartbeat` and `LastProposed`
rounds are both more than $20n$ rounds before the current round $r$, where $n$ is
the reciprocal of the account's fraction of online stake.

A round $r$ is an _active challenge_ round if $r\equiv 0(mod \ 1000)$.\
An account of address $I$ is said to be _failing a challenge_ if the first five bits of $I$ match the first five bits of an _active challenge_ round's
block _seed_, and the active challenge round is between $\delta_{c_0}$ (currently set at 400) and $\delta_{c_1}$ (currently set at 200) rounds before the current round. With the current values, the interval generated is $[r-\delta_{c_0}, r-\delta_{c_1}] = [r-400, r-200]$.

Same as with _expired participation accounts_, a block proposer may not include all such accounts in the list and may even omit the list completely.

The _block body_ is the block's transaction sequence (also refered to as _payset_), which describes the sequence of updates ([transactions](#transactions)) to the [account state](#account-state) and [box state](#boxes).

We say a block is _valid_ if each component is also _valid_. Note the [genesis block](#genesis) is
always valid.\
_Applying_ a valid block to a state produces a new state by
updating each of its components. The rest of this document defines block
validity and state transitions by describing them for each component.

# Round

The round or _round number_ is a 64-bit unsigned integer which indexes into the
sequence of states and blocks. The round $r$ of each block is one greater than
the round of the previous block. Given a Ledger, the round of a block
exclusively identifies it.

The rest of this document describes components of states and blocks with respect
to some implicit Ledger. Thus, the round exclusively describes some component,
and we denote the round of a component with a subscript. For instance, the
timestamp of state/block $r$ is denoted $t_r$.

# Previous Hash

The previous hash is a cryptographic hash of the previous block header in the
sequence of blocks. The sequence of previous hashes in each block header forms
an authenticated, linked-list of the reversed sequence.

Let $B_{r}$ represent the block header in round $r$, and let $H$ be some
cryptographic function. Then the previous hash $\Prev_{r+1}$ in the block for
round $r+1$ is $\Prev_{r+1} = H(B_{r})$.\
In the case of Algorand's current implementation, $H$ is the [SHA512/256 hash function](crypto.md#sha512256).

# Genesis Identifier

The genesis identifier is a short string that identifies an instance of a
ledger.

The genesis identifier of a valid block is the identifier of the block in the
previous round. In other words, $\GenesisID_{r+1} = \GenesisID_{r}$.

# Genesis Hash

The genesis hash is a cryptographic hash of the genesis configuration,
used to unambiguously identify an instance of the ledger.

The genesis hash is set in the genesis block (or the block at which
an upgrade to a protocol supporting GenesisHash occurs), and must be
preserved identically in all subsequent blocks.

# Protocol Upgrade State

A protocol version $v$ is a string no more than $V_{\max}$ bytes long. It
corresponds to parameters used to execute some version of the Algorand
protocol.

The upgrade vote in each block consists of a protocol version $v_r$, a 64-bit
unsigned integer $x_r$ which indicates the delay between the acceptance of a
protocol version and its execution, and a single bit $b$ indicating whether
the block proposer supports the given version.

The upgrade state in each block/state consists of the current protocol version
$v^*_r$, the next proposed protocol version $v'_r$, a 64-bit round number
$s_r$ counting the number of votes for the next protocol version, a 64-bit
round number $d_r$ specifying the deadline for voting on the next protocol
version, and a 64-bit round number $x_r'$ specifying when the next proposed
protocol version would take effect, if passed.

An upgrade vote $(v_r, x_r, b)$ is valid given the upgrade state
$(v^*_r, v'_r, s_r, d_r, x_r')$ if $v_r$ is the empty string or $v'_r$ is the
empty string, $\delta_{x_{\min}} \leq x_r \leq \delta_{x_{\max}}$, and either

- $b = 0$ or
- $b = 1$ with $r < d_r$ and either
  - $v'_r$ is not the empty string or
  - $v_r$ is not the empty string.

If the vote is valid, then the new upgrade state is
$(v^*_{r+1}, v'_{r+1}, s_{r+1}, d_{r+1}, x_{r+1})$ where

- $v^*_{r+1}$ is $v'_r$ if $r = x_r'$ and $v^*_r$ otherwise.
- $v'_{r+1}$ is
  - the empty string if $r = x_r'$ or both $r = s_r$ and $s_r + b < \tau$,
  - $v_r$ if $v'_r$ is the empty string, and
  - $v'_r$ otherwise.
- $s_{r+1}$ is
  - 0 if $r = x_r'$ or both $r = s_r$ and $s_r + b < \tau$, and
  - $s_r + b$ otherwise
- $d_{r+1}$ is
  - 0 if $r = x_r'$ or both $r = s_r$ and $s_r + b < \tau$,
  - $r + \delta_d$ if $v'_r$ is the empty string and $v_r$ is not the empty
    string, and
  - $d_r$ otherwise.
- $x_{r+1}$ is
  - 0 if $r = x_r'$ or both $r = s_r$ and $s_r + b < \tau$,
  - $r + \delta_d + \delta$ if $v'_r$ is the empty string and $v_r$ is not
    the empty string (where $\delta = \delta_x$ if $x_r = 0$ and
    $\delta = x_r$ if $x_r \neq 0$), and
  - $x_r'$ otherwise.

# Timestamp

The timestamp is a 64-bit signed integer. The timestamp is purely informational
and states when a block was first proposed, expressed in the number of seconds
since 00:00:00 Thursday, 1 January 1970 (UTC).

The timestamp $t_{r+1}$ of a block in round $r$ is valid if:

- $t_{r} = 0$ or
- $t_{r+1} > t_{r}$ and $t_{r+1} < t_{r} + t_{\delta}$.

Suppose that the blockchain was to stall its commital of new blocks for a prolonged time (for example, a partition scenario on a network level). When correct operation returns, a certain amount $N$ of blocks must be issued and commited until the timestamp may catch up to chronological time. Then, as a consequence of the previous definition, $N$ is such that,

$$N = \left\lceil \frac{t_{now} - t_{r}}{t_{\delta}} \right\rceil$$

# Cryptographic Seed

The seed is a 256-bit integer. Seeds are validated and updated according to the
[specification of the Algorand Byzantine Fault Tolerance protocol][abft-spec].
The $\Seed$ procedure specified there returns the seed from the desired round.

# Account State

The _balances_ are a set of mappings from _addresses_, 256-bit
integers, to _balance records_. A _balance record_ contains the
following fields: the account _raw balance_, the account _status_, the
block incentive _eligibility_ flag, the account _last_proposed_ round, the
account _last_heartbeat_ round, the account _rewards base_ and _total
awarded amount_, the account _spending key_, and the account
[_participation keys_][partkey-spec].

The account raw balance $a_I$ is a 64-bit unsigned integer which determines how
much money the address has.

> [!NOTE]
> In the rest of this section, all references to Reward calculation are with respect to the deactivated, legacy system. They are kept here for completeness and because they are still computed on as part of Account State in the reference implementation, although they have no impact as the rewards rate $R_r$ is zeroed out and therefore no reward allocation takes place.

The account rewards base $a'_I$ and total awarded amount $a^*_I$ are 64-bit
unsigned integers.

Combined with the account balance, the reward base and total awarded amount are
used to distribute rewards to accounts lazily. The _account stake_ is a
function which maps a given account and round to the account's balance in that
round and is defined as follows:

$$\mathrm{Stake}(r, I) = a_I + (T_r - a'_I) \floor{\frac{a_I}{A}}$$

unless $p_i = 2$ (see below), in which case:

$\Stake(r, I) = a_I.$

$\Units(r)$ is a function that computes the total number of whole _earning
units_ present in a system at round $r$. A user owns $\floor{\frac{a_I}{A}}$
whole earning units, so the total number of earning units in the system is
$\Units(r) = \sum_I \floor{\frac{a_I}{A}}$ for the $a_I$ corresponding to round
$r$. In this sum, online and offline accounts are taken into consideration.

The account status $p_I$ is an 8-bit unsigned integer which is either 0, 1,
or 2. An account status of 0 corresponds to an _offline_ account, a status of 1
corresponds to an _online_ account, and a status of 2 corresponds to a
_non-participating_ account.

Combined with the account stake, the account status determines how much _voting
stake_ an account has, which is a 64-bit unsigned integer defined as follows:

- The account balance, if the account is online.
- 0 otherwise.

The account's spending key determines how transactions from this account must be authorized (e.g., what public key to verify transaction signatures against).
Transactions from this account must have this value (or, if this value zero, the account's address) as their authorization address. This is described in the [Authorization and Signatures](#authorization-and-signatures) section below.

The account's participation keys $\pk$ are defined in Algorand's [specification
of participation keys][partkey-spec].

The account's eligibility $\ie$ is a flag that determines whether the
account has elected to receive payouts for proposing blocks (assuming
it meets balance requirements at the time of proposal).

An account's participation keys and voting stake from a recent round is returned
by the $\Record$ procedure in the [Byzantine Agreement Protocol][abft-spec].

There exist two special addresses: $I_{pool}$, the address of the _incentive pool_,
and $I_f$, the address of the _fee sink_. For both of these accounts,
$p_I = 2$.

## Applications

Each account can create applications, each named by a globally-unique integer
(the _application ID_). Applications are associated with a set of _application
parameters_, which can be encoded as a msgpack struct:

- A mutable Stateful "Approval" program (`ApprovalProgram`), whose result
  determines whether or not an `ApplicationCall` transaction referring to this
  application ID is to be allowed. This program executes for all
  `ApplicationCall` transactions referring to this application ID except for
  those whose `OnCompletion == ClearState`, in which case the
  `ClearStateProgram` is executed instead. This program may modify local or
  global state associated with this application. This field is encoded with
  msgpack field `approv`.

  For Version 3 or lower programs, the cost of the program as determined by the Stateful `Check` function must not exceed 700.

  For Version 4 or higher programs, the cost of the program during execution must not exceed 700.

- A mutable Stateful "Clear State" program (`ClearStateProgram`), executed
  when an opted-in user forcibly removes the local application state associated
  with this application from their account data. This happens when an
  `ApplicationCall` transaction referring to this application ID is executed
  with `OnCompletion == ClearState`. This program, when executed, is not
  permitted to cause the transaction to fail. This program may modify local or
  global state associated with this application. This field is encoded with
  msgpack field `clearp`.

  For Version 3 or lower programs, the cost of the program as determined by the Stateful `Check` function must not exceed 700.

  For Version 4 or higher programs, the cost of the program during execution must not exceed 700.

- An immutable "global state schema" (`GlobalStateSchema`), which sets a limit
  on the size of the global [Key/Value Store][Key/Value Stores] that
  may be associated with this application (see ["State Schemas"][State Schemas]). This field is encoded with msgpack field `gsch`.

  The maximum number of values that this schema may permit is 64.

- An immutable "local state schema" (`LocalStateSchema`), which sets a limit on
  the size of a [Key/Value Store][Key/Value Stores] that this
  application will allocate in the account data of an account that has opted in
  (see ["State Schemas"][State Schemas]). This field is encoded with msgpack
  field `lsch`.

  The maximum number of values that this schema may permit is 16.

- An immutable "extra pages" value (`ExtraProgramPages`), which limits
  the total size of the programs of the application. The sum of the
  lengths of `ApprovalProgram` and `ClearStateProgram` may not exceed
  2048\*(1+`ExtraProgramPages`) bytes. This field is encoded with
  msgpack field `epp` and may not exceed 3.
  This `ExtraProgramPages` field is taken into account on application update as well.

- The "global state" (`GlobalState`) associated with this application, stored as
  a [Key/Value Store](#keyvalue-stores). This field is encoded with
  msgpack field `gs`.

Each application created increases the minimum balance
requirements of the creator by 100,000\*(1+`ExtraProgramPages`) microAlgos,
plus the [`GlobalStateSchema` Minimum Balance contribution](#app-minimum-balance-changes).

Each application opted into increases the minimum balance
requirements of the opting-in account by 100,000 microAlgos plus the
[`LocalStateSchema` Minimum Balance contribution](#app-minimum-balance-changes).

### Key/Value Stores

A Key/Value Store, or KV, is an associative array mapping keys of type
byte-array to values of type byte-array or 64-bit unsigned integer.

The values in a KV are either

- `Bytes`, representing a byte-array
- `Uint`, representing an unsigned 64-bit integer value.

The maximum length of a key in a KV is 64 bytes.

### State Schemas

A state schema represents limits on the number of each value type that may
appear in a [Key/Value Store (KV)](#keyvalue-stores). State schemas
are used to control the maximum size of global and local state KVs.

A state schema is composed of two fields:

- `NumUint` represents the maximum number of integer values that may
  appear in some KV.
- `NumByteSlice` represents the maximum number of byte-array values
  that may appear in some KV.

#### App Minimum Balance Changes

When an account opts in to an application or creates an application,
the minimum balance requirements for that account increases. The
minimum balance requirement is decreased equivalently when an account
closes out or deletes an app.

When opting in to an application, there is a base minimum balance increase
of 100,000 microAlgos. There is an additional minimum balance increase based on
the `LocalStateSchema` for that application, described by the following formula:

`28500 * schema.NumUint + 50000 * schema.NumByteSlice` microAlgos.

When creating an application, there is a base minimum balance increase
of 100,000 microAlgos. There is an additional minimum balance increase
of `100000 * ExtraProgramPages` microAlgos. Finally, there is an
additional minimum balance increase based on the `GlobalStateSchema`
for that application, described by the following formula:

`28500 * schema.NumUint + 50000 * schema.NumByteSlice` microAlgos.

### Boxes

The box store is an associative array mapping keys composed of pairs of type (uint64,
byte-array) to values of type byte-array. The key is a pair in which
the first value corresponds to an existing (or previously existing)
application ID, and the second is a _box name_, 1 to 64 bytes in
length. The value is a byte-array of length not greater than 32,768.
Unlike global/local state keys, an empty array is not a valid box
name. However, empty box names may appear in transactions to increase
the I/O budget (see below).

When an application executes an opcode that creates, resizes or destroys a box,
the minimum balance of the associated application account (whose
address is the hash of the application ID) is modified. When a box
with name $n$ and size $s$ is created, the minimum balance requirement
is raised by `2500 + 400 * (len(n)+s)`. When the box is destroyed,
the minimum balance is decremented by the same amount.

## Assets

Each account can create assets, named by a globally-unique integer (the
_asset ID_). Assets are associated with a set of _asset parameters_,
which can be encoded as a msgpack struct:

- The total number of units of the asset that has been created, encoded with
  msgpack field `t`. This value must be between 0 and `UINT64_MAX`.

- The number of digits after the decimal place to be used when displaying the
  asset, encoded with msgpack field `dc`. The divisibility of the asset is given
  by $10^{-dc}$. This means that a `dc` value of 0 represents an asset
  that is not divisible, while a value of 1 represents an asset divisible into tenths, 2 into hundredths, and so on. This value must be between 0 and 19 (inclusive). Note that this is because `UINT64_MAX` is a 20 decimal digit integer.

- Whether holdings of that asset are frozen by default, a boolean flag encoded
  with msgpack field `df`.

- A string representing the unit name of the asset for display to the user,
  encoded with msgpack field `un`. This field does not uniquely identify an
  asset; multiple assets can have the same unit name. The maximum length of
  this field is given by the constant $MaxAssetUnitName$.

- A string representing the name of the asset for display to the user, encoded
  with msgpack field `an`. As above, this does not uniquely identify an asset.
  The maximum length of this field is given by the constant $MaxAssetDisplayName$.

- A string representing a URL that provides further description of the asset,
  encoded with msgpack field `au`. As above, this does not uniquely identify
  an asset. The maximum length of this field is given by the constant $MaxAssetUrlLenght$.

- A 32-byte hash specifying a commitment to asset-specific metadata, encoded with
  msgpack field `am`. As above, this does not uniquely identify an asset.

- An address of a _manager_ account, encoded with msgpack field `m`. The manager
  address is used to update the addresses in the asset parameters using an asset
  configuration transaction.

- An address of a _reserve_ account, encoded with msgpack field `r`. The reserve
  address is not used in the protocol, and is used purely by client software for
  user display purposes.

- An address of a _freeze_ account, encoded with msgpack field `f`. The freeze
  address is used to issue asset freeze transactions.

- An address of a _clawback_ account, encoded with msgpack field `c`.
  The clawback address is used to issue asset transfer transactions
  from arbitrary source addresses.

Parameters for assets created by an account are stored alongside the
account state, denoted by a pair (address, asset ID).

Accounts can create and hold any number of assets.
An account must hold every asset that it created (even if it holds 0
units of that asset), until that asset is destroyed. An account's asset
holding is simply a map from asset IDs to an integer value indicating
how many units of that asset is held by the account and a boolean flag
indicating if the holding is frozen or unfrozen. An account that holds
any asset cannot be closed.

# Participation Updates

Participation updates contains two lists of addresses of accounts
that have incurred changes to their participation status.

The first contains accounts that have been deemed to be _expired_. An
account is said to be expired when the last valid vote round in its
[participation key](partkey.md#votingparticipation-keys) is strictly less than the round currently being processed. Once included in this list, an account will be
marked _offline_ as part of applying the block changes to the Ledger.

The second contains accounts that have been deemed to be
_suspended_. An account is said to be suspended according to the rules
specified above for the _suspended particpation accounts_ list. Once
included in this list, an account will be marked _offline_, but its
voting keys will be retained in the account state, as part of applying
the block changes to the Ledger. The `IncentiveEligible` flag of the
account will be set to false.

# Light Block Header

A light block header is a structure comprised of a subset of fields from Algorand's _block header_, plus the hash of said block header.
It contains the following components:

- The block's _seed_, under msgpack key `0`.

- The block's _hash_, under msgpack key `1`.

- The block's _genesis hash_, under msgpack key `gh`.

- The block's _round_, under msgpack key `r`.

- The block's SHA256 Transaction commitment, under msgpack key `tc`.

# Light Block Header Commitment

Light Block Header Commitment for rounds $(X \cdot \delta_{SP},...,(X+1) \cdot \delta_{SP}]$ for some number $X$, defined as
the root of a [vector commitment](crypto.md#vector-commitment) whose leaves are light block headers for rounds $X \cdot \delta_{SP},...,(X+1) \cdot \delta_{SP}$ respectively. We use the [SHA256 hash function](crypto.md#sha256) to create this vector commitment.

# State Proof message

A state proof message for rounds $(X \cdot \delta_{SP},...,(X+1) \cdot \delta_{SP}]$ for some number $X$,
contains the following components:

- Light block headers commitment for rounds $(X \cdot \delta_{SP},...,(X+1) \cdot \delta_{SP}]$, under msgpack key `b`.

- First attested round which would be equal to $X \cdot \delta_{SP} + 1$, under msgpack key `f`.

- Last attested round which would be equal to $(X+1) \cdot \delta_{SP}$, under msgpack key `l`.

- Participant commitment used to verify the state proof for rounds $((X+1) \cdot \delta_{SP},...,(X+2) \cdot \delta_{SP}]$,
  under msgpack key `v`.

- The value $\ln(ProvenWeight)$ with 16 bits of precision that would be used to verify the state proof for rounds $((X+1) \cdot \delta_{SP},...,(X+2) \cdot \delta_{SP}]$, under msgpack key `P`. This field is calculated based on the total weight of the participants (see the semantics on the [State Proof Transaction](#state-proof-transaction)).

# State Proof Tracking

Each block header keeps track of the state needed to construct, validate,
and record state proofs.
This tracking data is stored in a map under the msgpack key `spt` in the block header.
The map is indexed by the type of the state proof; at the moment, only
type 0 is supported. In the future, other types of state proofs
might be added.

For type 0, $KQ_{SP}=256$, $f_{SP}$ is $2^{32}*30/100$
(as the numerator of a fraction out of $2^{32}$), $N_{SP}=1024$,
$\delta_{SP}=256$ and $\delta_{SPB}=16$.\
For some context on the definition of these constants, please refer to the [Algorand Cryptographic Primitive Specification](crypto.md#state-proofs).

The value of the tracking data is a msgpack map with three
elements:

- Under key `n`, the next expected round of a state proof that
  should be formed. When upgrading from an earlier consensus protocol
  to a protocol that supports state proofs, the `n` field is
  set to the lowest value such that `n` is a multiple of $\delta_{SP}$
  and so that the `n` is at least the first round of the new protocol
  (supporting state proofs) plus $\delta_{SPB}+\delta_{SP}$.
  This field is set in every block.

- Under key `v`, the root of the Vector commitment to an array of
  participants that are eligible to vote in the state proof at
  round $\delta_{SP}$ from the current block. Only blocks whose round
  number is a multiple of $\delta_{SP}$ have a non-zero `v` field.

- Under key `t`, the total online stake at round $\delta_{SP}$.

The participants committed to by the Vector commitment are chosen in a
specific fashion:

- First off, because it takes some time to collect all of the _online_
  participants (particularly more than the current target assembly time for a block), the
  set of participants and total _online_ non-expired stake appearing in a commitment
  in block at round $r$ are actually based on the account state from round $r-\delta_{SPB}$.

- The participants are sorted by the number of microAlgos they currently
  hold. This enables more compact
  proofs of pseudorandomly-chosen participants weighted by their
  microAlgo holdings. Only accounts in the _online_ state are included
  in this list of participants.

  > [!NOTE]
  > Even tho the legacy rewards system is disabled, the primitives are still in place. Thus, the calculation is performed taking it into account. Keep this in mind when going through the rest of this section below.

- To limit the worst-case size of this Vector commitment, the array of
  participants contains just the top $N_{SP}$ participants. Efficiently
  computing the top $N_{SP}$ accounts by their microAlgo balance is difficult
  in the presence of pending rewards. Thus, to make this top-$N_{SP}$
  calculation more efficient, we choose the top accounts based on a
  normalized balance, denoted below by $n_I$.

  The normalized balance is a hypothetical balance: Consider an account $I$ with current balance $a_I$. If an account had balance $n_I$ in the genesis block, and did not perform any transactions since then, then its balance by the current round (when rewards are included) will be $a_I$, except perhaps due to rounding effects.
  In more detail, let $r$ be the last round in which a transaction touched account $I$ (and therefore all pending rewards were added to it). Consider the following quantities, as defined in the [Account State](#account-state):

  - The raw balance $a_I$ of account $I$ at round $r$ is its total balance on that round.
  - The rewards base $a'_I$ is meant to capture the total rewards that were allocated to all accounts up to round $r$, expressed as a fraction of the total stake (with limited precision as described below).

  Given these two quantities, the normalized balance of an online account $I$ is $a_I/(1+a'_I)$. For example, if the total amount of rewards distributed up to round $r$ is 20% of the total stake, then the normalized balance is $a_I/1.2$.

  To limit the required precision in this calculation, the system uses a parameter $ru$ that specifies the rewards-earning unit, namely accounts only earn rewards for a whole number of $ru$ microAlgos. (Currently $ru=1,000,000$, so the rewards-earning unit is one Algo).

  The parameter $a'_I$ above is an integer such that $a'_I/ru$ is the desired fraction, rounded down to precision of $1/ru$. The normalized balance is computed as $n_I = \lfloor a_I \cdot ru  / (a'_I + ru) \rfloor$.

# State Proof Parameters

- To limit the resources allocated for creating state proofs, state proof parameters are set to $N_{SP}=1024$, $\delta_{SP}=256$, and $\delta_{SPB}=16$.
- Setting $KQ_{SP}={target_{PQ}}$ to achieve post-quantum security for state proofs. see [state proof crypto spec][sp-crypto-spec] for details.
- On Algorand we assume that at least 70% of the participating stake is honest. Under this assumption there can't be a malicious state proof that would be accepted by the verifier and has a signed weight of more than 30% of the total online stake. Hence, we set the $ProvenWeight$ to be $f_{SP}=2^{32}*30/100$ (as the numerator of a fraction out of $2^{32}$).

# Transactions

A _transaction_ $\mathrm{Tx}$ represents a transition between two account states.
A transaction contains the following fields:

- The _transaction type_ $\mathrm{TxType}$, encoded as msgpack field `type`, which is a short string that indicates the
  type of a transaction. The following transaction types are supported:

  - Transaction type `pay` corresponds to a _payment_ transaction.

  - Transaction type `keyreg` corresponds to a _key registration_ transaction.

  - Transaction type `acfg` corresponds to an _asset configuration_ transaction.

  - Transaction type `axfer` corresponds to an _asset transfer_ transaction.

  - Transaction type `afrz` corresponds to an _asset freeze_ transaction.

  - Transaction type `appl` corresponds to an _application call_ transaction.

- The _sender_ $I$, an address which identifies the account that
  authorized the transaction. Encoded as msgpack field `snd`.

- The _fee_ $f$, which is a 64-bit integer that specifies the processing fee
  the sender pays to execute the transaction (expressed in microAlgos). Encoded as msgpack field `fee`.

- Two 64-bit integers, _first valid_ $r_1$ and _last valid_ $r_2$, which define a round interval in which the transaction may be executed. Encoded as msgpack fields `fv` and `lv`.

- The _lease_ $x$, which is an optional 256-bit integer specifying a mechanism of mutual
  exclusion. If $x \neq 0$ (i.e., $x$ is set) and this transaction is
  confirmed, then this transaction prevents another transaction from the same
  sender and with the lease set to the same value from being confirmed until
  $r_2$ has been observed. Encoded as msgpack field `lx`.

- The _genesis identifier_ $\mathrm{GenesisID}$ of the ledger for which this
  transaction is valid. The $\mathrm{GenesisID}$ is optional. Encoded as msgpack field `gen`.

- The _genesis hash_ $\mathrm{GenesisHash}$ of the ledger for which this
  transaction is valid. The $\mathrm{GenesisHash}$ is required. Encoded as msgpack field `gh`.

- The _group_ $grp$, an optional 32-byte hash whose meaning is described in
  the [Transaction Groups](#transaction-groups) section below. Encoded as msgpack field `grp`.

- The _rekey to address_ $\mathrm{RekeyTo}$, a 32-byte address. If nonzero, the transaction will set the sender account's _authorization address_ field. This functionally works as if the user had replaced its public and secret [_spending/root keys_](partkey.md#root-keys). While their address remains the same, access to their funds is now controlled by the _authorization address_ (i.e. transaction signatures will be checked against this address).\
  If the $\mathrm{RekeyTo}$ address matches the sender address, then the _authorization address_ is instead set to zero, and the original _spending keys_ are re-established. Encoded as msgpack field `rekey`.

- The _note_ $N$, a sequence of bytes with length at most $N_{\max}$ which
  contains arbitrary data. Note that $N_{\max}$ is a consensus parameter (see the [Infrastructure Overview](infrastructure-overview.md)). Encoded as msgpack field `note`.

The cryptographic hash of all fields of the transaction, including the
transaction specific fields below, is called the _transaction
identifier_. This is written as $\Hash(\Tx)$.

## Payment

A payment transaction additionally has the following fields:

- The _amount_ $a$, which is a 64-bit number that indicates the amount of money
  to be transferred expressed in microAlgos. Encoded as msgpack field `amt`.

- The _receiver_ $I'$, which is an optional address which specifies the
  receiver of the funds in the transaction. Encoded as msgpack field `rcv`.

- The _closing address_ $I_0$, which is an optional address that collects all
  remaining funds in the account after the transfer and sends them to the specified address.\
  If $I_0$ is omitted ($I_0 = 0$), the field has no effect. Encoded as msgpack field `close`.

## Key Registration Transaction

A key registration transaction additionally has the following fields:

- The _vote public key_ $\mathrm{vpk}$, (root) public authentication key
  of an account's participation keys ($\mathrm{pk}$). Encoded as msgpack field `votekey`.

- The _selection public key_ $\mathrm{spk}$, public authorization key of
  an account's participation keys ($\mathrm{pk}$). Encoded as msgpack field `selkey`.

- The _state proof public key_ $\mathrm{sppk}$, public commitment to the account's
  state proof keys ($\mathrm{sppk}$). Encoded as msgpack field `sprfkey`.

Note that if $\mathrm{vpk}$ , $\mathrm{spk}$ and $\mathrm{sppk}$ are all unset,
the transaction deregisters the account's participation
key set, and as a result marks the account as offline.

- The _vote first_ $\mathrm{vf}$, first valid round (inclusive) of
  an account's participation key sets. Encoded as msgpack field `votefst`.

- The _vote last_ $\mathrm{vl}$, last valid round (inclusive) of an account's
  participation key sets. Encoded as msgpack field `votelst`.

- The _vote key dilution_ $\mathrm{vkd}$, number of leaf ephemeral keys
  (second level) generated per batch key (which indirectly will also
  determine the total number of batch keys). For details on the two-level
  ephemeral key scheme used for consensus participation authentication, you
  may refer to the [Algorand Participation Key Specification](partkey.md). Encoded as msgpack field `votekd`.

- An optional (boolean) flag $\mathrm{nonpart}$ which, when deregistering keys,
  specifies whether to mark the account _offline_ (if $\mathrm{nonpart}$ is unset)
  or _nonparticipatory_ (if $\mathrm{nonpart}$ is set). Encoded as msgpack field `nonpart`.

For a key registration transaction to be valid, the following conditions need to apply:

- The set of \[_vote public key_, _selection public key_, _state proof public key_, _vote key dilution_\] are required to all be present, or all omitted (clear).
  Providing the default value or the empty value for any of the members of the set
  would be interpreted as if these values were omitted.

- _vote first_ needs to be less than or equal to _vote last_.

- If the set of \[_vote public key_, _selection public key_, _state proof public key_, _vote key dilution_\] is clear, then _vote first_ and _vote last_ need to be clear as well.

- If the set of \[_vote public key_, _selection public key_, _state proof public key_, _vote key dilution_\] is not clear, the following applies:

  - _vote last_ needs to be greater than the current network round $r$ (the round of the last block commited).

  - _vote first_ needs to be less than or equal to $r+1$.

  - The value (_vote last_ - _vote first_) must be not be greater than $MaxKeyregValidPeriod$. It is recommended that it does not exist 3,000,000 rounds for security reasons, to ensure rotation of participation keys.

## ApplicationCall

An application call transaction additionally has the following fields:

- The ID of the application being called, $app_{id}$, encoded as msgpack field `apid`. If
  the ID is zero, this transaction is creating an application.

- An `OnCompletion` type, $oncomp$ which may specify an additional effect of this
  transaction on the application's state in the sender or application creator's
  account data. This field is encoded as msgpack field `apan`, and may take on
  one of the following values:
  - `NoOpOC` (value `0`): Only execute the `ApprovalProgram` associated with
    this application ID, with no additional effects.
  - `OptInOC` (value `1`): Before executing the `ApprovalProgram`, allocate
    local state for this application into the sender's account data.
  - `CloseOutOC` (value `2`): After executing the `ApprovalProgram`, clear any
    local state for this application out of the sender's account data.
  - `ClearStateOC` (value `3`): Don't execute the `ApprovalProgram`, and instead
    execute the `ClearStateProgram` (which may not reject this transaction).
    Additionally, clear any local state for this application out of the sender's
    account data as in `CloseOutOC`.
  - `UpdateApplicationOC` (value `4`): After executing the `ApprovalProgram`,
    replace the `ApprovalProgram` and `ClearStateProgram` associated with this
    application ID with the programs specified in this transaction.
  - `DeleteApplicationOC` (value `5`): After executing the `ApprovalProgram`,
    delete the application parameters from the account data of the application's
    creator.
- Application arguments, $app_{args}$, encoded as msgpack field `apaa`. These arguments are a
  slice of byte slices. There must be no more than $maxAppArgs$ app arguments, and the sum
  of their lengths in bytes must not exceed $maxAppArgsSize$.
- Foreign accounts $app_{f_{acc}}$, accounts besides the `Sender` whose local states may be referred to by the
  executing `ApprovalProgram` or `ClearStateProgram`. These accounts are
  referred to by their addresses, and this field is encoded as msgpack field
  `apat`. The maximum number of addresses in this field is 4.
- Application IDs, $app_{f_{apps}}$ besides the application whose `ApprovalProgram` or
  `ClearStateProgram` is executing, that the executing program may read global
  state from. This field is encoded as msgpack field `apfa`. The maximum number
  of entries in this field is 8.
- Asset IDs that the executing program may read asset parameters from, $app_{f_{asset}}$. This
  field is encoded as msgpack field `apas`. The maximum number of entries in
  this field is 8.
- Box references, $app_{f_{box}}$, that the executing program or any other program in
  the same group may access for reading or modification when the
  reference matches the running programs app ID. This field is encoded
  as msgpack field `apbx`, each element of which is encoded as a
  msgpack object containing an index (`i`) and name (`n`). The maximum
  number of entries in this field is 8. The index (`i`) is a 1-based
  index in the ForeignApps (`apfa`) array. A 0 index is interpreted as
  the application ID of this transaction (`apid`, or the ID that is
  allocated for the created app when `apid` is 0).
- Local state schema, $app_{local}$ encoded as msgpack field `apls`. This field is only used
  during application creation, and sets bounds on the size of the local state
  for users who opt in to this application.
- Global state schema, $app_{glob}$, encoded as msgpack field `apgs`. This field is only used
  during application creation, and sets bounds on the size of the global state
  associated with this application.
- Extra program pages, $app_{pages}$, encoded as msgpack field `apep`. This field is only used
  during application creation, and requests an increased maximum size for the
  approval and clear state programs.
- Approval program, $app_{approve}$, encoded as msgpack field `apap`. This field is used for both
  application creation and updates, and sets the corresponding application's
  `ApprovalProgram`.
- Clear State program, $app_{clear}$, encoded as msgpack field `apsu`. This field is used for
  both application creation and updates, and sets the corresponding
  application's `ClearStateProgram`.
  - The Approval program and the Clear State program must have the
    same version number if either is `v6` or higher.

Furthermore, the sum of the number of Accounts in $app_{f_{acc}}$, Application
IDs in $app_{f_{apps}}$, Asset IDs in $app_{f_{asset}}$, and Box References in $app_{f_{box}}$ is
limited to 8.

## Asset Configuration Transaction

An asset configuration transaction additionally has the following fields:

- _asset ID_, $asset_{id}$, the ID of the asset being configured, encoded as msgpack field `caid`.
  If the ID is zero, this transaction is creating an asset.

- The parameters for the asset being configured, $asset_{params}$, encoded as a struct under
  msgpack field `apar`. If this value is omitted (zero value), this
  transaction is deleting the asset.

## Asset Transfer Transaction

An asset transfer transaction additionally has the following fields:

- The ID of the asset being transferred, $asset_{x}$, encoded as msgpack field `xaid`.

- $asset_{n}$, the number of units of the asset being transferred, encoded as msgpack
  field `aamt`.

- The source address for the asset transfer (non-zero if this is a
  clawback), $asset_{src}$, encoded as msgpack field `asnd`.

- The destination address for the asset transfer, $asset_{dest}$, encoded as msgpack field
  `arcv`.

- The address to which all remaining asset units should be transferred
  to close out this account's holdings of this asset, $asset_{close}$. Encoded as msgpack
  field `aclose`.

### Asset Freeze Transaction

An asset freeze transaction additionally has the following fields:

- The address of the account whose holdings of an asset should be frozen
  or unfrozen, $frz_{addr}$, encoded as msgpack field `fadd`.

- The ID of the asset the holdings of which should be frozen or unfrozen,
  $frz_{id}$, encoded as msgpack field `faid`.

- The new setting of whether the holdings should be frozen or unfrozen, $frz_{flag}$.
  Encoded as a boolean msgpack field `afrz` (`true` for frozen, `false` for
  unfrozen).

### State proof transaction

A special transaction is used to disseminate and store [state proofs](crypto.md#state-proofs).

The state proof transaction includes four additional fields:

- Under msgpack key `sptype`, the type of the state proof $stpf_{type}$; currently always zero.

- Under msgpack key `sp`, the state proof fields $stpf_{fields}$ as defined in the [state proof format](https://github.com/algorandfoundation/specs/blob/master/dev/crypto.md#state-proof-format).

- Under msgpack key `spmsg`, a structure that contains the state proof message, $stpf_{msg}$, whose hash is being attested to by the state proof. This structure is defined in its corresponding section [below](#state-proof-message).

In order for a state proof transaction to be valid the following conditions should be met:

- The type of a state proof transaction is `stpf`.

- Sender address should be equal to a special sender address, which is the hash of the domain-separation prefix `SpecialAddr` (see the corresponding section in the [Algorand Cryptographic Primitive Specification](crypto.md#domain-separation)) with the string constant `"StateProofSender"`.

- The transaction must:

  - have an empty signature field,
  - have a fee $f = 0$,
  - have an empty note field,
  - have an empty rekeying field,
  - have an empty lease field,
  - be a standalone transaction (i.e. not be part of a transaction group).

- The round of the state proof (which is kept inside the message, $stpf_{msg}.LastAttestedRound$) must be exactly equal to the next expected State Proof round in the block header, as described [below](#state-proof-tracking).

- The state proof verification code should return `true` (see [state proof validity](https://github.com/algorandfoundation/specs/blob/master/dev/crypto.md#state-proof-validity)), given the state proof message and the state proof fields extracted from the transaction. In addition, the verifier should also be given a trusted commitment to the _participant array_ and _Proven Weight_ value. The trusted data should be taken from on-chain data at the relevant round.

To encourage the formation of shorter state proof, the rule for
validity of state proof transactions is dependent on the first valid round $r_1$
number in the transaction.
In particular, the signed weight of a state proof must be:

- Equal to the total online stake, $TotalWeight$, if the
  first valid round number on the transaction is no greater than the proof's
  $stpf_{msg}.LastAttestedRound$ plus $\delta_{SP}/2$.

- At least $ProvenWeight + (TotalWeight - ProvenWeight) * Offset / \frac{\delta_{SP}}{2}$,
  if the first valid round number on the transaction is the proof's $stpf_{msg}.LastAttestedRound + \frac{\delta_{SP}}{2}+Offset$.

- At least the minimum weight being proven by the proof,
  $ProvenWeight$, if the first valid round number on the transaction is no less than
  the proof's $stpf_{msg}.LastAttestedRound$ plus $\delta_{SP}$.

Where $ProvenWeight = \frac{(TotalWeight * \delta_{SP})}{2^{32}}$.

When a state proof transaction is applied to the state, the next expected state proof round for that type of state proof is incremented by $\delta_{SP}$.

A node should be able to verify state proof transactions at any point in time (even if the first valid round $r_1$ is greater than the next expected state proof round in the block header).

### Heartbeat transaction

A _heartbeat transaction_ is a special transaction used to prove that an account is _online_.
It includes five additional fields:

- The _heartbeat address_ $\mathrm{h_{addr}}$, which is the address this transaction is proving onlinenss
  for. Encoded as msgpack field `a`.

- The _proof_ $\mathrm{h_{proof}}$, which is a signature of a specific _seed_ (see next field) using the [participation key](partkey.md#votingparticipation-keys) for $\mathrm{h_{addr}}$ (the previous field), thereby showing it is online. Encoded as msgpack field `prf`.

- The _seed_ $\mathrm{h_{seed}}$, which is the block seed for this transaction's
  first valid block $r_1$. It is the message that must be signed with the participation key associated to the _heartbeat address_ $\mathrm{h_{addr}}$. Encoded as msgpack field `sd`

- The _voteID_ $\mathrm{h_{vid}}$, which is a $OneTimeSignatureVerifier$ that must match the
  address account's current VoteID. Encoded as msgpack field `vid`.

- The _keyDilution_ $\mathrm{h_{kd}}$, which is an uint64 that must match with current
  accounts `keyDilution`. Encoded as msgpack field `kd`.

## Account State changes when observing a Transaction (ApplyData)

Each transaction is associated with some information about how it is
applied to the account state. This information is called $ApplyData$,
and contains the following fields:

- The closing amount, $\mathrm{ClosingAmount}$, which specifies how many microAlgos
  were transferred to the closing address, and is encoded as `ca` in
  msgpack.

- The asset closing amount, $\mathrm{AssetClosingAmount}$, which specifies how many
  of the asset units were transferred to the closing address. It is
  encoded as `aca` in msgpack.

> [!NOTE]
> The following item refers to the deprecated Rewards system.

- The amount of rewards distributed to each of the accounts touched by this
  transaction. There are three fields (`rs`, `rr`, and `rc` keys in msgpack
  encoding), representing the amount of rewards distributed to the sender,
  receiver, and closing addresses respectively. The fields have integer
  values representing microAlgos. If any of the accounts are the same
  (e.g., the sender and recipient are the same), then that account receives
  the sum of the respective reward distributions (i.e., `rs` plus `rr`);
  in the reference implementation, one of these two fields will be zero
  in that case.

- If this is an `ApplicationCall` transaction, the `EvalDelta` associated with
  the successful execution of the corresponding application's `ApprovalProgram`
  or `ClearStateProgram`. The `EvalDelta`, encoded as msgpack field `dt`,
  contains the following fields:

  - A `GlobalDelta`, encoding changes to the global state of the called
    application, encoded as msgpack field `gd`. This field is a [`StateDelta`](#state-deltas).

  - Zero or more `LocalDeltas`, encoding changes to some local states associated
    with the called application, encoded as msgpack field `ld`.
    - `ld` maps an "account offset" to a [`StateDelta`](#state-deltas). Account
      offset 0 is the transaction's sender. Account offsets 1 and greater refer
      to the account specified at that offset minus one in the transaction's
      `Accounts` slice. An account would have a `LocalDeltas` entry as long
      as there is at least a single change in that set.
  - Zero or more `Logs` encoded in an array `lg`, recording the arguments
    to each call of the `log` opcode in the called application. The order
    of the entries follows the execution order of the `log`
    invocations. The maximum total number of `log` calls is 32, and the
    total size of all logged bytes is limited to 1024. No Logs are
    included if a Clear state program fails.
  - Zero or more `InnerTxns`, encoded in an array `itx`. Each element
    of `itx` records a successful inner transaction. Each element will
    contain the transaction fields, encoded under `txn`, in the same
    way that the top-level transaction is encoded, recursively,
    including `ApplyData` that applies to the inner transaction.
    - The recursive depth of inner transactions is limited to 8.
    - Up to 16 `InnerTxns` may be present in version 5. In version 6,
      the count of all inner transactions across the transaction group
      must not exceed 256.
    - `InnerTxns` are limited to `pay`, `axfer`, `acfg`, and `afrz`
      transactions in programs before version 6. Version 6 also
      allows `keyreg` and `appl`.
    - A `ClearStateProgram` execution may not have any `InnerTxns`.

## State Deltas

A state delta represents an update to a [Key/Value Store (KV)](#keyvalue-stores). It is constructed as an associative array mapping a byte-array key to a single value delta. It can be regarded as a
series of actions that, when applied to the previous state of the
key/value store, will yield a new state. These State deltas are
included in the `ApplyData` structure under the field `EvalDelta`.

A value delta is composed of three fields:

- `Action`, encoded as msgpack field `at`, which specifies how the value for
  this key has changed. It has three possible values:
  - `SetUintAction` (value = `1`), indicating that the value for this key should
    be set to the value delta's `Uint` field.
  - `SetBytesAction` (value = `2`), indicating that the value for this key
    should be set to the value delta's `Bytes` field.
  - `DeleteAction` (value = `3`), indicating that the value for this key should
    be deleted.
- `Bytes`, encoded as msgpack field `bs`, which specifies a byte slice value to
  set.
- `Uint`, encoded as msgpack field `ui`, which specifies a 64-bit unsigned
  integer value to set.

## Authorization and Signatures

Transactions are not valid unless they are somehow authorized by the sender account (for example, with a signature).
The authorization information is not considered part of the transaction and does not affect the $txid$.
Rather, when serializing a transaction for submitting to a node or including into a block, the transaction and its authorization appear together in a struct called a `SignedTxn`.
The `SignedTxn` struct contains the transaction (in msgpack field `txn`), optionally an _authorizer address_ (field `sgnr`), and exactly one of a _signature_ (field `sig`), _multisignature_ (field `msig`), or _logic signature_ (field `lsig`).

The _authorizer address_, a 32 byte string, determines against what to verify the sig / msig / lsig, as described below. If the `sgnr` field is omitted (or zero), then the authorizer address defaults to the transaction sender address. At the time the transaction is applied to the Ledger, the authorizer address must match the transaction sender account's spending key (or the sender address, if the account's spending key is zero). If it does not match, then the transaction was improperly authorized and is invalid.

- A valid signature (`sig`) is a (64-byte) valid [ed25519 signature](crypto.md#ed25519) of the transaction (encoded in canonical msgpack and with [domain separation prefix](crypto.md#domain-separation) "TX") where the public key is the authorizer address (interpreted as an ed25519 public key).

- A valid multisignature (`msig`) is an object containing
  the following fields and which hashes to the authorizer address as described in the [Multisignature](#multisignature) section:

  - The `subsig` array of subsignatures, each consisting of a signer address and a 64-byte signature
    of the transaction. Note that a transaction signed by a multisignature must contain
    all signer's addresses in the `subsig` array even if the transaction has not
    been signed by that address.

  - The threshold `thr` that is a minimum number of signatures required.

  - The multisignature version `v` (current value is 1).

- A valid logic-signed transaction's signature is the `lsig` object containing
  the following fields:

  - The logic `l` which is versioned bytecode (see [AVM documentation](AVM.md)).

  - An optional single signature `sig` of 64 bytes valid for the authorizer address of the transaction which has signed the bytes in `l`.

  - An optional multisignature `msig` from the authorizer address over the bytes in `l`.

  - An optional array of byte strings `arg` which are arguments supplied to the program in `l` (`arg` bytes are not covered by `sig` or `msig`).

  The logic signature is valid if exactly one of `sig` or `msig` is a valid signature of the program by the authorizer address of the transaction, or if neither `sig` nor `msig` is set and the hash of the program is equal to the authorizer address. Also, in the last case, the program must execute and finish with a single non-zero value on the stack. See the [AVM documentation](AVM.md) for details on program execution semantics.

## Transaction Sequences, Sets, and Tails

Each block contains a _transaction sequence_, an ordered sequence of
transactions in that block. The transaction sequence of block $r$ is denoted
$\TxSeq_r$. Each valid block contains a _transaction commitment_ $\TxCommit_r$
which is a [Merkle tree commitment](crypto.md#commitment) to this sequence. The leaves in the Merkle
tree are hashed as $$\Hash("TL"||txid||stibhash)$$. The $txid$ value is the
32-byte transaction identifier. The $stibhash$ value is a 32-byte hash of the
signed transaction and [`ApplyData`](#account-state-changes-when-observing-a-transaction-applydata) for the transaction, hashed with the
[domain-separation prefix](crypto.md#domain-separation) `STIB`, and encoded as follows:

- Transactions in a block are encoded in a slightly different way than
  standalone transactions, for efficiency:

  If a transaction contains a $\GenesisID$ value, then:

  - it must match the block's $\GenesisID$,
  - the transaction's $\GenesisID$ value must be omitted from the transaction's msgpack encoding in the
    block, and
  - the transaction's msgpack encoding in the block must
    indicate the $\GenesisID$ value was omitted by including a key `hgi`
    with the boolean value `true`.

  Since transactions must include a $\GenesisHash$ value, the
  $\GenesisHash$ value of each transaction in a block must match the
  block's $\GenesisHash$, and the $\GenesisHash$ value is omitted from
  the transaction as it is encoded in a block.

- Transactions in a block are also augmented with `ApplyData` so as to reflect
  how that transaction was applied to the account state.

The transaction commitment for a block covers the transaction encodings
with the changes described above. Individual transaction signatures
cover the original encoding of transactions as standalone.

In addition to _transaction commitment_, each block will also contain a _SHA256 transaction commitment_.
It can allow a verifier which does not support tne [SHA512/256](crypto.md#sha512256) function to verify proof of membership on a transaction.
In order to construct this commitment we use a [Vector Commitment](crypto.md#vector-commitment). The leaves in the Vector Commitment
tree are hashed as $$SHA256("TL"|| txidSha256||stibSha256),$$ where:

$$txidSha256 = SHA256("TX" || transaction)$$
and
$$stibSha256 = SHA256("STIB" || signedTxn || ApplyData).$$

The vector commitment uses SHA256 for internal nodes as well.

A valid transaction sequence contains no duplicates: each transaction in the
transaction sequence appears exactly once. We call the set of these
transactions the _transaction set_ (for convenience, we may also write
$\TxSeq_r$ to refer unambiguously to this set). For a block to be valid, its
transaction sequence must be valid (i.e., no duplicate transactions may appear
there).

All transactions have a _size_ in bytes. The size of the transaction $\Tx$ is
denoted $|\Tx|$. For a block to be valid, the sum of the sizes of each
transaction in a transaction sequence must be at most $B_{\max}$; in other words,
$$\sum_{\Tx \in \TxSeq_r} |\Tx| \leq B_{\max}.$$

The transaction tail for a given round $r$ is a set produced from the union of
the transaction identifiers $txid$ of each transaction in the last $T_{\max}$
transaction sets and is used to detect duplicate transactions. In other words,

$$
\TxTail_r = \bigcup_{r-T_{\max} \leq s \leq r-1} \\
              \{\Hash(\Tx) | \Tx \in \TxSeq_s\}.
$$

As a result, the transaction tail for round $r+1$ is computed as follows:

$$
\TxTail_{r+1} = \TxTail_r \setminus
                  \{\Hash(\Tx) | \Tx \in \TxSeq_{r-T_{\max}}\} \cup \\
				  \{\Hash(\Tx) | \Tx \in \TxSeq_r\}.
$$

The transaction tail is part of the ledger state but is distinct from the
account state and is not committed into the block.

## Transaction Groups

A transaction may include a "Group" field (msgpack tag `grp`), a 32-byte hash
that specifies what _transaction group_ the transaction belongs to.
Informally, a transaction group is an ordered list of transactions that, in
order to be confirmed at all, must all be confirmed together, in order, in the
same block. The `group` field in each transaction is set to what is essentially
the hash of the list of transaction hashes in the group, except to avoid
circularity, when hashing a transaction it is hashed with its `group` field
omitted. In this way a user wanting to require transaction A to confirm if and
only if transactions B and C confirm can take the hashes of transactions A, B,
and C (without the `group` field set), hash them together, and set the `group`
field of all three transactions to that hash before signing them.
A group may contain no more than $G_{max}$ transactions.

More formally, when evaluating a block, consider the $i$th and $(i+1)$th
transaction in the payset to belong to the same _transaction group_ if the
`group` fields of the two transactions are equal and nonzero. The block may
now be viewed as an ordered sequence of transaction groups, where each
transaction group is a contiguous sublist of the payset consisting of one or
more transactions with equal `group` field. For each transaction group where
the transactions have a nonzero `group`, compute the _TxGroup hash_ as follows:

- Take the hash of each transaction in the group but with its `group` field omitted.
- Hash this ordered list of hashes. More precisely, hash the canonical msgpack encoding of a struct with a field `txlist` containing the list of hashes, using "TG" as [domain separation prefix](crypto.md#domain-separation).

If the _TxGroup hash_ of any transaction group in a block does not match the `group` field of the transactions in that group (and that `group` field is nonzero), then the block is invalid. Additionally, if a block contains a transaction group of more than $G_{max}$ transactions, the block is invalid.

If the sum of the fees paid by the transactions in a transaction group
is less than $f_{\min}$ times the number of transactions in the group,
then the block is invalid.\
There are two exceptions to this rule:

- State proof transactions require no fee, and
- Heartbeat transactions require no fee if they have a zero `group` field, and the _heartbeat address_ was challenged between 100 and 200 rounds ago, and has not proposed or
  heartbeat since that challenge. Further explanation of this rule is
  found in the [Heartbeat Transaction Semantics](#heartbeat-transaction-semantics) section, below.

If the sum of the lengths of the boxes denoted by the box references in a
transaction group exceeds 1,024 times the total number of box
references in the transaction group, then the block is invalid. Call
this limit the _I/O Budget_ for the group. Box references with an
empty name are counted toward the total number of references, but add
nothing to the sum of lengths.

If the sum of the lengths of the boxes modified (by creation or
modification) in a transaction group exceeds the I/O Budget of the
group at any time during evaluation (see [ApplicationCall Transaction Semantics](#applicationcall-transaction-semantics)), then the block is invalid.

If the sum of the lengths of all the logic signatures and their arguments
in a transaction group exceeds the number of transactions in the group times
1000 bytes (consensus variable `MaxLogicSigSize`), then the block in invalid.

Beyond the `TxGroup`, `MinFee`, `Box` size, and `LogicSig` size checks, each transaction in a
group is evaluated separately and must be valid on its own, as
described below in the [Validity and State Changes](#validity-and-state-changes) section. For
example, an account with balance 50 could not spend 100 in transaction
A and afterward receive 500 in transaction B, even if transactions A
and B are in the same group, because transaction A would leave the
account with a negative balance.

## Asset Transaction Semantics

An asset configuration transaction has the following semantics:

- If the asset ID is zero, create a new asset with an ID corresponding to
  one plus this transaction's unique counter value. The transaction's
  counter value is the transaction counter field from the block header
  plus the positional index of this transaction in the block (starting
  from 0).

  On asset creation, the asset parameters for the created asset are
  stored in the creator's account under the newly allocated asset ID.
  The creating account also allocates space to hold asset units of the
  newly allocated asset. All units of the newly created asset (i.e.,
  the total specified in the parameters) are held by the creator. When
  the creator holding is initialized it ignores the default freeze flag
  and is always initialized to unfrozen.

- If the asset ID is non-zero, the transaction must be issued by the
  manager of the asset (based on the asset's current parameters). A
  zero manager address means no such transaction can be issued.

  If the parameters are omitted (the zero value), the asset is destroyed.
  This is allowed only if the creator holds all of the units of that asset
  (i.e., equal to the total in the parameters).

  If the parameters are not omitted, any non-zero key in the asset's
  current parameters (as stored in the asset creator's account) is
  updated to the key specified in the asset parameters. This applies to
  the manager, reserve, freeze, and clawback keys. Once a key is set to
  zero, it cannot be updated. Other parameters are immutable.

An asset transfer transaction has the following semantics:

- If the asset source field is non-zero, the transaction must be issued
  by the asset's clawback account, and this transaction can neither
  allocate nor close out holdings of an asset (i.e., the asset close-to
  field must not be specified, and the source account must already have
  allocated space to store holdings of the asset in question). In this
  clawback case, freezes are bypassed on both the source and destination
  of this transfer.

  If the asset source field is zero, the asset source is assumed to be the
  transaction's sender, and freezes are not bypassed.

- If the transfer amount is 0, the transaction allocates space in the
  sender's account to store the asset ID. The holdings are initialized
  with a zero number of units of that asset, and the default freeze flag
  from the asset's parameters. Space cannot be allocated for asset IDs
  that have never been created, or that have been destroyed, at the time
  of space allocation. Space can remain allocated, however, after the
  asset is destroyed.

- The transaction moves the specified number of units of the asset from
  the source to the destination. If either account is frozen, and
  freezes are not bypassed, the transaction fails to execute. If either
  account does not have any space allocated to hold units of this asset,
  the transaction fails to execute. If the source account has fewer
  than the specified number of units of that asset, the transaction
  fails to execute.

- If the asset close-to field is specified, the transaction transfers
  all remaining units of the asset to the close-to address. If the
  close-to address is not the creator address, then neither the sender
  account's holdings of this asset nor the close-to address's holdings
  can be frozen; otherwise, the transaction fails to execute. Closing to
  the asset creator is always allowed, even if the source and/or creator
  account's holdings are frozen. If the sender or close-to address does
  not have allocated space for the asset in question, the transaction
  fails to execute. After transferring all outstanding units of the
  asset, space for the asset is deallocated from the sender account.

An asset freeze transaction has the following semantics:

- If the transaction is not issued by the freeze address in the specified
  asset's parameters, the transaction fails to execute.

- If the specified asset does not exist in the specified account, the
  transaction fails to execute.

- The freeze flag of the specified asset in the specified account is updated
  to the flag value from the freeze transaction.

When an asset transaction allocates space in an account for an asset,
whether by creation or opt-in, the sender's minimum balance
requirement is incremented by 100,000 microAlgos. When the space is
deallocated, whether by asset destruction or asset-close-to, the balance
requirement of the sender is decremented by 100,000 microAlgos.

## ApplicationCall Transaction Semantics

When an `ApplicationCall` transaction is evaluated by the network, it is
processed according to the following procedure. None of the effects of the
transaction are made visible to other transactions until the points marked
**SUCCEED** below. **FAIL** indicates that any modifications to state up to that
point must be discarded and the entire transaction rejected.

### Procedure

1.  - If the application ID specified by the transaction is zero, create a new
      application with ID equal to one plus the system transaction counter (this
      is the same ID selection algorithm as used by Assets).

      When creating an application, the application parameters specified by
      the transaction (`ApprovalProgram`, `ClearStateProgram`,
      `GlobalStateSchema`, `LocalStateSchema`, and `ExtraProgramPages`) are allocated into the
      sender’s account data, keyed by the new application ID.

      Continue to step 2.

    - If the application ID specified by the transaction is nonzero, continue to
      step 2.

2.  - If `OnCompletion == ClearState`, then:
      - Check if the transaction’s sender is opted in to this application ID.
        If not, **FAIL.**
      - Check if the application parameters still exist in the creator's
        account data.
        - If the application does not exist, delete the sender’s local state
          for this application (marking them as no longer opted in), and
          **SUCCEED.**
        - If the application does exist, continue to step 3.
    - If the `OnCompletion != ClearState`, continue to step 4.
3.  - Execute the `ClearStateProgram`.
      - If the program execution returns `PASS == true`, apply the
        local/global/box key/value store deltas generated by the program’s
        execution.
      - If the program execution returns `PASS == false`, do not apply any
        local/global/box key/value store deltas generated by the program’s
        execution.
    - Delete the sender’s local state for this application (marking them as no
      longer opted in). **SUCCEED.**
4.  - If `OnCompletion == OptIn`, then at this point during execution we will
      allocate a local key/value store for the sender for this application
      ID, marking the sender as opted in.

      Continue to step 5.

5.  - Execute the `ApprovalProgram`.
      - If the program execution returns `PASS == true`, apply any
        local/global key/value store deltas generated by the program’s
        execution. Continue to step 6.
      - If the program execution returns `PASS == false`, **FAIL.**
6.  - If `OnCompletion == NoOp`
      - **SUCCEED.**
    - If `OnCompletion == OptIn`
      - This was handled above. **SUCCEED.**
    - If `OnCompletion == CloseOut`
      - Check if the transaction’s sender is opted in to this application ID.
        If not, **FAIL.**
      - Delete the sender’s local state for this application (marking them as
        no longer opted in). **SUCCEED.**
    - If `OnCompletion == ClearState`
      - This was handled above (unreachable).
    - If `OnCompletion == DeleteApplication`
      - Delete the application’s parameters from the creator’s account data.
        (Note: this does not affect any local state). **SUCCEED.**
    - If `OnCompletion == UpdateApplication`
      - If an existing program is version 4 or higher, and the
        supplied program is a downgrade from the existing version
        **FAIL**
      - Update the Approval and ClearState programs for this
        application according to the programs specified in this
        `ApplicationCall` transaction. The new programs are not executed in
        this transaction. **SUCCEED.**

### Application Stateful Execution Semantics

- Before the execution of the first `ApplicationCall` transaction in a
  group, the combined size of all boxes referred to in the box references
  of all transactions in the group must be less than the I/O budget, i.e., 1,024 times the
  total number of box references in the group, or else the group
  fails.
- During the execution of an `ApprovalProgram` or `ClearStateProgram`,
  the application’s `LocalStateSchema` and `GlobalStateSchema` may
  never be violated. The program's execution will fail on the first
  instruction that would cause the relevant schema to be
  violated. Writing a `Bytes` value to a local or global [Key/Value Store](#keyvalue-stores) such that the sum of the lengths of the key
  and value in bytes exceeds 128, or writing any value to a key longer
  than 64 bytes, will likewise cause the program to fail on the
  offending instruction.
- During the execution of an `ApprovalProgram`, the total size of all
  boxes that are created or modified in the group must not exceed the
  I/O budget or else the group fails. The program's execution will
  fail on the first instruction that would cause the constraint to be
  violated. If a box is deleted after creation or modification, its
  size is not considered in this sum.
- Global state may only be read for the application ID whose program
  is executing, or for an _available_ application ID. An attempt to
  read global state for another application that is not _available_
  will cause the program execution to fail.
- Asset parameters may only be read for assets whose ID is
  _available_. An attempt to read asset parameters for an asset that
  is not _available_ will cause the program execution to fail.
- Local state may be read for any _available_ application. An attempt
  to read local state from any other account will cause program
  execution to fail. Further, in programs version 4 or later, Local
  state reads are restricted by application ID in the same way as
  Global state reads.
- Algo balances and asset balances may be read for the sender's
  account or for any _available_ account. An attempt to read a balance
  for any other account will cause program execution to fail.
  Further, in programs version 4 or later, asset balances may only be
  read for assets whose parameters are also _available_.
- Only _available_ boxes may be accessed. An attempt to access any other box
  will cause the program exection to fail.
- Boxes may not be accessed by an app's `ClearStateProgram`.

## Heartbeat Transaction Semantics

If a heartbeat transaction's $grp$ is empty, and $f < f_{min}$, the
transaction fails to execute unless:

- The _note_ $N$ is empty.
- The _lease_ $x$ is empty.
- The _rekey to address_ $\RekeyTo$ is empty.
- The _heartbeat_address_, $a$, is $online$.
- The $\ie$ flag is true for the _heartbeat_address_ $a$.
- The _heartbeat_address_, $a$, is _at risk_ of suspension.

An account is _at risk_ of suspension if the current round is between
100-200 modulo 1000, and the blockseed of the most recent round that
is 0 modulo 1000 matches $a$ in the first 5 bits.

If successful, the `LastHeartbeat` field in the Account State of the specified heartbeat address
$a$ is updated to the current round.

## Validity and State Changes

The new account state which results from applying a block is the account state
which results from applying each transaction in that block, in sequence. For a
block to be valid, each transaction in its transaction sequence must be valid at
the block's round $r$ and for the block's genesis identifier $\GenesisID_B$.

For a transaction

$$
\Tx = (\GenesisID, \TxType, r_1, r_2, I, I', I_0, f, a, x, N, \pk, \sppk, \nonpart,
  \ldots)
$$

(where $\ldots$ represents fields specific to transaction types
besides `pay` and `keyreg`)
to be valid at the intermediate state $\rho$ in round $r$ for the genesis
identifier $\GenesisID_B$, the following conditions must all hold:

- It must represent a transition between two valid account states.
- Either $\GenesisID = \GenesisID_B$ or $\GenesisID$ is the empty string.
- $\TxType$ is either `pay`, `keyreg`, `acfg`, `axfer`, `afrz`,
  `appl`, `stpf`, or `hb`.
- There are no extra fields that do not correspond to $\TxType$.
- $0 \leq r_2 - r_1 \leq T_{\max}$.
- $r_1 \leq r \leq r_2$.
- $|N| \leq N_{\max}$.
- $I \neq I_{pool}$, $I \neq I_f$, and $I \neq 0$.
- $\Stake(r+1, I) \geq f \geq f_{\min}$.
- The transaction is properly authorized as described in the [Authorization and Signatures](#authorization-and-signatures) section.
- $\Hash(\Tx) \notin \TxTail_r$.
- If $x \neq 0$, there exists no $\Tx' \in TxTail$ with sender $I'$, lease value
  $x'$, and last valid round $r_2'$ such that $I' = I$, $x' = x$, and
  $r_2' \geq r$.
- If $\TxType$ is `pay`,
  - $I \neq I_k$ or both $I' \neq I_{pool}$ and $I_0 \neq 0$.
  - $\Stake(r+1, I) - f > a$ if $I' \neq I$ and $I' \neq 0$.
  - If $I_0 \neq 0$, then $I_0 \neq I$.
  - If $I_0 \neq 0$, $I$ cannot hold any assets.
- If $\TxType$ is `keyreg`,
  - $p_{\rho, I} \ne 2$ (i.e., _nonparticipatory_ accounts may not issue `keyreg` transactions)
  - If $\nonpart$ is true then $\spk = 0$, $\pk = 0$ and $\sppk = 0$

Given that a transaction is valid, it produces the following updated account
state for intermediate state $\rho+1$:

- For $I$:

  - If $I_0 \neq 0$ then
    $a_{\rho+1, I} = a'_{\rho+1, I} = a^*_{\rho+1, I} = p_{\rho+1, I} = \pk_{\rho+1, I} = 0$;
  - otherwise,
    - $a_{\rho+1, I} = \Stake(\rho+1, I) - a - f$ if $I' \neq I$ and
      $a_{\rho+1, I} = \Stake(\rho+1, I) - f$ otherwise.
    - $a'_{\rho+1, I} = T_{r+1}$.
    - $a^*_{\rho+1, I} = a^*_{\rho, I} +
                             (T_{r+1} - a'_{\rho, I}) \floor{\frac{a_{\rho, I}}{A}}$.
    - If $\TxType$ is `pay`, then $\pk_{\rho+1, I} = \pk_{\rho, I}$ and $p_{\rho+1, I} = p_{\rho, I}$
    - Otherwise (i.e., if $\TxType$ is `keyreg`),
      - $\pk_{\rho+1, I} = \pk$
      - $p_{\rho+1, I} = 0$ if $\pk = 0$ and $\nonpart = \text{false}$
      - $p_{\rho+1, I} = 2$ if $\pk = 0$ and $\nonpart = \text{true}$
      - $p_{\rho+1, I} = 1$ if $\pk \ne 0$.
      - If $f > 2000000$, then $\ie{\rho+1, I} = true$

- For $I'$ if $I \neq I'$ and either $I' \neq 0$ or $a \neq 0$:
  - $a_{\rho+1, I'} = \Stake(\rho+1, I') + a$.
  - $a'_{\rho+1, I'} = T_{r+1}$.
  - $a^*_{\rho+1, I'} = a^*_{\rho, I'} +
                         (T_{r+1} - a'_{\rho, I'}) \floor{\frac{a_{\rho, I'}}{A}}$.
- For $I_0$ if $I_0 \neq 0$:
  - $a_{\rho+1, I_0} = \Stake(\rho+1, I_0) + \Stake(\rho+1, I) - a - f$.
  - $a'_{\rho+1, I_0} = T_{r+1}$.
  - $a^*_{\rho+1, I_0} = a^*_{\rho, I_0} +
                         (T_{r+1} - a'_{\rho, I_0}) \floor{\frac{a_{\rho, I_0}}{A}}$.
- For all other $I^* \neq I$, the account state is identical to that in view $\rho$.

For transaction types other than `pay` and `keyreg`, account state is
updated based on the reference logic described [above](#transactions).

Additionally, for all types of transactions, if the `RekeyTo` address of the transaction is nonzero and does not match the transaction sender address, then the transaction sender account's spending key is set to the `RekeyTo` address. If the `RekeyTo` address of the transaction does match the transaction sender address, then the transaction sender account's spending key is set to zero.

> [!NOTE]
> The rest of this section describes the deprecated legacy Rewards System. Keep in mind that the $R_r$ rewards rate parameter is set to 0, therefore all computations keep values constant and no reward allocation is carried out in this way.

The final intermediate account $\rho_k$ state changes the balance of the
incentive pool as follows:
$$a_{\rho_k, I_{pool}} = a_{\rho_{k-1}, I_{pool}} - R_r(\Units(r))$$

An account state in the intermediate state $\rho+1$ and at round $r$ is valid if
all following conditions hold:

- For all addresses $I \notin \{I_{pool}, I_f\}$, either $\Stake(\rho+1, I) = 0$ or
  $\Stake(\rho+1, I) \geq b_{\min} \times (1 + NA)$, where $NA$ is the number of
  assets held by that account.

- $\sum_I \Stake(\rho+1, I) = \sum_I \Stake(\rho, I)$.

# Transaction Pool

The _Transaction Pool_ ($TP$) is a core Ledger structure that mantains a bounded queue of validated transaction groups slated for block proposal.

This construct is responsible for selecting which transactions groups should be evaluated
for inclusion in a block being currently assembled, and which ones should be
postponed for later evaluation. When transactions are postponed, the system
should attempt to consider that their lifespan is sufficient for future execution; otherwise, they
are marked for removal if they exceed their validity period.\

For the purpose of this formal specification, the $TP$ is an opaque structure which, by a priority function $TP_f(.)$ and governed by a timeout constant $ProposalAssemblyTime$, selects a series of _valid_ transaction groups (see criteria in the above sections for a proper definition of _validity_ in this context) and constructs the body of a [block](#blocks). It also prunes itself when a new block is commited, discarding all transactions already enqueued.

The $TP$ priority function $TP_f(.)$ is not a normative requirement, and a Transaction Pool may be operated using any criteria, although they usually involve some measure of transaction fee prioritisation (especially in scenarios of congestion).

For a detailed overview of its existing infrastructure and prioritisation algorithm in the reference implementation, please refer to the non-normative [Algorand Ledger Overview](ledger-overview.md#transaction-pool).

# Multisignature

Multisignature term describes a special multisignature address, signing and
validation procedures. In contrast with a regular account address
that may be understood as a public key, multisignature address is a hash of
a constant string identifier for multisignature (`"MultisigAddr"`), version, threshold, and
all addresses used for multisignature address creation:
$$MSig = \Hash("MultisigAddr", version, threshold, \pk_1, ..., \pk_s)$$
One address might be specified multiple times in multisignature address creation.
In this case every occurrence is counted independently in validation.

The validation process checks all non-empty signatures are valid and their count
is no less than the threshold. Validation fails if any of the signatures is invalid
even if the count of all remaining correct signatures is greater than or equal to the threshold.

[sp-crypto-spec]: https://github.com/algorandfoundation/specs/blob/master/dev/crypto.md#state-proofs
[abft-spec]: https://github.com/algorand/spec/abft.md
[partkey-spec]: https://github.com/algorand/spec/partkey.md
