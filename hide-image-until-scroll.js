$(document).ready(function( $ ){
		$(".wp-image-6710").css({'display': 'none'});
    $(window).scroll(function(){
	  if($(this).scrollTop() > 125){
		 $('.wp-image-6710').css({'display': 'block'});
	  }else{
		$('.wp-image-6710').css({'display': 'none'});
  	  }
    });
});
