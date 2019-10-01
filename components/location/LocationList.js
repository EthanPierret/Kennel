import React, { Component } from 'react'
//import the components we will need
import LocationCard from './LocationCard'
import LocationManager from '../../modules/LocationManager'

class LocationList extends Component {
    //define what this component needs to render
    state = {
        Locations: [],
    }

componentDidMount(){
    console.log("Location LIST: ComponentDidMount");
    //getAll from LocationManager and hang on to that data; put it in state
    LocationManager.getAll()
    .then((Locations) => {
        this.setState({
            Locations: Locations
        })
    })
}

render(){
    console.log("Location LIST: Render");

    return(
        <div className="container-cards">
          {this.state.Locations.map(Location =>
            <LocationCard
              key={Location.id}
              Location={Location}
              deleteLocation={this.deleteLocation}
            />
          )}
        </div>
      )
}

deleteLocation = id => {
    LocationManager.delete(id)
    .then(() => {
      LocationManager.getAll()
      .then((newLocations) => {
        this.setState({
            Locations: newLocations
        })
      })
    })
  }

}

export default LocationList