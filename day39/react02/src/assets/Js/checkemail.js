import { client } from './Client';
import "..//../assets/Style.css"
import  Toast  from "../../Components/Toast"
// import TodoList from '../../Components/TodoList';
export default async function CheckGmail() {
    if (checkLogin() === true) {
        // <TodoList/>
        return true;
    }
    else {
        
    let emailMessage = window.prompt("Please enter the email: ");
    // console.log(1);
    console.log(emailMessage);
    console.log();
    // e.preventDefault();
    if (emailMessage === "") {
        Toast("Invalid ! Vui lòng nhập gmail !");
        console.log(`false`);
            // return false;
        }   
    else{
        const { response, data } = await client.get(`/api-key?email=${emailMessage}`);
        if (response.ok && data.data) {
            console.log(data.message);
            const apiKey = data.data.apiKey;
            localStorage.setItem("apiKey", apiKey);
            console.log(data.data.apiKey);
            Toast(data.message);
            return true;
            // return <TodoList />;
        } else {
            console.log(data);
            Toast(data.message);
            console.log(`false`);
            return false;
        }
    }
    }
   
    
}
function checkLogin() {
    const apiKey = localStorage.getItem("apiKey");
    if (apiKey) {
        return true
    } else {
        return false;
    }
}