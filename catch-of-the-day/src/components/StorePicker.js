import React from 'react';
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
  goToStore(event){
    event.preventDefault();
    // prevent the auto refresh
    const storeId = this.storeInput.value
    console.log(`Going to ${storeId}`);
    // first grab the test from the box
    // second change the url from / to /store/:storeId
    this.context.router.transitionTo(`/store/${storeId}`);
  }
  render(){
    return (
    <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
      {/* pay attention to why we need to bind(this)*/}
      <h2>Please Enter A Store</h2>
      <input type="text" required placeholder="Store Name" defaultValue={getFunName()}
      ref={(input) => { this.storeInput = input }}/>
      {/* pay attention to how to get the input from the form*/}
      <button type="submit">Visit Store ⮕</button>
    </form>
    )
  }
}
// check console to konw the object
StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
