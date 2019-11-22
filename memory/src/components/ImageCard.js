import React from "react";
import "./style.css"
function ImageCard (props) {
    return(
        <div className = "card hvr-grow">
            <div className = "img-container">
                <img id={props.id} alt={props.name} src={props.image}/>
            </div>
        </div>
    )
}
export default ImageCard;