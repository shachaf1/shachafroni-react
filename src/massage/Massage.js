import './Massage.css'
function Massage({ author, authort, clock, massageStr }) {
    return (
        <div>
            <div className="clearfix">
                </div>
                <div className={authort}> {massageStr} </div>
                <div className={author}>
                    <span className="message-data-time">{clock}</span>
                </div>
        </div>



    )
}

export default Massage;

