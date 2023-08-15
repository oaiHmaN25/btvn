const data = [];

function handleRegister(name, password,email,role) {
    var Customer = function(name, password, email, role) {
        var current = this;
        var role = "user";
        current.name = name;
        current.password = password;
        current.email = email;
        current.role = role;
    };
    if (name === null || password === null || email === null) {
        console.log("Lỗi thêm người dùng");
        return null;
    }
    if (name === undefined || password === undefined || email === undefined) {
        console.log("Lỗi thêm người dùng");
        return null;
    }

    const newUser = new Customer(name, password, email, role);
    data.push(newUser);
    return newUser;
}

function handleLogin(email, password) {
    var msg = "Kết thúc đăng nhập";
    for (var i = 0; i < data.length; i++) {
        const user = data[i];
        if (user.email === email && user.password === password) {
            return user;
        }   
    }
    console.log("Lỗi đăng nhập");
    return msg;
}   


const dataRegisterA = handleRegister(
  "Nguyen Van A",
  "123456",
  "nguyenvana@email.com"
);
const dataRegisterB = handleRegister(
  "Nguyen Van B",
  "1234567",
  "nguyenvanb@email.com"
);
const dataLogin = handleLogin("nguyenvanb@email.com", "1234567");

console.log(data);
console.log(dataLogin);