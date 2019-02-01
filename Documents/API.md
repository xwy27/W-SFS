# API

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
      msg: ''
    }
    ```

1. Fail

    ```json
    data: {
      msg: 'File does not exit'
    }
    ```

### Example

1. JavaScript

    ```javaScript
    const axios = require('axios');

    axios.post('/download/' + filename, {})
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