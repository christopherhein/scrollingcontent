/*
 • jQuery scrollingContent
 • http://christopherhein.com
 •
 • Copyright 2010, Christopher Hein
 • Free to use and abuse under the GPL license.
 • http://www.gnu.org/copyleft/gpl.html
 • 
 • March 2010
*/

(function($) 
{

  $.fn.scrollingContent = function(options)
  { 
		// Settings
  	settings = jQuery.extend( { fromTop: '10' }, options);
		
			// Varibles
		var el = $(this);
		
		
			// Scroll
		$(window).scroll(function()
		{
			var elpos_original = el.offset().top;
		  var elpos = el.offset().top;
		  var windowpos = $(window).scrollTop();
		  var finaldestination = windowpos;
		  if(windowpos<elpos_original)
			{
		    finaldestination = elpos_original;
		    el.stop().css({'top':settings.fromTop});
		  } else
			{
		  	el.stop().animate({'top':finaldestination-elpos_original+10},500);
		  }
		});
		
	}	
  
	
})(jQuery);