import React from 'react'; 
import Navbar from './Navbar'; 
import HomeImage from './HomeImage'; 
import CharacterBox from './CharacterBoxThumbnail'; 
import CharactersBoxContainer from './CharactersBoxContainer';
import AsideCharactersContainer from './AsideCharactersContainer'
import Slide from './Slide'; 
import AsideCharacterBox from './AsideCharacterBox';

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
                <AsideCharactersContainer>
                    <AsideCharacterBox characterTest={'Batman'}/>
                    <AsideCharacterBox characterTest={'Robin'}/>
                    <AsideCharacterBox characterTest={'Batgirl'}/>
                    <AsideCharacterBox characterTest={'Nightwing'}/>
                </AsideCharactersContainer>
                
            </div>
           
        )
    }
}

export default App; 

