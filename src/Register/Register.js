import './Register.css'

import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register() {
    var users = [];
    const validationPassword = (user, passwordValidation) => {
        if(user.password != passwordValidation) {
            return false;
        }
        return true;
    }

    const validPassword = (user) => {
        var passw=  /^[A-Za-z0-9]\w{7,14}$/;
        if(!user.password.match(passw)) 
        { 
            return false;
        }
        return true;
    }

    const loginClicked = (e) => {
        // const navigate = useNavigate();
        // navigate('/');
    }

    const isEmpty = (user, passwordValidation) => {
        if (user.nickname == "" || passwordValidation =="" || user.nickname == "" || user.image == "" || user.password == "" || user.email == "") {
            return false;
        }
        return true;
    }

    const isOk = (user, passwordValidation) => {
        if (!isEmpty(user, passwordValidation)) {
            window.alert("error: must insert all the fields");
            return false;
        }
        if (!validPassword(user)) {
            window.alert("password must contain only letters and numbers and 7-14 digits.");
            return false;
        }
        if (!validationPassword(user, passwordValidation)) {
            window.alert("error: the validation password isn't correlative");
            return false;
        }
        return true;
    }

    const registerUser = (e) => {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var nickname = document.getElementById("nickname").value;
        var passwordValidation = document.getElementById("validation").value;
        var image = document.getElementById("image").value;

        var user = {
            email: email,
            password: password,
            image: image,
            nickname: nickname
        };
        if (isOk(user, passwordValidation)) {
            users.push(user);
            // const navigate = useNavigate();
            // navigate('/');
            return false;
        }
        return;
    };

    return (
        <div className='register-className'>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <div className="navbar-brand" href="#" >
                        fun talking
                    </div>
                </div>
            </nav>
            <form>

                <div className="mb-3">
                    <label   className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp"></input>
                    <div id="emailHelp"  className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3">
                    <label   className="form-label">Password</label>
                    <input type="password" className="form-control" id="password"></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password validation</label>
                    <input type="password" className="form-control" id="validation"></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Nickname</label>
                    <input type="Name" className="form-control" id="nickname"></input>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Add image</label>
                    <input type="file" accept="image/*" id="image"></input>
                    <div className="col">
                        <button type="submit" id="register" className="btn btn-primary mb-3" onClick={registerUser}>Register</button>
                    </div>

                    <label  className="form-label">already registered?</label>
                    <button className="login-button"><a href="\" className="link-primary">click here</a></button>
                </div>
            </form>
        </div>
    )
}
