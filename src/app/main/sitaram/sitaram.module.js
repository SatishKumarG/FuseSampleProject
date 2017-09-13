(function ()
{
    'use strict';

    angular
        .module('app.sitaram', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.sitaram', {
                url    : '/sitaram',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/sitaram/sitaram.html',
                        controller : 'sitaramController as vm'
                    }
                },
                resolve: {
                    sitaramData: function (msApi)
                    {
                        return msApi.resolve('sitaram@get');
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/sitaram');

        // Api
        msApiProvider.register('sitaram', ['app/data/sitaram/sitaram.json']);

        // Navigation
        msNavigationServiceProvider.saveItem('fuse', {
            title : 'SITARAM',
            group : true,
            weight: 1
        });

        msNavigationServiceProvider.saveItem('fuse.sitaram', {
            title    : 'sitaram',
            icon     : 'icon-tile-four',
            state    : 'app.sitaram',
            /*stateParams: {
                'param1': 'page'
             },*/
            translate: 'SITARAM.SITARAM_NAV',
            weight   : 1
        });
    }
})();