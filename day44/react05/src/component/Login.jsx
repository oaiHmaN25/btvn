// import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import emailjs from "emailjs-com"
import { useState } from 'react';
export default function Login() {
    const { logout, user, isAuthenticated, loginWithPopup } = useAuth0();
    console.log(user);
    const [message, setMessage] = useState();
    const handleChange = (e) => {
        setMessage(e.target.value);
        console.log(message);
    }
    return isAuthenticated ? (
      <div className="container-wrap">
        <div className="wrap">
          <img src={user.picture} alt="" />
          <h1>Xin chào {user.name}</h1>
          {user.locale === "vi" && <p>Vị trí : Việt Nam</p>}
          <p>
            Email: <a href="">{user.email}</a>
          </p>
          <div className="input">
            <input type="text" name="" id="" value={user.email}  />
          </div>
          <div className='input'>
            <input type="text" onChange={handleChange} value={message} />
          </div>

          <button className='help'
            onClick={() => {
              emailjs.send(
                "service_94mvb6h",
                "template_xub8ljq",
                {
                  to_name: user.name,
                  to_email: user.emai,
                  message: message,
                },
                "c4umZnKCf5dWAsTHA"
              );
            }}
          >
            Yêu cầu hỗ trợ
          </button>
          <button className='logout'
            onClick={() => {
              logout();
            }}
          >
            Đăng Xuất
          </button>
        </div>
      </div>
    ) : (
      <div className="container">
        <p>Cảm ơn bạn đã sử dụng dịch vụ của F8</p>
        <p>
          Nếu có bất kỳ câu hỏi hay trợ giúp nào, hãy đăng nhập và đặt câu hỏi
          tại đây!
        </p>
        <button className="btn" onClick={loginWithPopup}>
          Đăng nhập || Đăng kí
        </button>
      </div>
    );
}