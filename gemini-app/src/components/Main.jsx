import React, { useContext, useState } from 'react'
import './Main.css'
import images from "../assets/images";
import { Context } from '../context/Context';

function Main(){

    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)




    const [inputValue, setInputValue] = useState("")

    const handleChange = (e) => {
        setInput(e.target.value);
        setInputValue(e.target.value);
      };

    const isEmpty = inputValue.trim() === "";

    return(
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={images.profile} alt="" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, Aknur</span></p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest places to go in Almaty</p>
                    </div>
                    <div className="card">
                        <p>Think of a startup ideas</p>
                    </div>
                    <div className="card">
                        <p>Let's play a game</p>
                    </div>
                    <div className="card">
                        <p>What is Blockchain?</p>
                    </div>
                </div>

                <div className="main-bottom">
                    <div className="search-box">
                        <input 
                            type="text"
                            value={inputValue} 
                            onChange={handleChange} 
                            placeholder='Ask Gemini' />
                        <div>
                            {isEmpty ? 
                            <img src={images.microphone} alt="" />
                            : 
                            <img onClick={()=> {
                                onSent();
                                setInput(""); 
                                setInputValue("");
                            }} src={images.send} alt="" /> }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main