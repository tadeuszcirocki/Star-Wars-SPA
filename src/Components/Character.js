import React from 'react'

function Character(props){
    return(
        <div>
            
            {props.characterData.name} <hr/>
            {props.characterData.height} <br/>
            {props.characterData.mass} <br/>
            
        </div>
    )
}

export default Character