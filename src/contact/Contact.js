import './Contact.css'
function Contact(props) {
    
    return (
        <div>
            <li className={props.kind}>
                <img src={props.img} ></img>
                
                <div className="about">
                    <div className="name">{props.name}</div>
                    <div onClick={props.handleMain} className="status"> <i className="fa fa-circle offline"></i> {props.massages[0].massageStr} </div>
                </div>
            </li>
          </div>
    )
}

export default  Contact;