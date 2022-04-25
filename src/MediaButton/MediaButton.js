import { useState } from "react"
import './MediaButton.css' 
import { Nav } from "react-bootstrap";

import music from './Swan Lake Ballet (Music).mp3'
import RecordPlayer from "../Record/RecordPlayer";
import { getElementError } from "@testing-library/react";



export default function MediaButton({massages,doSearch}) {
    const [open,setOpen] = useState(false);
    const openWindow = function(){
        setOpen(true);
    }
    const newMassageImage = function(){
        var today = new Date();
        const zeroPad = (num, places) => String(num).padStart(places, '0')
        const massage = {author: "message-data float-right",authort: "message other-message float-right",clock:(zeroPad(today.getHours(),2) + ':' + zeroPad(today.getMinutes(),2))+' Today'
        ,massageValue: URL.createObjectURL(document.getElementById("image").files[0]) ,type:'image'};
        console.log(massages);
        massages.push(massage);
        console.log(massages);
        doSearch("");
        closeWindow();
    }

    const newMassageVideo = function(){
        var today = new Date();
        const zeroPad = (num, places) => String(num).padStart(places, '0')
        const massage = {author: "message-data float-right",authort: "message other-message float-right",clock:(zeroPad(today.getHours(),2) + ':' + zeroPad(today.getMinutes(),2))+' Today'
        ,massageValue: URL.createObjectURL(document.getElementById("video").files[0]) ,type:'video'};
        console.log(massages);
        massages.push(massage);
        console.log(massages);
        doSearch("");
        closeWindow();
    }


      

    

    const closeWindow = function(){
        setOpen(false);
        setMode(null);
    }
    const [mode, setMode] = useState("");
    const image = function(){
        return (
            <div>
                <label  className="form-label">Add image</label>
                    <input type="file" accept="image/*" id="image"></input>
                    <div className="col">
                        <button type="submit" id="send" className="btn btn-primary mb-3" onClick={newMassageImage}>send</button>
                    </div>
            </div>
        )
    }
    const video = function(){
        return (
            <div>
                <label  className="form-label">Add Video</label>
                    <input type="file" accept="video/*" id="video"></input>
                    <div className="col">
                        <button type="submit" id="send"  className="btn btn-primary mb-3" onClick={newMassageVideo}>send</button>
                    </div>
            </div>
        )
    }
    
   
    if (open){
        return(
            <div className="child">
                <div className="small-square">
                    <button type="button" className="btn-close close" aria-label="Close" onClick={closeWindow}></button>

                    <Nav className="nav" variant="pills" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link eventKey="link-0" onClick={()=>{setMode(image)}}>Image</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1" onClick={()=>setMode(video)}>Video</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2" onClick={()=>setMode(<RecordPlayer massages={massages} doSearch={doSearch} closeWindow={closeWindow}/>)}>
                                Record
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <div className="media">
                    {mode}
                    </div>
                    





                </div>
            </div>
        )
    }
    return(
        <div>
            <button onClick={openWindow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-paperclip" viewBox="0 0 16 16">
                    <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                </svg>
            </button>
        </div>
    )
}