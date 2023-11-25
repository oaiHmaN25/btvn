"use client"
import React, { useEffect, useState } from 'react'

export default function Button() {
    const initialTheme = localStorage.getItem("theme") || "light";
    const [theme,setTheme] = useState(initialTheme)
    const handleChange = (color) => {
        // document.body.style.backgroundColor = color === "light" ? "white" : "black";
        // document.body.style.color = color === "light" ? "black" : "white";
        console.log(color);
        setTheme(color)
        localStorage.setItem("theme",color);
        
    }
    useEffect(() => {
        const body = document.body;
        const main = document.querySelector('main');

        body.style.backgroundColor = theme === 'light' ? 'white' : 'black';
        body.style.color = theme === 'light' ? 'black' : 'white';

        main.style.backgroundColor = theme === 'light' ? 'white' : 'black';
        main.style.color = theme === 'light' ? 'black' : 'white';
    },[theme])
    return (
        <div>
            <button onClick={() => handleChange("light")}>Light</button>
            <button onClick={() => handleChange("dark")}>Dark</button>
        </div>
      
  )
}
