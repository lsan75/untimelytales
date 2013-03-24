define([
	'jquery', 
	'backbone', 
	'underscore',
	'views/main-view'], 
function($, Backbone, _, MainView){
	var router = Backbone.Router.extend({

		initialize: function(){

			_.bindAll(this, 'home', 'info', 'other');
			
			// test first website load
				this.firstLoad = true; 
				
			// Load main view
				this.mainView = new MainView;			
		
		},

		routes: {
			'': 'home',
			'!/home': 'home',
			'!/info': 'info',
			'*actions': 'other'
		},

		'home': function(){
			this.firstLoad = false;
			this.mainView.render('home');			
		},

		'info': function(){
			this.firstLoad = false;
			this.mainView.render('info');
		},
		
		'other': function(){
			if(this.firstLoad){
				this.navigate('!/home', {trigger: true, replace: true});
			}
		}

	});
	
	return router;
});
