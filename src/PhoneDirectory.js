import React, { Component } from "react";
import AddSubscriber from "./AddSubscriber";
import ShowSubscribers from "./ShowSubscribers";
import { BrowserRouter as Router, Route } from "react-router-dom";

class PhoneDirectory extends Component {
  constructor() {
    super();
    this.state = {
      subscribersList: [
        {
          id: 1,
          name: "Shilpa Bhatt",
          phone: "9999999999",
        },
        {
          id: 2,
          name: "Shristi Gupta",
          phone: "8888888888",
        },
      ],
    };
  }

  deleteSubscriberHandler = (subscriberId) => {
      let subscribersList = this.state.subscribersList;
      let subscribersIndex = 0;
      subscribersList.forEach(function( subscriber, index) {
          if(subscriber.id == subscriberId) {
              subscribersIndex= index;
          }
      }, this);
      let newSubscribers = subscribersList;
      newSubscribers.splice(subscribersIndex, 1);
      this.setState({subscriber: newSubscribers})
  }

  addSubscriberHandler = (newSubscriber) => {
    let subscribersList = this.state.subscriberList;
    if (subscribersList.length > 0) {
      newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
    } else {
      newSubscriber.id = 1;
    }
    subscribersList.push(newSubscriber);
    this.setState({ subscribersList: subscribersList });
    console.log("Phone Directory");
    console.log(this.state.subscriberList);
  };
  render() {
    return (
      <Router>
        <div className="main-container">
          <Route
            exact
            path="/"
            render={(props) => (
              <ShowSubscribers
                {...props}
                subscribersList={this.state.subscribersList} 
                deleteSubscriberHandler={this.deleteSubscriberHandler}
              />
            )}
          />
          <Route exact path="/addSubscriber" render={({history},props) => (
              <AddSubscriber history={history} {...props}  addSubscriberHandler={this.addSubscriberHandler} />
            )}
          />
        </div>
      </Router>
    );
  }
}
export default PhoneDirectory;
