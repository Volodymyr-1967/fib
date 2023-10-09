function fibonacciIterative(n) {
    if (n <= 1) {
        return n;
    }
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
}

// Обработчик события нажатия на кнопку
document.getElementById("calcButton").addEventListener("click", function () {
    const inputElement = document.getElementById("inputNumber");
    const inputValue = parseInt(inputElement.value);

    if (!isNaN(inputValue)) {
        const resultElement = document.getElementById("result");
        const result = fibonacciIterative(inputValue);
        resultElement.innerHTML = `<br>Число Фибоначчи для n=${inputValue} равно ${result}`;
    } else {
        alert("Введите целое число в поле ввода.");
    }
});
