#!/bin/bash

git submodule foreach git pull origin main

bun ./imports/scripts/algokit-cli.ts
bun ./imports/scripts/algokit-utils.ts
bun ./imports/scripts/puya.ts
bun ./imports/scripts/subscriber.ts
bun ./imports/scripts/testing.ts

prettier --write -c ./src/**