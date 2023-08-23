//Bài 1 : Viết 1 hàm tính tổng giá trị biểu thức, tham số truyền vào ở dạng Rest Parameter

function getSum(...args){
    var sum = 0;  
    for(var i of args){
        if(!isNaN(i) && i !== Infinity && typeof i === "number"){
            sum += i;
        } else{
            console.log("Dữ liệu truyền vào không hợp lệ");
            return false;
            }       
        }
    return sum;
}

console.log(getSum(5,10,"10"));

//Bài 2 : Viết 1 phương thức Prototype có tên là getCurrency có đối số truyền vào là đơn vị tiền tệ cần hiển thị
Number.prototype.getCurrency = function(currency) {
    if (currency === "đ") {
        return this.toLocaleString("vi", { style: 'currency', currency: 'VND' });
    }
    return this.toString(); 
};

var price = 12000;
console.log(price.getCurrency('đ'));

// Bài 3 
const flatArray = 
    [
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
  },
  {
    id: 8,
    name: "Chuyên mục 3.2",
    parent: 3,
  },
  {
    id: 9,
    name: "Chuyên mục 3.3",
    parent: 3,
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
  },
  {
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
  },
];


//Bài 4 : Viết lại vòng lặp reduce() trong Array bằng cách sử dụng Prototype trong Javascript
function reduce2(array, callback, initialValue) {

  var current;
  var index;

  if (initialValue !== undefined) {
    current = initialValue;
    index = 0;
  } else {
    if (array.length === 0) {
      console.log("Error");
    }
    accumulator = array[0];
    index = 1;
  }

  for (let i = index; i < array.length; i++) {
    current = callback(current, array[i], i, array);
  }
  return current;
}

const numbers = [1, 2, 3, 4, 5];
const sum = reduce2(numbers, (accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); 





