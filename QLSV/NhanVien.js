function NhanVien(_maNV, _tenNV, _diaChi, _phoneNV, _emailNV, _luongNV, _tinhluongNV) {
    this.maNV = _maNV;
    this.tenNV = _tenNV;
    this.diaChi = _diaChi;
    this.phoneNV = _phoneNV;
    this.emailNV = _emailNV;
    this.luongNV = _luongNV;
    this.tinhluongNV = _tinhluongNV;

    this.tinhluongNV = function() {
        return ((parseFloat(this.luongNV)) * 2)
    }
}