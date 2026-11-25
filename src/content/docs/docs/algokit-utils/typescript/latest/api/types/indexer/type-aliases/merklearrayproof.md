---
editUrl: false
next: false
prev: false
title: "MerkleArrayProof"
---

> **MerkleArrayProof** = `indexerModels.MerkleArrayProof`

Defined in: [src/types/indexer.ts:96](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L96)

:::caution[Deprecated]
Use `algosdk.indexerModels.MerkleArrayProof`. Indexer Merkle array Proof.

Proof is used to convince a verifier about membership of leaves: h0,h1...hn
at indexes i0,i1...in on a tree. The verifier has a trusted value of the tree
root hash.

Path is bounded by MaxNumLeaves since there could be multiple reveals, and
given the distribution of the elt positions and the depth of the tree,
the path length can increase up to 2^MaxTreeDepth / 2

Consider two different reveals for the same tree:
```
.                z5
.         z3              z4
.     y       z       z1      z2
.   q   r   s   t   u   v   w   x
.  a b c d e f g h i j k l m n o p
.    ^
. hints: [a, r, z, z4]
. len(hints) = 4
```
You need a to combine with b to get q, need r to combine with the computed q and get y, and so on.

The worst case is this:
```
.               z5
.        z3              z4
.    y       z       z1      z2
.  q   r   s   t   u   v   w   x
. a b c d e f g h i j k l m n o p
. ^   ^     ^   ^ ^   ^     ^   ^
.
. hints: [b, d, e, g, j, l, m, o]
. len(hints) = 2^4/2
```
:::
