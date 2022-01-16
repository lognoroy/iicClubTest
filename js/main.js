$(document).ready(function(){

	$('#menu').click(function(){
		if ($('.headlinks').css('display') == 'block') {
			var toggleleft = parseInt($('.right').css('left')) == -1000 ? 0 : -1000;
			var fadebody = ($('#bodycon').css('opacity')) == 1 ? 0.1 : 1;
			var scrollbody = ($('body').css('overflow')) == 'visible' ? 'hidden' : 'visible';
			$('.right').animate({
				left: toggleleft
			}, 'slow');
			$('#bodycon').fadeTo('slow', fadebody);
			$('body').css('overflow', scrollbody);
		}
	});
	$('#searchbtn').click(function(){
		var togglewidth = $('#search').width() == 150 ? 0 : 150;
		var toggleopa = $('#search').css('opacity') == 0 ? 1 : 0;
		$('#search').animate({
			width: togglewidth,
			opacity: toggleopa
		});
	});

});