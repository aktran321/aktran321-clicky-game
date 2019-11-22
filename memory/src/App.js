import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./images.json";

class App extends Component {
    //setting this.state.images to the images json array
    state = {
        images:images
    }
    shuffleArray = array => {
        let i = array.length - 1;
        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    clickEvent = event => {
        const{name} = event.target;
        let imagesNew = this.shuffleArray(images);
        console.log(imagesNew)
        this.setState({
            [name]: this.imagesNew
        })
    }
    handleInputChange = event => {
        const{name, id} = event.target;
        this.shuffleArray(this.images);
        this.setState({
            [name]: id,
            images: this.images
        })
    }

    render() {
        return (
            <Wrapper>
                <Title>Image Memory Game</Title>
                    {this.state.images.map(picture => (
                        <button onClick= {this.clickEvent}>
                            <ImageCard
                            id={picture.id}
                            key={picture.id}
                            name={picture.name}
                            image={picture.image}
                            
                            />
                        </button> 
                ))}
            </Wrapper>
        )
    }
   
}
export default App;