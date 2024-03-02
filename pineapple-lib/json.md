---
sidebar-position: 6
---

# Json Configuration

:::note
You **do not** need to initialize PineappleLib with `PineappleLib.initialize(Plugin)` before you can use this API
:::

YAML can be hastle for some things so pineapple supplies a basic JSON Configuration and serialization/deserialization API

## Json Adapter

I will start out by exampling how to make a basic Json Adapter. Adapter's can be created by implementing the JsonAdapter\<T> class.

```java
public final class UUIDAdapter implements JsonAdapter<UUID> {

    @Override
    public JsonElement serialize(final UUID src, final Type typeOfSrc, final JsonSerializationContext context) {
        return new JsonPrimitive(src.toString());
    }

    @Override
    public UUID deserialize(final JsonElement json, final Type typeOfT, final JsonDeserializationContext context) throws JsonParseException {
        return UUID.fromString(json.getAsString());
    }

    @Override
    public Class<UUID> getAdapterType() {
        return UUID.class;
    }
}
```

If you want to understand more in-depth about what each method does you can read up on the adapter methods on the [JsonAdapter](https://maven.miles.sh/javadoc/libraries/sh/miles/Pineapple/1.0.0-SNAPSHOT/raw/sh/miles/pineapple/json/JsonAdapter.html) java doc.

## Default Adapters

By Default pineapple provides a default set of adapters that can be used. You can add these to your own GsonBuilder's by simply using the method [JsonAdapters.registerAll(GsonBuilder builder)](https://maven.miles.sh/javadoc/libraries/sh/miles/Pineapple/1.0.0-SNAPSHOT/raw/sh/miles/pineapple/json/adapter/JsonAdapters.html). The list of all default adapters can also be found in the java doc.

## Json Helper

the json helper is a class that provides helpful methods that wraps gson. Don't worry though you can still access the Gson instance even if you use a JsonHelper. Below is an example of how to create a JsonHelper. The JsonHelper automatically registers all adapters before your Gson builder is run, because of this you don't have to worry about our adapters overriding your custom ones if you don't like them.

```java
final JsonHelper jsonHelper = new JsonHelper();
// let's say we want the Gson instance
final Gson gson = jsonHelper.getGson();
```

You can find the docs for JsonHelper on the Pineapple java docs.
