(function ()
{
    'use strict';

    angular
        .module('app.DashBoard', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.DashBoard', {
                url    : '/DashBoard',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/DashBoard/DashBoard.html',
                        controller : 'DashBoardController as vm'
                    }
                },
                resolve: {
                    SampleData: function (msApi)
                    {
                        return msApi.resolve('DashBoard@get');
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/DashBoard');

        // Api
        msApiProvider.register('DashBoard', ['app/data/DashBoard/DashBoard.json']);

        // Navigation
        msNavigationServiceProvider.saveItem('fuse', {
            title : 'DashBoard',
            group : true,
            weight: 1
        });

        msNavigationServiceProvider.saveItem('fuse.DashBoard', {
            title    : 'DashBoard',
            icon     : 'icon-view-dashboard', 
            state    : 'app.DashBoard',
            /*stateParams: {
                'param1': 'page'
             },*/
            translate: 'DashBoard.DashBoard_NAV',
            weight   : 1
        });
    }
})();