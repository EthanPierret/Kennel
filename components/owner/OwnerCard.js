import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">

            <h3>Name: Alex</h3>
            <p>Income: 3000$/month</p>
            <p>Outflow: 2000$/month</p>
        </div>
      </div>
    );
  }
}

export default OwnerCard;