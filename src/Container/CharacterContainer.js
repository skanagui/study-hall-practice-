import React from 'react'; 
import Character from '../Component/Character'
import {characters} from '../api'


class CharacterContainer extends React.Component {

    state = {

        api: characters
        
    }


    renderChars = () => {
        return this.state.api.map(el => <Character key ={el.id} char ={el}/>);
    }


    render(){
        return (
            <div classname = "list">{this.renderChars()}</div> 
        );
    }








}

export default CharacterContainer;