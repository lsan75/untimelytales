_.mixin({

		formatdate: function(dte) {
		
			var thedate = new Date(dte*1000);
			var mois = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
			return mois[thedate.getMonth()] + ' ' + thedate.getDate() + ', ' + thedate.getFullYear();
		},
		goTop: function(id){
			var target = (id) ? $('#'+id).offset().top : '0px';
			$('html, body').animate({scrollTop:target}, 500);
		},
		swapClass: function(id, classe){
			
			var vid = $(id);
			vid.fadeOut(100, function(){
				vid.attr('class', classe).fadeIn(100);
			});
		
		},
		
  		isPhone: function(){
  		
			if (navigator && navigator.userAgent && navigator.userAgent != null) 
   			{
        		var strUserAgent = navigator.userAgent.toLowerCase();
        		var arrMatches = strUserAgent.match(/(iphone|ipod|ipad|blackberry|android)/);
       			if (arrMatches) return true;
    		} 

    		return false;
    	},
    	
    	mobileFix: function(){
			if ( ! this.isPhone() ) {
				$('section').addClass('bgfixed');
			} else {
				var _section = $('section, hgroup');
				_section.css('height', _section.parent().height()+60);
				
				$('#contact').css('height','auto'); // bug interpretation height 100%
				
				$('body, h1, h2').addClass('fw400');
				$('nav span').addClass('fw600');
				
			}
		
    	}
 	
});
	
		
