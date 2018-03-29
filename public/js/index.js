/**
 * Created by MingYue.Zhang on 2018/3/29.
 */
$(function () {

    var login = $('#login')
    var register = $('#register')

    login.find('a.tab').on('click',function () {
        register.show();
        login.hide();
    })

    register.find('a.tab').on('click',function () {
        login.show();
        register.hide();
    })
    
    register.find('button').on('click',function () {
        //通过ajax提交请求
        $.ajax({
            type:'POST',
            url:'/api/user/register',
            data:{
                username:register.find('[name="username"]').val(),
                password:register.find('[name="password"]').val(),
                repassword:register.find('[name="repassword"]').val(),
            },
            dataType:'json',
            success:function (res) {
                console.log('ajax成功',res)
            },
            error:function (res) {
                console.log('ajax失败',res)
            }
        })
    });

});