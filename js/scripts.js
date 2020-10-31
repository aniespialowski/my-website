$(document).ready(function(){
/* menu mobilne */
    $('#main-menu').slicknav({
        prependTo: '#attach-mobile-menu',
        label: ''
    });
});
    $('#main-container').imagesLoaded(function(){
/* slider */
    $('#portfolio-carousel').owlCarousel({
    	autoPlay: 5000,
    	items: 3,
    	itemsDesktopSmall: [1199,2],
        itemsTablet: [768,1],
    });
});