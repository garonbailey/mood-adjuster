$(document).ready(function () {
	$('.footer').hover(function() {
	    $('div.subfoot').removeClass("hidden");
	  }, function () {
	  	$('div.subfoot').addClass("hidden");
	  });

	$('div.subfoot').hover(function() {
	    $(this).removeClass("hidden");
	  }, function() {
	    $(this).addClass("hidden");
  });
});