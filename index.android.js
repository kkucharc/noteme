'use strict';

var React = require('react-native');
var {
  AppRegistry,
} = React;

var ListComponent = require('./data.component').DataComponent;

AppRegistry.registerComponent('NoteMe', () => ListComponent);
