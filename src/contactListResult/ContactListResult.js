import Contact from "../contact/Contact";
function ContactListResult({contacts,selectContact}){
    const foo = function (q) {
        selectContact(q)
    }
    if(contacts.length != 0) {
        var ContactList = contacts.map((contact,key) => {
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