(function ()
{
    'use strict';

    /**
     * Main module of the Fuse
     */
    angular
        .module('fuse', [

            // Core
            'app.core',

            // Navigation
            'app.navigation',

            // Toolbar
            'app.toolbar',

            // Quick panel
            'app.quick-panel',

            // Sample
            'app.sample',

            // Murali
            'app.DashBoard',
			
			// Image Gallery
            'app.gallery',
			
			//Tutorials
			'app.tutorials',
			
			 // Sitaram
            'app.sitaram',
			
			//Srinivas Choppari
			 'app.workbench',

            //reports
            'app.report',

            //online
            'app.online'

        ]);
})();