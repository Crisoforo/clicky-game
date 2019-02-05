import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

// friends
function shuffleFriends(friends) {
  let i = friends.length - 1;
 
  for (; i > 0; i--) {
    
    const j = Math.floor(Math.random() * (i + 1));
    const temp = friends[i]; friends[i] = friends[j]; friends[j] = temp;
  }
  return friends;
}

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    count: 0,
    friends,
    topCount: 0,
    message: ""
  };
// handleIncrement increases this.state.count by 1
handleIncrement = () => {
  // We always use the setState method to update a component's state
  this.resetScore();
  this.setState({ count: this.state.count + 1, topCount: this.state.topCount + 1});
  this.handleShuffle();
  

};



gameOver = () => {
  if (this.state.count > this.state.topCount) {
    this.setState({topCount: this.state.count}, function() {
      console.log(this.state.topCount);
    });
  }
  this.state.friends.forEach(friends => {
    console.log(friends);
    friends.count = 0;
  });
  alert(`Game Over :( \nscore: ${this.state.count}`);
  this.setState({count: 0});
  return true;
}

resetScore = () => {
  if (this.state.count >= 12 ) {
    this.state.count = -1;
    this.state.topCount = -1;
    
  }
};

// PSEUDO-CODE  
//IF friends.id === this.friends.id
//restart else
// handleIncrement()

handleShuffle = () => {
  let shuffledFriends = shuffleFriends(friends);
  this.setState({ friends: shuffledFriends });
};

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <div className="nav-bar">
        <Title>Clicky Game</Title>
        <Title>Click an image to begin!</Title> 
        <Title>Score:{this.state.count} | Top Score:{this.state.topCount}</Title></div>
        <div className="header">
        <h1>Clicky Game!</h1><br/>
        <p>Click on an image to earn points, but don't click on any more than once!</p>
        </div>
        <div className="cardWrapper">
        {this.state.friends.map(friend => (
          <FriendCard
            handleIncrement={this.handleIncrement}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          
          />
        ))}</div> 
        <footer><p>by Alejandro</p></footer>
      </Wrapper>
    );
  }
}

export default App;
