$(document).ready(function(){
    $('.content-even').owlCarousel({
        loop:true,
        nav:false,
        responsive:{
            0:{ items:1 },
            600:{ items:3 },
            1000:{ items:4 }
        }
    });

    $('.prev-btn').click(function() {
        $('.content-even').trigger('prev.owl.carousel');
    });

    $('.next-btn').click(function() {
        $('.content-even').trigger('next.owl.carousel');
    });
});
