function multiplicationTable(n){
    console.log(`Bảng số ${n}:`);
    var mul = n;
    for(var i = 1; i <=10 ; i++){
        mul = n*i;
        console.log(`${n} * ${i} = ${mul}`);
    }
}

multiplicationTable(10);