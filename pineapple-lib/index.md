---
sidebar_position: 1
title: Setup
---
# Adding pineapple to your project

Welcome to PineappleLib, this wiki will explain how to add it and all of its features for you to add to your spigot plugins  

## Adding the repo

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

## Adding the dependency

```xml tab={"label":"Maven"}
<dependencies>
    <dependency>
      <groupId>sh.miles</groupId>
      <artifactId>Pineapple</artifactId>
      <version>1.0.0-SNAPSHOT</version>
      <scope>compile</scope>
    </dependency>
</dependencies>
```

```groovy tab={"label":"Gradle (Groovy)"}
dependencies {
    implementation("sh.miles:Pineapple:1.0.0-SNAPSHOT")
}
```

```kotlin tab={"label":"Gradle (Kotlin)"}
dependencies {
    implementation("sh.miles:Pineapple:1.0.0-SNAPSHOT")
}
```

## Shading PineappleLib

```xml tab={"label":"Maven"}
<build>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-shade-plugin</artifactId>
        <version>3.5.1</version>
        <executions>
          <execution>
            <phase>package</phase>
            <goals>
              <goal>shade</goal>
            </goals>
            <configuration>
              <relocations>
                <relocation>
                  <pattern>sh.miles.pineapple</pattern>
                  <shadedPattern>CHANGE.ME.libs.pineapple</shadedPattern>
                </relocation>
              </relocations>
            </configuration>
          </execution>
        </executions>
      </plugin>
    </plugins>
  </build>
```

```groovy tab={"label":"Gradle (Groovy)"}
plugins {
  id "com.github.johnrengelman.shadow" version "8.1.1"
}

shadowJar {
    relocate('sh.miles.pineapple', 'CHANGE.ME.libs.pineapple')
}
```

```kotlin tab={"label":"Gradle (Kotlin)"}
plugins {
  id("com.github.johnrengelman.shadow") version "8.1.1"
}

shadowJar {
    relocate('sh.miles.pineapple', 'CHANGE.ME.libs.pineapple')
}
```

## Initalizing  

PineappleLib requires a plugin instance to function properly, to give it to Pineapple please add the following code to `onEnable()` or `onLoad()`

```java
PineappleLib.initalize(this)
```
