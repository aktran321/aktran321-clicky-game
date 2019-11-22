import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./images.json";

class App extends Component {
    //setting this.state.images to the images json array
    state = {
        images
    }
    //We will eventually need to mark the images that are clicked
    //and then alter their positions

    // markedImage = id => {
    //     const images = 
    // }

    render() {
        return (
            <Wrapper>
                <Title>Image Memory Game</Title>
                {this.state.images.map(picture => (
                    <ImageCard
                    id={picture.id}
                    name={picture.name}
                    image={picture.image}
                    />
                ))}
            </Wrapper>
        )
    }
}
export default App;