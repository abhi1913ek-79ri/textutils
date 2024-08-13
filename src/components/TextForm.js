import { render } from '@testing-library/react';
import React, { useState } from 'react'

export default function TextForm(props) {
    // css
    // const styles={
    //     main: {
    //         backgroundColor: "#f1f1f1",
    //         width: "100%",
    //       }
    // }



    // hooks
    const [text, setText] = useState("");
    const [copybtn, setCopyBtn] = useState("Copy");


    const handleUpClick = () => {
        setText(text.toUpperCase());
    }
    const handleLowClick = () => {
        setText(text.toLowerCase());
    }
    const handleClearText = () => {
        setText('');
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        setCopyBtn('Copied');
        setTimeout(()=>{
            setCopyBtn('Copy');
        },1500)
    }
    const handleExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" ").trim());
    }

    const handleCapitaliseText = () => {
        if (!text.length) {
            setText(text.toUpperCase())
        }
        else {
            setText(text[0].toUpperCase() + text.slice(1).toLowerCase());
        }
    }

    ///simple function 
    const CapitaliseText = (text) => {
        if (!text.length) {
            return text.toUpperCase()
        }
        else {
            return text[0].toUpperCase() + text.slice(1).toLowerCase();
        }
    }
    const handleTitleCase = () => {
        setText(text.trim());
        let textArray = text.split(' ');
        let textStr = '';
        for (let i = 0; i < textArray.length; i++) {
            textStr += ' ' + CapitaliseText(textArray[i])
        }
        setText(textStr.trim());

    }
    const handleChange = (event) => {
        setText(event.target.value);

    }

    const wordCount = (text) => {
        if (text === '') {
            return 0;
        }
        return text.split(' ').length;
    }

    return (
        <>
            <div className='my-3'>
                <h1 className={`text-${props.mode==='dark'?'light':'dark'}`}>Enter your Text here</h1>
                <div className="mb-3">
                    <textarea className={`form-control text-${props.mode==='dark'?'light':'dark'}`} style={{backgroundColor:props.mode==='light'?'white':'#62627c'}} value={text} onChange={handleChange} placeholder="It is  a great app for text manipulation." id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1 col-md-12 text-center col-lg-1" onClick={handleUpClick}>Upper Case</button>
                <button className="btn btn-primary mx-1 col-md-12 text-center col-lg-1" onClick={handleLowClick}>Lower Case</button>
                <button className="btn btn-primary mx-1 col-md-12 text-center col-lg-2" onClick={handleCapitaliseText}>Capitalise Text</button>
                <button className="btn btn-primary mx-1 col-md-12 text-center col-lg-1" onClick={handleTitleCase}>Title Case</button>
                <button className="btn btn-secondary mx-1 col-md-12 text-center col-lg-1" onClick={handleCopy}>{copybtn}</button>
                <button className="btn btn-primary mx-1 col-md-12 text-center col-lg-2" onClick={handleExtraSpace}>Remove Space</button>
                <button className="btn btn-primary mx-1 col-md-12 text-center col-lg-1" onClick={handleClearText}>Clear Text</button>

            </div>
            <div className={`continer text-${props.mode==='dark'?'light':'dark'}`}>
                <h2>Your Text Summary</h2>
                <p><b>{wordCount(text.trim())} word and {text.length} characters</b></p>
                <p>{(wordCount(text) * 0.008).toFixed(2)} minutes</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )


    // css

}


// css
