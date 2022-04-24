import contacts from "../contact/contacts";
import Contact from "../contact/Contact";

function ContactListResult({contacts,selectContact}){
    const foo = function (q) {
        selectContact(q)
    }

    var ContactList = contacts.map((contact,key) => {
        return <Contact {...contact} key={key} funct={foo}/>
    });


    return(
        <div >
            
            {ContactList}
            
        </div>
    )
}
export default ContactListResult;