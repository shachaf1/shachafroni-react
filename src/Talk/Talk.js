import React, { useEffect } from 'react'
import './Talk.css';
import { useNavigate } from 'react-router-dom';
import Massage from '.././massage/Massage'
import '.././massage/Massage.css'
export default function talk() {
    const massages = [{author: 'message my-message',authort: 'message-data',clock:'10:12 AM, Today',massageStr:'Are we meeting today?'},
    {author: 'message other-message float-right',authort: 'message other-message float-right',clock:'10:12 AM, Today',massageStr:'Are we meeting today?'},
    {author: 'message my-message',authort: 'message-data',clock:'10:12 AM, Today',massageStr:'Are we meeting today?'},
    {author: 'message my-message',authort:'message-data',clock:'10:12 AM, Today',massageStr:'Are we meeting today?'},
    {author: 'message my-message',authort:'message-data',clock:'10:12 AM, Today',massageStr:'Are we meeting today?'}
]; 
const MassageList = massages.map((massage,key) => {
    return <Massage author={massage.author} clock ={massage.clock} massageStr={massage.massageStr} key={key} />
});


    // useEffect(() => {
    //     document.getElementById('output').innerHTML = user.userChat[0].massageStr;
    //     document.getElementById('last massage').innerHTML = user.userChat[0].massageStr;
    //     document.getElementById('image').src = user.Image;
    //     document.getElementById('name').innerHTML = user.name;
    // });


    return (
        <div className='talk-div'>
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
                            <div id="plist" className="people-list">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-search"></i></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Search..."></input>
                                </div>
                                <ul className="list-unstyled chat-list mt-2 mb-0">
                                    <li className="clearfix">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar"></img>
                                            <div className="about">
                                                <div className="name">Vincent Porter</div>
                                                <div className="status"> <i className="fa fa-circle offline"></i> left 7 mins ago </div>
                                            </div>
                                    </li>
                                    <li className="clearfix active">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar"></img>
                                            <div className="about">
                                                <div className="name">Aiden Chavez</div>
                                                <div className="status"> <i className="fa fa-circle online"></i> online </div>
                                            </div>
                                    </li>
                                    <li className="clearfix">
                                        <img id="image" alt="avatar"></img>
                                            <div className="about">
                                            <div id="last massage" className="status"> <i className="fa fa-circle online"></i></div>
                                            </div>
                                    </li>
                                    <li className="clearfix">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar"></img>
                                            <div className="about">
                                                <div className="name">Mike Thomas</div>
                                                <div className="status"> <i className="fa fa-circle online"></i> online </div>
                                            </div>
                                    </li>
                                    <li className="clearfix">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar"></img>
                                            <div className="about">
                                                <div className="name">Christian Kelly</div>
                                                <div className="status"> <i className="fa fa-circle offline"></i> left 10 hours ago </div>
                                            </div>
                                    </li>
                                    <li className="clearfix">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="avatar"></img>
                                            <div className="about">
                                                <div className="name">Monica Ward</div>
                                                <div className="status"> <i className="fa fa-circle online"></i> online </div>
                                            </div>
                                    </li>
                                    <li className="clearfix">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar"></img>
                                            <div className="about">
                                                <div className="name">Dean Henry</div>
                                                <div className="status"> <i className="fa fa-circle offline"></i> offline since Oct 28 </div>
                                            </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="chat">
                                <div className="chat-header clearfix">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar"></img>
                                            </a>
                                            <div className="chat-about">
                                                <h6  className="m-b-0">Aiden Chavez</h6>
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
                                        <div className="clearfix">
                                            <div className="message-data float-right">
                                                <span className="message-data-time">10:10 AM, Today</span>  
                                            </div>
                                            
                                        </div>
                                        <ul class="message other-message float-right"> Hi Aiden, how are you? How is the project coming along? </ul>
                                    </ul>
                                </div>
                                <div className="chat-message clearfix">
                                    <div className="input-group mb-0">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-send"></i></span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Enter text here..."></input>
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
