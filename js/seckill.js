$(function() {

    $('.timeline_list').children().click(function() {

            var index = $(this).index();
            $('.sk_bd ul').eq(index).show();
            $('.sk_bd ul').eq(index).siblings('ul').hide();
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        })
        // $(window).scroll(function() {
        //     var scroH = $(window).scrollTop(); //滚动高度      

    //     if (scroH >= 255) {
    //         //距离顶部大于255px时    
    //         $('#times').addClass = 'timelinefixed';
    //     } else {
    //         $('#times').removeClass = 'timelinefixed';
    //     }

    // })
})
document.addEventListener('scroll', function(event) {
    var scrollTop = document.documentElement.scrollTop;
    var timeline = document.querySelector('.timeline_list');
    if (scrollTop > 255) {
        timeline.className = 'timeline_list timelinefixed';
    } else {
        timeline.className = 'timeline_list';
    }
})