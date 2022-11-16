$(function(){
    var header_logo;
    var notice_nextbtn;
    var notice_prevbtn;
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
    function MoveNotice(){
        firstNoticeBox = $("#first_noticebox").children('img');
        lastNoticeBox = $("#last_noticebox").children('img');

        firstNoticeBox.eq(0).stop().css({'margin-left':'-100%'});
        setTimeout(function(){
            firstNoticeBox.eq(0).appendTo($('#first_noticebox'));
            firstNoticeBox.css({'margin-left':'0%'});
        },500);

        lastNoticeBox.eq(0).stop().css({'margin-left':'-100%'});
        setTimeout(function(){
            lastNoticeBox.eq(0).appendTo($('#last_noticebox'));
            lastNoticeBox.css({'margin-left':'0%'});
        },500)
    }

    function PrevNotice(){
        firstNoticeBox = $("#first_noticebox").children('img');
        lastNoticeBox = $("#last_noticebox").children('img');

        firstNoticeBox.last().stop().css({'margin-left':'-100%'});
        firstNoticeBox.last().prependTo($('#first_noticebox'));
        setTimeout(function(){
            firstNoticeBox.last().stop().css({'margin-left':'100%'});
            firstNoticeBox.css({'margin-left':'0%'});
        },50);

        lastNoticeBox.last().stop().css({'margin-left':'-100%'});
        lastNoticeBox.last().prependTo($('#last_noticebox'));
        setTimeout(function(){
            lastNoticeBox.last().stop().css({'margin-left':'100%'});
            lastNoticeBox.css({'margin-left':'0%'});
        },50);
    } 

    setInterval(MoveNotice, 4000)

    // event
    function Event(){
        $(window).on('scroll',scrollHeader);
        notice_nextbtn.bind('click', MoveNotice);
        notice_prevbtn.bind('click',PrevNotice);
    }





    // responsive
    $(window).resize(function(){
        MoveBanner(currentIndex);
    })
    $(window).trigger("resize");

})
