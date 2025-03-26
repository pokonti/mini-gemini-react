import React, { useContext, useState } from 'react'
import './Main.css'
import images from "../assets/images";
import { Context } from '../context/Context';
import ReactMarkdown from "react-markdown";
import useTypingEffect from '../context/Typing';

function Main(){

    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

    const typedText = useTypingEffect(resultData, 5);


    const [inputValue, setInputValue] = useState("")

    const handleChange = (e) => {
        setInput(e.target.value);
        setInputValue(e.target.value);
      };

    const isEmpty = inputValue.trim() === "";
    
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
          e.preventDefault(); // Prevents a new line in a textarea (if applicable)
          if (inputValue.trim() !== "") {
            onSent();
            setInput("");
            setInputValue("");
          }
        }
    };

    return(
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={images.profile} alt="" />
            </div>
            <div className="main-container">

                {!showResult
                ?<>
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
                </>
                :
                <div className="result">
                    <div className="result-title">
                        <img src={images.profile} alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={images.icon} alt="" />
                        {loading
                        ?<div className='loader'>
                            <hr />
                            <hr />
                            <hr />
                        </div>
                        :
                        // <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                        <p><ReactMarkdown>{typedText}</ReactMarkdown></p>
                        }
                        
                    </div>
                </div>
                }

                
                

                <div className="main-bottom">
                    <div className="search-box">
                        <input 
                            type="text"
                            value={inputValue} 
                            onChange={handleChange} 
                            onKeyDown={handleKeyDown} 
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