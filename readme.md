# modcli
work in progress

## Installation

`npm i modcli`

## Getting started

```javascript
const flow = require('modcli');

flow()
    .use(flow => {
        flow.describe('key', 'description');

        flow.on('event', context => {
            console.log(context);
        });

        flow.dispatch('event');
    })
```

## Flow

### Properties

#### Version

```
flow.version
```

#### Plugins

```
flow.plugins
```

#### Context

```
flow.context
```

### Methods

#### Describe

```
flow.describe(name, value)
```

Use this to describe any new features you added.

One describe per feature.

Underneath its jus a javascript Map and can be accessed on flow.

Use `flow.getDescription(key)` for getting value for specific key or `flow.plugins` for getting all registered descriptions.

#### Use

```
flow.use(callback)
```

#### On

```
flow.on(eventName, callback)
```

#### Dispatch

```
flow.dispatch(eventName)
```
