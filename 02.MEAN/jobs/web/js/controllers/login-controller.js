(function(angular) {
  'use strict';

  angular.module('login').controller('LoginController', controller);

  controller.$inject = ['LoginService'];

  function controller(loginService) {
    const vm = this;

    vm.authenticate = (user) => {
        console.log(user);
        console.log(loginService);
    };
  }

})(window.angular);