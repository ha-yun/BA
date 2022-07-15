$(function(){
    var header_logo;

    var currentIndex = 0;
    var currentX = 0;
    var main_slide;
    var main_width;
    var main_size;

    Init();
    scrollHeader();
    Event();

    function Init(){
        header_logo = $(".logo");
        main_slide = $(".main-slide");
        main_size = $(".main-slide").children('.main-slide-wrap').size();
    }
    
    function scrollHeader(){
        if($(window).scrollTop()>0){
            header_logo.addClass('scroll_logo');
        }else{
            header_logo.removeClass('scroll_logo');
        }
    }

    function MoveBanner(index){
        main_width = main_slide.children('.main-slide-wrap').width();

        currentIndex = index;
        currentX = main_width*currentIndex;
        main_slide.stop().css({'transform':'translateX('+ -currentX+'px)'});
        if(main_slide.css('display') === 'none'){
            main_slide.stop().fadeIn();
        }
        
    }
    function MainBanner(){
        currentIndex++;
        if(currentIndex >= main_size){
            MoveBanner(currentIndex);
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
        $(window).on('scroll',scrollHeader);
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
