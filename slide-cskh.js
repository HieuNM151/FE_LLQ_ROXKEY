$(document).ready(function() {
    $('#slider1 .owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        items: 1
    })
    $('.trai').click(function() {
        $('#slider1 .owl-carousel').trigger('prev.owl.carousel');
    });

    // Sự kiện khi click nút phải
    $('.phai').click(function() {
        $('#slider1 .owl-carousel').trigger('next.owl.carousel');
    });
});