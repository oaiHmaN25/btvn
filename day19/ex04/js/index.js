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

function arrangeArray(array){
    if(!checkArray(array)){
        return false;
    }
    for(var i = 0; i < array.length;i++){
        for(var j = 0; j < array.length -1; j++){
            if(array[j] > array[j+1]){
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    console.log(`Chuỗi : ${array}`);
}

function insertNumber(array,number){
    array.push(number);
    return arrangeArray(array);
}

var numbers = [5, 1, 9, 8, 10,h,h];
var element = 0;
var newArray = insertNumber(numbers,element)

