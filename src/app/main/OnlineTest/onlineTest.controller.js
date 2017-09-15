(function ()
{
    'use strict';

    angular
        .module('app.online')
        .controller('OnlineController', OnlineController);

    /** @ngInject */
    function OnlineController(onlineTest)
    {
        var oc = this;

        // Data
     /* vm.questions = onlineTest.questions;
      console.log(vm.questions);
*/

     //msFormWizard
      oc.questions=onlineTest.questions;
      console.log(oc.questions);
      


       // vm.myName = OnlineData.images;

        // Methods

        //////////
    }
})();
