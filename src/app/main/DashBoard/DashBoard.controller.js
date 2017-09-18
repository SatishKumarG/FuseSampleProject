(function ()
{
    'use strict';

    angular
        .module('app.DashBoard')
        .controller('DashBoardController', DashBoardController);

    /** @ngInject */
    function DashBoardController(DashBoardsData)
    {
        var vm = this;

        // Data
        vm.helloText = DashBoardsData.data.helloText;
        vm.lineChartData = DashBoardsData.lineChartData;
        vm.barChartData = DashBoardsData.barChartData;
        vm.ploarChartData = DashBoardsData.ploarChartData;
         vm.radarChartData = DashBoardsData.radarChartData;

    }
})();
