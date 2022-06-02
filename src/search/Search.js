
import {useRef} from 'react';
import AddContact from '../AddContact/AddContact';
import './Search.css'

function Search({doSearch,connection}){
   const searchBox = useRef(null);

    const search = function(){
        doSearch(searchBox.current.value);
    }
    return (

        <div className="input-group">
            <div >
                <input ref={searchBox} onKeyUp={search} type="text" className="form-control" placeholder="Search..."></input>

                <AddContact doSearch={doSearch} connection={connection} />
            </div>
        </div>


    )
}
export default Search;
