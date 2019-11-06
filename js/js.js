$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 480) {
    	$('.uk-navbar').css({
        'background-color': '#303030',
        'transition': 'all ease .5s',
				'color': '#273746',
        'height': '100px'
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
