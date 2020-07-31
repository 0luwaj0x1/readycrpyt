# readycrypt


![npm version](https://img.shields.io/npm/v/readycrypt)


## Installation

```sh
yarn add readycrypt
```

## Usage

```js
import { encryptPassword, encryptPin } from 'readycrypt'


const encryptedPassword = encryptPassword('yourpassword')

const encryptedPin = encryptPin('yourpin', 'your-session-id')


```