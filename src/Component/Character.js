import React from 'react'; 


function Character ({char}){

    return (
        <>
            <h2>{char.name}</h2>
            <img alt = "character" src = {char.img}/>
            <h3>{char.show}</h3>
            <br></br>
            <br></br>

        </>

    )











}

export default Character; 