---
title: 'ClassMethodDecorator'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [arc4](/readme) / [\<internal\>](/reference/readme) / ClassMethodDecoratorContext

# Interface: ClassMethodDecoratorContext\<This, Value\>

Defined in: node_modules/typescript/lib/lib.decorators.d.ts:81

Context provided to a class method decorator.

## Type Parameters

• **This** = `unknown`

The type on which the class element will be defined. For a static class element, this will be
the type of the constructor. For a non-static class element, this will be the type of the instance.

• **Value** _extends_ (`this`, ...`args`) => `any` = (`this`, ...`args`) => `any`

The type of the decorated class method.

## Properties

### access

> `readonly` **access**: `object`

Defined in: node_modules/typescript/lib/lib.decorators.d.ts:98

An object that can be used to access the current value of the class element at runtime.

#### get()

Gets the current value of the method from the provided object.

##### Parameters

###### object

`This`

##### Returns

`Value`

##### Example

```ts
let fn = context.access.get(instance);
```

#### has()

Determines whether an object has a property with the same name as the decorated element.

##### Parameters

###### object

`This`

##### Returns

`boolean`

---

### kind

> `readonly` **kind**: `"method"`

Defined in: node_modules/typescript/lib/lib.decorators.d.ts:86

The kind of class element that was decorated.

---

### metadata

> `readonly` **metadata**: [`DecoratorMetadataObject`](/index/-internal-/type-aliases/decoratormetadataobject)

Defined in: node_modules/typescript/lib/lib.decorators.d.ts:138

---

### name

> `readonly` **name**: `string` \| `symbol`

Defined in: node_modules/typescript/lib/lib.decorators.d.ts:89

The name of the decorated class element.

---

### private

> `readonly` **private**: `boolean`

Defined in: node_modules/typescript/lib/lib.decorators.d.ts:95

A value indicating whether the class element has a private name.

---

### static

> `readonly` **static**: `boolean`

Defined in: node_modules/typescript/lib/lib.decorators.d.ts:92

A value indicating whether the class element is a static (`true`) or instance (`false`) element.

## Methods

### addInitializer()

> **addInitializer**(`initializer`): `void`

Defined in: node_modules/typescript/lib/lib.decorators.d.ts:136

Adds a callback to be invoked either after static methods are defined but before
static initializers are run (when decorating a `static` element), or before instance
initializers are run (when decorating a non-`static` element).

#### Parameters

##### initializer

(`this`) => `void`

#### Returns

`void`

#### Example

```ts
const bound: ClassMethodDecoratorFunction = (value, context) {
  if (context.private) throw new TypeError("Not supported on private methods.");
  context.addInitializer(function () {
    this[context.name] = this[context.name].bind(this);
  });
}

class C {
  message = "Hello";

  @bound
  m() {
    console.log(this.message);
  }
}
```
