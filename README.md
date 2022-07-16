# Webpack-Tailwindcs-JS

Para este proyecto usamos la v2 de Tailwind, por incompatibilidad que trae v3.Tailwind con templates JS.
Para el desarrollo del proyecto usamos JavaScript, HTML and CSS.

Herramientas usadas para el proyecto:
* Webpack
* Tailwind
* Babel

## Instalación

Primero instalamos las dependencias

```shell
npm install
npm start # para ejecutar modo=development
npm run build # para ejecutar modo=production
```

## Pasos para construir el proyecto

Primero se configuró las dependencias necesarias en __package.json__

```javascript
  "devDependencies": {
    "@babel/cli" : "^7.13.0",
    "@babel/core" : "^7.13.8",
    "@babel/plugin-transform-runtime" : "^7.13.8",
    "@babel/preset-env" : "^7.13.8",
    "@babel/register" : "^7.13.8",
    "autoprefixer" : "^10.4.5",
    "babel-loader" : "^8.2.2",
    "css-loader" : "^5.1.0",
    "html-loader" : "^2.1.2",
    "html-webpack-plugin" : "^5.2.0",
    "mini-css-extract-plugin" : "^1.3.9",
    "postcss" : "^8.2.6",
    "postcss-loader" : "^5.0.0",
    "postcss-preset-env" : "^7.7.1",
    "rimraf" : "^3.0.2",
    "style-loader" : "^2.0.0",
    "webpack" : "^5.24.7",
    "webpack-cli" : "^4.5.0",
    "webpack-dev-server" : "^3.11.2"
  },
  "dependencies": {
    "tailwindcss" : "^2.0.3"
  },
  "babel": {
    "preset": [
      "@babel/preset-env"
    ],
    "plugins": [
      "@babel/plugin-transform-runtime"
    ]
  }
```