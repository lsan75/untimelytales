define([
		'jquery', 
		'backbone',
		'underscore', 
		'models/albummodel',
		'models/trackcollection',
		'views/menu-view',
		'views/home-view',
		'views/info-view'
		], 
function($, Backbone, _, AlbumModel, TrackCollection, MenuView, HomeView, InfoView){
	var MainView = Backbone.View.extend({

		initialize: function(){

			_.bindAll(this, 'render');

			// Load Data
				this.albumModel 		= new AlbumModel;
				this.trackCollection 	= new TrackCollection;
			// empty var albumData after model collection set	
				albumData = null; 		

			// Load views
			
				this.menuView = new MenuView({altCollection: this.trackCollection});
				this.homeView = new HomeView({model: this.albumModel, altCollection: this.trackCollection});
				this.infoView = new InfoView({model: this.albumModel});

			// mobile fix
				_.mobileFix();
			
		},
		
		render: function(thePage){
					
			_.goTop();		
			var theSwap = (thePage === 'home') ? 'info':'home';
			$('#page-'+theSwap).fadeOut(function(){
				$('#page-'+thePage).fadeIn();
			});
			
		}
	});
	
	return MainView;
});
