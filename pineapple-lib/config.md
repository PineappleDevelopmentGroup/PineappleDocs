---
sidebar_position: 3
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

#### One Comment

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

#### Multiple Comments

```java title: "One comment"
@Comment("foobar, foobar")
@Comment("barfoo, barfoo")
@ConfigEntry("foo")
public String bar = "foobar";
```

Will end up as the following in config

```yml
#foobar, foobar
#barfoo, barfoo
foo: "foobar"
```

### @PostLoad

The PostLoad annotation allows for you to run a method once a config has been loaded, you could use this for modifying the value once available or having an item stack with a configurable material

## Instanced Config

Pineapple allows for multiple types of config setups. To create an instance based config you will need to use [#createReloadable(File, T)](https://maven.miles.sh/javadoc/libraries/sh/miles/Pineapple/1.0.0-SNAPSHOT/raw/sh/miles/pineapple/config/ConfigurationManager.html#createReloadable(java.io.File,T))

```java title="PluginSettings.java"
public class PluginSettings {

    @ConfigEntry("foo")
    public String bar = "foobar";

}
```

```java title="PluginMain.java"
private PluginSettings settings = new PluginSettings();
private ConfigReloadable<PluginSettings> pluginConfig;

private void setupConfig() {
    pluginConfig = PineappleLib.getConfigurationManager().createReloadable(new File(this.getDataFolder(), "config.yml"), this.settings);
    pluginConfig.saveDefaults().load();
}

public void reload() {
  pluginConfig.load();
}

public PluginSettings getSettings() {
  return this.settings;
}
```

Accessing the values:

```java
public void sendValue(Player player) {
  player.sendMessage(PluginMain#getSettings().bar);
}
```

## Static Config

To create a static based config you will need to use [#createStaticReloadable(File, Class\<T\>)](https://maven.miles.sh/javadoc/libraries/sh/miles/Pineapple/1.0.0-SNAPSHOT/raw/sh/miles/pineapple/config/ConfigurationManager.html#createStaticReloadable(java.io.File,java.lang.Class))  

```java title="PluginSettings.java"
public class PluginSettings {
  
  @ConfigEntry("foo")
  public static String BAR = "foobar"

}
```

```java title="PluginMain.java"
private ConfigReloadable<PluginSettings> pluginConfig;

private void setupConfig() {
    pluginConfig = PineappleLib.getConfigurationManager().createStaticReloadable(new File(this.getDataFolder(), "config.yml"), PluginSettings.class);
    pluginConfig.saveDefaults().load();
}

public void reload() {
  pluginConfig.load();
}
```

Accessing the values:

```java
public void sendValue(Player player) {
  player.sendMessage(PluginSettings.BAR);
}
```

## Custom Adapater

PineappleLib allows for you create a custom adapters for your data classes, we include a TypeAdapter which could serialize to anything or a StringAdapater which would serialize to a String

### String Adapter

The PlayerData class to serialize

```java title="PlayerData.java"
public class PlayerData {

  private final UUID uuid;
  private int kills = 0;

  public PlayerData(UUID uuid, int kills) {
    this.uuid = uuid;
    this.kills = kills;
  }

  @Override
  public String toString() {
    return uuid.toString() + ";" + kills;
  }
}
```

The StringAdapter

```java title="PlayerDataAdapter.java"
public class PlayerDataAdapter implements GenericStringAdapter<PlayerData> {

  @Override
  public Class<PlayerData> getRuntimeType() {
    return PlayerData.class;
  }

  @Override
  public String toString(PlayerData data) {
    return data.toString();
  }

  @Override
  public PlayerData fromString(String value) {
    String[] split = value.split(";");
    return new PlayerData(split[0], Integer.parseInt(split[1]));
  }
}
```

How it would look like used in a config:

```java title="PluginSettings.java"
public class PluginSettings {

  @ConfigEntry("owner-data")
  public static PlayerData OWNER_DATA = new PlayerData(UUID.randomUUID(), 20);

}
```

How to register the adapter:

```java
private void registerAdapter() {
  PineappleLib.getConfigurationManager().registerTypeAdapter(PlayerData.class, new PlayerDataAdapter());
}
```

### Complex Adapter

The PlayerData class to serialize

```java title="PlayerData.java"
public class PlayerData {

  private final UUID uuid;
  private int kills = 0;

  public PlayerData(UUID uuid, int kills) {
    this.uuid = uuid;
    this.kills = kills;
  }

  public UUID getUUID() {
    return this.uuid;
  }

  public int getKills() {
    return this.kills;
  }
}
```

The StringAdapter

```java title="PlayerDataAdapter.java"
public class PlayerDataAdapter implements TypeAdapter<Map<String, Object>, PlayerData> {

  @Override
  public Class<Map<String, Object>> getSavedType() {
      return (Class<Map<String, Object>>) (Object) Map.class;
  }
   
  @Override
  public Class<WeightedRandom<R>> getRuntimeType() {
      return (Class<WeightedRandom<R>>) (Object) WeightedRandom.class;
  }

  @Override
  public PlayerData read(Map<String, Object> value) {
    return new PlayerData(UUID.fromString(value.get("uuid").toString()), (Integer) value.get("kills"));
  }

  @Override
  public Map<String, Object> write(PlayerData value, Map<String, Object> existing, boolean replace) {
    if (existing == null) {
      existing = new HashMap<>();
    }

    if (!existing.containsKey("uuid") || replace) {
      existing.put("uuid", value.getUUID().toString());
    }

    if (!existing.containsKey("kills") || replace) {
      existing.put("kills", value.getKills());
    }
      
    return existing;
  }
}
```

How it would look like used in a config:

```java title="PluginSettings.java"
public class PluginSettings {

  @ConfigEntry("owner-data")
  public static PlayerData OWNER_DATA = new PlayerData(UUID.randomUUID(), 20);

}
```

How to register the adapter:

```java
private void registerAdapter() {
  PineappleLib.getConfigurationManager().registerTypeAdapter(PlayerData.class, new PlayerDataAdapter());
}
```
