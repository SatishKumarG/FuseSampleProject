(function ()
{
    'use strict';

    angular
        .module('app.DashBoard')
        .controller('DashBoardController', DashBoardController);

    /** @ngInject */
    function DashBoardController(SampleData)
    {
        var vm = this;

        // Data
        vm.helloText = SampleData.data.helloText;

        // Methods

        //////////
    }
})();
