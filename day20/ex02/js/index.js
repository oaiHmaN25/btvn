var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

// var result = arr.forEach(number);

// console.log(result);

function flattenArray(arr){
    var newArray = [];
    arr.forEach(item => {
        if(Array.isArray(item)){
            newArray = newArray.concat(flattenArray(item));
        } else{
            newArray.push(item);
        }
    });
    return newArray;
}


console.log(flattenArray(arr));