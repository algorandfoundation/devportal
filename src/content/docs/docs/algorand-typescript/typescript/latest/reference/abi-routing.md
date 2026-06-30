---
title: ABI Routing
---

# ABI Routing

Contracts in Algorand are created, called, updated, and deleted using [Application Call](https://dev.algorand.co/concepts/transactions/types/#application-call-transaction) transactions. This transaction type has a number of fields, with specific ones being required depending on the type of call being made. This document aims to describe some of these scenarios and how they interact with an Algorand TypeScript smart contract.

## Approval and Clear State Programs

An Application Call Transaction passes or fails based on the result of running one of the programs associated with that application. The [OnComplete](https://dev.algorand.co/concepts/smart-contracts/avm/#oncomplete) (`apan`) field is used to decide which _program_ is run. If the on completion action is ClearState (`3`), the Clear State Program is run. For all other on completion actions, the Approval Program is run.

### Approval Program

If the program runs without error and returns a non-zero result, the transaction is allowed (though another transaction in the group may cause the whole group to fail, as transaction groups are all or nothing).

### Clear State Program

A transaction that invokes the clear state program will be allowed even if the logic errors.

## Application Creation

The Application ID (`apid`) field determines if this is an application create call or not. If it is set to `0`, then the call will create a new application using the program bytes attached to this transaction. If it is set to any other number, then the call will be processed by the application on the target network that has the matching ID. If such an application does not exist, the transaction will fail. It is worth noting here that the same contract can be deployed to multiple networks, or multiple times to the same network, and it will receive a different application ID each time.

If a new application is created, the transaction confirmation response will contain the ID of the application.

## On Completion Actions

[On completion actions](https://dev.algorand.co/concepts/smart-contracts/avm/#oncomplete) are used for various application lifecycle events. They can be best interpreted as "the action that will have taken place upon completion of the processing of that transaction" (though it varies between these actions whether they occur before or after running the associated program).

## ABI method selector vs. Bare methods

[ARC004](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0004.md) describes, among other things, a standard for routing application call transactions to specific methods of a contract. The approach is to use the first argument from the transaction's app args array (`apaa`) as a method selector. A method selector is defined as the first 4 bytes of the sha-512/256 hash of the method's ARC4 signature. For example, the method `sayHello(name: string, age: uint64): string` would have an ARC4 signature of `sayHello(string,uint64)string`. In this process, parameter names are ignored, and only the parameter types are concatenated. The hash of this string is `6ce0f4b5012a671bbe1b8355fe8f09f4aaa3b950115db8c71ee26162ecee8b9e`, and the method selector is made of the first 4 bytes of this sequence, i.e., `6ce0f4b5`.

When a program processes an application call, it should check the value of the first application arg. If there are no application args, then this is considered a `bare` request; otherwise, the method with a matching method selector should be invoked and the remainder of the application args should be forwarded to that method.

## Pulling it all together

In Algorand TypeScript, if you choose to extend `BaseContract` directly, then the only routing provided will be to forward clear state transactions to the clear state program and all other transactions to the approval program.

If you choose to extend `Contract`, however, there are a number of constructs used to determine which method will ultimately handle a given transaction. Clear state transactions are still handled by implementing a clear state program. A default implementation of this method is provided by the base class, which always returns `true`. For all other transactions, a combination of the application creating status, on completion action, and method selector will be used to determine which method handles a transaction.

### Handling on create

The `abimethod` and `baremethod` decorators accept an `onCreate` configuration value of `"require"`, `"allow"`, or `"disallow"`. A method with `onCreate: "require"` will only be callable when the application is being created (i.e., `apid` === 0). `onCreate: "disallow"` will only be callable when the application is NOT being created (i.e., `apid` !== 0). `onCreate: "allow"` means the method CAN be called when the application is being created, but it is not _required_. The default value for this is `"disallow"`.

### Handling on completion actions

The `abimethod` and `baremethod` decorators accept an `allowActions` configuration value, which can be one or more on completion actions. A method will be callable if the current transaction's on completion action matches one of the listed actions. If the method selector matches a particular method and that method does not list that on completion action, the transaction will be rejected. The default value for this is `NoOp`.
