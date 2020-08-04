window.addEventListener('load', function() {
    var preview_img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    //1.当鼠标经过preview_img区域显示big和mask
    preview_img.addEventListener('mouseover', function() {
            mask.style.display = 'block';
            big.style.display = 'block';
        })
        //2.鼠标移动的时候让黄色的盒子跟着鼠标走
    preview_img.addEventListener('mouseout', function() {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    preview_img.addEventListener('mousemove', function(e) {
        //获得鼠标在盒子中的位置
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        //     console.log(x);
        //
        //（2）减去盒子高度的一半是mask的最终left和top值了
        //（3） console.log(y);mask移动的距离
        var maskX = x - mask.offsetWidth;
        var maskY = y - mask.offsetHeight;

        //（4）如果x的坐标小于0，就让他直接等于0
        var maskMax = preview_img.offsetWidth - mask.offsetWidth;
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= preview_img.offsetWidth - mask.offsetWidth) {
            maskX = maskMax;
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= preview_img.offsetHeight - mask.offsetHeight) {
            maskY = maskMax;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        //3.大图片的移动距离=遮挡层的移动距离*大图片的移动距离/遮挡蹭的最大移动距离4
        var bigImg = document.querySelector('.bigImg');
        //大图片的最大移动距离
        var bigMax = bigImg.offsetWidth - big.offsetWidth;
        //大图片的移动距离
        var bigX = maskX * bigMax / maskMax;
        var bigY = maskY * bigMax / maskMax;
        bigImg.style.left = -bigX + 'px';
        bigImg.style.top = -bigY + 'px';


    })
})