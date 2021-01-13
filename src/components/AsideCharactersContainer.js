import React from 'react'; 
import './AsideCharactersContainer.css'; 
import AsideCharacterBox from './AsideCharacterBox'; 

function AsideCharactersContainer(props){

    const sliderNumber= props.sliderNumber; 

    return (
        <div>
        <div id={"carouselExampleCaptions"+sliderNumber} className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li data-bs-target={"#carouselExampleCaptions"+sliderNumber} data-bs-slide-to="0" className="active"></li>
                <li data-bs-target={"#carouselExampleCaptions"+sliderNumber} data-bs-slide-to="1"></li>
                <li data-bs-target={"#carouselExampleCaptions"+sliderNumber} data-bs-slide-to="2"></li>
                <li data-bs-target={"#carouselExampleCaptions"+sliderNumber} data-bs-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">
               {props.children}
            </div>
            <a className="carousel-control-prev" href={"#carouselExampleCaptions"+sliderNumber} role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href={"#carouselExampleCaptions"+sliderNumber} role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </a>
        </div>
    </div>
    )
}
export default AsideCharactersContainer; 

