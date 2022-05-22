import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import users from '../users';
import contactsRoni from '../contact/contactsRoni';
import giladContacts from '../contact/giladContacts';
import shachafContacts from '../contact/shachafContacts';
import userContacts from '../userContacts';
import funTalking1 from './images.png';
export default function Login() {
    let navigate = useNavigate();
    const loginClicked = function() {
        var password = document.getElementById("password").value;
        var nickname = document.getElementById("nickname").value;
        var usernum = -1;


        for (let i = 0; i < users.length; i++) {
            if (nickname == users[i].nickname && password == users[i].password) {
                usernum = i;
            }
        }
        
        if (usernum == -1) {
            alert("incorect nickname or password");
            return;
        }
        
        if(nickname == 'roni1')
        {
            contactsRoni.forEach(contact => {
                userContacts.push(contact);
                
            });
        }
        if(nickname == 'gilad1')
        {
            giladContacts.forEach(contact => {
                userContacts.push(contact);
                
            });
        }
        if(nickname == 'shachaf1')
        {
            shachafContacts.forEach(contact => {
                userContacts.push(contact);
                
            });
        }
        navigate('/Talk');
        return false;
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
