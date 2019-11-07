$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 480) {
    	$('.uk-navbar').css({
        'background-color': '#f8f8f8',
        'transition': 'all ease .5s',
        'height': '100px'
			})
			$('.textcolornav').css({
				'color': '#303030'
			});
    }
    else {
    $('.uk-navbar').css({
      'background-color': 'transparent',
      'transition': 'all ease 0s',
      'height': '80px'
    })
		$('.textcolornav').css({
			'color': '#f8f8f8'
		});
		;
    }
  });
});




//----------JQuery-----------------//

$(document).ready(function(){
  flag=1;
   $("#next").click(function(){
      if(flag==0)
       {
           $(".side1").css("z-index","999");
           $(".side2").css("z-index","9");
           $(".side3").css("z-index","9");
           $(".side1").css("transform","translateX(0px) scale(1.5)");
           $(".side2").css("transform","translateX(-100px) scale(1)");
           $(".side3").css("transform","translateX(100px)");
           flag=1;
       }
       else if(flag==1)
       {
           $(".side3").css("z-index","999");
           $(".side2").css("z-index","9");
           $(".side1").css("z-index","9");
           $(".side3").css("transform","translateX(0px) scale(1.5)");
           $(".side1").css("transform","translateX(-100px) scale(1)");
           $(".side2").css("transform","translateX(100px)");
           flag=2;
       }
       else if(flag==2)
       {
           $(".side2").css("z-index","999");
           $(".side3").css("z-index","9");
           $(".side1").css("z-index","9");
           $(".side2").css("transform","translateX(0px) scale(1.5)");
           $(".side3").css("transform","translateX(-100px) scale(1)");
           $(".side1").css("transform","translateX(100px)");
           flag=0;
       }
   });
   $("#pre").click(function(){
      if(flag==0)
       {
           $(".side3").css("z-index","999");
           $(".side2").css("z-index","9");
           $(".side1").css("z-index","9");
           $(".side3").css("transform","translateX(0px) scale(1.5)");
           $(".side1").css("transform","translateX(-100px) scale(1)");
           $(".side2").css("transform","translateX(100px)");
           flag=2;
       }
       else if(flag==1)
       {
           $(".side2").css("z-index","999");
           $(".side3").css("z-index","9");
           $(".side1").css("z-index","9");
           $(".side2").css("transform","translateX(0px) scale(1.5)");
           $(".side3").css("transform","translateX(-100px) scale(1)");
           $(".side1").css("transform","translateX(100px)");
           flag=0;
       }
       else if(flag==2)
       {
           $(".side1").css("z-index","999");
           $(".side2").css("z-index","9");
           $(".side3").css("z-index","9");
           $(".side1").css("transform","translateX(0px) scale(1.5)");
           $(".side2").css("transform","translateX(-100px) scale(1)");
           $(".side3").css("transform","translateX(100px)");
           flag=1;
       }
   });
});


/*------------------------------------------------------*/
