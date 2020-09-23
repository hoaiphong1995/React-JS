var dsnv = new DanhSachNhanVien();

function themNhanVien() {
    var maNV = getElm("txtMaNV").value;
    var tenNV = getElm("txtTenNV").value;
    var diaChi = getElm("txtDiaChiNV").value;
    var phoneNV = getElm("txtPhoneNV").value;
    var emailNV = getElm("txtEmailNV").value;
    var luongNV = getElm("txtLuongNV").value;
    var nhanVien = new NhanVien(maNV, tenNV, diaChi, phoneNV, emailNV, luongNV);
    dsnv.themNhanVien(nhanVien);
    console.log(dsnv);
    taoBang();
}

function taoBang() {
    var tBody = getElm("tbodyNhanVien");
    tBody.innerHTML = "";
    for (var i = 0; i < dsnv.mangNhanVien.length; i++) {
        // Tao dòng
        var tagTR = document.createElement("tr");
        // Tạo cột
        var tdmaNV = document.createElement("td");
        var tdtenNV = document.createElement("td");
        var tddiaChi = document.createElement("td");
        var tdphoneNV = document.createElement("td");
        var tdemailNV = document.createElement("td");
        var tdtinhluongNV = document.createElement("td");

        // Tạo value cho cột
        tdmaNV.innerHTML = dsnv.mangNhanVien[i].maNV;
        tdtenNV.innerHTML = dsnv.mangNhanVien[i].tenNV;
        tddiaChi.innerHTML = dsnv.mangNhanVien[i].diaChi;
        tdphoneNV.innerHTML = dsnv.mangNhanVien[i].phoneNV;
        tdemailNV.innerHTML = dsnv.mangNhanVien[i].emailNV;
        tdtinhluongNV.innerHTML = dsnv.mangNhanVien[i].tinhluongNV();

        // Gán cột cho dòng
        tagTR.appendChild(tdmaNV);
        tagTR.appendChild(tdtenNV);
        tagTR.appendChild(tddiaChi);
        tagTR.appendChild(tdphoneNV);
        tagTR.appendChild(tdemailNV);
        tagTR.appendChild(tdtinhluongNV);

        // Gán tr vào tBody
        tBody.appendChild(tagTR);

    }
}

function getElm(name) {
    return document.getElementById(name);
}