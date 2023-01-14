function sum() {
    let x = document.getElementById('num1').value;
    let y = document.getElementById('num2').value;
    document.getElementById('result').innerHTML = (+x + +y)
}
function min() {
    let x = document.getElementById('num1').value;
    let y = document.getElementById('num2').value;
    document.getElementById('result').innerHTML = (+x - +y)
}
function mul() {
    let x = document.getElementById('num1').value;
    let y = document.getElementById('num2').value;
    document.getElementById('result').innerHTML = (+x * +y)
}
function del() {
    let x = document.getElementById('num1').value;
    let y = document.getElementById('num2').value;
    document.getElementById('result').innerHTML = (+x / +y)
}
function cut() {
    document.getElementById('result').innerHTML = 'Результат'
    document.getElementById('num1').innerHTML = 0;
    document.getElementById('num2').innerHTML = 0;
}
