import React from 'react'
import './Main.css'
import images from "../assets/images";

function Main(){
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
                        <input type="text" placeholder='Enter a prompt here' />
                        <div>
                            <img src={images.microphone} alt="" />
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main