import React, { Component, Fragment } from "react";
class App extends Component {
  render() {
    return (
      <Fragment>
        <div>
        {/* <div className="header">
          Phone Directory
          <button>Add</button>
          <div>
            <span>Name</span>
            <span>Phone</span>
          </div>
        </div> */}
        <label htmlFor="name">Name</label>
        <input id="name" type="text" placeholder="Type here.." defaultValue="soumya"/>
      </div>
      </Fragment>
      
    );
  }
}

export default App;
