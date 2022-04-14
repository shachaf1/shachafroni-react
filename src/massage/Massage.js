function Massage({author,clock,massageStr}) {
    return (
        <li className="clearfix">
            <div className={author}>
                <span className="message-data-time">{clock}</span>
            </div>
            <div className="message my-message">{massageStr}</div>
        </li>
    )
}

export default Massage;