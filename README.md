# Leggiero

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
   git clone https://github.com/xwy27/W-SFS.git
   ```
2. Set Account
   
    Modify `setting.js` at the root dir and set your own account and password.
    Also the files size limitation can be set. 

    **For any sharing with the repo, make sure your own Account info in `setting.js` is deleted.**
3. Install Dependency

    ```bash
    cd S-WFS
    npm install
    ```
4. Start Server
  
    ```bash
    npm start
    ```
5. Enjoy

    For local access, you can visit `http://localhost:3000` to enjoy **W-SFS**.

## Introduction

Taking light and convenience into consideration, a simple web server is used: `koa2`, which is unlike the most website construction - SPA front-end with URL forwarding and back-end server.

Under the developing, some middleware are picked:

1. koa-body
2. koa-bodyparser
3. koa-router
4. koa-send
5. koa-session
6. koa2-static-middleware
7. nunjucks

For the web page, `Semantic`, which concerned more about page displaying is chosen. However, it is based on `jQuery`, which I'm a little used to. For some reason, I tried `axios` in the project.

After all, this is a small toy for myself. I tried to modify the code and learn from it. Hope more helpful things can be done to it.
