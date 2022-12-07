# sports-charity

Sports Public Welfare Platform

## Environment

Require Node v14.21.1 or above

## How to Install

```shell
bash <(curl https://raw.githubusercontent.com/CAFECA-IO/sports-charity/master/shell/install.sh -kL)
```

## How to Updata Content

- edit contents.js

```shell
vi contents.js
```

- rebuild and restart

```shell
npm run build
pm2 restart npm --name "sports-charity" -- start
```

## Mockup

https://xd.adobe.com/view/84cb96b0-324a-47e0-8899-0ccbd2f5e558-d198/?fullscreen
