define(['jquery', 'backbone', 'underscore', 'mixins'], function($, Backbone, _, mixins){
	var AlbumModel = Backbone.Model.extend({
		defaults: {
			'about': 			albumData.about.replace(/\r\n/g, '<br>'),
			'title': 			albumData.title,
			'aid':				albumData.title.replace(/ /g, '-').toLowerCase(),
			'credits':  		albumData.credits.replace(/\r\n/g, '<br>'),
			'url': 				albumData.url,
			'release_date': 	_.formatdate(albumData.release_date),
			'large_art_url': 	albumData.large_art_url
		}
	});
	return AlbumModel;
});
