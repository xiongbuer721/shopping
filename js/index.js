window.addEventListener('load', function() {
    //1.获取元素
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;
    focus.addEventListener('mouseenter', function() {
            arrow_l.style.display = 'block';
            arrow_r.style.display = 'block';
            //清除定时器·
            clearTimeout(timer);
            timer = null;
        }),
        focus.addEventListener('mouseleave', function() {
            arrow_l.style.display = 'none';
            arrow_r.style.display = 'none';
            timer = setInterval(function() {
                //手动调用事件
                arrow_r.click();
            }, 2000);
        });
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    for (var i = 0; i < ul.children.length; i++) {
        //创建一个li
        var li = document.createElement('li');
        //记录当前那小圆圈的索引号，通过自定义属性来做
        li.setAttribute('index', i);
        //把li插入ol里面
        ol.appendChild(li);

        //小圆圈排他思想,在生成小li的同时直接绑定点击事件
        li.addEventListener('click', function() {
            // 干掉所有人
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            //   留下我自己
            this.className = 'current';
            //点击小圆圈，移动图片，设置移动的是ul
            //ul的移动距离  小圆圈的索引号衬衣图片的宽度 （负值）
            var index = this.getAttribute('index');
            //   当我们点击了某个小li，我们就需要把li的索引号给num；
            num = index;
            // 当我们点击了某个小li就要把这个li的索引号给circle
            circle = index;
            var focusWidth = focus.offsetWidth;
            console.log(focusWidth);
            animate(ul, -index * focusWidth);
        })

    }
    //把ol的第一个li设置类名为current
    ol.children[0].className = 'current';
    //6.克隆第一张图片并且放到最后面,true是深克隆，
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    //7.点击右侧按钮，图片滚动一张
    var num = 0;
    var circle = 0;
    arrow_r.addEventListener('click', function() {
        //如果走到了最后复制的一张图片，此时，我们的ul要快速复原left为0；
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul, -num * focusWidth);
        //8.点击右侧按钮，小圆圈跟随一起变化，可以再声明一个全局变量
        circle++;
        //如果circle==7说明走到最后克隆的图片了
        if (circle == ol.children.length) {
            circle = 0;
        }
        // 先清除其余小圆圈的current类名
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        //留下当前小圆圈的current类名
        ol.children[circle].className = 'current';
    });
    //9.左侧按钮
    arrow_l.addEventListener('click', function() {
        //如果走到了最后复制的一张图片，此时，我们的ul要快速复原left为0；
        if (num == 0) {
            num = ul.children.length - 1;
            ul.style.left = -(ul.children.length - 1) * focusWidth + 'px';

        }
        num--;
        animate(ul, -num * focusWidth);
        //8.点击右侧按钮，小圆圈跟随一起变化，可以再声明一个全局变量
        circle--;
        //如果circle<0说明第一张图片，则小雨阿奴去哪要改为第6个小圆圈（5）
        if (circle < 0) {
            circle = ol.children.length - 1;
        }
        // 先清除其余小圆圈的current类名
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        //留下当前小圆圈的current类名
        ol.children[circle].className = 'current';
    });
    //10.自动播放图片
    var timer = setInterval(function() {
        //手动调用事件
        arrow_r.click();
    }, 2000);

});