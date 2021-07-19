import React from 'react'
import '../styles/Searcher.css'
function Searcher(props) {
    return (
      <div className="filter">
      
        <label>Search Badges</label>

      <div className="filter__container">
        
        <span className="filter__icon"></span>

        <input type="text" className="filter__box"
                value={props.name} onChange={(e)=>{
                    props.setName(e.target.value)}}></input>
      </div>

    </div>
    )
}

export default Searcher
