import React, { Component } from "react";
import { Consumer, Provider } from '../index';

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
// onChange = (e, data) => {
//   console.log(data)
//   const {name, value} = e.target;
//   this.setState({[name] : value})
// }

  handleUpdate = (e, data, i) => {
    // console.log(data[i])
    e.preventDefault();
    this.setState({
      firstName: data[i].firstName,
      lastName: data[i].lastName,
      living: data[i].living,
      bountyAmount: data[i].bountyAmount,
      type: data[i].type
    })
}
  render() {
    const props = {
      ...this.state,
      handleUpdate: this.handleUpdate,
      onChange: this.onChange
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
