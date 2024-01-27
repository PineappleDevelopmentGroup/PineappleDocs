---
sidebar_position: 1
title: Getting Started
---
# Getting Started With PineappleChat

Welcome to PineappleChat, this wiki will explain how to add it and all of its features for you to add to your spigot plugins  

## Chosing Your Module

Before you chose your module you should think about what you need. PineappleChat provides multiple modules to cater for the needs of your platform.
If you don't see something compatible with your platform feel free to make a issue or pull request your platform on our
[PineappleChat github repository](https://github.com/PineappleDevelopmentGroup/PineappleChat).

### Currently Supported Modules

- Bungee: (The BungeeComponent Family), used mainly on spigot, and bungeecord. **(Reccomended)**
- Minecraft Legacy: Can be used by any minecraft platform. **(Not Reccomended)**

## Adding the repo

For any of these platforms to work first you need to add the repository

```xml tab={"label":"Maven"}
<repositories>
    <repository>
      <name>Miles Repository</name>
      <url>https://maven.miles.sh/libraries</url>
    </repository>
</repositories>
```

```groovy tab={"label":"Gradle (Groovy)"}
repositories {
    maven {
        name = "Miles Repository"
        url = "https://maven.miles.sh/libraries"
    }
}
```

```kotlin tab={"label":"Gradle (Kotlin)"}
repositories {
    maven {
        name = "Miles Repository"
        url = uri("https://maven.miles.sh/libraries")
    }
}
```
