// Object.prototype.createCustomers = function() {
//     var Customer = function(name, age, address) {
//         var current = this;
//         // Định nghĩa các thuộc tính
//         current.name = name;
//         current.age = age;
//         current.address = address;
//     };

   
//     var customerInstances = this.map(function(customer) {
//         return new Customer(customer.name, customer.age, customer.address);
//     });
//     customerInstances.sort(function(a, b) {
//         return a.age - b.age;
//     });

//     return customerInstances;
// };


// const customers = [
//     { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
//     { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
//     { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
// ];


// const result = customers.createCustomers();
// console.log(result);
var createCustomers = function(customerData) {
    var customerResult = customerData.map(function(customer) {
        var shortName = getShortName(customer.name);
        return {
            name: customer.name,
            age: customer.age,
            address: customer.address,
            shortName: shortName
        };
    });

    // Sort the customerInstances array by age
    customerResult.sort(function(a, b) {
        return a.age - b.age;
    });

    return customerResult;
};

function getShortName(fullName) {
    var parts = fullName.split(" ");
    if (parts.length >= 2) {
        return parts[0] + " " + parts[2];
    }
    return fullName;
}

const customers = [
    { name: "Nguyễn Văn Anh", age: 11, address: "Ha Noi" },
    { name: "Nguyễn Văn Banh", age: 2, address: "Hai Phong" },
    { name: "Nguyễn Văn Canh", age: 12, address: "TP.HCM" },
];

const result = createCustomers(customers);
console.log(result);

