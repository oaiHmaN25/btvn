"use client"
import React from 'react'
// import emailjs from "emailjs-com"
// import emailjs from 'emailjs-com';
import { useState } from 'react';
export default function Email() {
const [email, setEmail] = useState('');
  const [destination, setDestination] = useState('');
  const [quantity, setQuantity] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Gửi emailjs.send ở đây với các giá trị từ state

    emailjs.send(
      "service_94mvb6h",
      "template_xub8ljq",
      {
        to_email: email,
        destination: destination,
        quantity: quantity,
        start_date: startDate,
        end_date: endDate,
      },
      "c4umZnKCf5dWAsTHA"
    ).then((response) => {
      console.log('Email sent successfully:', response);
    }).catch((error) => {
      console.error('Error sending email:', error);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Các trường input */}
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Nhập địa chỉ Email của bạn:</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Tôi muốn đến:</label>
          <select
            className="form-control"
            id="exampleFormControlSelect1"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          >
            <option>Viet Nam</option>
            <option>Lao</option>
            <option>Campuchia</option>
            <option>Thai Lan</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Chúng tôi có:</label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Từ ngày:</label>
            <input
              type="date"
              className="form-control"
              id="inputEmail4"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Đến ngày:</label>
            <input
              type="date"
              className="form-control"
              id="inputPassword4"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

