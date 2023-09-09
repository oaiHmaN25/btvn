var products = [
    {
    id : 1,
    stt : 1,
    name : "Sản phẩm 1",
    price : 1000,
    },
    {
    id : 2,
    stt : 2,
    name : "Sản phẩm 2",
    price : 2000,
    },
    {
    id : 3,
    stt : 3,
    name : "Sản phẩm 3",
    price : 3000,
    },
    {
    id : 4,
    stt : 4,
    name : "Sản phẩm 4",
    price : 4000,
    }
]


var listPro = document.querySelector(".list");
var table = document.querySelector(".tablelist tbody"); 
var listCards = [];
var text = document.querySelector("p.text");
var tableCart = document.querySelector(".tablecart tbody");

function listProduct() {
    products.forEach((value, key) => {
        var tableRow = document.createElement("tr"); 
        tableRow.innerHTML = `
            <td>${value.stt}</td>
            <td>${value.name}</td>
            <td>${value.price}</td>
            <td><input type="number" id="quantityInput" value="1">
            <button onclick="addToCard(${key})">Add To Cart</button>
                </td>
        `;

        table.appendChild(tableRow); 
    });
}

listProduct();

function addToCard(key){
    // tableCart.style.display = "block";
    // console.log(`ok`);
    text.style.display = "none";
    // console.log(key);

     if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
//     var count = 0;
//     // var price = 0;
//     var totalPrice = 0;
//     listCards.forEach((value, key)=>{
//         // totalPrice = totalPrice + value.price;
//         // console.log(key);
//         const pricePro = value.price * value.quantity;
//         count += value.quantity;
//         totalPrice += pricePro;
//         console.log(value.price);
//         console.log(value.quantity);
//         console.log(count);
//         console.log(totalPrice);
//         var tableRow = document.createElement("tr"); 
//         tableRow.innerHTML = `
//             <td>${value.stt}</td>
//             <td>${value.name}</td>
//             <td>${value.price}</td>
//             <td> <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
//                     ${value.quantity}
//                     <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button></td>
//             <td>${pricePro}</td>
//             <td><button onclick="deleteButton()">Xóa</button></td>`;
            
//         tableCart.appendChild(tableRow); 
//     })
// }

// // var tableCart1 = document.querySelector(".tablecart");
// // console.log(tableCart1);
// console.log(tableCart);
function reloadCard(){
    tableCart.innerHTML = "";
    var count = 0;
    // var price = 0;
    let totalPrice = 0;
    tableCart.innerHTML += ` <tr> 
                 <th>STT</th>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
                <th>Xóa</th> 
            </tr> `
    listCards.forEach((value, key)=>{
        // totalPrice = totalPrice + value.price;
        // console.log(key);
        const pricePro = value.price * value.quantity;
        count += value.quantity;
        totalPrice += pricePro;
        console.log(value.price);
        console.log(value.quantity);
        console.log(count);
        console.log(totalPrice);
        var tableRow = document.createElement("tr"); 
        tableRow.innerHTML = `
            <td>${value.stt}</td>
            <td>${value.name}</td>
            <td>${value.price}</td>
            <td> <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    ${value.quantity}
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button></td>
            <td>${pricePro}</td>
            <td><button onclick="deleteButton()">Xóa</button></td>`;
            ;
        tableCart.appendChild(tableRow); 
        
        
    })
    tableCart.innerHTML += `<tr>
    <th colspan = 4> Toltal Price</th>
    <th> ${totalPrice}</th>
    </tr>`
    
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].pricePro = quantity * products[key].price;
    }
    reloadCard();
}

function deleteButton(key){
    var confirmDelete = window.confirm("Are you sure?");
    if (confirmDelete) {
        window.confirm("Xóa sản phẩm thành công")
        listCards.splice(key, 1);
        reloadCard();
    }
}