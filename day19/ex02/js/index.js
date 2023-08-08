function findArithmeticPrime(array){
    if (!checkArray(array)) {
        return false; 
    } 
    var primeNumber = checkPrimeNumber(array);
    sum = 0;
    for(var i = 0; i < primeNumber.length; i++){
        sum += primeNumber[i];
    }
    tbc = sum/primeNumber.length;
    console.log(tbc);
    console.log(primeNumber);
   
}
var inputArray = [2, 3, 5, 7, 10, 11, 13];
findArithmeticPrime(inputArray);
function checkArray(array){
    if(!Array.isArray(array)){
        console.log("Mảng khong hợp lệ!");
        return false;
    } 
    if (array.length === 0){
        console.log("Mảng khong có phần tử !");
        return false;
    } 
    for(var i = 0; i < array.length; i++){
        if(typeof(array[i]) !== 'number'){
            console.log(`Mảng có không phải là số`);
            return false;
        }
    }
    return true;
}
function isPrime(n){
    if(n <= 1 ){
        return false;
    } else {
        for(var i = 2; i < n; i++){
            if(n%i === 0){
                return false;
            }
        }
    }
    return true;
}
function checkPrimeNumber(array) {
    var primeNumber = [];

    for (var i = 0; i < array.length; i++) {
        if (isPrime(array[i])) {
            primeNumber.push(array[i]);
        }
    }
    return primeNumber;
}