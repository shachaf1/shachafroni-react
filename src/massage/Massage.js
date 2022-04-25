import './Massage.css'

function Massage({ author, authort, clock, massageValue,type }) {
    if (type=='image'){
        return (
            <div>
            <div className="clearfix">
                </div>
                <div className={authort}><img className="image" src={massageValue}/> </div>
                <div className={author}>
                    <span className="message-data-time">{clock}</span>
                </div>
        </div>


        )
    }
    if (type=='audio'){
        return (
            <div>
            <div className="clearfix">
                </div>
                <div className={authort}><audio src={massageValue} controls></audio> </div>
                <div className={author}>
                    <span className="message-data-time">{clock}</span>
                </div>
        </div>
        )
    }
    if (type=='video'){
        return (
            <div>
            <div className="clearfix">
                </div>
                <div className={authort}><video className="image" src={massageValue} controls></video> </div>
                <div className={author}>
                    <span className="message-data-time">{clock}</span>
                </div>
        </div>
        )
    }

    return (
        <div>
            <div className="clearfix">
                </div>
                <div className={authort}> {massageValue} </div>
                <div className={author}>
                    <span className="message-data-time">{clock}</span>
                </div>
        </div>



    )
}

export default Massage;

