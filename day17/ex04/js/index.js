var n = 22;
function isPrime(){
    if(n <= 1 ){
        return false;
    } else {
        for(var i = 2; i < n; i++){
            if(n%i === 0){
                return false;
            } else{
                return true;
            }
        }
    }
    return true;
}

if(isPrime()){
    console.log(`${n} là số nguyên tố`);
} else {
    console.log(`${n}  không là số nguyên tố`);
}