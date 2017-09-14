(function ()
{
    'use strict';

    angular
        .module('app.gallery')
        .controller('GalleryController', GalleryController);

    /** @ngInject */
    function GalleryController(GalleryData)
    {
        var vm = this;

        // Data
        vm.imgGallery = GalleryData.data.imgGallery;
        vm.myName = GalleryData.images;

        // Methods

        //////////
    }
})();
