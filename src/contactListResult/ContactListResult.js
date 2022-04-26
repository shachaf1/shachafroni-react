import userContacts from "../userContacts";
import Contact from "../contact/Contact";

function ContactListResult({contacts,selectContact}){
    const foo = function (q) {
        selectContact(q)
    }
    if(userContacts.length != 0) {
        var ContactList = userContacts.map((contact,key) => {
            return <Contact {...contact} key={key} funct={foo}/>
        });
    
    }
    else {
        var ContactList = null;
    }

    return(
        <div >
            
            {ContactList}
            
        </div>
    )
}
export default ContactListResult;