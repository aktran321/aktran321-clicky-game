import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./images.json";

class App extends Component {
    //setting this.state.images to the images.json array
    constructor(props){
        super(props);
        this.state = {
        images:images,
        topScore:0,
        currentScore:0
    };
    this.checkIfClicked = this.checkIfClicked.bind(this);
}
    checkIfClicked = id => {
        let clickedCard = this.state.images.filter(image => image.id === id)[0];
        let imagesCopy = this.state.images.slice().sort(function(a, b){return 0.5 - Math.random()});
        if(!clickedCard.clicked) {
            clickedCard.clicked = true;
            imagesCopy[imagesCopy.findIndex((card) => card.id === id)] = clickedCard;
            this.setState({
                images: imagesCopy,
                currentScore: this.state.currentScore + 1,
                topScore: (this.state.currentScore + 1 > this.state.topScore ? this.state.currentScore + 1 : this.state.topScore)
            });
        } else {
            let resetImagesCopy = imagesCopy.map((image) => {
                return {
                    id:image.id,
                    image:image.image,
                    clicked: false,
                }
            });
            this.setState({
                images:resetImagesCopy,
                currentScore: 0,
            });
        }
    }
    render() {
        return (
            <Wrapper>
                <Title>Image Memory Game</Title>
                    {this.state.images.map(picture => (
                            <ImageCard
                            checkifClicked={this.checkIfClicked}
                            id={picture.id}
                            key={picture.id}
                            name={picture.name}
                            image={picture.image}
                            
                            />
                ))}
            </Wrapper>
        )
    }
   
}
export default App;