---
sidebar_position: 7
---

# UpdateChecker

PineappleLib provides an update checker to allow for you to notify users of an available update

## Usage

```java
private void initalizeUpdateChecker() {
    UpdateChecker checker = new UpdateChecker(this, 12345);
    SimpleSemVersion current = SimpleSemVersion.fromString(this.getDescription().getVersion());
    checker.getVersion(spigot -> {
        if (SimpleSemVersion.fromString(spigot).isNewerThan(current)) {
            getLogger().info("An update is available for ThisPlugin ");
        }
    });
}
```
