var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider) {
    var helloState = {
      name: 'hello',
      url: '/hello',
      template: '<h3>hello world!</h3>'
    }
  
    var aboutState = {
      name: 'about',
      url: '/about',
      templateUrl: 'about.html',
      controller:'ctrlAbout',
    }
  
    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
  });