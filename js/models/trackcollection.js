define(['jquery', 'backbone', 'underscore'], function($, Backbone, _){
	var TrackModel = Backbone.Model.extend({});
	var TrackCollection = Backbone.Collection.extend({
		Model: TrackModel,
		initialize: function(){
		
			that = this;
			
			$.each(albumData.tracks, function(index, track){
			
				that.add({
				
					'tid':				track.title.replace(/ /g, '-').toLowerCase(),
					'number': 			track.number,
					'title': 			track.title,
					'lyrics': 			track.lyrics.replace(/\r\n/g,'<br>'),
					'streaming_url': 	track.streaming_url
				
				});
			
			});
		
		}
	});
	return TrackCollection;
});
