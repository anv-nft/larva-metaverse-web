//nav
$(document).ready(function(){
	isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	if(isMobile){
		location.replace('https://m.aniverse.io');
	}
	$('.btnMenu').click(function() {
		$('nav.gnb').slideToggle();
	});
	$('.close-modal').click(function() {
		$('#exploreAniverse').hide();
	});
	$('.modalClose').click(function() {
		$('#exploreAniverse').hide();
	});
	$('.aniverseBtn').click(function() {
		$('#exploreAniverse').show();
	});
	$('.close-modal-new').click(function() {
		$("html, body").animate({ scrollTop: 0 }, "fast");
		return false;
	});
});

//url복사
function fn_copy() {
	var url = document.getElementById('copyMail');
	url.select();
	document.execCommand('copy');
}
