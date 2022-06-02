import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Massage from '.././massage/Massage';
import '.././massage/Massage.css';
import ContactListResult from '../contactListResult/ContactListResult';
import massages from '../massage/massages';
import Search from '../search/Search';
import './Talk.css';
import { ReactDOM } from 'react';
import MediaButton from '../MediaButton/MediaButton';
import funTalking1 from './images.png';
import funTalking from './funTalking.jpg';
import userContacts from '../userContacts';
import AddContact from '../AddContact/AddContact';
import axios from 'axios';
export default function Talk() {
    
    const [userContacts,setUserContacts] = useState([]);

    const [contactList, setContactList] = useState(userContacts);
    const [mainContact, setMainContact] = useState({"id": "", "name":"", "server":"", "last":"", "lastDate":"", "funct":""});

    const [config,setConfig] = useState({
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
        }
      });
    // const asyncCall = async (apiContacts) => {
    //     if (Array.isArray(apiContacts)){
    //         await Array(JSON.parse(JSON.stringify( apiContacts ))
    //         ).forEach(async element => {
    //             console.log(element);
    //             const apimessages = await axios.get('https://localhost:7125/Contacts/' + element[0].id + '/messages', config);
    //             const messages = [];
    //             Array(apimessages).forEach(async element => {
    //                 let author;
    //                 let authort;
    //                 if (element.isOneSend) {
    //                     author = "message-data";
    //                     authort = "message my-message";
    //                 } else {
    //                     author = "message-data float-right";
    //                     authort = "message my-message float-right";
    //                 }
    //                 messages.push(new Massage(author, authort, element['sendTime'], element['content'], 'text'));
    //             })
    //             userContacts.push({img: 'https://bootdey.com/img/Content/avatar/avatar8.png',name: element['nickname'],kind:'clearfix',massages: massages})
    
    
    //         })
        // }
        
   // }
    useEffect(()=>{
        
        var config = {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
            }
          }
        const apiContacts = axios.get('https://localhost:7125/Contacts',config)
        .then(res => setUserContacts(JSON.parse(JSON.stringify(res.data))))
        .then(()=>{
            if(userContacts.length != 0){
                console.log(Array(userContacts).at(0));

                setMainContact(userContacts[0]);
            }
            else{
                var tempContact ={img: funTalking,name: 'select contact from your chat list',kind:'clearfix',massages: [""]};
                setMainContact(tempContact);
            }
            
        }).then(res => doSearch(""))
    },[])
    

    useEffect (()=>{
        doSearch("");
    },[userContacts])

    useEffect (()=> {
        if(mainContact.id != '')
        {
            axios.get("https://localhost:7125/Contacts/"+mainContact.id+"/messages",config)
        }
    },[mainContact])
    const doSearch = function(q){


        //here can we make some refresh for contacts.
        if (userContacts.length != 0){
            setContactList(userContacts.filter((contact) => contact.name.includes(q)));
        }
        else {
            setContactList(null);
        }

    }

    
    const selectContact = function(q) {
        setMainContact(userContacts.find(elem => elem.name===q));
    }

    // if (mainContact.massages.length != 0){
    //     var MassageList = mainContact.massages.map((massage,key) => {
    //     return <Massage author={massage.author} authort={massage.authort} clock ={massage.clock} massageValue={massage.massageValue} type ={massage.type} key={key} />
    //     });
    // }

    // else {
    //     var MassageList= null;        
    // }
    const [filler, setFiller] = useState(0);
    

    const send = function(){
        var objDiv = document.getElementById("chat-history");
        objDiv.scrollTop = objDiv.scrollHeight;

        if(document.getElementById("send").value ==""){
            doSearch("");
            return;
        }
        if(mainContact.name == 'no chats yet') {
            document.getElementById("send").value="";
            doSearch("");
            alert("no chats yet");
            return;
        }
        var str = document.getElementById("send").value;
        var today = new Date();
        const zeroPad = (num, places) => String(num).padStart(places, '0');

        var newMassage= {author: "message-data float-right",authort: "message other-message float-right",clock:(zeroPad(today.getHours(),2) + ':' + zeroPad(today.getMinutes(),2))+' Today',massageValue:str, type:'text'}; 
        if(mainContact.massages == "") {
            mainContact.massages = [newMassage];
        }
        else {
            mainContact.massages.push(newMassage);
        }
        document.getElementById("send").value="";
        doSearch("");

        return;
    };

    const _handleKeyDown = (e) => {
          if (e.key === 'Enter') {
            send();
          }
        }


      

    // useEffect(() => {
    //     document.getElementById('output').innerHTML = user.userChat[0].massageStr;
    //     document.getElementById('last massage').innerHTML = user.userChat[0].massageStr;
    //     document.getElementById('image').src = user.Image;
    //     document.getElementById('name').innerHTML = user.name;
    // });


    return (
        <div className='Talk-div'>
        <img className="logo" src={funTalking1} alt="image"/>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <div className="navbar-brand" href="#" style={{ color: "white" }} >
                        Chat!
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
                                    <ContactListResult contacts={contactList} selectContact={selectContact}/>

                                    
                                </ul>
                            </div>
                            <div className="chat">
                                <div className="chat-header clearfix">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <img className='imag' src={funTalking} alt="avatar"></img>
                                            <div className="chat-about">
                                                <h6  className="m-b-0" >{mainContact.name}</h6>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 hidden-sm text-right">

                                        </div>
                                    </div>
                                </div>
                                <div className="chat-history" id="chat-history">
                                {
                                    // <ul className="m-b-0">
                                       
                                    //     {//MassageList}
                                        
                                       
                                    // </ul>
                                }
                                </div>
                                <div className="chat-message clearfix">
                                    <div className="input-group mb-0">
                                        
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-send" type="submit" onClick={send}>send</i></span>
                                        </div>
                                        <input type="text" id ="send" onKeyDown={_handleKeyDown} className="form-control" placeholder="Enter text here..."></input>
                                        <MediaButton massages={mainContact.massages} doSearch = {doSearch} />
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