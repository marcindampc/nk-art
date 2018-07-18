$('.mainNav ul li a[href^="#"]').on('click', function(e){
    e.preventDefault();
    var hashTag = this.hash;
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top
    }, 1000, function () {
        window.location.hash = hashTag;
    });
})