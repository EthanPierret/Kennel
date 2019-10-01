import React, { Component } from 'react'
//import the components we will need
import EmployeeCard from './EmployeeCard'
import EmployeeManager from '../../modules/EmployeeManager'

class EmployeeList extends Component {
    //define what this component needs to render
    state = {
        employees: [],
    }

componentDidMount(){
    console.log("employee LIST: ComponentDidMount");
    //getAll from employeeManager and hang on to that data; put it in state
    EmployeeManager.getAll()
    .then((employees) => {
        this.setState({
            employees: employees
        })
    })
}

render(){
    console.log("employee LIST: Render");

    return(
        <div className="container-cards">
          {this.state.employees.map(employee =>
            <EmployeeCard
              key={employee.id}
              employee={employee}
              deleteEmployee={this.deleteEmployee}
            />
          )}
        </div>
      )
}

deleteEmployee = id => {
    EmployeeManager.delete(id)
    .then(() => {
      EmployeeManager.getAll()
      .then((newEmployees) => {
        this.setState({
            Employees: newEmployees
        })
      })
    })
  }

}

export default EmployeeList