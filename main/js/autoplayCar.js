setInterval(function () {
    var input_btn1 = document.getElementById("btn1");
    var input_btn2 = document.getElementById("btn2");
    var input_btn3 = document.getElementById("btn3");
    var right_btn3 = document.getElementById("right_btn3");

    if (
        input_btn2.checked === false &&
        input_btn3.checked === false
    )
    {
        input_btn2.checked = true;
        // input_btn2.click()
    }
    else if (
        input_btn1.checked === false &&
        input_btn2.checked === true &&
        input_btn3.checked === false
    )
    {
        input_btn3.checked = true;
        // input_btn3.click()
    }
    else {
        right_btn3.checked = true;
    }
}, 3000);