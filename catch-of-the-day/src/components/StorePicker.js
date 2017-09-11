import React from 'react';
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
  goToStore(event){
    event.preventDefault();
    // prevent the auto refresh
    console.log(this.storeInput.value);
    // first grab the test from the box
    // second change the url from / to /store/:storeId
  }
  render(){
    return (
    <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
      <h2>Please Enter A Store</h2>
      <input type="text" required placeholder="Store Name" defaultValue={getFunName()}
      ref={(input) => { this.storeInput = input }}/>
      <button type="submit">Visit Store ⮕</button>
    </form>
    )
  }
}

export default StorePicker;
