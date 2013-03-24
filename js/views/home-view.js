define([
		'jquery', 
		'backbone',
		'underscore',
		'text!templates/home.tpl',
		'text!templates/subhome.tpl',
		], 
function($, Backbone, _, tpl, subtpl){
	var HomeView = Backbone.View.extend({
		template: _.template(tpl),
		
		initialize: function(options){
		
			_.bindAll(this, 'render');
			this.altCollection = options.altCollection;
			this.render();
			
		},
		
		render: function(){
		
			var subhome = '';
			$.each(this.altCollection.models, function(index, track){

				subhome+= _.template(subtpl, {model: track.attributes});
			
			});
		
			var data = {
				title: this.model.attributes.title,
				aid: this.model.attributes.aid,
				subhome: subhome
			};
			$('body').append(this.template(data));

				
		}
	
	});
	
	return HomeView;
});
