import './Contact.css'
function Contact({kind, img, name, massages, funct}) {
    
    // const chosen =function(params) {
    //     props.handleMain(params);
    // }

    const foo2 = function(){
        funct(name);
    }

    var LastMassage = "";
    if (massages!=[]){
        if (massages[massages.length-1].type=='text'){
            LastMassage = massages[massages.length-1].massageValue;
        } else {
            LastMassage = massages[massages.length-1].type;
        }
    }
    

    
    return (
        <div>
            
            <li className={kind} onClick={foo2}>
                
                <img className='imag' src={img}></img>
                
                <div className="about">
                    <div className="name">{name}</div>
                    <div className="status" > <i className="fa fa-circle offline"></i> {LastMassage} </div>
                </div>
            </li>
          </div>
    )
}

export default  Contact;