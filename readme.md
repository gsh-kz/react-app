# react-app

## Reference

[TypeScript Deep Dive 日本語版 > Browser QuickStart](https://typescript-jp.gitbook.io/deep-dive/browser)

## Setup

```
$ docker-compose run --rm app npm install
```

## Development & Run

```
# dev server start (container start)
$ docker-compose up -d
```
```
# devserver stop (container down)
$ docker-compose down
```

## module build

```
$ docker-compose exec app npm run build
```
or
```
$ docker-compose run --rm app npm run build
```

## Recipe

* react
* [react-bootstrap](https://react-bootstrap.github.io/)
* typescript
* sass
* webpack

```
$ npm init -y
$ npm install --save-exact react react-dom react-router-dom
$ npm install --save-exact react-bootstrap bootstrap
$ npm install --save-dev  @types/react @types/react-dom @types/react-router-dom \
                          @types/react-bootstrap @types/bootstrap \
                          @types/node
$ npm install --save-dev typescript ts-loader
$ npm install --save-dev sass-loader sass css-loader \
                         mini-css-extract-plugin postcss-loader autoprefixer
$ npm install --save-dev webpack webpack-cli webpack-dev-server \
                         clean-webpack-plugin html-webpack-plugin
```
