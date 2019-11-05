$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 700) {
    	$('.uk-navbar').css({
        'background-color': '#f8f8f8',
        'transition': 'all ease .5s',
        'height': '100px',
        'color': '#303030'
        });
    }
    else {
    $('.uk-navbar').css({
      'background-color': 'transparent',
      'transition': 'all ease 0s',
      'height': '80px'
    });
    }
  });
});
