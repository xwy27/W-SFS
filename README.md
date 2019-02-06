# ![Leggiero](./static/image/logo.png)

Web based Static File Service, helps transforming small files without USB.

## Function

Manage small files with your own server like using a tiny cloud disk.

1. Visualization Page
1. Download file
1. Delete file
1. Upload file

## Dependency

### Server

1. node >= 10.0.0
2. npm/cnpm

### Client

1. Modern Browser(*Chrome preferred*)

## Usage

1. Clone the repo
   
   First, clone the repo from the github.
   ```bash
   git clone https://github.com/xwy27/leggiero.git
   ```
2. Set Account
   
    Modify `setting.js` at the root dir and set your own account and password.
    Also the files size limitation can be set. 

    **For any sharing with the repo, make sure your own Account info in `setting.js` is deleted.**
3. Install Dependency

    ```bash
    cd leggiero
    npm install
    ```
4. Start Server
  
    ```bash
    npm start
    ```
5. Enjoy

    For local access, you can visit `http://yourServerIP:3000` to enjoy **leggiero**.

## Introduction

Taking light and convenience into consideration, a simple web server is used: `koa2`, which is unlike the most website construction - SPA front-end with URL forwarding and back-end server providing data.

Under the developing process, some koa middleware are picked:

1. koa-body:  *parse web request data into json*
2. koa-router:  *router control*
3. koa-send:  *server sending file*
4. koa-session:  *session control*
5. koa2-static-middleware:  *static file forward*
6. nunjucks:  *web page template*

`Semantic`, which concerns more about page displaying and is based on `jQuery` is chosen as the front-end frame work. According to some discussion of `jQuery`, `axios` is used for the web request.

After all, this is a toy for myself. I tried to modify the code and learn from it. Hope more helpful things can be done to it. 

**Your advice is welcomed.**
