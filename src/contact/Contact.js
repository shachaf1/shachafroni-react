import './Contact.css'
import icon from "./funTalking.jpg"
function Contact({id, name, server, last, lastDate, funct}) {
    
    
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
    const zeroPad = (num, places) => String(num).padStart(places, '0');
    let mainDate =new Date(lastDate);
    let date =zeroPad(mainDate.getHours(),2) + ':' + zeroPad(mainDate.getMinutes(),2);

    return (
        <div>
            
            <li className={"clearfix"} onClick={foo2}>
                
                <img className='imag' src={icon}></img>
                
                <div className="about">
                    <div className="name" style={{fontWeight:"normal",font:"italic", fontSize:"x-large" }}>{name}</div>
                    <div className="status" > <i className="fa fa-circle offline"></i> {LastMassage} </div>
                    <div className="status" > <i className="fa fa-circle offline"></i> {date} </div>
                </div>
            </li>
          </div>
    )
}

export default  Contact;