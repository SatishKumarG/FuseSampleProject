(function ()
{
    'use strict';

    angular
        .module('app.tutorials', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.tutorials', {
                url    : '/tutorials',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/tutorials/tutorials.html',
                        controller : 'tutorialsController as vm'
                    }
                },
                resolve: {
                    SampleData: function (msApi)
                    {
                        return msApi.resolve('tutorials@get');
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/tutorials');

        // Api
        msApiProvider.register('tutorials', ['app/data/tutorials/tutorials.json']);

        // Navigation
        msNavigationServiceProvider.saveItem('fuse', {
            title : 'TUTORIALS',
            group : true,
            weight: 1
        });

        msNavigationServiceProvider.saveItem('fuse.tutorials', {
            title    : 'Tutorials',
            icon     : 'icon-tile-four',
            state    : 'app.tutorials',
            /*stateParams: {
                'param1': 'page'
             },*/
            translate: 'TUTORIALS.TUTORIALS_NAV',
            weight   : 1
        });
    }
})();