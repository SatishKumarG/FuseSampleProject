(function ()
{
    'use strict';

    angular
        .module('app.report', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.report', {
                url    : '/report',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/reports/reports.html',
                        controller : 'rptController as vm'
                    }
                },
                resolve: {
                    rData: function (msApi)
                    {
                        return msApi.resolve('report@get');
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/reports');

        // Api
        msApiProvider.register('report', ['app/data/reports/reports.json']);

        // Navigation
        msNavigationServiceProvider.saveItem('fuse', {
            title : 'REPORT',
            group : true,
            weight: 1
        });

        msNavigationServiceProvider.saveItem('fuse.reports', {
            title    : 'Reports',
            icon     : 'icon-tile-four',
            state    : 'app.report',
            /*stateParams: {
                'param1': 'page'
             },*/
            translate: 'REPORT.REPORT_NAV',
            weight   : 1
        });
    }
})();