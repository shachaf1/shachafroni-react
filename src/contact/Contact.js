import './Contact.css'
function Contact({send,img,name,kind, massages}) {

    return (
        <div>
            <li className={kind}>
                <img src={img} ></img>
                
                <div className="about">
                    <div className="name">{name}</div>
                    <div  className="status"> <i className="fa fa-circle offline"></i> {massages[0].massageStr} </div>
                </div>
            </li>
          </div>





    )
}

export default  Contact;