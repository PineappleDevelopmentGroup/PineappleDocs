---
sidebar_position: 5
---

# Item Builder

PineappleLib includes an item builder to make creating items much easier, this includes inline items

# Creating a builder

Our item builder allows for multiple ways to create an item, This includes static of methods, of(Material) and of(Material, int). \
We also allow for you to create an ItemBuilder of an already existing stack, this is access with the static modifyStack(ItemStack) & modifyStackClone(Stack) which will clone the stack then modify. \
Example:

```java
ItemStack stack = ItemBuilder.of(Material.BARRIER).build();

ItemStack stack = ItemBuilder.of(Material.BARRIER, 32).build();

ItemStack toModify = ...;
ItemBuilder.modifyStack(toModify).name("modified").build();

ItemStack toModify = ...;
ItemStack modified = ItemBuilder.modifyStackClone(toModify).name("modified").build();
```

# Builder Methods

We provide the common modify methods directly on ItemBuilder and you can see them [here](https://maven.miles.sh/javadoc/libraries/sh/miles/Pineapple/1.0.0-SNAPSHOT/raw/sh/miles/pineapple/item/ItemBuilder.html), for everything else you can use the modify(Class, Consumer) method. \
Example:

```java
ItemStack stack = ItemBuilder.of(Material.SHULKER_BOX).name("My shulker").modify(BlockStateMeta.class, blockStateMeta -> {
    ShulkerBox shulker = (ShulkerBox) blockStateMeta.getBlockState();
    shulker.getInventory().add(new ItemStack(Material.BARRIER));
    meta.setBlockState(shulker);
}).build;
```
