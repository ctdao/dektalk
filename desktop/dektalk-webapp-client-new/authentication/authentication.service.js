(function () {
    'use strict';

    angular
        .module('app')
        .factory('AuthenticationService', AuthenticationService);

    AuthenticationService.$inject = ['$rootScope', '$timeout', 'RestCommClient'];
    function AuthenticationService($rootScope, $timeout, RestCommClient) {
        var service = {};

        service.Login = Login;
        service.SetCredentials = SetCredentials;
        service.ClearCredentials = ClearCredentials;

        return service;

        function Login(username, password, callback) {

            /* Dummy authentication for testing, uses $timeout to simulate api call
             ----------------------------------------------*/
            $timeout(function () {
                var parameter = {
                    'debug':true,
                    'username': username, // Any user id which you can login for testing
                    'password': password,
                }
                var response;
                RestCommClient.Device.setup(parameter)
                    .then(function (user) {
                        if (user !== null && user.password === password) {
                            response = { success: true };
                        } else {
                            response = { success: true, message: 'Username or password is incorrect' };
                        }
                        callback(response);
                    });
            }, 10000);

            /* Use this for real authentication
             ----------------------------------------------*/
            //$http.post('/api/authenticate', { username: username, password: password })
            //    .success(function (response) {
            //        callback(response);
            //    });

        }

        function SetCredentials(username, password) {

            $rootScope.globals = {
                currentUser: {
                    username: username,
                    password: password
                }
            };

            //$http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
            //$cookieStore.put('globals', $rootScope.globals);
        }

        function ClearCredentials() {
            $rootScope.globals = {};
        }
    }


})();