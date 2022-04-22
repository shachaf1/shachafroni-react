 import contacts from "../contact/contacts";
import Contact from "../contact/Contact";

function ContactListResult({contacts}){
    var ContactList = contacts.map((contact,key) => {
        return <Contact {...contact} key={key} />
    });


    return(
        <div >
            {ContactList}
        </div>
    )
}
export default ContactListResult;
