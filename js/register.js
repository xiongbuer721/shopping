window.onload = function() {
    var regtel = /^1[3|4|5|7|8]\d{9}$/; //手机号码的正则表达式
    var tel = document.querySelector('#tel');
    var msg = document.querySelector('#msg');
    var regmsg = /^\d{6}$/;
    var pwd = document.querySelector('#pwd');
    var regpwd = /^[a-zA-Z0-9_-]{6,}$/
    var sure = document.querySelector('#sure');


    tel.onblur = function() {
            if (regtel.test(this.value)) {
                // console.log('yes');
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_ico"></i>输入成功';
            } else {
                // console.log('error');
                this.nextElementSibling.className = 'error';

                this.nextElementSibling.innerHTML = '<i class="error_ico"></i>手机号格式不正确，请重新输入';
            }
        },
        msg.onblur = function() {
            if (regmsg.test(this.value)) {
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_ico"></i>验证码输入正确';
            } else {
                this.nextElementSibling.className = 'error';

                this.nextElementSibling.innerHTML = '<i class="error_ico"></i>验证码不正确，请重新输入';
            }
        },
        pwd.onblur = function() {
            if (regpwd.test(this.value)) {
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_ico"></i>';
            } else {
                this.nextElementSibling.className = 'error';

                this.nextElementSibling.innerHTML = '<i class="error_ico"></i>密码不小于6位数，请重新输入';
            }
        },
        sure.onblur = function() {
            if (this.value === pwd.value) {
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_ico"></i>';
            } else {
                this.nextElementSibling.className = 'error';

                this.nextElementSibling.innerHTML = '<i class="error_ico"></i>两次密码不一致，请重新输入';
            }
        }

}