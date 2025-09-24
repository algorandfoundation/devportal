---
title: get_constant_block_offset
sidebar:
  label: get_constant_block_offset
tableOfContents:
  maxHeadingLevel: 4
  minHeadingLevel: 4
---

#### algokit_utils.applications.app_client.get_constant_block_offset(program: bytes) → int

Calculate the offset after constant blocks in TEAL program.

Analyzes a compiled TEAL program to find the ending offset position after any bytecblock and intcblock operations.

- **Parameters:**
  **program** – The compiled TEAL program as bytes
- **Returns:**
  The maximum offset position after any constant block operations
