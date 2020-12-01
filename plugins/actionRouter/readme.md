# Action router

Gets first argument from command line and uses it to dispatch events according to routing config.

# Install

```
npm install modcli-actionrouter
```

# Getting started

Config should be an object with at least one property.

## fallbacks

* _Default_ -  If no matches found router searches for `default` option.
* _First_ - If no matches found and no default option found router uses first key in router config;

## usage
```javascript
const {app} = require('modcli');
const router = require('modcli-actionrouter');

router({
    myAction: 'event',
    defaulf: 'event'
});

app();
```
