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

