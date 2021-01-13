import React from 'react'; 
import Navbar from './Navbar'; 
import HomeImage from './HomeImage'; 
import CharacterBox from './CharacterBoxThumbnail'; 
import CharactersBoxContainer from './CharactersBoxContainer';
import AsideCharactersContainer from './AsideCharactersContainer'
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
                <AsideCharactersContainer sliderNumber={'1'}>
                    <AsideCharacterBox character={'Harley-quinn'}/>
                    <AsideCharacterBox character={'Penguin'}/>
                    <AsideCharacterBox character={'Black-mask'}/>
                    <AsideCharacterBox character={'Lex-luthor'}/>
                </AsideCharactersContainer>
                <AsideCharactersContainer sliderNumber={'2'}>
                    <AsideCharacterBox character={'Batman'}/>
                    <AsideCharacterBox character={'Robin'}/>
                    <AsideCharacterBox character={'Batgirl'}/>
                    <AsideCharacterBox character={'Nightwing'}/>
                </AsideCharactersContainer>
                
            </div>
        )
    }
}

export default App; 
/*
                <AsideCharactersContainer>
                    <AsideCharacterBox character={'Batman'}/>
                    <AsideCharacterBox character={'Robin'}/>
                    <AsideCharacterBox character={'Batgirl'}/>
                    <AsideCharacterBox character={'Nightwing'}/>
                </AsideCharactersContainer>


                <AsideCharactersContainer>
                    <AsideCharacterBox character={'Harley-quinn'}/>
                    <AsideCharacterBox character={'Black-mask'}/>
                    <AsideCharacterBox character={'Penguin'}/>
                    <AsideCharacterBox character={'Lex-luthor'}/>
                </AsideCharactersContainer>
*/