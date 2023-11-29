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
    // useEffect(() => {
    //     // const body = document.body;
    //     // const main = document.querySelector('main');

    //     // body.style.backgroundColor = theme === 'light' ? 'white' : 'black';
    //     // body.style.color = theme === 'light' ? 'black' : 'white';

    //     // main.style.backgroundColor = theme === 'light' ? 'white' : 'black';
    //     // main.style.color = theme === 'light' ? 'black' : 'white';
    // },[theme])
     useEffect(() => {
    const body = document.body;
    const main = document.querySelector('.inner');

    body.style.backgroundColor = theme === 'light' ? 'white' : 'black';
    body.style.color = theme === 'light' ? 'black' : 'white';

    if (main) {
         main.style.setProperty('background-color', theme === 'light' ? 'white' : 'black', 'important');
        main.style.color = theme === 'light' ? 'black' : 'white';
        //   main.style.setProperty('border', '0px solid red', 'important');
    }
  }, [theme]);

    return (
        <div>
            <select id="themeSelect" value={theme} onChange={(e) => handleChange(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
        </div>
      
  )
}
