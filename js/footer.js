$(document).ready(function(){
	$('.frame').click(function(){
    $('.message').addClass('pull');
   
	})
});
$(document).ready(function(){
	$('#send').click(function(){
    $('.message').toggleClass('pull');
   
	})
});