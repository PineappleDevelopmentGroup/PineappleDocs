---
sidebar_position: 2
---

# Config

:::note
Make sure you have initalized pineapple before trying to create configs
:::

## Annotations

All the annotations PineappleLib provides for your configs

### @ConfigEntry

This annoation is the only annotation required for your configs to work, it registeres a variable as a config entry and allows you to set the path of it inside of your YAML file.
Example:

#### Parent Section

```java
@ConfigEntry("foo")
public String bar = "foobar";
```

Will end up as the following in config

```yml
foo: "foobar"
```

#### Sub Section

```java
@ConfigEntry("foo.bar")
public static String bar = "foobar";
```

Will end up as the following in config

```yml
foo:
  bar: "foobar"
```

### @Comment

This annotation allows you to create a comment on an Entry, it also allows for multiple per entry
Example:

```java title: "One comment"
@Comment("foobar, foobar")
@ConfigEntry("foo")
public String bar = "foobar";
```

Will end up as the following in config

```yml
#foobar, foobar
foo: "foobar"
```

### @ConfigMappable

### @PostLoad

## Instanced Config

Pineapple allows for multiple types of config setups. To create an instance based config you will need to use [#createReloadable(File, T)](https://maven.miles.sh/javadoc/libraries/sh/miles/Pineapple/1.0.0-SNAPSHOT/raw/sh/miles/pineapple/config/ConfigurationManager.html#createReloadable(java.io.File,T))

```java title="PluginSettings.class"
public class PluginSettings {

    @ConfigEntry("foo")
    public String bar = "foobar";

}
```

```java
private void setupConfig() {
    ReloadableObject<>
}
```

## Static Config

## Custom Adapater
