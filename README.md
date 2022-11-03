# ecommerce

## Project Description
Ecommerce demo project<br>
Open [https://savconstantine-ecommerce.onrender.com/](https://savconstantine-ecommerce.onrender.com/) to view it in the browser.

## Features

* React
* Redux 
* NodeJS
* SASS/SCSS: make styles greate again, with no tears
* TailwindCSS: utility-first CSS framework
* Modern ES6 for using template strings, JSX syntax, object destructuring arrow functions and more
* Babel for old browser support
* React Router
* Hot Module Replacement for comfortable development

## Project Structure

#### `client/`

Client app in this folder

#### `client/components`

This folder contains all components

#### `dist/assets`
This directory contains compiled project files

#### `webpack.development.config.js` `and webpack.production.frontend.config.js`
Project environment configs. Webpack uses proper config depending on defined application environment.
By default `webpack.development.config.js` is used unless build the application with --config webpack.production.frontend.config.js variable.


## Command Line Commands

#### Installation

```Shell
yarn install
```
Installs the dependencies.

#### Development

```Shell
yarn run dev
```

Starts the development server running on `http://localhost:8080` using the webpack.development.config.js with Hot Module Replacement (HMR) (Changes in the application code will be hot-reloaded)

```Shell
yarn run dev:server
```

Starts the development server and makes application accessible at http://localhost:8080.

```Shell
yarn run clean
```
Removes a directory "dist" from a project

#### Building

```Shell
yarn build:prod
```

Prepares app for deployment to production environment (using the webpack.production.frontend.config.js). Optimizes and minifies all files, piping them to the `dist` folder.

#### Linting

```Shell
yarn run lint
```
Will analyse your code for potential errors. Will check both: `./client/**/**.js` and `./server/**/**.js` files.
Code linting is a type of static analysis that is frequently used to find problematic patterns or code that doesn’t adhere to certain style guidelines.


```Shell
yarn run lint:server
```

Will analyse only  `server/**/**.js` files