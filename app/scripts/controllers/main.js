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
    var wallpaperUrl = "https://issou-randomizer.herokuapp.com/issou/wallpaper/random";
    var iconUrl = "https://issou-randomizer.herokuapp.com/issou/icon/random";

    this.wallpaperUrl = wallpaperUrl + timeStamp();
    this.iconUrl = iconUrl + timeStamp();

    this.random = function(type){
      if(type == "wallpaper"){
        this.wallpaperUrl = wallpaperUrl + timeStamp();
      }else if (type == "icon"){
        this.iconUrl = iconUrl + timeStamp();
      }
    };

    function timeStamp(){
      return '?' + new Date().getTime()
    }

  });
