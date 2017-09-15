(function ()
{
    'use strict';

    angular
        .module('app.report')
        .controller('rptController', rptController);

    /** @ngInject */
    function rptController(rData)
    {
        var vm = this;

        // Data
        vm.helloText = rData.data.helloText;

        // Methods

        //////////
    }
})();
