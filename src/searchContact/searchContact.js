/*
import {useRef} from 'react';

function searchContact({doSearch}){
    const searchBox= useRef(null);
    const search = function(){
       //setSearchQuery(searchBox.current.value);
       const searchContact = function(){
           doSearch(searchBox.current.value)}
    }
    return(
        <div className="searchContact">
            <div className="searchContact1">
                <div className="searchContact2">
                    <input ref={searchBox} onKeyUp={search} type="text" className="form-control" placeholder="searchContact"
                    aria-Label="searchContact" aria-describedby="buttom-addon2"></input>
                    <button className = 'btn btn-outlone-secondary' type="button" id="button-addon2"><i className="bi bi-search me-3"></i></button>
                </div>
            </div>
        </div>

    )
}
export default searchContact;
*/