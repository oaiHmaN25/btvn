import { client } from './Client';
import "..//../assets/Style.css"
// import  Toast  from "../../Components/Toast"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import TodoList from '../../Components/TodoList';
export default async function CheckGmail() {
    // let successMessage = '<i class="fa-solid fa-circle-check"></i> Success';
  // let errorMessage = '<i class="fa-solid fa-circle-xmark"></i> Error ! Email không tồn tại trong dữ liệu';
  
//   let invalidMessage = '<i class="fa-solid fa-circle-exclamation"></i> Invalid ! Vui lòng nhập gmail.';
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
            // Toast(invalidMessage);
                toast("Invalid ! Vui lòng nhập gmail.")
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
            toast(data.message);
            // <ToastContainer/>
            return true;
            // return <TodoList />;
        } else {
            CheckGmail();
            console.log(data);
            toast(data.message);
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