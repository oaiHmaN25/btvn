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

function removeDuplicate(array){
    if(!checkArray(array)){
        return false;
    }
    var newArray =[];
    for(var i = 0; i< array.length; i++){
        if(array[i] !== array[i+1]){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(removeDuplicate([1,1,1,1,2,2,3,4,4,4,4,5,5,5,5]));