---
sidebar_position: 7
---
# Persistent Data Types

:::note
You **do not** need to initialize PineappleLib with `PineappleLib.initialize(Plugin)` before you can use this API
:::

PineappleLib shades [MorePeristentDataTypes](https://github.com/mfnalex/MorePersistentDataTypes) and wraps it in a [PineappleDataType](https://maven.miles.sh/javadoc/libraries/sh/miles/Pineapple/1.0.0-SNAPSHOT/raw/sh/miles/pineapple/pdc/PineappleDataType.html) interface to have 1 main place for all DataTypes. This also allows for us to add custom data types later in development without large changes.
