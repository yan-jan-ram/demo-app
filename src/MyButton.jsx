import React from "react";

const MyButton = (props) => {
    const {buttonText:text, bgColor:color, clickHere:click, fontStyle} = props
    return (
        <>
        <button style={{backgroundColor:color, fontFamily:fontStyle}} onClick={click}>{text}</button>
        </>
    )
}

export default MyButton;