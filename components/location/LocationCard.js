import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">

            <h3>Name: Headquarters</h3>
            <p>Address: 500 Puppy Way</p>
            <button type="button" onClick={() => this.props.deleteLocation(this.props.object.id)}>There was a fire</button>
        </div>
      </div>
    );
  }
}

export default LocationCard;