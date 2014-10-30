'use strict';
/**
 * @ngdoc function
 * @name todoMessengerApp.controller:ChatCtrl
 * @description
 * # ChatCtrl
 * A demo of using AngularFire to manage a synchronized list.
 */
angular.module('todoMessengerApp')
  .controller('ChatCtrl', function ($scope, simpleLogin, fbutil, $timeout) {
    // synchronize the logged in user
    simpleLogin.getUser().then(function(user) {
      $scope.user = user;
    });

    // synchronize a read-only, synchronized array of messages, limit to most recent 10
    $scope.messages = fbutil.syncArray('messages', {limit: 10});

    // display any errors
    $scope.messages.$loaded().catch(alert);

    // provide a method for adding a message
    $scope.addMessage = function(newMessage) {
      if( newMessage ) {
        // push a message to the end of the array
        $scope.messages.$add({text: newMessage, user: $scope.user.email})
          // display any errors
          .catch(alert);
      }
    };

    // provide a method to remove a message
    $scope.removeMessage = function(message) {
      if (message) {
        // remove the given message from the array
        $scope.messages.$remove(message)
          // display any errors
          .catch(alert);
      }
    };

    function alert(msg) {
      $scope.err = msg;
      $timeout(function() {
        $scope.err = null;
      }, 5000);
    }
  });
