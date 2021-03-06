import { useState } from "react"
import '../MediaButton/MediaButton.css' 
import './AddContact.css'
import { Nav } from "react-bootstrap";
import users from '.././users.js'
import userContacts from "../userContacts";
import massages from "../massage/massages";
import axios from "axios";
import { sendMessage } from "@microsoft/signalr/dist/esm/Utils";






export default function AddContact({doSearch,connection}) {
    const [open,setOpen] = useState(false);
    const openWindow = function(){
        setOpen(true);
    }


    


    const closeWindow = function(){
        setOpen(false);
        
    }

    const addUser= function(){
        const name = document.getElementById("email").value;
        // if (findings==null){
        //     alert("no such user");
        // }
        var user = 
        {
            "id": name,
            "name": " ",
            "server": 'https://localhost:7125'
        }
        var config = {
            headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
            }
        }
        axios.post('https://localhost:7125/Contacts', user, config)
        .then(()=>connection.send("SendMessage"));
        closeWindow();
        doSearch("");
    }

   
    if (open){
        return(
            <div className="child">
                <div className="small-square">
                    <button type="button" className="btn-close close" aria-label="Close" onClick={closeWindow}></button>
                    <div className="window">
                    <p>Enter contact's mail:</p>
                    <input placeholder="Enter contact's mail" id="email"></input>
                    <button onClick={addUser}>add</button>
                    </div>
                </div>
            </div>
        )
    }
    return(
        <div>
            <button className="btn btn-primary btn-lg" onClick={openWindow}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
</svg>

            </button>
        </div>
    )
}