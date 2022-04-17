import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
export default function Login() {
 
    
    var user1 = {
        email: "roni@gmail.com",
        password: "12341234",
        image: "../../funTalking.jpg",
        nickname: "roni1"
    };
    var user2 = {
        email: "shachaf@gmail.com",
        password: "12341234",
        image: "../../public/funTalking.jpg",
        nickname: "shachaf1"
    };
    var users = [user1, user2];

    const loginClicked = (e) => {
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
        //const navigate = useNavigate();
        //navigate('/talk');
        return false;
    }

    const RegisterClicked = (e) => {
        const navigate = useNavigate();
        navigate('/Register');
    }
    
    return (
        
        <div className='login-class'>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <div className="navbar-brand" href="#"   >
                        fun talking
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
                        <button type="submit"  id="login" className="btn btn-primary "><a className=" btn-primary" href= "/talk" >login</a> </button>
                    </div>
                    <label  className="form-label">not registered?</label>
                    <button   className="register-button"><a href= "\Register" className="link-primary">click here</a></button>
                </div>
            </form>
        </div>
    )
    
}
