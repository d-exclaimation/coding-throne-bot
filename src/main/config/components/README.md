<!-- 
    author: rbrtbrnschn
    description: how to use and extend the config
-->
# Config Components 101

## What are components?

A component is simply a key-value pair.
These _key-value_ pairs can be added to the `Config` as top-level components.

### What is a top-level component and how do you create one?

Simple, a top-level component is the first **level** of nesting when it comes to indexing the config.
Say for example this is our current config:

```js
const config = {
    // config
    first: 42, // component
    second: {
        // config
        third: 43, // component
    },
}
```

In this case, "first" and "second" would be a top-level component.
The differece between the two is simple. "first" has no further nesting abilities, where as
"second" is another **Config**, which has, relative to itself, another top-level component - a key-value pair - inside of it.

## Creation

```ts
import Config from "../config"; // IMPORTANT: this is the file you want src/main/config/index.ts or src/main/config
import ConfigComponent from "path/to/config/component";

// Recreating the example above
// this would be in its own file
export default const firstComponent = new ConfigComponent().withName("first").withFunctionality(42);

// this would be in its own file
export default const thirdComponent = new ConfigComponent().withName("third").withFunctionality(43);

// this would be in its own file
const firstSubConfig = new Config().injectComponent(secondComponent);
export default const secondComponent = new ConfigComponent().withName("second").withFunctionality(firstSubConfig);
```

This way you can also use a Config as a ConfigComponent.

## IMPORTANT

It should be noted, only top-level modules will be injected into the config by default.
Creating components/files within a subfolder of ./components will thereby not be injected, unless explictely told to do so via a SubConfigs.
A SubConfig as mentioned in the example above, is a a ConfigComponent with the functionality of a Config.

## Structure

This should be especially useful with the current project structure:

-   src
    -   main
        -   config
            -   components
                -   nonConfigComponent.ts
                -   url.ts
                -   url
                    -   github.ts
                    -   npm.ts
                    -   whatever.ts

This should keep things clean, organized and easily maintable.
Feel free to leave recommendations, criticism, etc.
