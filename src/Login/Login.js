import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import users from '../users';
import contactsRoni from '../contact/contactsRoni';
import giladContacts from '../contact/giladContacts';
import shachafContacts from '../contact/shachafContacts';
import userContacts from '../userContacts';
import funTalking1 from './images.png';
import axios from 'axios';
import Contact from '../contact/Contact';
import Massage from '../massage/Massage';
export default function Login() {
    let navigate = useNavigate();
    const [token, setToken] = useState(-1);
    const loginClicked = function(e) {
        e.preventDefault();
        var password = document.getElementById("password").value;
        var nickname = document.getElementById("nickname").value;
        var usernum = -1;

        axios.post('https://localhost:7125/api/User?username='+nickname+'&password='+password)
        .then(response => {
            if (response.data != null) {
                localStorage.setItem('jwtToken', response.data);
                navigate('/Talk')
                setToken(0);
                //this.setState({ redirect: true });
            } else {
                alert("incorect nickname or password");
                return;

            }
        })
        //validations here by server.
        //push contacts to userContacts.

        // const retStatus = axios.post('https://localhost:7125/api/User?username='+nickname+'&password='+password).then((res) => setToken(res.data));

        // let config = {
        //     headers: {
        //       'Authorization': 'Bearer ' + token
        //     }
        //   }
        // const apiContacts = axios.get('https://localhost:7125/Contacts',config).then( res => res.json()).then(res => console.log(res));
        // if (apiContacts.ok){
        //     usernum = 0;
        // }

        // apiContacts.array.forEach(element => {
        //     const apimessages = axios.get('https://localhost:7125/Contacts/'+element.Id+'/messages',config).json();
        //     const messages = [];
        //     apimessages.forEach(element => {
        //         let author;
        //         let authort;
        //         if (element.isOneSend){
        //             author = "message-data";
        //             authort = "message my-message";
        //         } else {
        //             author = "message-data float-right";
        //             authort = "message my-message float-right"; 
        //         }
        //         messages.push(new Massage(author,authort,element.sendTime,element.content,'text'))
        //     })
        //     userContacts.push(new Contact('clearfix',null,element.nickname, messages))
        // });

        
        if (token ==-1) {
            
        } 
        
        // if(nickname == 'roni1')
        // {
        //     contactsRoni.forEach(contact => {
        //         userContacts.push(contact);
                
        //     });
        // }
        // if(nickname == 'gilad1')
        // {
        //     giladContacts.forEach(contact => {
        //         userContacts.push(contact);
                
        //     });
        // }
        // if(nickname == 'shachaf1')
        // {
        //     shachafContacts.forEach(contact => {
        //         userContacts.push(contact);
                
        //     });
        // }
        
    }

    const RegisterClicked = (e) => {
        const navigate = useNavigate();
        navigate('/Register');
    }
    
    return (
        
        <div className='login-class'>
        <img className="logo" src={funTalking1} alt="image"/>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <div className="navbar-brand" href="#"  style={{ color: "white" }} >
                        Chat!
                    </div>
                </div>
            </nav>
            <form>

                <div className="mb-3">
                    <label  className="form-label">Nickname</label>
                    <input type="Name" className="form-control" id="nickname"></input>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Password</label>
                    <input type="password" className="form-control" id="password"></input>
                    <div className="col">
                        <button type="submit"  id="login" className="btn btn-primary" onClick={loginClicked}>login</button>
                    </div>
                    <label  className="form-label">not registered?</label>
                    <button   className="register-button"><a href= "\Register" className="link-primary">click here</a></button>
                </div>
            </form>
        </div>
    )
}
