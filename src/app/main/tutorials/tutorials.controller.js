(function ()
{
    'use strict';

    angular
        .module('app.tutorials')
        .controller('tutorialsController', tutorialsController);

    /** @ngInject */
    function tutorialsController(SampleData)
    {
        var vm = this;

        // Data
        vm.tutorialsText = SampleData.data.tutorialsText;

        // Methods

        //////////
    }
})();
