import React, { Component } from "react";
import Cities from "./components/Cities";
import Wrapper from "./components/Wrapper"
import Score from "./components/Score";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  state = {
    cards: cards,
    pickedCity: [],
    topScore: 0,
    goal: 12,
    status: ""
  }

// Shuffle the cards
shuffleCard = id => {
  let pickedCity = this.state.pickedCity;

  if(pickedCity.includes(id)){
    this.setState({ pickedCity: [], score: 0, status: "Already Clicked! Start Over"});
    return;
  }else{
    pickedCity.push(id)

    if(pickedCity.length === 12){
      this.setState({ score: 12, status: "You Won! Great Memory! Play Again?", pickedCity: []});
      return;
    }

  this.setState({ cards, pickedCity, score: pickedCity.length, status: " " });
  
  for (let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  }
}

render() {
  return (
    <div className="fluid-container lodge h-100vh">
    <Navbar
      className="row"
      score={this.state.score}
      topScore={this.state.topScore}

    />
    <Header className="bg-header row" />

    <div className="d-flex justify-content-center main-content mx-auto padding-main flex-wrap row">
    <Score total={this.state.score}
           goal={12}
           status={this.state.status}
           />
    <Wrapper>
      {this.state.cards.map(city => (
        <Cities
          shuffleScoreCard={this.shuffleCard}
          id={city.id}
          key={city.id}
          image={city.image}
        />
      ))}

    </Wrapper>
    </div>

<Footer className="footer-mgn row" />
</div>

);
}
}

export default App;