import './Massage.css'
function Massage({author,authort,clock,massageStr}) {
    return (
        <div>
        <img src="../../public/funTalking.jpg'" alt="avatar"></img>
        <ul className={author}> {massageStr} 
          <div className= 'small'> {clock}</div>
          
          </ul>
        </div>
    )
}

export default Massage;