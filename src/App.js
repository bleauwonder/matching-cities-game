import React, { Component } from "react";
import Cities from "./components/Cities";
// import Wrapper from "./components/Wrapper"
// import Score from "./components/Score";
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
    message: "Can you remember what you've clicked?"
  }

  handleClick = id => {
    const cards = this.state.cards;
    const cardClicked = cards.filter(cards => cards.id === id);

    if(!cardClicked[0].clicked) {
      cardClicked[0].clicked = true;
      this.handleCorrect();
      this.randomCity(cards);
      this.setState({ cards });
    } else {
      this.handleIncorrect();
      
    }
  };

    randomCity = cities => {
      cities.sort((a, b) => {
        return 0.5 - Math.random();
      });
    };

    handleCorrect = () => {
      this.setState({ guessCorrect: true });
      if (this.state.score + 1 > this.state.topScore) {
        this.setState({ topScore: this.state.topScore + 1 });
      }
      if (this.state.score + 1 >= this.state.goal) {
        this.setState({
          score: this.state.score + 1,
          message: "Great Memory! Where do you want to go?",
          messageClass: "correct"
        });
      } else {
        this.setState ({
          score: this.state.score + 1,
          message: "Great Job!",
          messageClass: "correct"
        });
      }
    };

    handleIncorrect = () => {
      this.setState({
        message: "Nice try! Play Again?",
        guessCorrect: false
      });
      this.resetGame();
    };

    resetGame = id => {
      const cards = this.state.cards;
      for (let i = 0; i < cards.length; i++) {
        cards[i].clicked = false;
      }
      this.setState({ score: 0 });
    };


render() {
  const { message, score, cards, topScore } = this.state;
  return (
    <div className="fluid-container lodge h-100vh">
    <Navbar
      className="row"
      score={score}
      topScore={topScore}
      message={message}
    />
    <Header className="bg-header row" />

    <div className="d-flex justify-content-center main-content mx-auto padding-main flex-wrap row">
      {cards.map(({ id, name, image, clicked }) => (
        <Cities
          key={id}
          id={id}
          name={name}
          image={image}
          clicked={clicked}
          clickHandler={this.handleClick}
          />
      ))}
      </div>

      <Footer className="footer-mgn row" />
    </div>

    );
  }
}

export default App;


/* <Score total={this.state.score}
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
</div> */

// Shuffle the cards
// shuffleCard = id => {
//   let pickedCity = this.state.pickedCity;

//   if(pickedCity.includes(id)){
//     this.setState({ pickedCity: [], score: 0, status: "Already Clicked! Start Over"});
//     return;
//   }else{
//     pickedCity.push(id)

//     if(pickedCity.length === 12){
//       this.setState({ score: 12, status: "You Won! Great Memory! Play Again?", pickedCity: []});
//       return;
//     }

//   this.setState({ cards, pickedCity, score: pickedCity.length, status: " " });
  
//   for (let i = cards.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [cards[i], cards[j]] = [cards[j], cards[i]];
//     }
//   }
// }