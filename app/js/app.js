'use strict';

// profile app
var profileApp = angular.module('profileApp', [
   // 'ProfileController'
]);


// profile controller
profileApp.controller('ProfileController', function(){
  /**
   * @var string
   */
  this.name = "";

  /**
   * @var integer
   */
  this.age = 0;

  /**
   * @var string
   */
  this.email = "";

  /**
   * @var string
   */
  this.domain = "";

  /**
   * add profile
   */
  this.addProfile = function(profile){
    this.name = profile.name;
    this.age = profile.age;
    this.email = profile.email;
  };

  /**
   * set name
   */
  this.setName = function(name){
    this.name = name;
  };

  /**
   * set age
   */
  this.setAge = function(age){
    this.age = age;
    if(age >= 30 && this.name.indexOf("Mr") == -1) this.setName("Mr " + this.name);
    else if(age < 30 && this.name.indexOf("Mr") != -1) this.setName(this.name.substr(3));
  };

  /**
   * set email
   */
  this.setEmail = function(email){
    this.email = email;

    // set domain name.
    var domain = this.email.substr(this.email.indexOf('@') + 1);

    switch(domain){
      case 'aol.com':
        this.domain = "American Online";
        break;
      case 'gmail.com':
        this.domain = "Google";
        break;
      case 'outlook.com':
        this.domain = "Microsoft";
        break;
      case 'yahoo.com':
        this.domain = "Yahoo";
        break;
    }
  };

});