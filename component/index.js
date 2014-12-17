'use strict';
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

module.exports = yeoman.generators.NamedBase.extend({
  initializing: function () {
    this.log(yosay(['Going to create component',  this.name ].join(' ')));
  },

  writing: {
    componentfile: function () {
        var compName = this._.camelize(this.name);
        this.fs.copyTpl(
          'react-component.jsx',
          ['src/scripts/components/', compName, '.jsx'].join(''),
          { component: compName }
        );
    },
    testfile: function () {
        var compName = this._.camelize(this.name);
        this.fs.copyTpl(
          'react-component-test.js',
          ['src/scripts/components/__tests__', compName, '-test.js'].join(''),
          { component: compName }
        );
    }
  }
});
