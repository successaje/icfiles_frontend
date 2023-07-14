import React from "react";

const Hello = () => {
    return React.createElement(
        "div", 
        {id : "Hello", className : "DummyClass"}, 
        React.createElement("h1", null,  "Hello AJ"))
    // return (
        // <div>
        //     <h1>Hello Success</h1>
        // </div>
    // )
}

export default Hello