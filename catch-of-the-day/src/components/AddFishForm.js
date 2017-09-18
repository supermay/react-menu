import React from 'react';

class AddFishForm extends React.Component {

  static propTypes = {
    addFish: React.PropTypes.func.isRequired
  }

  createFish(event){
    event.preventDefault();
    debugger
    console.log('Gonna make some fish!')
    const fish = {
      // remember to get the value!!!***
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value
    }
    this.props.addFish(fish)
    this.fishform.reset()
  }
  render(){
    return (
      <form ref={(input) => this.fishform = input}className="fish-edit" onSubmit={this.createFish.bind(this)}>
        {/* use ref to get the value of the input */}
        <input ref={(input) => this.name = input } type="text" placeholder='Fish Name'/>
        <input ref={(input) => this.price = input } type="text" placeholder='Fish Price'/>
        {/* select */}
        <select ref={(input) => this.status = input }>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold!</option>
        </select>
        {/* textarea */}
        <textarea ref={(input) => this.desc = input } placeholder='Fish Desc'></textarea>
        <input ref={(input) => this.image = input } type="text" placeholder='Fish Image'/>
        <button className="submit">Add Item</button>
      </form>
    )
  }
}



export default AddFishForm;
