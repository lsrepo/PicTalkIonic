// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('picTalk', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})



.controller('SelectCtrl', function($scope, $ionicModal) {
  // No need for testing data anymore
  $scope.messages = [];

  $scope.pics = picInJson;

  // Create and load the Modal
  $ionicModal.fromTemplateUrl('new-pic.html', function(modal) {
    $scope.picModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  // Called when the form is submitted
  $scope.createPic = function(pic) {
    $scope.pics.push({
      title: pic.title
    });
    $scope.picModal.hide();
    pic.title = "";
  };

  // Open our new pic modal
  $scope.newPic = function() {
    $scope.picModal.show();
  };

  // Close the new pic modal
  $scope.closeNewPic = function() {
    $scope.picModal.hide();
  };

  $scope.picOnTap = function(tappedPic) {
    console.log("yoyo" + tappedPic.id);
    tappedPic.selected = true;
    $scope.messages.push(
      tappedPic
    );
    console.log($scope.messages);
  };
});