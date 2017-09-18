(function ()
{
    'use strict';

    angular
        .module('app.online', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.onlineTest', {
                url    : '/onlineTest',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/onlineTest/onlineTest.html',
                        controller : 'OnlineController as oc'
                    }
                },
                resolve: {
                    onlineTest: function (msApi)
                    {
                        return msApi.resolve('onlineTest@get');
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/onlineTest');

        // Api
        msApiProvider.register('onlineTest', ['app/data/onlineTest/onlineTest.json']);

        // Navigation
        msNavigationServiceProvider.saveItem('fuse', {
            title : 'ONLINETEST_NAV',
            group : true,
            weight: 1
        });

        msNavigationServiceProvider.saveItem('fuse.online', {
            title    : 'online',
            icon     : 'icon-image',
            state    : 'app.onlineTest',
            /*stateParams: {
                'param1': 'page'
             },*/
            translate: 'OnlineTest.ONLINETEST_NAV',
            weight   : 1
        });
    }
})();