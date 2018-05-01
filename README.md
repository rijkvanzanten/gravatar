# gravatar

🙆🏼‍♂️ Mini util library that converts an email address to a Gravatar link

## Installation

```bash
$ npm install @rijk/gravatar
```

## Usage

```js
const gravatar = require("@rijk/gravatar");

gravatar("rijkvanzanten@me.com");
// => "https://gravatar.com/avatar/1f2c258f5488c3e5477627b1fd32011f?s=200"
```

You can pass the following options:

| option       | default   |
| ------------ | --------- |
| size         | 200       |
| default      | identicon |
| rating       | g         |
| forcedefault | n         |

See [the Gravatar docs](http://en.gravatar.com/site/implement/images/) for more information.
