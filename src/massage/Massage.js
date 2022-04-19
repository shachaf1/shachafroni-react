import './Massage.css'
function Massage({author,authort,clock,massageStr}) {
    return (
        <div>

        <div className="clearfix">
        <div className={author}>
            <span className="message-data-time">{clock}</span>  
        </div>
        
        </div>
         <ul class={authort}> {massageStr} </ul>
  
        </div>



    )
}

export default Massage;

