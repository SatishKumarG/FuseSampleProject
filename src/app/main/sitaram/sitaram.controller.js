(function ()
{
    'use strict';

    angular
        .module('app.sitaram')
        .controller('sitaramController', sitaramController);

    /** @ngInject */
    function sitaramController(sitaramData, $timeout)
    {
        var vm = this;

        // Data
        vm.helloText = sitaramData.data.helloText;

        // Methods

        vm.labels = ["January", "February", "March", "April", "May", "June", "July"];
        vm.series = ['Series A', 'Series B'];
        vm.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
        vm.datasetOverride = [{
            yAxisID: 'y-axis-1'
        }, {
            yAxisID: 'y-axis-2'
        }];
        vm.options = {
            scales: {
                yAxes: [{
                    id: 'y-axis-1',
                    type: 'linear',
                    display: true,
                    position: 'left'
                }, {
                    id: 'y-axis-2',
                    type: 'linear',
                    display: true,
                    position: 'right'
                }]
            }
        };
        vm.labels1 = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        vm.series1 = ['Series A', 'Series B'];

        vm.data1 = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
    }
})();
