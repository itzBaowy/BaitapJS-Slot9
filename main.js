// bài 1: tính lương nhân viên

/**
 * Đầu vào: 
 *          - biến salaryPerDay chứa giá trị lương 1 ngày = 100.000
 *          - biến workingDay chứa số ngày làm của nhân viên do người dùng nhập
 *          - biến button1 để thực hiện xử lí và in kết quả khi người dùng kích hoạt 
 * Xử lí:   
 *          - tạo biến totalSalary để lưu kết quả lương của nhân viên qua công thức salaryPerDay * workingDay
 * Đầu ra:
 *          - in ra totalSalary trên thẻ html dùng innerHTML 
 */

let salaryPerDay = 100000;
let workingDay = document.getElementById("txtWorkingDay");
let button1 = document.getElementById("btnSubmit1");
let result1 = document.getElementById("result1");

let totalSalary;

button1.onclick = function () {
    totalSalary  = salaryPerDay * workingDay.value;
    result1.innerHTML = "Tổng lương : " + totalSalary; 
}


// bài 2: tính giá trị trung bình của 5 số

/**
 * Đầu vào: 
 *          - gồm 5 biến num1, num2, num3,num4, num5 chứa giá trị của 5 số thực do người dùng nhập
 *          - sử dụng parseFloat() để ép kiểu value của number thành kiểu dữ liệu float
 *          - biến button2 để thực hiện xử lí và in kết quả khi người dùng kích hoạt 
 * Xử lí:   
 *          - tạo biển averageNum để tính trung bình của 5 số này
 * 
 * Đầu ra:
 *          - in ra averageNum trên thẻ html dùng innerHTML
 */



let button2 = document.getElementById("btnSubmit2");
let result2 = document.getElementById("result2");

let averageNum; 

button2.onclick = function() {
    let num1 = parseFloat(document.getElementById("number1").value);
    let num2 = parseFloat(document.getElementById("number2").value);
    let num3 = parseFloat(document.getElementById("number3").value);
    let num4 = parseFloat(document.getElementById("number4").value);
    let num5 = parseFloat(document.getElementById("number5").value);
    averageNum = (num1 + num2 + num3 + num4 + num5) / 5;
    result2.innerHTML = "Trung bình: " + averageNum;
}


// bài 3: quy đổi tiền
/**
 *  Đầu vào:
 *            - biến usdCurrency chứa giá trị tiền USD cần chuyển đổi do người dùng nhập
 *            - biến vndPerUSD chứa giá trị của 1 đồng USD khi chuyển sang đồng VND
 *  Xử lí:
 *            - tạo biến vndCurrency lưu giá trị đồng VND sau khi tính toán từ giá trị USD dùng công thức vndCurrency = vndPerUSD * usdCurrency
 *  Đầu ra:   
 *            - in ra vndCurrency trên thẻ html dùng innerHTML, dùng NumberFormat để format theo đơn vị tiền tệ Việt Nam
 */

let usdCurrency = document.getElementById("txtCurrency");
let vndPerUSD = 23500;
let button3 = document.getElementById("btnSubmit3");
let result3 = document.getElementById("result3");

let vndCurrency;

button3.onclick = function () {
    vndCurrency = vndPerUSD * usdCurrency.value;
    result3.innerHTML = "VNĐ: " + new Intl.NumberFormat('vn-VN').format(vndCurrency);
}

// bài 4: tính diện tích, chu vi hình chữ nhật

/**
 * Đầu vào:
 *        - biến length lưu chiều dài lấy từ ô input có id "length"
 *        - biến width lưu chiều rộng lấy từ ô input có id "width"
 * 
 * Xử lý:
 *        - tạo biến area lưu gía trị diện tích của hình chữ nhật bằng công thức diện tích = chiều dài * chiều rộng
 *        - tạo biến perimeter lưu giá trị chu vi của hình chữ nhật qua công thức chu vi = (chiều dài + chiều rộng) * 2
 * 
 * Đầu ra:
 *        - in kết quả diện tích và chu vi ra HTML bằng innerHTML
 */

let button4 = document.getElementById("btnSubmit4");
let result4 = document.getElementById("result4");

button4.onclick = function () {
    let length = parseFloat(document.getElementById("length").value);
    let width = parseFloat(document.getElementById("width").value);

    let area = length * width;
    let perimeter = (length + width) * 2;

    result4.innerHTML = "Diện tích: " + area + ", Chu vi: " + perimeter;
}

// bài 5: tính tổng 2 ký số

/**
 * Đầu vào:
 *        - biến số có 2 chữ số được nhập từ input có id "twoDigitNumber"
 * 
 * Xử lý:
 *        - tạo biến lấy hàng đơn vị: soHangDV = twoDigitNum % 10
 *        - lấy hàng chục: soHangChuc = twoDigitNum / 10 , sử dụng Math.floor để làm tròn xuống số thực thành số nguyên nhỏ nhất gần nó
 *        - tổng 2 ký số = soHangDV + soHangChuc
 *        - kiểm tra xem người dùng nhập số có hợp lệ hay không 
 *                      -- phải là số 2 chữ số nên điều kiện phải là từ 10 đến 99 nếu không sẽ báo lỗi và dùng return để thoát khỏi function
 *                      -- không được bỏ trống --> dùng phương thức isNaN() để check trống nếu là true -> báo lỗi và thoát khỏi function
 * Đầu ra:
 *        - in kết quả tổng ra HTML bằng innerHTML
 */

let button5 = document.getElementById("btnSubmit5");
let result5 = document.getElementById("result5");


button5.onclick = function () {
    let twoDigitNum = parseInt(document.getElementById("twoDigitNumber").value);

    if (isNaN(twoDigitNum) || twoDigitNum < 10 || twoDigitNum > 99) {
        result5.innerHTML = "Vui lòng nhập số có đúng 2 chữ số !!!";
        return;
    }

    let soHangDV = twoDigitNum % 10;
    let soHangChuc = Math.floor(twoDigitNum / 10);
    let tong = soHangDV + soHangChuc;

    result5.innerHTML = "Tổng 2 ký số : " + soHangChuc + " + " + soHangDV + " = " + tong;
};