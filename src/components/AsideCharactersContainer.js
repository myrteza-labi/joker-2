import React from 'react'; 
import './AsideCharactersContainer.css'; 
import AsideCharacterBox from './AsideCharacterBox'; 

function AsideCharactersContainer(){
    return (
        <div className={'container-fluid AsideCharactersContainer'}>
            <h2>Je suis le AsideCharactersContainer</h2>
            <AsideCharacterBox character={'batman'}/>
            <AsideCharacterBox character={'batgirl'}/>
            <AsideCharacterBox character={'robin'}/>
            <AsideCharacterBox character={'nightwing'}/>
        </div>
    )
}
export default AsideCharactersContainer; 

