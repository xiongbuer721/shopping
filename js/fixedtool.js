$(function() {
    var toolTop = $('.recom').offset().top;
    toggleTool(); //解决页面一刷新电梯导航不出现的bug
    //节流阀，互斥锁
    var flag = true;

    function toggleTool() {
        if ($(document).scrollTop() >= toolTop) {
            $('.fixedtool').fadeIn();
        } else {
            $('.fixedtool').fadeOut();

        }
    }
    $(window).scroll(function() {

        toggleTool();
        //3.页面滚动到某个内容区域，左侧电梯导航li相应添加和删除current类名
        if (flag) {
            $('.floor .w').each(function(i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    // console.log(i);
                    $('.fixedtool li').eq(i).addClass('current').siblings().removeClass('current');
                }
            })
        }

    });
    //2.点击电梯导航页面可以滚动到相应内容区域
    $('.fixedtool li').click(function() {
        flag = false; //取消左侧电梯滚动事件
        // console.log($(this).index());
        var current = $('.floor .w').eq($(this).index()).offset().top;
        console.log();
        $('body,html').stop().animate({
            scrollTop: current
        }, function() {
            flag = true;
        });
        //点击之后让当前的li添加current类名，兄弟移除current类名
        $(this).addClass('current').siblings().removeClass('current');
    })


})