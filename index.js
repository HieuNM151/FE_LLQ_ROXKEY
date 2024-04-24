let prevScrollpos = window.pageYOffset;
const header = $("#myHeader");
const lefitem = $("#lef-item");
const rightitem = $("#right-item");
const lefnav = $("#lef-nav");
const lefnav2 = $("#lef-nav2");
const lefnav3 = $("#lef-nav3");
const menubee = $(".menu-bee")

const scrollThreshold = 800;

$(window).scroll(function () {
    const currentScrollPos = $(window).scrollTop();

    if (currentScrollPos > scrollThreshold) {
        header.css("top", "-60px");
        header.addClass('headerActive');
        lefitem.addClass('active-lef-item');
        rightitem.addClass('active-right-item');
        lefnav.addClass('active-lef-nav');
        lefnav2.addClass('active-lef-nav');
        lefnav3.addClass('active-lef-nav');
        menubee.addClass('active-menu-bee');
        $("#img-logo-h").attr("src", "image/FrameRed.png");
        $(".lef-img").attr("src", "image/chevron-down-black.png");
        $("#search").attr("src", "image/searchblack.png");
        $("#dat").attr("src", "image/globeblack.png");
        $("#phone").attr("src", "image/phoneblack.png");
    } else {
        header.css("top", "0");
        header.removeClass('headerActive');
        lefitem.removeClass('active-lef-item');
        rightitem.removeClass('active-right-item');
        lefnav.removeClass('active-lef-nav');
        lefnav2.removeClass('active-lef-nav');
        lefnav3.removeClass('active-lef-nav');
        menubee.removeClass('active-menu-bee');
        $("#img-logo-h").attr("src", "image/Frame 1000002625.png");
        $(".lef-img").attr("src", "image/chevron-down.png");
        $("#search").attr("src", "image/search.png");
        $("#dat").attr("src", "image/globe.png");
        $("#phone").attr("src", "image/phoneheader.png");
    }

    if (currentScrollPos < prevScrollpos && currentScrollPos > scrollThreshold) {
        console.log("đã ăn");
        header.css("top", "0");
    }
    prevScrollpos = currentScrollPos;
});


