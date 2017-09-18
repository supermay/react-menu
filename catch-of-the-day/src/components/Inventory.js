import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  constructor(){
    super();
    this.renderInventory = this.renderInventory.bind(this)
  }

  handleEvent(e,key){
    const fish = this.props.fishes[key];
    const updatedFish = {
      // overwrite the attributes
      ...fish,
      // easy way to modify all (if anything changes)
      [e.target.name]: e.target.value
    }
    this.props.updateFish(key,updatedFish);
  }

  renderInventory(key){
    const fish = this.props.fishes[key];
    return (
      <div className="fish-edit" key={key}>
        {/* we are using value not default value */}
        <input value={fish.name} type="text" name="name" placeholder="Fish Name"
        onChange={(e) => this.handleEvent(e,key)} />
        <input value={fish.price} type="text" name="price" placeholder="Fish Price"
        onChange={(e) => this.handleEvent(e,key)} />

        <select value={fish.status} type="text" name="status" placeholder="Fish Status"
          onChange={(e) => this.handleEvent(e,key)} >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>

        <textarea value={fish.desc} type="text" name="desc" placeholder="Fish Desc"
          onChange={(e) => this.handleEvent(e,key)}>
        </textarea>
        <input value={fish.image} type="text" name="image" placeholder="Fish Image"
        onChange={(e) => this.handleEvent(e,key)}/>
        <button onClick={() => this.props.removeFish(key)}>Remove Fish</button>
      </div>
    )
  }


  render(){
    return (
      <div>
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(this.renderInventory)}
        <AddFishForm addFish={this.props.addFish}/>
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    )
  }
}

export default Inventory;
