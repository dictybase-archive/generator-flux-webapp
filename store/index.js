'use strict';
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

module.exports = yeoman.generators.NamedBase.extend({
  initializing: function () {
    this.log(yosay(['Going to create store',  this.name ].join(' ')));
  },
  normalizeName: function () {
      if (this._.include(this.name, '-')) {
          return this._.camelize(this.name);
      }
      return this._.capitalize(this.name);
  },
  writing: function () {
    storefile: function () {
        var compName = this.normalizeName();
        this.fs.copyTpl(
          this.templatePath('flux-store.js'),
          this.destinationPath(['src/scripts/stores/', compName, '.js'].join('')),
          { component: compName }
        );
    },
    testfile: function () {
        var compName = this.normalizeName();
        this.fs.copyTpl(
          this.templatePath('flux-store-test.js'),
          this.destinationPath(['src/scripts/stores/__tests__/', compName, '-test.js'].join('')),
          { component: compName }
        );
    }
  }
});
