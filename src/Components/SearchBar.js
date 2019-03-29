import React from 'react'

function SearchBar(props){
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
            <input type="text" name="userInput" value={props.userInput} onChange={props.handleChange}/>
            <button>buton</button>
            </form>            
        </div>
    )
}

export default SearchBar