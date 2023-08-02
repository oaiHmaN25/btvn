function calSumRecursive(n) {
    if (n === 1) {
        return 1;
    } else {
        return 1 / n + calSumRecursive(n - 1);
    }
}


var result = calSumRecursive(10);
console.log("Giá trị biểu thức S =", result);