import './Contact.css'
function Contact({kind, img, name, massages, funct}) {
    
    // const chosen =function(params) {
    //     props.handleMain(params);
    // }

    const foo2 = function(){
        funct(name);
    }

    
    return (
        <div>
            
            <li className={kind} onClick={foo2}>
                
                <img src={img}></img>
                
                <div className="about">
                    <div className="name">{name}</div>
                    <div className="status" > <i className="fa fa-circle offline"></i> {massages[massages.length-1].massageStr} </div>
                </div>
            </li>
          </div>
    )
}

export default  Contact;