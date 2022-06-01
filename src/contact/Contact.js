import './Contact.css'
import icon from "./funTalking.jpg"
function Contact({id, name, server, last, lastDate, funct}) {
    console.log("hi")
    
    
    // const chosen =function(params) {
    //     props.handleMain(params);
    // }

    const foo2 = function(){
        funct(name);
    }

    var LastMassage = last;
    // if (massages!=[]){
    //     if (massages[massages.length-1].type=='text'){
    //         LastMassage = massages[massages.length-1].massageValue;
    //     } else {
    //         LastMassage = massages[massages.length-1].type;
    //     }
    // }
    

    return (
        <div>
            
            <li className={"clearfix"} onClick={foo2}>
                
                <img className='imag' src={icon}></img>
                
                <div className="about">
                    <div className="name" style={{fontWeight:"normal",font:"italic", fontSize:"x-large" }}>{name}</div>
                    <div className="status" > <i className="fa fa-circle offline"></i> {LastMassage} </div>
                    <div className="status" > <i className="fa fa-circle offline"></i> {lastDate} </div>
                </div>
            </li>
          </div>
    )
}

export default  Contact;