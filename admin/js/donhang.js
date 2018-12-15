// JavaScript Document

function DonHang(khach_hang, thoi_diem, tong_tien, tinh_trang) {
    this.khach_hang = khach_hang;
    this.thoi_diem = thoi_diem;
    this.tong_tien = tong_tien;
    this.tinh_trang = tinh_trang;
}

var donhang = new Array();
donhang[0] = new DonHang("Nguyễn Văn Tèo", "20/03/2017", "954.000đ", "Đã giao");
donhang[1] = new DonHang("Phan Quốc Nghĩa", "26/12/2018", "335.000đ", "Chưa giao");
donhang[2] = new DonHang("Đỗ Duy Hàm", "20/09/2018", "300.000đ", "Đã giao");
donhang[3] = new DonHang("Trần Thế Ngọc", "29/11/2018", "215.000đ", "Chưa giao");
donhang[4] = new DonHang("Trương Ngọc Ánh", "20/03/2017", "185.000đ", "Đã giao");
donhang[5] = new DonHang("Phạm Vũ Bảo", "20/03/2016", "750.000đ", "Chưa liên lạc");
donhang[6] = new DonHang("Hà Bảo Trân", "10/02/2015", "1.540.000đ", "Đã giao");
donhang[7] = new DonHang("Nguyễn Quang Trung", "20/03/2017", "555.000đ", "Chưa liên lạc");
donhang[8] = new DonHang("Lê Quốc Thắng", "13/03/2017", "846.000đ", "Đã giao");
donhang[9] = new DonHang("Nguyễn Trương Gia Bảo", "25/03/2015", "4.650.000đ", "Chưa giao");
donhang[10] = new DonHang("Nguyễn Quốc Hương", "03/08/2017", "850.000đ", "Chưa liên lạc");

function load_don_hang() {
    var s = 0;
    var stt = 1;
    for (var i = 0; i < donhang.length; i++) {
        s += donhang[i].tong_tien;
        document.getElementsByTagName("tbody")[0].innerHTML += '\
                            <tr>\
                                <td>' + (stt++) + '</td>\
                                <td>' + donhang[i].khach_hang + '</td>\
                                <td>' + donhang[i].thoi_diem + '</td>\
                                <td>' + donhang[i].tong_tien + '</td>\
                                <td>' + donhang[i].tinh_trang + '</td>\
                                <td>\
                                    <button class="xoa_dh">Xóa</button><br>\
                                    <button class="sua_dh">Sửa</button><br>\
                                    <button class="xem_dh">Chi Tiết</button>\
                                </td>\
                            </tr>';
    }
}

function load_trang_thai_don_hang(va) {
    var s = 0;
    var stt = 1;
    document.getElementsByTagName("tbody")[0].innerHTML = "";
    for (var i = 0; i < donhang.length; i++) {
        if (va === donhang[i].tinh_trang || va === "all") {
            s += donhang[i].tong_tien;
            document.getElementsByTagName("tbody")[0].innerHTML += '\
                            <tr>\
                                <td>' + (stt++) + '</td>\
                                <td>' + donhang[i].khach_hang + '</td>\
                                <td>' + donhang[i].thoi_diem + '</td>\
                                <td>' + donhang[i].tong_tien + '</td>\
                                <td>' + donhang[i].tinh_trang + '</td>\
                                <td>\
                                    <button class="xoa_dh">Xóa</button><br>\
                                    <button class="sua_dh">Sửa</button><br>\
                                    <button class="xem_dh">Chi Tiết</button>\
                                </td>\
                            </tr>';
        }
	}
}

function xem_chi_tiet_hoa_don() {
    var btn = document.getElementsByClassName('xem_dh');
    for (var i = 0; i < btn.length - 1; i++) {
        load_chi_tiet_hoa_don(i, btn[i]);
    }
}
/*
function xem_chi_tiet_hoa_don_change() {
    var btn = document.getElementsByClassName('xem_dh');
    for (var i = 0; i < btn.length - 1; i++) {
        load_chi_tiet_hoa_don_change(i, btn[i]);
    }
}*/

function load_chi_tiet_hoa_don(i, e) {
    e.onclick = () => {
        document.getElementsByClassName('popup-dh')[0].style.display = "block";
		document.getElementsByClassName('popup-dh-left__input')[0].innerHTML = i+1;
        document.getElementsByClassName('popup-dh-left__input')[1].innerHTML = donhang[i].khach_hang;
        document.getElementsByClassName('popup-dh-left__input')[2].innerHTML = donhang[i].thoi_diem;
        document.getElementsByClassName('popup-dh-left__input')[3].innerHTML = donhang[i].tong_tien;
        document.getElementsByClassName('popup-dh-left__input')[4].innerHTML = donhang[i].tinh_trang;
		document.getElementsByClassName('popup-dh-left__input')[5].innerHTML = '<p>Thức ăn spo cấp NutriSource thịt gà tươi\
																				<p>Thức ăn spo cấp NutriSource thịt gà tươi\
																				<p>Thức ăn spo cấp NutriSource thịt gà tươi\
																				<p>Thức ăn spo cấp NutriSource thịt gà tươi</p>';
    }
}
/*
function load_chi_tiet_hoa_don_change(i, e) {
    e.onclick = () => {
        document.getElementsByClassName('popup-dh')[0].style.display = "block";
		document.getElementsByClassName('popup-dh-left__input')[0].innerHTML = i+1;
        document.getElementsByClassName('popup-dh-left__input')[1].innerHTML = donhang[i].khach_hang;
        document.getElementsByClassName('popup-dh-left__input')[2].innerHTML = donhang[i].thoi_diem;
        document.getElementsByClassName('popup-dh-left__input')[3].innerHTML = donhang[i].tong_tien;
        document.getElementsByClassName('popup-dh-left__input')[4].innerHTML = donhang[i].tinh_trang;
		document.getElementsByClassName('popup-dh-left__input')[5].innerHTML = '<p>Thức ăn spo cấp NutriSource thịt gà tươi\
																				<p>Thức ăn spo cấp NutriSource thịt gà tươi\
																				<p>Thức ăn spo cấp NutriSource thịt gà tươi\
																				<p>Thức ăn spo cấp NutriSource thịt gà tươi</p>';
    }
}*/

function xoa_sua_don_hang() {
    var xoa = document.getElementsByClassName('xoa_dh');
    var sua = document.getElementsByClassName('sua_dh');
    for (var i = 0; i < xoa.length; i++) {
        xoa_dh_i(xoa[i], i);
        them_thong_tin_sua_don_hang(sua[i], i);
    }
}
/*
function xoa_sua_don_hang_if_change() {
    var xoa = document.getElementsByClassName('xoa_dh');
    var sua = document.getElementsByClassName('sua_dh');
    for (var i = 0; i < xoa.length; i++) {
        xoa_dh_i_change(xoa[i], i);
        them_thong_tin_sua_don_hang_change(sua[i], i);
    }
}*/

function them_thong_tin_sua_don_hang(e, i) {
    var sua_dh = document.getElementsByClassName('sua-dh');
    var thong_tin = document.querySelectorAll('tbody tr td');
    e.addEventListener('click', function() {
        document.getElementsByClassName('popup-dh')[1].style.display = 'block';
        sua_dh[0].value = thong_tin[i * 6 + 0].innerHTML;
        sua_dh[1].value = thong_tin[i * 6 + 1].innerHTML;
        sua_dh[2].value = thong_tin[i * 6 + 2].innerHTML;
        sua_dh[3].value = thong_tin[i * 6 + 3].innerHTML;
        sua_dh[4].value = thong_tin[i * 6 + 4].innerHTML;
    });
}
/*
function them_thong_tin_sua_don_hang_change(e, i) {
    var sua_dh = document.getElementsByClassName('sua-dh');
    var thong_tin = document.querySelectorAll('tbody tr td');
    e.addEventListener('click', function() {
        document.getElementsByClassName('popup-dh')[1].style.display = 'block';
        sua_dh[0].value = thong_tin[i * 6 + 0].innerHTML;
        sua_dh[1].value = thong_tin[i * 6 + 1].innerHTML;
        sua_dh[2].value = thong_tin[i * 6 + 2].innerHTML;
        sua_dh[3].value = thong_tin[i * 6 + 3].innerHTML;
        sua_dh[4].value = thong_tin[i * 6 + 4].innerHTML;
    });
}
*/
function sua_thong_tin_don_hang() {
    var thong_tin = document.querySelectorAll('tbody tr td');
    var input = document.querySelectorAll('.popup-dh__content .sua-dh');
    var i = input[0].value - 1;
    thong_tin[(i) * 6 + 1].innerHTML = input[1].value;
    thong_tin[(i) * 6 + 2].innerHTML = input[2].value;
    thong_tin[(i) * 6 + 3].innerHTML = input[3].value;
    thong_tin[(i) * 6 + 4].innerHTML = input[4].value;
    document.getElementsByClassName('back')[i+1].click();
}

function xoa_dh_i(e, i) {
    e.addEventListener('click', function(e) {
        if (confirm('Xác nhận xoá')) {
            document.querySelectorAll('tbody tr')[i+1].style.display = 'none';
        }
    });
}
/*
function xoa_dh_i_change(e, i) {
    e.addEventListener('click', function(e) {
        if (confirm('Xác nhận xoá')) {
            document.querySelectorAll('tbody tr')[i].style.display = 'none';
        }
    });
}*/

function close_popup_dh_sua() {
    document.getElementsByClassName('popup-dh')[1].style.display = 'none';
}

function close_popup_dh_xem() {
    document.getElementsByClassName('popup-dh')[0].style.display = 'none';
}