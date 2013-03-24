define([
		'jquery', 
		'backbone',
		'underscore',
		'text!templates/menu.tpl'
		], 
function($, Backbone, _, tpl){
	var MenuView = Backbone.View.extend({
		el: 'body',
		template: _.template(tpl),
		initialize: function(options){
		
			_.bindAll(this, 'render', 'showMenu', 'target', 'play', 'stop', 'next', 'audiosetup', 'audioplay', 'audiostop');
			this.playing = false;
			this.model = _.first(options.altCollection.models);
			this.altCollection = options.altCollection;
			
			this.render();

		},
		events: {
			'click #menu':			'showMenu',
			'click #targ': 			'target',
			'click #song-title': 	'target',
			'click #play': 			'play',
			'click #stop': 			'stop',
			'click #prev': function() { this.next('prev'); return false; },
			'click #next': function() { this.next('next'); return false; }
		},
		render: function(){
			$('body').append(this.template(this.model.attributes));
			
			this.audiosetup();
			
			$('#player').fadeIn(400);
			
			return this;
		},
		showMenu: function(){
				
			_player = $('#player');
			if( _player.css('opacity') == '1' ){
			
				_player.animate({
					'opacity': '0'
				});
			
			} else {

				_player.animate({
					'opacity': '1'
				});
			
			}
			return false;
		},
		target: function(){
			_.goTop(this.model.attributes.tid);
			return false;
		},
		play: function(){
		
			this.audioplay();
			
			$('#play').attr('id','stop');
			this.playing = true;
			return false;
		},
		stop: function(){
		
			this.audiostop();
			
			$('#stop').attr('id','play');
			this.playing = false;
			return false;
		},
		next: function(sens){
		
			if(this.playing){
				this.audiostop();
			}	
				
			var index = this.altCollection.indexOf(this.model);			
			if(sens==='next'){
				this.model = this.altCollection.at( (index < this.altCollection.length-1)? index+1 : 0 );
			}else{
				this.model = this.altCollection.at( (index > 0)? index-1 : this.altCollection.length-1 );
			}	
			
			$('#song-title').html(this.model.attributes.title);
			$('#targ').html(this.model.attributes.number);
			
			if(this.playing){ 
				this.play(); 
			}	
			
		},
		audiosetup: function(){
		
			that = this;
									
			this.soundManager = window.soundManager;
			
			this.soundManager.setup({
				url: '/js/libs/soundmanager2_flash9.swf',
				flashVersion: 9,
				useHighPerformance: true,
				waitForWindowLoad: true,
				preferFlash: false,
				onready: function(){
			
					$.each(that.altCollection.models, function(index,res){
						soundManager.createSound({
							id: res.attributes.tid,
							url: res.attributes.streaming_url,
							onfinish: function(){
								that.next('next');
							}
						});
					});
				
				},
				debugMode: true,	
				ontimeout: function(status) {
    				alert('SoundManager init failed !\n Try to reload the page...\nError : '+status.error.type);
  				}
			});
			this.soundManager.beginDelayedInit();
		
		},
		audioplay: function(){
		
			this.soundManager.play(this.model.attributes.tid, {multiShotEvents: true});
		
		},
		audiostop: function(){
		
			this.soundManager.stop(this.model.attributes.tid);
			
		}			
		
	
	});
	
	return MenuView;
});
