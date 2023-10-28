// import React from 'react';
// import  Toast  from "./Toast"
// import { client } from '../assets/Js/Client';
// export default async function CheckGmail(e) {
//     let emailMessage = 1;
//         // window.prompt("Please enter the email: ");
//     console.log(1);
//     console.log(emailMessage);
//     e.preventDefault();
//     if (emailMessage === "") {
//         Toast("Invalid ! Vui lòng nhập gmail !");
//             console.log(`false`);
//             // return false;
//         }   
//     else{
//         const { response, data } = await client.get(`/api-key?email=${emailMessage}`);
//         if (response.ok && data.data) {
//             console.log(data.message);
//             const apiKey = data.data.apiKey;
//             localStorage.setItem("apiKey", apiKey);
//             console.log(data.data.apiKey);
//             Toast(data.message);
//             return true;
//             // return <TodoList />;
//         } else {
//             console.log(data);
//             Toast(data.message);
//             console.log(`false`);
//             return false;
//         }
//     }

// }
