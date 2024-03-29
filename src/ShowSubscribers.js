import React from 'react';
import Header from './Header.js';
import './ShowSubscribers.css';
import { Link } from 'react-router-dom';

class ShowSubscribers extends Component {


render() {
  onDeletedClick = (subscriberId) => {
    this.props.deleteSubscriberHandler(subscriberId); 
  }
  render() {
    


  return (
 <div>


 <Header heading="Phone Directory" />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>

            <span className="grid-item action-btn-container">
            <Link to="/add">
            <button className="custom-btn delete-btn" onClick={this.onDeletedClick.bind(this, sub.id)}>Delete</button>

          </Link>
          </span>

          </div>


          {
            
     
     
          
              this.props.subscribersList.map(sub => {

              return <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
              </div>
            })
          }

        </div>
           
      
    </div>
  );
}


export default ShowSubscribers;