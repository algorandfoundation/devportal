---
title: Python Builtins
description: Supported Python builtin functions in Algorand Python
---

Some common python builtins have equivalent `algopy` versions, that use an [`UInt64`](https://algorandfoundation.github.io/puya/api/algopy/algopy/) instead of a native `int`.

## len

The `len()` builtin is not supported. Instead, `algopy` types that have a length have a `.length` property of type [`UInt64`](https://algorandfoundation.github.io/puya/api/algopy/algopy/). This is primarily
due to `len()` always returning `int` and the CPython implementation enforcing that it returns _exactly_ `int`.

## range

The `range()` builtin has an equivalent [`algopy.urange`](https://algorandfoundation.github.io/puya/api/algopy/algopy/). This behaves the same as the python builtin except that it returns
an iteration of [`UInt64`](https://algorandfoundation.github.io/puya/api/algopy/algopy/) values instead of `int`.

## enumerate

The `enumerate()` builtin has an equivalent [`algopy.uenumerate`](https://algorandfoundation.github.io/puya/api/algopy/algopy/). This behaves the same as the python builtin except that it returns
an iteration of [`UInt64`](https://algorandfoundation.github.io/puya/api/algopy/algopy/) index values and the corresponding item.

## reversed

The `reversed()` builtin is supported when iterating within a `for` loop and behaves the same as the python builtin.

## types

See [here](/docs/algorand-python/python/latest/language-guide/types/#python-built-in-types)