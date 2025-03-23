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
                        <p>Suggest </p>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main