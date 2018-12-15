
function san_pham(masp, tensp, gia, hinh , hien_thi) {
    this.masp = masp;
    this.tensp = tensp;
    this.gia = gia;
    this.hinh = hinh;
	this.hien_thi = hien_thi;
}
var sp = new Array();
sp[0] = new san_pham("SP1", "SY - Nệm vòm cao cấp nhiều màu","510.000đ", "images/sanpham/meo/giuong/giuong5.jpg","on");
sp[1] = new san_pham("SP2", "LHK - Nệm hình chân chó","309.000đ", "images/sanpham/meo/giuong/giuong1.jpg","on");
sp[2] = new san_pham("SP3", "Petstar - Nệm chữ nhật","150.000đ", "images/sanpham/meo/giuong/giuong4.jpg","on");
sp[3] = new san_pham("SP4", "Petstar - Thảm nằm","140.000đ", "images/sanpham/meo/giuong/giuong3.jpg","on");
sp[4] = new san_pham("SP5", "Ferplast - Vali ATLAS PROFESSIONAL","509.000đ", "images/sanpham/meo/giuong/giuong7.jpg","on");
sp[5] = new san_pham("SP6", "Lồng bánh xe","824.000đ", "images/sanpham/meo/giuong/giuong6.jpg","on");
sp[6] = new san_pham("SP7", "Nệm nằm Petdream","172.000đ", "images/sanpham/meo/giuong/giuong2.jpg","on");


function load_quan_ly_sp() {
    for (var i = 0; i < sp.length; i++) {
        document.getElementById('table-sp').innerHTML += '\
                    <tr>\
                        <td>' + (i + 1) + '</td>\
						<td><img src="../' + sp[i].hinh + '" width="110px"></td>\
                        <td>' + sp[i].masp + '</td>\
                        <td>' + sp[i].tensp+ '</td>\
                        <td>' + sp[i].gia + '</td>\
                        <td>' + sp[i].hien_thi + '</td>\
                        <td>\
                            <button class="xoa_sp">Xóa</button><br>\
                            <button class="sua_sp">Sửa</button>\
                        </td>\
                    </tr>';
    }
}
function popup_themsp() {
    document.getElementsByClassName('popup-themsp')[0].style.display = 'block';
}

function close_popup_themsp() {
    document.getElementsByClassName('popup-themsp')[0].style.display = 'none';
	try {
        document.getElementsByClassName('popup-themsp')[1].style.display = 'none';
    } catch (e) {
        console.log("Đang ở trang Quản lý Đơn Hàng");
    }
}
function them_xoa_sp() {
    var sua_sp = document.getElementsByClassName('sua_sp');
    var xoa_sp = document.getElementsByClassName('xoa_sp');
    for (var i = 0; i < sua_sp.length; i++) {
        them_thong_tin_sua_sp(sua_sp[i], i);
        xoa_sp_i(xoa_sp[i], i);
    }
};
function xoa_sp_i(e, i) {
    e.addEventListener('click', function(e) {
        if (confirm('Xác nhận xoá')) {
            document.querySelectorAll('tbody tr')[i+1].style.display = 'none';
        }
    });
}
function them_thong_tin_sua_sp(e, i) {
    var sua_sp = document.getElementsByClassName('sua-sp');
    var thong_tin = document.querySelectorAll('tbody tr td');
    e.addEventListener('click', function() {
        document.getElementsByClassName('popup-themsp')[1].style.display = 'block';
        var ten_hinh = thong_tin[i * 7 + 1].innerHTML.split(' ')[1].split('/')[5].split('"')[0];
        document.getElementsByClassName('sua-hinh')[0].setAttribute('src', '../images/sanpham/meo/giuong/' + ten_hinh);
        sua_sp[0].value = thong_tin[i * 7+ 0].innerHTML;
        sua_sp[1].value = thong_tin[i * 7 + 2].innerHTML;
        sua_sp[2].value = thong_tin[i * 7 + 3].innerHTML;
        sua_sp[3].value = thong_tin[i * 7 + 4].innerHTML;
    });
}


function sua_thong_tin_sp() {
    var thong_tin = document.querySelectorAll('tbody tr td');
    var input = document.querySelectorAll('.popup-themsp__content .sua-sp');
    var i = input[0].value - 1;
    thong_tin[(i) * 7 + 2].innerHTML = input[1].value;
    thong_tin[(i) * 7 + 3].innerHTML = input[2].value;
    thong_tin[(i) * 7 + 4].innerHTML = input[3].value;
	thong_tin[(i) * 7 + 1].innerHTML = '<img src="../images/sanpham/meo/giuong/' + input[4].value.split('\\')[2] + '" width = "110px"></img>';
    thong_tin[(i) * 7 + 5].innerHTML = input[4].value;
    document.getElementsByClassName('back')[0].click();
}
function them_mot_sp() {
    var input = document.querySelectorAll('.popup-themsp__content .them-mot-sp');
    var tr = document.querySelectorAll('tbody tr');

    document.getElementById('table-sp').innerHTML += '\
                    <tr class="sua_thanh_cong">\
                        <td>' + (tr.length ) + '</td>\
                        <td><img src="../images/sanpham/' + input[3].value.split('\\')[2] + '" width = "110px"></td>\
                        <td>' + input[0].value + '</td>\
                        <td>' + input[1].value + '</td>\
                        <td>' + input[2].value + '</td>\
                        <td>' + input[4].value + '</td>\
                        <td>\
                            <button class="xoa_sp">Xóa</button><br>\
                            <button class="sua_sp">Sửa</button>\
                        </td>\
                    </tr>';
    document.getElementsByClassName('back')[0].click();
}
