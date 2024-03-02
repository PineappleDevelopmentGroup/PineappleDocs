---
sidebar_position: 4
title: Minecraft Legacy Platform
---

# Minecraft Legacy Platform Adapter

:::danger
Legacy platform while supported does not support some amazing features that using component's does. You lose out on many things [Unsupported Tags](#unsupported-tags)
:::

The minecraft legacy platform adapter works on all minecraft platforms! However as you'll notice it severely lacks in features compared to the others.

## Adding Legacy Platform Adapter Dependency

```xml tab={"label":"Maven"}
<dependencies>
    <dependency>
      <groupId>sh.miles</groupId>
      <artifactId>pineapplechat-minecraft-legacy</artifactId>
      <version>1.0.0-SNAPSHOT</version>
      <scope>compile</scope>
    </dependency>
</dependencies>
```

```groovy tab={"label":"Gradle (Groovy)"}
dependencies {
    implementation("sh.miles:pineapplechat-minecraft-legacy:1.0.0-SNAPSHOT")
}
```

```kotlin tab={"label":"Gradle (Kotlin)"}
dependencies {
    implementation("sh.miles:pineapplechat-minecraft-legacy:1.0.0-SNAPSHOT")
}
```

## Use

To get started with the legacy adapter please inspect which version of the game you are on. For versions 1.16.2 and greater hexadecimal color is supported by Mojang within text components meaning legacy format is able to properly parse into custom hexadecimal colors with the legacy format.

To use PineappleChat you must initialize the parser context

```java
// a value of false would not allow the parsing of hexadecimal values
final LegacyPineappleParserContext parser = new LegacyPineappleParserContext(true);
```

## Unsupported Tags

Because of the limitations of legacy chat. Minecraft Legacy adapter does not support the following useful core tags.

- Keybind Tag
- Language Tag
- Score Tag
- Selector Tag

On top of these losses legacy chat also does not support the use of hover or click events!
  