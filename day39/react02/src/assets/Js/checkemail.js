import { client } from './Client';
import "..//../assets/Style.css"
import  Toast  from "../../Components/Toast"
// import TodoList from '../../Components/TodoList';
export default async function CheckGmail() {
    // let successMessage = '<i class="fa-solid fa-circle-check"></i> Success';
  // let errorMessage = '<i class="fa-solid fa-circle-xmark"></i> Error ! Email không tồn tại trong dữ liệu';
  
  let invalidMessage = '<i class="fa-solid fa-circle-exclamation"></i> Invalid ! Vui lòng nhập gmail.';
    if (checkLogin() === true) {
        // <TodoList/>
        return true;
    }
    
    else {
        
    let emailMessage = window.prompt("Please enter the email: ");
    // console.log(1);
    console.log(emailMessage);
    // console.log();
    // e.preventDefault();
        if (emailMessage === "") {
            CheckGmail();
            Toast(invalidMessage);
            console.log(`Email Message false`);
            return false;
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
            CheckGmail();
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