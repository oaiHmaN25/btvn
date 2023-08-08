function findMinMax(array){
    if (!checkArray(array)) {
        return false; 
    }
    var min = array[0];
    var max = array[0]
    for(var i = 0; i < array.length; i++){
        if(min > array[i]){
            min = array[i];
        }
        if(max < array[i]){
            max = array[i]
        }
    }
    console.log(`Max : ${max}`);
    console.log(`Min : ${min}`);
}

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

var array = [5, 10, 3, 8, 2, 0,11];
findMinMax(array);
