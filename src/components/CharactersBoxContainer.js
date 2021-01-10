import React from 'react' ;
import './CharactersBoxContainer.css'; 
import CharacterBox from './CharacterBox'; 

function CharactersBoxContainer(){
    return (
        <div className='container CharactersBoxContainer'>
            <div className='color-1 row justify-content-start'>
                <CharacterBox order={'right'} className={'row'} joker={'1'}/>
            </div>
            <div className='color-2 row justify-content-end'>
                <CharacterBox order={'left'} className={'row'} joker={'2'}/>
            </div>
            <div className='color-3 row justify-content-start'>
                <CharacterBox order={'right'} className={'row'} joker={'3'}/>
            </div>
            <div className='color-4 row justify-content-end'>
                <CharacterBox order={'left'} className={'row'} joker={'4'}/>
            </div>
            
            
        </div>
    )
}

export default CharactersBoxContainer; 