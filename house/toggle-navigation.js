$(document).ready(function() {
    console.log('menu');
	$('body').addClass('js');
	var $menu = $('#menu'),
	$menulink = $('.menu-link');
	$menulink.click(function() {
        console.log('click');
		$menulink.toggleClass('active');
		$menu.toggleClass('active');
  	return false;
	});
});