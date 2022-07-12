$(function(){
    var currentIndex = 0;
    var currentX = 0;
    var main_slide;
    var main_width;
    var main_size;

    Init();
    Event();

    function Init(){
        main_slide = $(".main-slide");
        main_size = $(".main-slide").children('img').size();
    }

    function MoveBanner(index){
        main_width = main_slide.children('img').width();

        currentIndex = index;
        currentX = main_width*currentIndex;
        main_slide.css({'transform':'translateX('+ -currentX+'px)'});
        main_slide.fadeIn();
    }
    function MainBanner(){
        currentIndex++;
        if(currentIndex >= main_size){
            currentIndex = 0
            main_slide.fadeOut(0)
            main_slide.css({'transform':'translateX('+ -currentX+'px)'});
        }
        MoveBanner(currentIndex)
    }

    function MainBannerSlide(){
        timer = setInterval(MainBanner, 5000)
    }
    MainBannerSlide();



    function Event(){
    }



    // responsive
    $(window).resize(function(){
        MoveBanner(currentIndex);

        var width = $(window).width();
        if (width<1024){
        }
        else{
        }
    })
    $(window).trigger("resize");

})
