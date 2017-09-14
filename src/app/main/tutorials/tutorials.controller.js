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
        vm.images = SampleData.data.images;

        // Methods

        //////////
    }
})();
