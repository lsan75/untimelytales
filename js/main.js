require.config({ 
    'paths': { 
    	'jquery':		[
    						'//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min',
    						'libs/jquery-1.9.1.min'
    					],
		'underscore': 	'libs/underscore-min', 
		'backbone': 	'libs/backbone-min',
		'sm2':			'libs/soundmanager2',	
		'mixins': 		'libs/mixins',
		'validate': 	'libs/jquery.validate.min'
	},
	'shim': 
	{
		underscore: {
			'exports': '_'
		},
		backbone: {
			'deps': ['jquery', 'underscore'],
			'exports': 'Backbone'
		},
		sm2: {
			'exports': 'soundManager'
		},
		mixins: {
			'deps': ['jquery', 'underscore']
		},
    	validate: {
    		'deps': ['jquery']
    	}
	}	
}); 

require([
	'jquery',
	'underscore',
	'backbone',
	'sm2',
	'mixins',
	'validate',
	'app'
	], 
	function($, _, Backbone, sm2, mixins, validate, app){
		'use strict';
		if( $('html').hasClass('ie6')){
		}else{
			app.init();
			Backbone.history.start();
		}	
});
