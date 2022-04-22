import './Contact.css'
function Contact({img,name,lastMassage,kind}) {
    return (
        <div>
            <li className={kind}>
                <img src={img} alt="image"></img>
                <div className="about">
                    <div className="name">{name}</div>
                    <div className="status"> <i className="fa fa-circle offline"></i> {lastMassage} </div>
                </div>
            </li>
          </div>





    )
}

export default  Contact;