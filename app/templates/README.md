# Application name

This web application (SPA) based on Facebook's [React](https://facebook.github.io/react/)
library and [Flux](http://facebook.github.io/flux/) architecture. 

# Usage
## Install
Clone this repository and run

```js
npm install
```

## Run

```js
gulp
```

This will start a lightweight webpack development
[server](http://webpack.github.io/docs/webpack-dev-server.html) on port 9000.
The setup includes live reload and synchronization across multiple devices and
browsers.

## Build

```js
gulp build
```

The build will be generated in ```build``` folder including and ```index.html```

## Deploy

```js
gulp deploy
```

This will deploy the build to the github [pages](https://pages.github.com/)

## Development
For development contributions, it is recommended to fork this repository or
clone and work in separate branch(anything other than develop or master). To
understand the workflow look at the contribution file.

The webapp is organized using the following layout.

### Project Layout

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

### Flux architecture

Here is the canonical flux architecture

<img src="https://github.com/facebook/flux/raw/master/docs/img/flux-diagram-white-background.png" style="width: 100%;" />

And few pointers to get started.

* [Flux for Stupid People](http://blog.andrewray.me/flux-for-stupid-people/) by [Andrew Ray](https://github.com/DelvarWorld)
* [What is Flux?](http://fluxxor.com/what-is-flux.html) by [Brandon Tilley](https://github.com/BinaryMuse/)
* [Rethinking Web App Development at Facebook](http://www.youtube.com/watch?v=nYkdrAPrdcw) by [Pete Hunt](https://github.com/petehunt)
* [The State of Flux](https://reactjsnews.com/the-state-of-flux/) by [David Chang](http://davidandsuzi.com/)

