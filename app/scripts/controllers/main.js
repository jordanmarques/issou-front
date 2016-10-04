'use strict';

/**
 * @ngdoc function
 * @name issouFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the issouFrontApp
 */
angular.module('issouFrontApp')
  .controller('MainCtrl', function () {

    this.wallpaperUrl = "http://localhost:8080/issou/wallpaper/random" + timeStamp();
    this.iconUrl = "http://localhost:8080/issou/icon/random" + timeStamp();

    this.random = function(type){
      if(type == "wallpaper"){
        this.wallpaperUrl = "http://localhost:8080/issou/wallpaper/random" + timeStamp();
      }else if (type == "icon"){
        this.iconUrl = "http://localhost:8080/issou/icon/random" + timeStamp();
      }
    };

    function timeStamp(){
      return '?' + new Date().getTime()
    }

  });
