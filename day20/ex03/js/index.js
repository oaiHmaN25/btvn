var arr = [["a", 1, true], ["b", 2, false]] 


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
 
function splitArray(item) {
    var string = [];
    var number = [];
    var boolean = [];
    for(var i = 0; i < item.length; i++){
        if(typeof item[i] === 'string'){
        string.push(item[i] );
    } else if (typeof item[i] === 'number'){
        number.push(item[i] );
    } else if (typeof item[i] === 'boolean'){
        boolean.push(item[i]);
    }
    }
    var result  = [];
    result.push(string,number,boolean)
    
    // console.log(string,number,boolean);
    console.log(result);
}

var arrFlatten = flattenArray(arr)
splitArray(arrFlatten);

