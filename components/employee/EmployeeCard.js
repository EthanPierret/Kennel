import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">

            <h3>Name: {this.props.object.name}</h3>
            <p>Salary: {this.props.object.pay}/hr</p>
            <p>Work: Su : 9 - 5, M : 9-5, Tu : 9 -4, W : 9-4, Th : 9-4, F : Off, S : Off</p>
            <button type="button" onClick={() => this.props.deleteEmployee(this.props.object.id)}>Fire</button>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;