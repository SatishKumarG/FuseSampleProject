(function ()
{
    'use strict';

    angular
    .module('app.workbench', ['ngMaterial', 'material.components.expansionPanels'])
       
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.workbench', {
                url    : '/workbench',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/workbench/workbench.html',
                        controller : 'WorkBenchController as vm'
                    }
                },
                resolve: {
                    WorkBenchData: function (msApi)
                    {
                        return msApi.resolve('workbench@get');
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/workbench');

        // Api
        msApiProvider.register('workbench', ['app/data/workbench/workbench.json']);

        // Navigation
        msNavigationServiceProvider.saveItem('fuse', {
            title : 'WORKBENCH',
            group : true,
            weight: 1
        });

        msNavigationServiceProvider.saveItem('fuse.workbench', {
            title    : 'workbench',
            icon     : 'icon-home',
            state    : 'app.workbench',
            /*stateParams: {
                'param1': 'page'
             },*/
            translate: 'WORKBENCH.WORKBENCH_NAV',
            weight   : 1
        });
    }
})();