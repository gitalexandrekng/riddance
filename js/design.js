$('.main-content').on('inview', function(event, isInView) {
    if (isInView) {
        $('nav').addClass('nav-view')
    } else {
        $('nav').removeClass('nav-view')
    }
});
