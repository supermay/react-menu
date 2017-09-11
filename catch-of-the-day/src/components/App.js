import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
  constructor(){
    super();
    // initial state // getInitialState
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.state = {
      fishes: {},
      order: {}
    }
  }

  addFish(fish){
    // update state => take a copy of your current state and update
    const fishes = {...this.state.fishes}
    // add in our new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    // set State
    this.setState({fishes: fishes})
  }
  // have to put this in the file where we put state
  loadSamples(){
    this.setState({
      fishes: sampleFishes
    })
  }

  render(){
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline='Fresh Seafood Market'/>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
      </div>
    )
  }
}

export default App;
