// spinner animated and window load
$(document).ready(function () {
    $("#spinner").delay(800).fadeOut("slow");
    $("#preload").delay(1000).fadeOut("slow");
});

// hamburger animated
var hamburgerBtn = document.querySelector('.hamburger');
var drawer = document.querySelector('.drawer');
var i = 0;

hamburgerBtn.addEventListener('click', trigger);
/* 判斷按鈕按下的狀態*/
function trigger() {
    if (i % 2 == 0) {
        drawer.classList.add('open');
        hamburgerBtn.classList.toggle('change');
        $("article, h1").toggleClass("articleLeft");
        $("article, h1").removeClass("articleOrigin");
        $("#maskMain").fadeTo("fast", 1).show();
        $("header").removeClass("topBarMask", 500, "easeInBack");
    }

    if (i % 2 == 1) {
        drawer.classList.remove('open');
        hamburgerBtn.classList.toggle('change');
        $("article, h1").toggleClass("articleOrigin");
        $("article, h1").removeClass("articleLeft");
        $("#maskMain").fadeTo("slow", 0).hide("fast");
    }
    i++;
}

//scroll偵測
$(window).scroll(function () {
    if ($(".drawer").is('.open')) {
        // remove topBarMask
        $("header").removeClass("topBarMask", 500, "swing");
    } else if ($(window).scrollTop() >= 120) {
        // topBarMask
        $("header").addClass("topBarMask", 500, "swing");
        //goTop
        $("#goTop").show("slow");
    } else {
        $("header").removeClass("topBarMask", 500, "easeInBack");
        $("#goTop").hide("slow");
    }
    console.log($(window).scrollTop());
})

//捲到最上面
$("#goTop").click(function () {
    var body = $("html, body");
    body.stop().animate({ scrollTop: 0 }, 500, 'easeInOutCubic');
})
$("#goTopMobile").click(function () {
    var body = $("html, body");
    body.stop().animate({ scrollTop: 0 }, 500, 'easeInOutCubic');
})
