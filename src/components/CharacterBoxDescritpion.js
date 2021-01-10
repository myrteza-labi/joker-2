import React from 'react'; 
import './CharacterBoxDescription.css'; 

function CharacterBoxDescription(props){
    const joker= props.joker; 
    const order = props.order; 
    const characterDescriptionOrder = order=='right'? 'order-2' : 'order-1';
        if (props.joker=='1'){
            return (
                <div className={characterDescriptionOrder}>
                    <h2 className={'title-description'}>JE SUIS LE JOKER 1</h2>
                    <p className={'paragraphe-description'}>Joker très mechants et moche</p>
                </div>
                
            )
        } else if (props.joker=='2'){
            return (
                <div className={characterDescriptionOrder}>
                    <h2 className={'title-description'}>JE SUIS LE JOKER 2</h2>
                    <p className={'paragraphe-description'}>Joker très mechants et très moche</p>
                </div>
            )
        } else if (props.joker=='3'){
            return (
                <div className={characterDescriptionOrder}>
                    <h2 className={'title-description'}>JE SUIS LE JOKER 3</h2>
                    <p className={'paragraphe-description'}>Joker drole mais méchant</p>
                </div>
            )
        } else if (props.joker=='4'){
            return (
                <div className={characterDescriptionOrder}>
                    <h2 className={'title-description'}>JE SUIS LE JOKER 4</h2>
                    <p className={'paragraphe-description'}>Le naruto des Joker</p>
                </div>
            )
        }
}

export default CharacterBoxDescription; 