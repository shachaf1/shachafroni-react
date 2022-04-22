
import {useRef} from 'react';

function Search({doSearch}){
   const searchBox = useRef(null);

    const search = function(){
        doSearch(searchBox.current.value);
    }
    return(
        <div className="input-group">
            <div className="input-group-prepend">
                
            </div>
            <input ref={searchBox} onKeyUp={search} type="text" className="form-control"   placeholder="Search..."></input>
        </div>

    )
}
export default Search;
