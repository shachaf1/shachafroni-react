 import contacts from "../contact/contacts";
import Contact from "../contact/Contact";

function ContactListResult({contacts},handleMain){
    var ContactList = contacts.map((contact,key) => {
        return <Contact {...contact} key={key} handleMain={handleMain}/>
    });


    return(
        <div >
            {ContactList}
        </div>
    )
}
export default ContactListResult;
