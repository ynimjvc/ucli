# modcli
---

## Installation

`npm i modcli`

## Getting started

```javascript
const {app} = require('modcli');

app();
```

## Plugins

### Events

- `start` - emitted when app is started

### Using plugins

```javascript
const {app} = require('modcli');
const router = require('modcli-actionrouter');

router({
    default: 'done'
});

app();
```

### Write your own

```javascript
const {plugin} = require('modcli');

module.exports = plugin(
    'myPlugin',
    ({on, dispatch}) => {

        on('start', context => {    
            context.hello = 'world';
        });

        dispatch('some event');

        return 'my plugin description';
    }
);
```

#### Context

* version - function, returns current modcli version
```javascript
console.log(context.version()); //0.0.0
```

* plugins - returns plugin or list of all plugins that was registered
```javascript
console.log(context.plugins('foo')); // ['pluginName', function() {}]
console.log(context.plugins());      // [['pluginName', function() {}], ...]
```
