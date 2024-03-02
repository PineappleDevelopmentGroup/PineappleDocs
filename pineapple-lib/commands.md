---
sidebar_position: 3
---

# Commands

:::note
You need to initialize PineappleLib with `PineappleLib.initialize(Plugin)` before you can use this API
:::

## The Command Registry

The first important differentiation between Bukkit's command API and Pineapple's is registration. While the commands themselves have a similar layout and structure you can't use Bukkit's normal JavaPlugin#getCommand to work with Pineapple Command's.

Pineapple solves the often annoying and forgetful task of command registration not through a plugin's `plugin.yml` file rather through code. An easier and less forgettable way to ensure your commands work when you go to test them in game.

The CommandRegistry class can be either retrieved from PineappleLib like so `CommandRegistry commandRegistry =  PineappleLib.getCommandRegistry();` or alternatively you can make the class yourself. `CommandRegistry commandRegistry = new CommandRegistry();`. It is important to note that not using PineappleLib's built in CommandRegistry has no benefits unless you plan to not initialize the PineappleLib class.

## Your First Command

Following the familiar setup of Bukkit's Command API you might find this setup rather familiar. I will get started on a basic command. Let's call it the echo command. All it does is echo what you're saying to yourself when you write `/echo <message>` in chat.

### The CommandLabel

Pineapple track's the details of a command through the [CommandLabel](https://maven.miles.sh/javadoc/libraries/sh/miles/Pineapple/1.0.0-SNAPSHOT/raw/sh/miles/pineapple/command/CommandLabel.html) class. You can see the JavaDocs for more information on what information that class can contain

### The CommandSettings?

PineappleChat unlike Bukkit is able to provide default messages and logic for common cases. You can provide these settings to any command and Pineapple also provides some default settings for you already so you don't need to fill them out if you'd prefer to not use them. While not fully fleshed out currently these settings could see more use later so keep up to date in later releases of Pineapple to see if anything has changed. Currently the only setting of importance is the CommandSetting.Settings#sendPermissionMessage() you can set this by using the CommandSettings class.

### The Implementation

First we need to make our command class. Once we make it we will extend Pineapple's Command Class

```java
public class EchoCommand extends Command {
    
    public EchoCommand() {
        super(new CommandLabel("echo", "echo.command"));
    }

    @Override
    public boolean execute(@NotNull CommandSender sender, @NotNull String[] args) {
        if (!sender.hasPermission(getCommandLabel().getPermission())) {
            getSettings().sendPermissionMessage(sender);
            return false;
        }

        sender.spigot().sendMessage(PineappleChat.parse(String.join(" ", args)));
    }

}
```

### Basic Sub Commands

Subcommands are very easy to implement in Pineapple and they are implemented the exact same way as normal commands! Its easy and memorable. 
I will setup a basic test command that just says hello or hi based on which subcommand you execute.

```java
public class GreetingCommand extends Command {

    public GreetingCommand() {
        super(new CommandLabel("greeting", "greeting.command"));
        super.noArgExecutor = (sender, args) -> sender.sendMessage("please provide arguments");
        registerSubCommand(new FirstGreetingSubCommand());
        registerSubCommand(new SecondGreetingSubCommand());
    }
    
}
```

```java
public class FirstGreetingSubCommand extends Command {

    public FirstGreetingSubCommand() {
        super(new CommandLabel("first", "greeting.command"))
    }

    @Override
    public boolean executor(@NotNull CommandSender sender, @NotNull String[] args) {
        sender.sendMessage("hi");
    }
    
}
```

```java
public class SecondGreetingSubCommand extends Command {

    public SecondGreetingSubCommand() {
        super(new CommandLabel("second", "greeting.command"))
    }

    @Override
    public boolean executor(@NotNull CommandSender sender, @NotNull String[] args) {
        sender.sendMessage("hello");
    }
    
}
```

## Closing

Hopefully this taught you how easy it is to create commands and subcommands with PineappleLib. You can continue reading to learn more about PineappleLib and what it offers!
