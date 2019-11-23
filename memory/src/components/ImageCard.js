import React from "react";
import "./style.css"
const ImageCard = props => (
    
        <div className = "card hvr-grow">
            <div className = "img-container">
                <img id={props.id} alt={"This is image " + props.name} 
                src={props.image} 
                onClick={() => props.checkIfClicked(props.id)}
                />
            </div>
        </div>
    );

export default ImageCard;