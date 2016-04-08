'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);
phonecatControllers.controller('TestController', function(){
  this.drivers = [
    {
      Driver: {
        givenName: 'Sebastian',
        familyName: 'Vettel'
      },
      points: 332,
      nationality: 'German',
      Constructors: [
        { name: 'Red Bull' }
      ]
    },
    {
      Driver: {
        givenName: 'Fernando',
        familyName: 'Alonso'
      },
      points: 207,
      nationality: 'Spanish',
      Constructors: [
        { name: 'Ferrari' }
      ]
    }
  ];
});


var testControllers = angular.module('testControllers', []);

testControllers.controller('TestController', function(){
  this.drivers = [
    {
      Driver: {
        givenName: 'Sebastian',
        familyName: 'Vettel'
      },
      points: 332,
      nationality: 'German',
      Constructors: [
        { name: 'Red Bull' }
      ]
    },
    {
      Driver: {
        givenName: 'Fernando',
        familyName: 'Alonso'
      },
      points: 207,
      nationality: 'Spanish',
      Constructors: [
        { name: 'Ferrari' }
      ]
    }
  ];
});
