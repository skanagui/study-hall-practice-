import React from 'react'; 


function Character ({char}){

    return (
        <>
    <h2>{char.name}</h2>
    <img alt = "character" src = {char.img}/>

        </>

    )











}

export default Character; 