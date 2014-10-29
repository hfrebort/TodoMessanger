angular.module('firebase.config', [])
  .constant('FBURL', 'https://popping-fire-9893.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','anonymous'])

  .constant('loginRedirectPath', '/login');