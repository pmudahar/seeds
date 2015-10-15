'use strict';

angular.module('gameofloveApp')
  .controller('PodcastsCtrl', function ($scope, $firebase, $firebaseArray, $sce) {
  	$scope.urls = $firebaseArray(ref.child('starveTheEgo'));


  	$scope.test = function(id){
  		var startSrc = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/";
  		var endSrc = "&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false"
  		var src = startSrc + id.toString() + endSrc;
  		return $sce.trustAsResourceUrl(src);
  	}

});



