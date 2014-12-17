'use strict';
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

module.exports = yeoman.generators.NamedBase.extend({
  initializing: function () {
    this.log(yosay(['Going to create component',  this.name ].join(' ')));
  },
  normalizeName: function () {
      if (this._.strRight(this.name, '-')) {
          return this._.camelize(this.name);
      }
      return this._.capitalize(this.name);
  },
  writing: {
    componentfile: function () {
        var compName = this.normalizeName();
        this.fs.copyTpl(
          this.templatePath('react-component.jsx'),
          this.destinationPath(['src/scripts/components/', compName, '.jsx'].join('')),
          { component: compName }
        );
    },
    testfile: function () {
        var compName = this.normalizeName();
        this.fs.copyTpl(
          this.templatePath('react-component-test.js'),
          this.destinationPath(['src/scripts/components/__tests__/', compName, '-test.js'].join('')),
          { component: compName }
        );
    }
  }
});
