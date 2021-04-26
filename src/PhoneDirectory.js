import React,{ Component} from  'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';

class PhoneDirectory extends Component {
    constructor() {
        super();
        this.state= {
            subscriberList : [{
                id:1,
                name:"Shilpa Bhatt",
                phone:"9999999999"
            }, {
                id:2,
                name:'Shristi Gupta',
                phone:'8888888888'
            }]
        }
    }

    addSubscriberHandler = (newSubscriber) => {
        let subscribersList = this.state.subscriberList;
        if(subscribersList.length>0) {
            newSubscriber.id = subscribersList[subscribersList.length - 1].id+1;
        }else {
            newSubscriber.id =1;
        }
        subscribersList.push(newSubscriber);
        this.setState({subscribersList: subscribersList});
        console.log("Phone Directory")
        console.log(this.state.subscriberList);
    }
    render() {
        return(
            <ShowSubscribers subscriberList={this.state.subscriberList} />
            // <AddSubscriber addSubscriberHandler={this.addSubscriberHandler}/>
        )
    }
}
export default PhoneDirectory;