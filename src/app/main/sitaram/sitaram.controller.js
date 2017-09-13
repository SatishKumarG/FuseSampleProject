(function ()
{
    'use strict';

    angular
        .module('app.sitaram')
        .controller('sitaramController', sitaramController);

    /** @ngInject */
    function sitaramController(sitaramData)
    {
        var vm = this;

        // Data
        vm.helloText = sitaramData.data.helloText;

        // Methods

        //////////
    }
})();
