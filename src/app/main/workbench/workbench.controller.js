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

        vm.handleAllPanels = function () {
            $mdExpansionPanel('panelOne').collapse();
            $mdExpansionPanel('panelTwo').collapse();
            $mdExpansionPanel('panelThree').collapse();
            $mdExpansionPanel('panelFour').collapse();
             $mdExpansionPanel('panelFive').collapse();
        }
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


