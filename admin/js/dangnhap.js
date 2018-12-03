// JavaScript Document
function password_help(){
    var detail = document.getElementById('forget_pass');
    if(detail.style.display == 'none'){
        detail.style.display = 'block';
    }else{
        detail.style.display = 'none';
    }
}

function validateLogin(){
    var user = document.getElementById('username').value;	
    var pass = document.getElementById('password').value;
    var error = "";
    if(user.length < 2 || pass.length < 5) error = "Email đăng nhập và mật khẩu cần đầy đủ !";
    if(error != "") {alert(error); return false;}
    return true;
}
