import React, { Component } from "react";
import { Consumer, Provider } from '../index';
import axios from "axios";
// import UpdateChar from "../UpdateChar";

class StateProvider extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      living: "",
      bountyAmount: "",
      type: ""
    };
  }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
        [name]: value,
    });
  };

  handleUpdate = (e, data, i) => {
    e.preventDefault();
    console.log(data[i]._id)
    this.setState({
      firstName: data[i].firstName,
      lastName: data[i].lastName,
      living: data[i].living,
      bountyAmount: data[i].bountyAmount,
      type: data[i].type
    })
axios.put(`/bounty/${data[i]._id}`)
}
  render() {
    const props = {
      ...this.state,
      handleUpdate: this.handleUpdate,
      onChange: this.handleChange
    }
    return (
      <Provider value={props}>
        {this.props.children}
      </Provider>
    )
  }
}

export const withState = C => props => (
  <Consumer>
    {value => <C {...value} {...props}/>}
  </Consumer>
)

export default withState(StateProvider);
