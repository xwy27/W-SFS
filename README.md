# W-SFS

Web based Static File Service, helps transforming small files without USB.

## Function

Manage small files with your own server like using a tiny cloud disk.

1. Visualization Page
1. Download file
1. Delete file
1. Upload file

## Introduction

Taking light and convenience into consideration, a simple web server is used: `koa2`, which is unlike the most website construction - SPA front-end with URL forwarding and back-end server.

Under the developing, some middleware are picked:

1. nunjucks
1. koa-router
1. koa-send
1. koa-body
1. koa2-static-middleware
1. koa-bodyparser

For the web page, `Semantic`, which concerned more about page displaying is chosen. However, it is based on `jQuery`, which I'm a little used to. For some reason, I tried `axios` in the project.

After all, this is a small toy for myself. I tried to modify the code and learn from it. Hope more helpful things can be done to it.