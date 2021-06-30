import React from 'react'
import '../styles/Searcher.css'
function Searcher(props) {
    return (
      <div className="filter">
      
        <label>Filter Badges</label>

        <input type="text" className="filter__box"
                value={props.name} onChange={(e)=>{
                    props.setName(e.target.value)}}></input>

    </div>
    )
}

export default Searcher
