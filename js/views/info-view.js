define([
		'jquery', 
		'backbone',
		'underscore',
		'text!templates/info.tpl'
		], 
function($, Backbone, _, tpl){
	var InfoView = Backbone.View.extend({
		template: _.template(tpl),
		
		initialize: function(){
		
			_.bindAll(this, 'render', 'setContactForm');
			this.render();
			
		},
		
		render: function(){
		
			$('body').append(this.template(this.model.attributes));
			
			this.setContactForm();
		
		},
		
		'setContactForm': function(){
				
			$("#contact-form").validate({	
				rules: {
   					'contact-email': {
   		    			required: true,
   	    				email: true
	   	  			},
   			 		'contact-subject': 	"required",
   			 		'contact-name':		"required",
   		  			'contact-message': 	"required"
   				},				
   	 			highlight: function(element){
   	 				 $(element).parent().find("label[for=" + element.id + "]")
   	 				 	.addClass('invalid')
   	 				 	.removeClass('valid');
   	 			},
   	 			unhighlight: function(element){
   	 				 $(element).parent().find("label[for=" + element.id + "]")
   	 				 	.removeClass('invalid')
   	 				 	.addClass('valid');
   	 			},
   	 			errorElement: 'cite',
   	 			errorPlacement: function(error, element) {
    				error.appendTo( element.parent().find("label[for=" + element.id + "]") );
   				}
    			
  			});
			
			$("#contact-form").submit(function(){
						
				if( $("#contact-form").valid() ) {
				
					$.post("send.php", 
						{ 
							email: $('#contact-email').val(), 
							subject: $('#contact-subject').val(),
							name: $('#contact-name').val(),
							message: $('#contact-message').val()
						}
					).success(function(retour) {
						
						$('#sent').remove();
						$('<strong id="sent">'+retour+'</strong>').insertBefore('#contact-form div input');				
					
					});
					
				}
				return false;
			
			});	
		
		
		}

	
	});
	
	return InfoView;
});
