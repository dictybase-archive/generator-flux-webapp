'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var FluxWebappGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the Flux and React based Webapp generator!'
    ));

    var prompts = [{
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      default : this.appname
    }];
    this.prompt(prompts, function (props) {
      this.name = props.name;
      done();
    }.bind(this));
  },

  writing: {
    packageJSON: function () {
        var context = {
            title: this.name,
            description: 'Flux Webapp application',
            appname: this.name
        };
        this.template('_package.json', 'package.json', context);
    },
    app: function () {
        this.dest.mkdir('src');
          var folders = [
                'docs',
                'gulp',
                'jest',
                'src/images',
                'src/scripts',
                'src/styles',
                'src/template',
                'src/scripts/actions',
                'src/scripts/components',
                'src/scripts/components/__tests__',
                'src/scripts/constants',
                'src/scripts/dispatcher',
                'src/scripts/stores',
                'src/scripts/stores/__tests__',
                'src/scripts/utils',
                'src/scripts/utils/__tests__'
          ];
          folders.forEach(function(value) {
              this.dest.mkdir(value);
          }, this);
    },
    fluxfiles: function () {
        this.copy('src/dispatcher/AppDispatcher.js', 'src/scripts/dispatcher/AppDispatcher.js');
        this.copy('src/constants/ActionTypes.js', 'src/scripts/constants/ActionTypes.js');
        this.copy('src/actions/ServerActionCreators.js', 'src/scripts/actions/ServerActionCreators.js');
        this.copy('src/actions/ViewActionCreators.js', 'src/scripts/actions/ViewActionCreators.js');
        this.copy('src/routes.jsx', 'src/scripts/routes.jsx');
        this.copy('src/router.js', 'src/scripts/router.js');
        this.copy('src/app.jsx', 'src/scripts/app.jsx');
    },
    stylesheets: function () {
        this.copy('src/styles/main.less', 'src/styles/main.less');
    },
    gulpfiles: function () {
        this.copy('gulpfile.js', 'gulpfile.js');
        this.copy('gulp/dev_server.js', 'gulp/dev_server.js');
        this.copy('gulp/flatui.js', 'gulp/flatui.js');
    },
    indexfiles: function () {
        this.copy('index.html', 'index.html');
        this.copy('src/template/index.html', 'src/template/index.html');
    },
    webpackfiles: function () {
        this.copy('webpack-dev.config.js', 'webpack-dev.config.js');
        this.copy('webpack.config.js', 'webpack.config.js');
    },
    jestfiles: function () {
        this.copy('jest/preprocessor.js', 'jest/preprocessor.js');
    },
    projectfiles: function () {
       this.copy('LICENSE.txt', 'LICENSE.txt');
       this.copy('README.md', 'README.md');
    }
  },
  end: function () {
        this.installDependencies();
  }
});

module.exports = FluxWebappGenerator;
