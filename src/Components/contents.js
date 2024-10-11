import React from "react";
//This component creates the content to be displayed on the page

const  Content = () =>{
    return (
        // This outputs the text typed here onto the page. 
        // It also displays the current time using the date function
        <div>
            <h1>Hello from my Content component!</h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
    )
}

export default Content;