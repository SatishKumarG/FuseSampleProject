(function ()
{
    'use strict';

    angular
        .module('app.workbench')
        .controller('WorkBenchController', SampleController);

    /** @ngInject */
    function SampleController(WorkBenchData)
    {
        var vm = this;

        // Data
        vm.helloText = WorkBenchData.data.helloText;

        // Methods

        //////////
    }
})();
