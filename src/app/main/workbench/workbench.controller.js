(function () {
    'use strict';

    angular
        .module('app.workbench')
        .controller('WorkBenchController', SampleController);

    /** @ngInject */
    function SampleController(WorkBenchData, $mdExpansionPanel, $mdExpansionPanelGroup) {
        var vm = this;

        // Data
        vm.headLine = WorkBenchData.data.headLine;
        vm.content = WorkBenchData.data.content;


        $mdExpansionPanelGroup().waitFor('panelGroup').then(function (instance) {
            // instance.expand('panelOne');
            $mdExpansionPanel('panelOne').expand();
            // instance.remove('panelOne');
            // instance.remove('panelTwo', { animation: false });
        });
        
        vm.gridOptions = WorkBenchData.xamarin;
        vm.gridOptions1 = WorkBenchData.Phonegap;

        vm.handleAllPanels = function (tabName) {
            // debugger;

            vm.gridOptions1 = WorkBenchData.Phonegap;

            $mdExpansionPanel('panelOne').collapse();
            $mdExpansionPanel('panelTwo').collapse();
            $mdExpansionPanel('panelThree').collapse();
            $mdExpansionPanel('panelFour').collapse();
            $mdExpansionPanel('panelFive').collapse();
        };
        /* vm.gridOptions = {
             columnDefs: [
                 { field: 'id', displayName: 'Id' },
                 { field: 'name', displayName: 'Name' },
                 { name: 'edit', displayName: 'Edit', cellTemplate: '<button id="editBtn" type="button" class="btn-small" ng-click="edit(row.entity)" >Edit</button> ' }
             ]
         };
 */

        // Methods

        //////////

        // async 
        // $mdExpansionPanel().waitFor('panelOne').then(function (instance) {
        // instance.expand();
        // instance.collapse({ animation: false });
        // instance.remove();
        // instance.isOpen();

        //  });

        // async 
        // $mdExpansionPanelGroup().waitFor('panelGroup').then(function (instance) {
        // instance.remove('panelOne');
        // instance.remove('panelTwo', { animation: false });
        // });

        // sync 
        //$mdExpansionPanelGroup('panelOne').removeAll({animation: false});

        // sync 
        // $mdExpansionPanel('panelOne').expand();



    }
})();


