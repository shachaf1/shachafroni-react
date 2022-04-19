import './Contact.css'
function Contact({img,name,lastMassages}) {
    return (
        <div>
            <li className="clearfix active">
                <img src={img} alt="avatar"></img>
                <div className="about">
                    <div className="name">{name}</div>
                    <div className="lastMassage"> <i className="fa fa-circle online"></i> {lastMassages} </div>
                </div>
            </li>
          </div>
    )
}

export default  Contact;