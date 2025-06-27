---
title: 'TemplateStringsArray'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [index](/readme) / [\<internal\>](/reference/readme) / TemplateStringsArray

# Interface: TemplateStringsArray

Defined in: node_modules/typescript/lib/lib.es5.d.ts:621

## Extends

- `ReadonlyArray`\<`string`\>

## Indexable

\[`n`: `number`\]: `string`

## Properties

### \[unscopables\]

> `readonly` **\[unscopables\]**: `object`

Defined in: node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:107

Is an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

#### Index Signature

\[`key`: `number`\]: `undefined` \| `boolean`

#### \[iterator\]?

> `optional` **\[iterator\]**: `boolean`

#### \[unscopables\]?

> `readonly` `optional` **\[unscopables\]**: `boolean`

Is an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

#### at?

> `optional` **at**: `boolean`

#### concat?

> `optional` **concat**: `boolean`

#### entries?

> `optional` **entries**: `boolean`

#### every?

> `optional` **every**: `boolean`

#### filter?

> `optional` **filter**: `boolean`

#### find?

> `optional` **find**: `boolean`

#### findIndex?

> `optional` **findIndex**: `boolean`

#### findLast?

> `optional` **findLast**: `boolean`

#### findLastIndex?

> `optional` **findLastIndex**: `boolean`

#### flat?

> `optional` **flat**: `boolean`

#### flatMap?

> `optional` **flatMap**: `boolean`

#### forEach?

> `optional` **forEach**: `boolean`

#### includes?

> `optional` **includes**: `boolean`

#### indexOf?

> `optional` **indexOf**: `boolean`

#### join?

> `optional` **join**: `boolean`

#### keys?

> `optional` **keys**: `boolean`

#### lastIndexOf?

> `optional` **lastIndexOf**: `boolean`

#### length?

> `readonly` `optional` **length**: `boolean`

Gets the length of the array. This is a number one higher than the highest element defined in an array.

#### map?

> `optional` **map**: `boolean`

#### reduce?

> `optional` **reduce**: `boolean`

#### reduceRight?

> `optional` **reduceRight**: `boolean`

#### slice?

> `optional` **slice**: `boolean`

#### some?

> `optional` **some**: `boolean`

#### toLocaleString?

> `optional` **toLocaleString**: `boolean`

#### toReversed?

> `optional` **toReversed**: `boolean`

#### toSorted?

> `optional` **toSorted**: `boolean`

#### toSpliced?

> `optional` **toSpliced**: `boolean`

#### toString?

> `optional` **toString**: `boolean`

#### values?

> `optional` **values**: `boolean`

#### with?

> `optional` **with**: `boolean`

#### Inherited from

`ReadonlyArray.[unscopables]`

---

### length

> `readonly` **length**: `number`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1192

Gets the length of the array. This is a number one higher than the highest element defined in an array.

#### Inherited from

`ReadonlyArray.length`

---

### raw

> `readonly` **raw**: readonly `string`[]

Defined in: node_modules/typescript/lib/lib.es5.d.ts:622

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`ArrayIterator`](/reference/algorand-typescript/arrayiterator)\<`string`\>

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:114

Iterator of values in the array.

#### Returns

[`ArrayIterator`](/reference/algorand-typescript/arrayiterator)\<`string`\>

#### Inherited from

`ReadonlyArray.[iterator]`

---

### at()

> **at**(`index`): `undefined` \| `string`

Defined in: node_modules/typescript/lib/lib.es2022.array.d.ts:32

Returns the item located at the specified index.

#### Parameters

##### index

`number`

The zero-based index of the desired code unit. A negative index will count back from the last item.

#### Returns

`undefined` \| `string`

#### Inherited from

`ReadonlyArray.at`

---

### concat()

#### Call Signature

> **concat**(...`items`): `string`[]

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1205

Combines two or more arrays.

##### Parameters

###### items

...[`ConcatArray`](/reference/algorand-typescript/concatarray)\<`string`\>[]

Additional items to add to the end of array1.

##### Returns

`string`[]

##### Inherited from

`ReadonlyArray.concat`

#### Call Signature

> **concat**(...`items`): `string`[]

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1210

Combines two or more arrays.

##### Parameters

###### items

...(`string` \| [`ConcatArray`](/reference/algorand-typescript/concatarray)\<`string`\>)[]

Additional items to add to the end of array1.

##### Returns

`string`[]

##### Inherited from

`ReadonlyArray.concat`

---

### entries()

> **entries**(): [`ArrayIterator`](/reference/algorand-typescript/arrayiterator)\<\[`number`, `string`\]\>

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:119

Returns an iterable of key, value pairs for every entry in the array

#### Returns

[`ArrayIterator`](/reference/algorand-typescript/arrayiterator)\<\[`number`, `string`\]\>

#### Inherited from

`ReadonlyArray.entries`

---

### every()

#### Call Signature

> **every**\<`S`\>(`predicate`, `thisArg`?): `this is readonly S[]`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1242

Determines whether all the members of an array satisfy the specified test.

##### Type Parameters

• **S** _extends_ `string`

##### Parameters

###### predicate

(`value`, `index`, `array`) => `value is S`

A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.

###### thisArg?

`any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

##### Returns

`this is readonly S[]`

##### Inherited from

`ReadonlyArray.every`

#### Call Signature

> **every**(`predicate`, `thisArg`?): `boolean`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1251

Determines whether all the members of an array satisfy the specified test.

##### Parameters

###### predicate

(`value`, `index`, `array`) => `unknown`

A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.

###### thisArg?

`any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

##### Returns

`boolean`

##### Inherited from

`ReadonlyArray.every`

---

### filter()

#### Call Signature

> **filter**\<`S`\>(`predicate`, `thisArg`?): `S`[]

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1278

Returns the elements of an array that meet the condition specified in a callback function.

##### Type Parameters

• **S** _extends_ `string`

##### Parameters

###### predicate

(`value`, `index`, `array`) => `value is S`

A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

###### thisArg?

`any`

An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.

##### Returns

`S`[]

##### Inherited from

`ReadonlyArray.filter`

#### Call Signature

> **filter**(`predicate`, `thisArg`?): `string`[]

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1284

Returns the elements of an array that meet the condition specified in a callback function.

##### Parameters

###### predicate

(`value`, `index`, `array`) => `unknown`

A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

###### thisArg?

`any`

An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.

##### Returns

`string`[]

##### Inherited from

`ReadonlyArray.filter`

---

### find()

#### Call Signature

> **find**\<`S`\>(`predicate`, `thisArg`?): `undefined` \| `S`

Defined in: node_modules/typescript/lib/lib.es2015.core.d.ts:352

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

##### Type Parameters

• **S** _extends_ `string`

##### Parameters

###### predicate

(`value`, `index`, `obj`) => `value is S`

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.

###### thisArg?

`any`

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

##### Returns

`undefined` \| `S`

##### Inherited from

`ReadonlyArray.find`

#### Call Signature

> **find**(`predicate`, `thisArg`?): `undefined` \| `string`

Defined in: node_modules/typescript/lib/lib.es2015.core.d.ts:353

##### Parameters

###### predicate

(`value`, `index`, `obj`) => `unknown`

###### thisArg?

`any`

##### Returns

`undefined` \| `string`

##### Inherited from

`ReadonlyArray.find`

---

### findIndex()

> **findIndex**(`predicate`, `thisArg`?): `number`

Defined in: node_modules/typescript/lib/lib.es2015.core.d.ts:364

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

#### Parameters

##### predicate

(`value`, `index`, `obj`) => `unknown`

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.

##### thisArg?

`any`

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

#### Returns

`number`

#### Inherited from

`ReadonlyArray.findIndex`

---

### findLast()

#### Call Signature

> **findLast**\<`S`\>(`predicate`, `thisArg`?): `undefined` \| `S`

Defined in: node_modules/typescript/lib/lib.es2023.array.d.ts:98

Returns the value of the last element in the array where predicate is true, and undefined
otherwise.

##### Type Parameters

• **S** _extends_ `string`

##### Parameters

###### predicate

(`value`, `index`, `array`) => `value is S`

findLast calls predicate once for each element of the array, in descending
order, until it finds one where predicate returns true. If such an element is found, findLast
immediately returns that element value. Otherwise, findLast returns undefined.

###### thisArg?

`any`

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

##### Returns

`undefined` \| `S`

##### Inherited from

`ReadonlyArray.findLast`

#### Call Signature

> **findLast**(`predicate`, `thisArg`?): `undefined` \| `string`

Defined in: node_modules/typescript/lib/lib.es2023.array.d.ts:102

##### Parameters

###### predicate

(`value`, `index`, `array`) => `unknown`

###### thisArg?

`any`

##### Returns

`undefined` \| `string`

##### Inherited from

`ReadonlyArray.findLast`

---

### findLastIndex()

> **findLastIndex**(`predicate`, `thisArg`?): `number`

Defined in: node_modules/typescript/lib/lib.es2023.array.d.ts:116

Returns the index of the last element in the array where predicate is true, and -1
otherwise.

#### Parameters

##### predicate

(`value`, `index`, `array`) => `unknown`

findLastIndex calls predicate once for each element of the array, in descending
order, until it finds one where predicate returns true. If such an element is found,
findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.

##### thisArg?

`any`

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

#### Returns

`number`

#### Inherited from

`ReadonlyArray.findLastIndex`

---

### flat()

> **flat**\<`A`, `D`\>(`this`, `depth`?): [`FlatArray`](/reference/type-aliases/flatarray)\<`A`, `D`\>[]

Defined in: node_modules/typescript/lib/lib.es2019.array.d.ts:47

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

#### Type Parameters

• **A**

• **D** _extends_ `number` = `1`

#### Parameters

##### this

`A`

##### depth?

`D`

The maximum recursion depth

#### Returns

[`FlatArray`](/reference/type-aliases/flatarray)\<`A`, `D`\>[]

#### Inherited from

`ReadonlyArray.flat`

---

### flatMap()

> **flatMap**\<`U`, `This`\>(`callback`, `thisArg`?): `U`[]

Defined in: node_modules/typescript/lib/lib.es2019.array.d.ts:36

Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.

#### Type Parameters

• **U**

• **This** = `undefined`

#### Parameters

##### callback

(`this`, `value`, `index`, `array`) => `U` \| readonly `U`[]

A function that accepts up to three arguments. The flatMap method calls the
callback function one time for each element in the array.

##### thisArg?

`This`

An object to which the this keyword can refer in the callback function. If
thisArg is omitted, undefined is used as the this value.

#### Returns

`U`[]

#### Inherited from

`ReadonlyArray.flatMap`

---

### forEach()

> **forEach**(`callbackfn`, `thisArg`?): `void`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1266

Performs the specified action for each element in an array.

#### Parameters

##### callbackfn

(`value`, `index`, `array`) => `void`

A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

##### thisArg?

`any`

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

#### Returns

`void`

#### Inherited from

`ReadonlyArray.forEach`

---

### includes()

> **includes**(`searchElement`, `fromIndex`?): `boolean`

Defined in: node_modules/typescript/lib/lib.es2016.array.include.d.ts:34

Determines whether an array includes a certain element, returning true or false as appropriate.

#### Parameters

##### searchElement

`string`

The element to search for.

##### fromIndex?

`number`

The position in this array at which to begin searching for searchElement.

#### Returns

`boolean`

#### Inherited from

`ReadonlyArray.includes`

---

### indexOf()

> **indexOf**(`searchElement`, `fromIndex`?): `number`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1227

Returns the index of the first occurrence of a value in an array.

#### Parameters

##### searchElement

`string`

The value to locate in the array.

##### fromIndex?

`number`

The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.

#### Returns

`number`

#### Inherited from

`ReadonlyArray.indexOf`

---

### join()

> **join**(`separator`?): `string`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1215

Adds all the elements of an array separated by the specified separator string.

#### Parameters

##### separator?

`string`

A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.

#### Returns

`string`

#### Inherited from

`ReadonlyArray.join`

---

### keys()

> **keys**(): [`ArrayIterator`](/reference/algorand-typescript/arrayiterator)\<`number`\>

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:124

Returns an iterable of keys in the array

#### Returns

[`ArrayIterator`](/reference/algorand-typescript/arrayiterator)\<`number`\>

#### Inherited from

`ReadonlyArray.keys`

---

### lastIndexOf()

> **lastIndexOf**(`searchElement`, `fromIndex`?): `number`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1233

Returns the index of the last occurrence of a specified value in an array.

#### Parameters

##### searchElement

`string`

The value to locate in the array.

##### fromIndex?

`number`

The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.

#### Returns

`number`

#### Inherited from

`ReadonlyArray.lastIndexOf`

---

### map()

> **map**\<`U`\>(`callbackfn`, `thisArg`?): `U`[]

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1272

Calls a defined callback function on each element of an array, and returns an array that contains the results.

#### Type Parameters

• **U**

#### Parameters

##### callbackfn

(`value`, `index`, `array`) => `U`

A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

##### thisArg?

`any`

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

#### Returns

`U`[]

#### Inherited from

`ReadonlyArray.map`

---

### reduce()

#### Call Signature

> **reduce**(`callbackfn`): `string`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1290

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `string`

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

##### Returns

`string`

##### Inherited from

`ReadonlyArray.reduce`

#### Call Signature

> **reduce**(`callbackfn`, `initialValue`): `string`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1291

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `string`

###### initialValue

`string`

##### Returns

`string`

##### Inherited from

`ReadonlyArray.reduce`

#### Call Signature

> **reduce**\<`U`\>(`callbackfn`, `initialValue`): `U`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1297

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Type Parameters

• **U**

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `U`

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

###### initialValue

`U`

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

##### Returns

`U`

##### Inherited from

`ReadonlyArray.reduce`

---

### reduceRight()

#### Call Signature

> **reduceRight**(`callbackfn`): `string`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1303

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `string`

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

##### Returns

`string`

##### Inherited from

`ReadonlyArray.reduceRight`

#### Call Signature

> **reduceRight**(`callbackfn`, `initialValue`): `string`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1304

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `string`

###### initialValue

`string`

##### Returns

`string`

##### Inherited from

`ReadonlyArray.reduceRight`

#### Call Signature

> **reduceRight**\<`U`\>(`callbackfn`, `initialValue`): `U`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1310

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Type Parameters

• **U**

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `U`

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

###### initialValue

`U`

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

##### Returns

`U`

##### Inherited from

`ReadonlyArray.reduceRight`

---

### slice()

> **slice**(`start`?, `end`?): `string`[]

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1221

Returns a section of an array.

#### Parameters

##### start?

`number`

The beginning of the specified portion of the array.

##### end?

`number`

The end of the specified portion of the array. This is exclusive of the element at the index 'end'.

#### Returns

`string`[]

#### Inherited from

`ReadonlyArray.slice`

---

### some()

> **some**(`predicate`, `thisArg`?): `boolean`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1260

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

##### predicate

(`value`, `index`, `array`) => `unknown`

A function that accepts up to three arguments. The some method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value true, or until the end of the array.

##### thisArg?

`any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

#### Returns

`boolean`

#### Inherited from

`ReadonlyArray.some`

---

### toLocaleString()

#### Call Signature

> **toLocaleString**(): `string`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1200

Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.

##### Returns

`string`

##### Inherited from

`ReadonlyArray.toLocaleString`

#### Call Signature

> **toLocaleString**(`locales`, `options`?): `string`

Defined in: node_modules/typescript/lib/lib.es2015.core.d.ts:366

##### Parameters

###### locales

`string` | `string`[]

###### options?

`NumberFormatOptions` & `DateTimeFormatOptions`

##### Returns

`string`

##### Inherited from

`ReadonlyArray.toLocaleString`

---

### toReversed()

> **toReversed**(): `string`[]

Defined in: node_modules/typescript/lib/lib.es2023.array.d.ts:124

Copies the array and returns the copied array with all of its elements reversed.

#### Returns

`string`[]

#### Inherited from

`ReadonlyArray.toReversed`

---

### toSorted()

> **toSorted**(`compareFn`?): `string`[]

Defined in: node_modules/typescript/lib/lib.es2023.array.d.ts:135

Copies and sorts the array.

#### Parameters

##### compareFn?

(`a`, `b`) => `number`

Function used to determine the order of the elements. It is expected to return
a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.

```ts
[11, 2, 22, 1].toSorted((a, b) => a - b); // [1, 2, 11, 22]
```

#### Returns

`string`[]

#### Inherited from

`ReadonlyArray.toSorted`

---

### toSpliced()

#### Call Signature

> **toSpliced**(`start`, `deleteCount`, ...`items`): `string`[]

Defined in: node_modules/typescript/lib/lib.es2023.array.d.ts:144

Copies an array and removes elements while, if necessary, inserting new elements in their place, returning the remaining elements.

##### Parameters

###### start

`number`

The zero-based location in the array from which to start removing elements.

###### deleteCount

`number`

The number of elements to remove.

###### items

...`string`[]

Elements to insert into the copied array in place of the deleted elements.

##### Returns

`string`[]

A copy of the original array with the remaining elements.

##### Inherited from

`ReadonlyArray.toSpliced`

#### Call Signature

> **toSpliced**(`start`, `deleteCount`?): `string`[]

Defined in: node_modules/typescript/lib/lib.es2023.array.d.ts:152

Copies an array and removes elements while returning the remaining elements.

##### Parameters

###### start

`number`

The zero-based location in the array from which to start removing elements.

###### deleteCount?

`number`

The number of elements to remove.

##### Returns

`string`[]

A copy of the original array with the remaining elements.

##### Inherited from

`ReadonlyArray.toSpliced`

---

### toString()

> **toString**(): `string`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1196

Returns a string representation of an array.

#### Returns

`string`

#### Inherited from

`ReadonlyArray.toString`

---

### values()

> **values**(): [`ArrayIterator`](/reference/algorand-typescript/arrayiterator)\<`string`\>

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:129

Returns an iterable of values in the array

#### Returns

[`ArrayIterator`](/reference/algorand-typescript/arrayiterator)\<`string`\>

#### Inherited from

`ReadonlyArray.values`

---

### with()

> **with**(`index`, `value`): `string`[]

Defined in: node_modules/typescript/lib/lib.es2023.array.d.ts:163

Copies an array, then overwrites the value at the provided index with the
given value. If the index is negative, then it replaces from the end
of the array

#### Parameters

##### index

`number`

The index of the value to overwrite. If the index is
negative, then it replaces from the end of the array.

##### value

`string`

The value to insert into the copied array.

#### Returns

`string`[]

A copy of the original array with the inserted value.

#### Inherited from

`ReadonlyArray.with`
