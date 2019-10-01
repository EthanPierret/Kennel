import React, { Component } from 'react';

import { Link } from "react-router-dom";

class AnimalCard extends Component {
  render() {
    console.log("hits");
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture>
            <h3>Name: <span className="card-petname">{this.props.object.name}</span></h3>
            <p>Breed: {this.props.object.breed}</p>
            <Link to={`/animals/${this.props.object.id}`}><button>Details</button></Link>
            <button type="button" onClick={() => this.props.deleteAnimal(this.props.object.id)}>Discharge</button>
        </div>
      </div>
    );
  }
}

export default AnimalCard;