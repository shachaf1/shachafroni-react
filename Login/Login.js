import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    var user1 = {
        email: "roni@gmail.com",
        password: "12341234",
        image: "fun talking.jpg",
        nickname: "roni1"
    };
    var user2 = {
        email: "shachaf@gmail.com",
        password: "12341234",
        image: "fun talking.jpg",
        nickname: "shachaf1"
    };
    var users = [user1, user2];

    const loginClicked = (e) => {
        var password = document.getElementById("password").value;
        var nickname = document.getElementById("nickname").value;
        usernum = -1;
        for (let i = 0; i < users.length; i++) {
            if (nickname == users[i].nickname && password == users[i].password) {
                usernum = i;
            }
        }
        if (usernum == -1) {
            alert("incorect nickname or password");
            return;
        }
        const navigate = useNavigate();
        navigate('/talk');
        return false;
    }

    const registerClicked = (e) => {
        const navigate = useNavigate();
        navigate('/register');
    }
    
    return (
        <div className='login-class'>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <b className="navbar-brand" href="#" style="color: rgb(255, 255, 255); font-style: italic; font-size: xx-large;"  >
                        fun talking
                    </b>
                </div>
            </nav>
            <form>

                <div className="mb-3">
                    <label for="exampleInputPassword1" style="font-size: larger;" className="form-label">Nickname</label>
                    <input type="Name" className="form-control" id="nickname"></input>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" style="font-size: larger;" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password"></input>
                    <div className="col">
                        <button type="submit" style="margin-top: 15px;" id="login" onClick={loginClicked} className="btn btn-primary mb-3">login</button>
                    </div>
                    <label for="exampleInputPassword1" className="form-label">not registered?</label>
                    <button onClick={registerClicked} className="register-button"><a className="link-primary">click here</a></button>
                </div>
            </form>
        </div>
    )
}
