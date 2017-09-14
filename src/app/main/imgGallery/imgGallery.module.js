(function ()
{
    'use strict';

    angular
        .module('app.gallery', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.imgGallery', {
                url    : '/imgGallery',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/imgGallery/imgGallery.html',
                        controller : 'GalleryController as vm'
                    }
                },
                resolve: {
                    GalleryData: function (msApi)
                    {
                        return msApi.resolve('imgGallery@get');
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/imgGallery');

        // Api
        msApiProvider.register('imgGallery', ['app/data/imageGallery/imageGallery.json']);

        // Navigation
        msNavigationServiceProvider.saveItem('fuse', {
            title : 'IMAGEGALLERY',
            group : true,
            weight: 1
        });

        msNavigationServiceProvider.saveItem('fuse.gallery', {
            title    : 'gallery',
            icon     : 'icon-image',
            state    : 'app.imgGallery',
            /*stateParams: {
                'param1': 'page'
             },*/
            translate: 'IMAGEGALLERY.IMAGEGALLERY_NAV',
            weight   : 1
        });
    }
})();