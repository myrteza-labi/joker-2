import React from 'react'; 
import Navbar from './Navbar'; 
import HomeImage from './HomeImage'; 
import CharacterBox from './CharacterBoxThumbnail'; 
import CharactersBoxContainer from './CharactersBoxContainer';
import AsideCharactersContainer from './AsideCharactersContainer'
import Slide from './Slide'; 

class App extends React.Component{
    constructor(props){
        super(props); 
    }
    render(){
        return(
            <div>
                <Navbar/>
                <HomeImage/>
                <CharactersBoxContainer/>
                <AsideCharactersContainer/>
                <Slide/>
            </div>
           
        )
    }
}

export default App; 

