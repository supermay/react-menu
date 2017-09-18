import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {
  constructor(){
    super();
    // initial state // getInitialState
    this.addFish = this.addFish.bind(this);
    this.updateFish = this.updateFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);

    this.state = {
      fishes: {},
      order: {}
    }
  }

  // don't sync the whole thing, only the store from the input you enter
  componentWillMount(){
    // this runs right before the <App /> is rendered
    this.ref = base.syncState(`${this.props.params.storeId}/fishes`
      ,{
      context: this,
      state: 'fishes'
    });
    // check if there is any order in localStorage
    const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);
    if(localStorageRef){
      this.setState({
        order: JSON.parse(localStorageRef)
      })
    }
  }
  // go to another store
  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

  // for things update => is different from loading data => this case for order
  componentWillUpdate(nextProps, nextState){
  localStorage.setItem(`order-${this.props.params.storeId}`,
  JSON.stringify(nextState.order));
  }

  addFish(fish){
    // update state => take a copy of your current state and update
    const fishes = {...this.state.fishes}
    // add in our new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    // set State
    this.setState({fishes})
  }
  // have to put this in the file where we put state
  loadSamples(){
    this.setState({
      fishes: sampleFishes
    })
  }

  addToOrder(key){
    //copy of our state
    const order = {...this.state.order};
    //update or add the new numbers of fish ordered
    // pay attention to this line either 1 or add 1
    order[key] = order[key] + 1 || 1;
    this.setState({ order })
  }

  updateFish(key,updateFish){
    const fishes = {...this.state.fishes}
    fishes[key] = updateFish
    this.setState ({fishes})
  }

  render(){
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline='Fresh Seafood Market'/>
          <ul className="list-of-fishes">
            {/* loop over stuff */}
            {/* pass down key to other component => to have index not to have key */}
            {Object.keys(this.state.fishes).map(key => <Fish addToOrder={this.addToOrder} key={key} index={key} details={this.state.fishes[key]} />)}
          </ul>
        </div>
        <Order
          params={this.props.params}
          order={this.state.order}
          fishes={this.state.fishes}
        />
        <Inventory
          fishes={this.state.fishes}
          addFish={this.addFish}
          updateFish={this.updateFish}
          loadSamples={this.loadSamples}
        />
      </div>
    )
  }
}

export default App;
