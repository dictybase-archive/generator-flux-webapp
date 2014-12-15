# Flux/ReactJS generator

[Yeoman](http://yeoman.io) generator for web application (SPA) based on
Facebook's [React](https://facebook.github.io/react/) library and
[Flux](http://facebook.github.io/flux/) architecture. Use it to quickly
bootstrap your web application projects. 
It is a modified version of [Aldo Nievas's](https://github.com/alduro) [generator](https://github.com/alduro/generator-flux-webapp).

## Batteries included
* [Gulp](http://gulpjs.com) build system.
* [Webpack](http://webpack.github.io) module builder with hot loader and dev server.
* [React-hot-loader](http://gaearon.github.io/react-hot-loader/) for automated build on edit.
* Beautiful [flat-ui](http://designmodo.github.io/Flat-UI/) theme for boostrap. 
* [Jest](http://facebook.github.io/jest/) based unit testing.

# Usage
## Install
```js
npm install cybersiddhu/generator-flux-webapp
```

## Create project

```js
mkdir demox && cd demox
yo flux-webapp
```

The above will generate a project with the following folder layout

### Project Layout

```
├── build/                      # The folder for compiled output, will be created after running the first build.
├── docs/                       # Documentation files for the project
├── gulp/                       # The folder for gulp tasks
│   ├── dev_server.js           # Tasks for running developmental server, build and deploy
│   └── flatui.js               # Tasks for managing installation of Flat-UI bootstrap theme.
├── jest/                       # The folder for jest configuration files
│   └── preprocessor.js         # Jest preprocessor file for JSX transformation
├── src/                        # The source code of the application
│   ├── images/                 # The folder for static images
│   ├── scripts/                # Source code for various parts of flux architecture
│   │   ├── actions/            # Action creators that allow to trigger a dispatch to stores
│   │   ├── components/         # React components. E.g. Navbar.jsx, Calendar.jsx
│   │   │   ├── __tests__/      # Unit tests for components, mainly jest based.
│   │   ├── constants/          # Enumerations used in action creators and stores
│   │   ├── dispatcher/         # Application specific dispatcher
│   │   ├── stores/             # Stores contain the application state and logic
│   │   │   ├── __tests__/      # Unit tests for stores, mainly jest based.
│   │   ├── utils/              # API to interact with data store(server or clientside), generally called by action creators
│   │   └── app.jsx             # Entry point for application
│   │   └── router.js           # Router instance to use the routes defintion
│   │   └── routes.jsx          # Client side routing definition
│   ├── styles/                 # CSS style sheets, default is less
│   │   ├── vendor/             # Folder for third patry CSS framework
│   │   └── main.less           # Entry point for stylesheet customization
│   └── template/               # The folder for any kind of templates
│       └── index.html          # A template file to make the index file for the build process
├── gulpfile.js                 # Primary gulp configuration file, use to source custom one from gulp/ folder
├── index.html                  # Index file needed for webpack dev server
├── LICENSE                     # Default MIT license 
├── package.json                # Dependency management file for npm
├── README.md                   # This file.
├── webpack.config.js           # Webpack config file for build task
└── webpack-dev.config.js       # Webpack config file for running the developmental server

```

## Default tasks included

### Run

```js
gulp
```

This will start a lightweight webpack development
[server](http://webpack.github.io/docs/webpack-dev-server.html) on port 9000.
The setup includes live reload and synchronization across multiple devices and
browsers.

### Build

```js
gulp build
```

The build will be generated in ```build``` folder including and ```index.html```

### Deploy

```js
gulp deploy
```

This will deploy the build to the github [pages](https://pages.github.com/)

### Stylesheet

```js
gulp setup:flatcss
```

The above sets up a [flat](https://github.com/designmodo/Flat-UI) theme for
[bootstrap3](http://getbootstrap.com). The theme is imported and can be
customized from ```main.less``` file in stylesheet folder. To use it in the
application import it from the main entry point(app.jsx).

### Unit testing

```js
npm test
```
