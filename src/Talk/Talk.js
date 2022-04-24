import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Massage from '.././massage/Massage';
import '.././massage/Massage.css';
import contacts from '../contact/contacts';
import ContactListResult from '../contactListResult/ContactListResult';
import massages from '../massage/massages';
import Search from '../search/Search';
import './Talk.css';
import { ReactDOM } from 'react';

export default function Talk() {
    


    var MassageList = massages.map((massage,key) => {
    return <Massage author={massage.author} authort={massage.authort} clock ={massage.clock} massageStr={massage.massageStr} key={key} />
    });

    
    const [contactList, setContactList] = useState(contacts);
    const doSearch = function(q){
        setContactList(contacts.filter((contact) => contact.name.includes(q)));
    }

    const send = function(){
        var str = document.getElementById("send").value;
        var newMassage= {author: "message-data float-right",authort: "message other-message float-right",clock:'10:10 AM, Today',massageStr:str}; 
        massages.push(newMassage);
        document.getElementById("send").value="";
        console.log(massages);
        return;
    };


    // useEffect(() => {
    //     document.getElementById('output').innerHTML = user.userChat[0].massageStr;
    //     document.getElementById('last massage').innerHTML = user.userChat[0].massageStr;
    //     document.getElementById('image').src = user.Image;
    //     document.getElementById('name').innerHTML = user.name;
    // });


    return (
        <div className='Talk-div'>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <div className="navbar-brand" href="#"  >
                        fun talking
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="row clearfix">
                    <div className="col-lg-12">
                        <div className="card chat-app">

                            <div id="plist" className="people-list" data-spy="scroll" data-target=".navbar" data-offset="50">
                                <Search doSearch={doSearch} className ="search"/>
                                <ul className="list-unstyled chat-list mt-2 mb-0">
                                    <ContactListResult contacts={contactList} />

                                    
                                </ul>
                            </div>
                            <div className="chat">
                                <div className="chat-header clearfix">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <img src={contacts[0].img} alt="avatar"></img>
                                            <div className="chat-about">
                                                <h6  className="m-b-0">{contacts[0].name}</h6>
                                                <small>Last seen: 2 hours ago</small>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 hidden-sm text-right">

                                        </div>
                                    </div>
                                </div>
                                <div className="chat-history">
                                    <ul className="m-b-0">
                                        
                                        {MassageList}
                                        
                                        <ul className="message other-message float-right"> Hi Aiden, how are you? How is the project coming along? </ul>
                                    </ul>
                                </div>
                                <div className="chat-message clearfix">
                                    <div className="input-group mb-0">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-send" type="submit" onClick={send}>send</i></span>
                                        </div>
                                        <input type="text" id ="send" className="form-control" placeholder="Enter text here..."></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
