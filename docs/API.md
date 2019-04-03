# API

## Login

`/login`

### Type

**POST**

### Data

```json
{
  'user': 'name',
  'password': 'psd'
}
```

### Response

1. Success

    ```json
    data {
      'msg': ''
    }
    ```
2. Fail

    ```json
    data {
      'msg': 'User Error or Password Error'
    }
    ```

### Example

1. JavaScript

    ```javaScript
    const axios = require('axios');

    axios.post('/login', {
      user: username,
      password: password
    })
      .then(function (res) {
        // do sth
      })
      .catch(function (err) {
        console.error(err);
      })
      .then(function () {
        // code always perform
      })
    ```

## Download

`/download/:filename`

### Type

**GET**

### Response

Target file

### Example

1. JavaScript

    ```javaScript
    // download code
    window.open('/download/' + filename, '_blank'); 

    // other things you want
    const axios = require('axios');

    axios.get('/download/' + filename)
      .then(function (res) {
        // do sth
      })
      .catch(function (err) {
        console.error(err);
      })
      .then(function () {
        // code always perform
      })
    ```

## Delete

`/delete/:filename`

### Type

**POST**

### Response

1. Success

    ```json
    data: {
      'msg': ''
    }
    ```

1. Fail

    ```json
    data: {
      'msg': 'File does not exit'
    }
    ```

### Example

1. JavaScript

    ```javaScript
    const axios = require('axios');

    axios.post('/delete/' + filename, {})
      .then(function (res) {
        // do sth
      })
      .catch(function (err) {
        console.error(err);
      })
      .then(function () {
        // code always perform
      })
    ```

## Delete

`/upload`

### Type

**POST**

### Data

files, multiform data.

### Response

Redirect to home page

### Example

1. JavaScript

    ```javaScript
    const axios = require('axios');

    axios.post('/upload', {
      files: [
        file: {}
      ]
    })
      .then(function (res) {
        // do sth
      })
      .catch(function (err) {
        console.error(err);
      })
      .then(function () {
        // code always perform
      })
    ```