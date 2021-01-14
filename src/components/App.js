import React from 'react'; 
import Navbar from './Navbar'; 
import HomeImage from './HomeImage'; 
import Carousel from './Carousel'
import AsideCharacterBox from './AsideCharacterBox';
import JokerEvolution from './JokerEvolution'; 
class App extends React.Component{
    constructor(props){
        super(props); 
    }
    render(){
        return(
            <div>
                <Navbar/>
                <HomeImage/>
                <Carousel sliderNumber={'1'}>
                    <JokerEvolution joker='1'/>
                    <JokerEvolution joker='2'/>
                    <JokerEvolution joker='3'/>
                    <JokerEvolution joker='4'/>
                </Carousel>
                <Carousel sliderNumber={'2'}>
                    <AsideCharacterBox character={'Harley-quinn'}/>
                    <AsideCharacterBox character={'Penguin'}/>
                    <AsideCharacterBox character={'Black-mask'}/>
                    <AsideCharacterBox character={'Lex-luthor'}/>
                </Carousel>
                <Carousel sliderNumber={'3'}>
                    <AsideCharacterBox character={'Batman'}/>
                    <AsideCharacterBox character={'Robin'}/>
                    <AsideCharacterBox character={'Batgirl'}/>
                    <AsideCharacterBox character={'Nightwing'}/>
                </Carousel>
                
                
            </div>
        )
    }
}

export default App; 

/*

 <div id='JokerEvolution' className='container-fluid'>
                    <JokerEvolution joker='1'/>
                    <JokerEvolution joker='2'/>
                    <JokerEvolution joker='3'/>
                    <JokerEvolution joker='4'/>
                </div>


<Carousel sliderNumber={'1'}>
                    <AsideCharacterBox character={'Harley-quinn'}/>
                    <AsideCharacterBox character={'Penguin'}/>
                    <AsideCharacterBox character={'Black-mask'}/>
                    <AsideCharacterBox character={'Lex-luthor'}/>
                </Carousel>

*/
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