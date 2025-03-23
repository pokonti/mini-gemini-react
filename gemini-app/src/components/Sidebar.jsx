import React, { useState } from 'react'
import './Sidebar.css'
import images from "../assets/images";


function Sidebar(){

    const [extended, setExtended] = useState(false)


    return(
        <div className='sidebar'>
            <div className="top">
                <img onClick={() => setExtended(prev=>!prev)} className="menu" src={images.menu} alt="" width={30}/>
                <div className="new-chat">
                    <img src={images.plus} alt=""  width={100}/>
                    {extended?<p>New Chat</p>:null}
                </div>
                {extended
                ?<div className="recent">
                    <p className="recent-title">Recent</p>
                    <div className="recent-entry">
                        <img src={images.message} alt="" />
                        <p>What is ...</p>
                    </div>
                </div>
                :null}
           
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={images.question} alt="" />
                    {extended?<p>Help</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={images.setting} alt="" />
                    {extended?<p>Setting</p>:null}
                </div>
            </div>
        </div>
    )
}
export default Sidebar