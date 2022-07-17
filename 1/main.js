let a = "";
let b = "";
let op = "";
function displayNumber(num) {
    console.log(num);
    if (op == "") {
        a += num
        console.log("a", a);
    }
    else {
        b += num
        console.log("b", b);
    }
}
function saveOperator(operator) {
    op = operator

}
function displayClear(c) {
    c = clear
    op = ""
    a = ""
    b = ""
}
function clear() {
    op = ""
    a = ""
    b = ""
}
function displayDel(del) {
    if (op == "") {
        a = a.slice(0, - 1);
    }
    if (op != "") {
        b = b.slice(0, - 1);
    }
    if (b == "") {
        op = ""
    }
}
function displayResult() {
    if (op == "divide") {
        console.log(Number.parseFloat(a) / Number.parseFloat(b));
    }
    if (op == 'multiply') {
        console.log(Number.parseFloat(a) * Number.parseFloat(b));
    }
    if (op == 'add') {
        console.log(Number.parseFloat(a) + Number.parseFloat(b));
    }
    if (op == 'minus') {
        console.log(Number.parseFloat(a) - Number.parseFloat(b));
    }
    clear()
}