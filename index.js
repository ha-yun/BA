$(function(){
    var header_logo;
    var notice_nextbtn;
    var notice_prevbtn;
    var currentNotice = 0;
    var notice_size;
    var firstNoticeBox;
    var lastNoticeBox;

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
        notice_nextbtn = $("#notice_next");
        notice_prevbtn = $("#notice_prev");
        notice_size = $("#first_noticebox").children('img').size();
        firstNoticeBox = $("#first_noticebox").children('img');
        lastNoticeBox = $("#last_noticebox").children('img');
    }
    
    // scrollheader
    function scrollHeader(){
        if($(window).scrollTop()>0){
            header_logo.addClass('scroll_logo');
        }else{
            header_logo.removeClass('scroll_logo');
        }
    }

    // main banner
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


    // notice
    function MoveNotice(index){
        let NoticeImgwidth = firstNoticeBox.width();
        if(index == notice_size-1){
            firstNoticeBox.stop().css({'transform' : 'translateX('+-(NoticeImgwidth*index)+'px'});
            lastNoticeBox.stop().css({'transform' : 'translateX('+-(NoticeImgwidth*index)+'px'});
            setTimeout(removeTransition,500);
        }
        else{
            firstNoticeBox.stop().css({'transform' : 'translateX('+-(NoticeImgwidth*index)+'px'});
            lastNoticeBox.stop().css({'transform' : 'translateX('+-(NoticeImgwidth*index)+'px'});
        } 
    }

    function removeTransition(){
        firstNoticeBox.addClass('remove_transition');
        lastNoticeBox.addClass('remove_transition')
        firstNoticeBox.slice(0,notice_size-1).css({'transform':'translateX('+0+'px'});
        lastNoticeBox.slice(0,notice_size-1).css({'transform':'translateX('+0+'px'});
    }
    
    function NoticeBanner(){
        currentNotice++;
        if(currentNotice >= notice_size){
            currentNotice = 1;
            firstNoticeBox.removeClass('remove_transition');
            lastNoticeBox.removeClass('remove_transition');
        }
        MoveNotice(currentNotice)
    }


    // event
    function Event(){
        $(window).on('scroll',scrollHeader);
        notice_nextbtn.bind('click', NoticeBanner);
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
