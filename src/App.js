import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import instruments from "./instruments.json";
import "./App.css";

class App extends Component {
  // Setting this.state.instruments to the instruments.json array
  state = {
    instruments,
    score: 0,
    highScore: 0
  };

  // Give each element in array a random index number
  // shuffleCards  = () => {
  //   let shuffle = (array) => {
  //     for (let i = array.length - 1; i > 0; i--) {
  //       let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
  //       [array[i], array[j]] = [array[j], array[i]]; // swap elements
  //     }
  //   }

  //   let shuffledArray = shuffle(this.state.instruments.slice()) //.slice makes copy of array
  //   this.setState({ instruments : shuffledArray }) //updating state of instruments with newly ordered array
  //   //setState will automatically re-render components
  // }

   
  gameOver = () => {
    if (this.state.score > this.state.highScore) {
      this.setState({highScore: this.state.score}, function() {
        console.log(this.state.highScore);
      });
    }
    this.state.instruments.forEach(instrument => {
      instrument.count = 0;
    });
    alert(`Game Over! \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.instruments.find((o, i) => {
      if (o.id === id) {
        if(instruments[i].count === 0){
          instruments[i].count = instruments[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.instruments.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }

  // Map over this.state.instruments and render a cardCard component for each card object
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highScore={this.state.highScore}>Instrument List</Header>
        {this.state.instruments.map(instrument => (
          <Card
            id={instrument.id}
            key={instrument.id}
            name={instrument.name}
            image={instrument.image}
            clickCount={this.clickCount}
            // onClick={this.shuffleCards}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

//loop through instruments, output a card for each instrument