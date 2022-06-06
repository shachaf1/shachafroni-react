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
import { sendMessage } from '@microsoft/signalr/dist/esm/Utils';
import { HubConnection } from '@microsoft/signalr';
import { HubConnectionBuilder } from '@microsoft/signalr';
export default function Talk() {
    
    const [ connection, setConnection ] = useState(null);

    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl('https://localhost:7125/myHub')
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);
    }, []);

    const refresh_data = function(){
        var selectedContact = mainContact;
        var config = {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
            }
        }
        const apiContacts = axios.get('https://localhost:7125/Contacts',config)
        .then(res => setUserContacts(JSON.parse(JSON.stringify(res.data))))
        .then(()=>{
            setMainContact(selectedContact);
            
        }).then(res => doSearch(""))
        .then(res =>{
            if (selectedContact.id!=null){
                axios.get("https://localhost:7125/Contacts/"+selectedContact.id+"/messages",config)
                .then((res)=>{
                    // if (res.data.length!=0) {
                    //     var d = res.data.map((massage, key) =>{
                    //         const zeroPad = (num, places) => String(num).padStart(places, '0');
                    //         let mainDate =new Date(massage.created);
                    //         let date =zeroPad(mainDate.getHours(),2) + ':' + zeroPad(mainDate.getMinutes(),2);
                    //         if (massage.sent == false) {
                    //             return <Massage author="message-data" authort="message my-message" clock={date} massageValue={massage.content} type="text" key={key}></Massage>
                    //         } else {
                    //             return <Massage author="message-data float-right" authort="message other-message float-right" clock={date} massageValue={massage.content} type="text" key={key}></Massage>
                    //         }
                            
                    //     })
                    //     setMassageList(d);
                    // } else {
                    //     setMassageList(null);
                    // }
                    setMainContact(selectedContact);
                })
            }
            
        })
        
        
    }
    

    const [userContacts,setUserContacts] = useState([]);

    const [contactList, setContactList] = useState(userContacts);
    const [mainContact, setMainContact] = useState({"id": "", "name":"", "server":"", "last":"", "lastDate":"", "funct":""});
    const [MassageList,setMassageList] = useState(null);

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
   const [bit, setBit] = useState(0);
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
                //console.log(Array(userContacts).at(0));
                

                setMainContact(Math.max.apply(Math, userContacts.map(function(o) { return o.lastDate; })));
            }
            else{
                var tempContact ={img: funTalking,name: 'select contact from your chat list',kind:'clearfix',massages: [""]};
                setMainContact(tempContact);
            }
            
        }).then(res => doSearch(""))
    },[bit])
    

    useEffect (()=>{
        doSearch("");
    },[userContacts])

    useEffect (()=> {
        if(mainContact != null)
        {
            if(mainContact.id != '')
        {
            axios.get("https://localhost:7125/Contacts/"+mainContact.id+"/messages",config)
            .then((res)=>{
                if (res.data.length!=0) {
                    var d = res.data.map((massage, key) =>{
                        const zeroPad = (num, places) => String(num).padStart(places, '0');
                        let mainDate =new Date(massage.created);
                        let date =zeroPad(mainDate.getHours(),2) + ':' + zeroPad(mainDate.getMinutes(),2);
                        if (massage.sent == false) {
                            return <Massage author="message-data" authort="message my-message" clock={date} massageValue={massage.content} type="text" key={key}></Massage>
                        } else {
                            return <Massage author="message-data float-right" authort="message other-message float-right" clock={date} massageValue={massage.content} type="text" key={key}></Massage>
                        }
                        
                    })
                    setMassageList(d);
                } else {
                    setMassageList(null);
                }
            })
        }
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
    

    const send =async function(){
        var objDiv = document.getElementById("chat-history");
        objDiv.scrollTop = objDiv.scrollHeight;
        var config = {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
            }
        }
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
        //var today = new Date();
        //const zeroPad = (num, places) => String(num).padStart(places, '0');
        var mashehu=
        {
          "content": str
        }
        if(mainContact != null)
        {
            await axios.post("https://localhost:7125/Contacts/"+mainContact.id+"/messages",mashehu,config);
            document.getElementById("send").value="";
            await connection.send("SendMessage");
            setMainContact(mainContact);
        }
        
        
        doSearch("");

        return;
    };

    useEffect(() => {
        if (connection) {
            connection.start()
                .then(result => {
                        connection.on("ReceiveMessage",()=>{
                            //console.log(new Date())
                            //let a = bit+1;
                            //setBit(a);
                            refresh_data();
                        
                        })
                })
                .catch(e => console.log('Connection failed: ', e));
        }
        console.log("hi");
    }, [connection]);

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
                                <Search doSearch={doSearch} className ="search" connection={connection}/>
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
                                    <ul className="m-b-0">
                                       
                                     {MassageList}
                                        
                                       
                                     </ul>
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