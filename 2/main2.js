let result = document.getElementById("result");
let numbers = document.getElementsByClassName("numbers");
let operatorBtns = document.getElementsByClassName("operators");
let AC = document.getElementById("AC");
let displays = "";


for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    // 加数字
    number.onclick = function () {
        displays += number.innerHTML;
        result.innerHTML = displays;
    }
}

const ops = ["+", "-", "*", "/"]

for (let a = 0; a < operatorBtns.length; a++) {
    let operator = operatorBtns[a];
    // 加运算符
    operator.onclick = function () {
        // 获取当前选中的运算符
        const currentOp = operator.innerHTML;

        if (displays.length == 0) {
            // nothing
            return
        }

        // 最后一位的下标
        const lastIndex = (displays.length - 1);
        // 最后一位
        const last = displays[lastIndex];

        // displays最后一位 是否在 ops里。
        if (ops.includes(last))
            displays[lastIndex] = currentOp;
        // 最后一位是不是运算符
        else
            displays += currentOp

        // 手动把 displays 显示在页面上
        result.innerHTML = displays;
    }
}

// 等号
equal.onclick = function () {
    result.innerHTML = displays = eval(displays);
}

// 清零
AC.onclick = function () {
    displays = ""
    result.innerHTML = 0
}