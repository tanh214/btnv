function toggleColorOptions() {
    var colorOptions = document.getElementById('colorOptions');
    if (colorOptions.style.display === 'none') {
        colorOptions.style.display = 'block';
    } else {
        colorOptions.style.display = 'none';
    }
}

function changeTitleColor(color) {
    document.getElementById('formTitle').style.color = color;
}

function validateForm() {
    var ho = document.getElementById('ho').value;
    var ten = document.getElementById('ten').value;
    var phone = document.getElementById('phone').value;
    var day = document.getElementById('day').value;
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;
    
    if (ho === "") {
        alert("họ đou đcu m");
        return false;
    }
    if (ten === "") {
        alert("m mồ côi ak mà k có tên");
        return false;
    }
    if (phone === "" || !/^\d{10}$/.test(phone)) {
        alert("del đưa số điện thoạt thì s liên lạc??");
        return false;
    }
    if (day === "" || month === "" || year === "") {
        alert("sủa ngay cái sinh nhật");
        return false;
    }
    
    alert("lên gr nợ nhận thông tin nha");
    return true;
}
