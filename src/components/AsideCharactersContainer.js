import React from 'react'; 
import './AsideCharactersContainer.css'; 
import AsideCharacterBox from './AsideCharacterBox'; 

function AsideCharactersContainer(props){
    return (
        <div>
        <h2>Je suis le Slide</h2>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></li>
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">
               {props.children}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </a>
        </div>
    </div>
    )
}
export default AsideCharactersContainer; 

