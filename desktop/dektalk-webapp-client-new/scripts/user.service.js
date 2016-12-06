(function () {
    'use strict';

    angular
        .module('app')
        .factory('UserService', UserService);

    UserService.$inject = ['$RestCommWebClient'];
    function UserService($RestCommWebClient) {
        var service = {};

        service.Connection = GetConnection;
        return service;

        function GetConnection() {
            return $RestCommWebClient.Device.setup();
        }

        // private functions

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }

})();
