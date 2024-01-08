---
sidebar_position: 2
---

# Chat

:::note
You do not need to initialize Pineapple use Pineapple Chat and any code involving Pineapple Chat can be run prior to initialization
:::

The Pineapple Chat syntax is heavily inspired by [MiniMessage](https://github.com/KyoriPowered/adventure-text-minimessage). It however, is important to remember this is strictly **inspiration** and there are deviations between MiniMessage and PineappleChat.

## Language Syntax

All language features in Pineapple Chat are denoted via an opening `<` and closed using `>`. All `<` that are not meant to be part of a PineappleChat tag **must** be escaped with the `\` character.
Some examples are below

### Escaping

All key symbols that denote opening tags within Pineapple Chat must be

#### Proper Escape

```md
This is my \< escaped string!!!
```

In the above example the open carot is escaped so no errors will occur on parsing

#### Inproper Escaping

```md
This is my < esacped string!!!
```

In this case an error will occur because no escape symbol was used and PineappleChat will think that the tag simply does not end

### Start and End Tags

All of the "tags" are divied up to start and end tags. End Tags give you a definite end to where you want your style to end. You aren't required to use them, but they can be helpful if you want to be explicit about your styling. However, this also means their are multiple ways to do one thing that may seem similar but actually yield different results.

In our first example we will use explicit representation and close our red tag.

```md
<red><bold>Hello</red> <blue>Traveler
```

The in game result yields.

![Image of a the word "Hello" being red and bold while the word "Traveler" is blue and unbolded](img/chat/explicit_red_tag_close.png)

Results change a without the end tag.

```md
<red><bold>Hello <blue>Traveler
```

![Image of the word "Hello" being red and "Traveler" is blue, both words are bolded](img/chat/unexplicit_red_tag_no_close.png)

Ending a tag closes the style for all tags that are inside of the tags being closed.

:::info
It is important to be mindful of closing tags. Later on you will learn about many different tag types, but the gist is the close tag is always the same as the first part as the close tag. I will give some examples below

```md
<red>Hi</red> Bro
<color:red>Hi</color> Bro
<gradient:#000111:#111000>now this is gradient</gradient>
<click:run_command:/help>Click Me For a Surprise</click>
```

:::

### Colored Text

If you are using Pineapple Chat you probably want to color some text so let's cut to the chase. Pineapple Chat can currently color chat in a few ways. The first being using your standard named color tag. You are probably familiar with these colors. You can find a list of these names on the official minecraft wiki [here](https://minecraft.wiki/w/Formatting_codes). Pineapple chat utilizes the names of these colors.

#### Standard Color Tags

Let's make some fancy text shall we. I will get started by displaying the use of a nice mix of colors and give a picture of the resulting string within the game.

```md
<gold>Hello <blue>strange</blue> Traveler, it seems we have <dark_red>met</dark_red> yet<black>.</black> Prepare for a <red>"good"</red> time.
```

![A Picture of the translated text above](img/chat/named_color_good_mix.png)

#### Hex Color Tags

Minecraft colors are lame now adays let us get some hex codes involved. I mean what could be better than using hex codes!

```md
<color:#E0E0E0>I <color:#CE0E0E>am <color:#D0D0D0>writing <color:#CD0D0D>fancy <color:#C0C0C0>text!
```

![A Picture of the translated text above](img/chat/hex_color_good_mix.png)

Now that is much more fancy isn't it!

#### Gradient Color Tag

Don't you hate having to write different colors. Personally I prefer to make my computer do it for me. The gradient tag is great for this. You can get some cool looking text just by putting in 2 random hex colors. Let's give it a look.

```md
<gradient:#FFF000:#000FFF>Now I got some fancy text and guess what! I didn't even lift a finger. Okay that's a lie I did, but It was to type the tag!
```

![A Picture of the translated text above](img/chat/gradient_color_showcase.png)

### Color Overview

#### Normal Color Tags

There are a few types of color tags. Named Color's which can be found at [The Minecraft Wiki](https://minecraft.wiki/w/Formatting_codes).
They are created like so `<_colorname_>`. where color name is replaced with the name of the color. you can also create color tags by using `<color:_colorname_>` or `<color:_hexvalue_>`. All color tags prefixed can be closed using the `</color>` tag. If you are trying to close a named color tag you should close using `</_colorname_>` where \_colorname\_ is replaced with the color you want to close.

#### Gradient Tag

The Gradient tag can be opened using `<gradient:_hexvalue1_:_hexvalue2_>` and likewise can be closed with the `</gradient>` tag.

#### Valid Color Examples

```md
<red>This is a named color tag</red>
<color:red>This is a color tag with a named color</color>
<color:#FFF000>This is a color tag using hexadecimal</color>
<gradient:#FFF000>This is a gradient tag! Let's see that color change!</gradient>
```

:::info
Tags are not required to be closed,

```md
<red>This is a named color tag
<color:red>This is a color tag with a named color
```

the above is also equally valid syntax.

:::

### Text Formatting

Text formatting works much as the same as colors, however it is much simpler. You can find a list of these formats can be found on the [The Minecraft Wiki](https://minecraft.wiki/w/Formatting_codes) below the list of valid colors.

Text Formatting works similarly to Named Color Tags. They can be inverted easily using the `!` argument. For example here is a **non**-inverted tag `<italic>`, this tag would make the target text *italic*. Here is an example of an **inverted** tag `<italic:!>` this will make the target text **not** *italic*.

Below are a list of valid examples

```md
<bold>This text is bold
<italic:!>This text is for sure not italic
<obfuscated>This text is uninteligable garble
```

:::danger
**Warning** if you are used to MiniMessage the inversion syntax deviates from how MiniMessage expresses their syntax
you **CAN NOT** invert tags like this `<!italic>` tags **must** be inverted as shown above, and here, like `<italic:!>`
:::

### Text Events

Events allow text to be reative. Like hovering over to show more text, running commands and more!

#### Hover Events

Hover events can be created like so `<hover:_action_:_arguments_>`, \_action\_ should be filled with one of the hover events shown on [The Minecraft Wiki](https://minecraft.wiki/w/Raw_JSON_text_format). You can also look at this short list! `show_text, show_entity, show_item`. Each argument that these formats take should be separated by a semi-colon. For example with show_item. the tag should look like `<hover:show_item:'minecraft:dirt':5>`

#### Click Events

Click events can be created like so `click:_action_:_argument_>`, \_action\_ should be filled iwth one of the click events shown on [The Minecraft Wiki](https://minecraft.wiki/w/Raw_JSON_text_format). You can also look at this short list! `open_url, open_file (not avaliable on server), run_command, suggest_command. change_page, copy_to_clipboard`. Each click event only has one argument so the \
\_argument\_ should be replcaed by the desired text. Here is an example with copy_to_clipboard. `<click:copy_to_clipboard:'https://google.com'>`.

:::info
Every click event argument should be inside of single quotes \`content!\`
:::

### Replacements

There comes a time in any developers plugin where replacements are a must! Luckily PineappleChat has you covered there. Replacements are actually very easy. I will include examples below. All replacement tags start with the `$` symbol inside of the tag. This tells pineapple that they are used as a replacement. This also prevents conflicts from occurring for example `<$color>` could be a valid replacement as it won't conflict with the `<color>` tag.

#### Examples

we want to insert a name variable into our string
`Welcome to ServerCraft <$name>`

we want to bunch of stuff
`<$welcome_prefix> <$server_name> <$player_name>, we hope you have a fun time playing!`

## The Code

Now that the language syntax has been divulged in detail I will explain how to use PineappleChat's parser! PineappleChat provides 2 classes of interests in the end api. The first being [PineappleChat](https://maven.miles.sh/javadoc/libraries/sh/miles/Pineapple/1.0.0-SNAPSHOT/raw/sh/miles/pineapple/chat/PineappleChat.html) and the second being [PineappleComponent](https://maven.miles.sh/javadoc/libraries/sh/miles/Pineapple/1.0.0-SNAPSHOT/raw/sh/miles/pineapple/chat/PineappleComponent.html). First let's go over the basic parser.

### Basic Parser Methods

You can parse a string that has no replacements with [PineappleChat#parse(String)](https://maven.miles.sh/javadoc/libraries/sh/miles/Pineapple/1.0.0-SNAPSHOT/raw/sh/miles/pineapple/chat/PineappleChat.html#parse(java.lang.String)). If you have replacements you can supply a map with key, value pairs to supply your replacements. This method is useful for this case [PineappleChat#parse(String, Map)](https://maven.miles.sh/javadoc/libraries/sh/miles/Pineapple/1.0.0-SNAPSHOT/raw/sh/miles/pineapple/chat/PineappleChat.html#parse(java.lang.String,java.util.Map)).

:::warning
If you supply a string that has replcaements and do not provide proper replacements an error will occur. This is strictly enforced by the parser
:::

Below is a basic code example for the basic parser method.

```java
BaseComponent component = PineappleChat.parse("<red>This text is red!");
```

```java
Player player; // implied to have
int number = 55;
BaseComponent componet = PineappleChat.parse("<green><$player_name> your number is <gold><$number>", Map.of("player_name", player.getName(), "number", number));
player.spigot().sendMessage(component)
```

:::info
PineappleChat uses a modified version of the BungeeCord parser which returns a single BaseComponent instead of an array. So the result may seem weird if you are well aquainted with BungeeChat.
:::

### PineappleComponent

PineappleComponent is a basic wrapper around a component that is able to be read and written to configs. It utilizes its ability to store the source string to achieve this without constant serialization and deserialization. PineappleComponent is no less efficent than using the above parser methods because it caches every result it can so there is no need to parse it more than once under most scenarios! Let's see some code examples shall we.

```java
PineappleComponent pineappleComponent = PineappleChat.component("<red>This text is red!")
BaseComponent component = pineappleComponent.component()
```

```java
Player player; // implied to have
int number = 55;
PineappleComponent pineappleComponent = PineappleChat.component("<green><$player_name> your number is <gold><$number>");
BaseComponent component = pineappleComponent.component(Map.of("player_name", player.getName(), "number", number));
player.spigot().sendMessage(player);
```

In these scenarios PineappleComponent may not seem very useful, but it is important to remember PineappleComponent is best leveraged when used in conjunction with configuration files. You do not need to use Pineapple's configuration system to use them to their full potential, but you can read more about Pineaple's Configuration system next!
