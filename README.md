# simple-validation-for-env-variables
It throws exception if required env variables are missing.

<p>&nbsp;</p>

## Getting Started

Install it using [`npm`](https://www.npmjs.com/package/@diegoti/simple-validation-for-env-variables):

```bash
npm i @diegoti/simple-validation-for-env-variables
```

## USAGE

Import simple-validation-for-env-variables in your node app.
Call check() function passing an array of ENV variables.
If a variable is missing, the package will prevent the application from starting.  

```javascript
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

const simpleValidationForEnvVariables = require('@diegoti/simple-validation-for-env-variables');
simpleValidationForEnvVariables.check(["MONGO_URL", "USER"]);


```

Output example.

```text
Error: 
Missing env[MONGO_URL] variable.
```