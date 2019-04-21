import React, { Component } from "react";
import { withState } from './context/StateProvider';
// import axios from "axios";

class CreateBounty extends Component {
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

  handleSubmit = (e, data) => { 
      e.preventDefault();
      this.setState({
      firstName: "",
      lastName: "",
      living: "",
      bountyAmount: "",
      type: ""
    })
    this.props.onSubmit(data)
  }

//   handleUpdate = (e, onChange) => {
//       const { name, value } = e.target
//       this.setState({[name]:value})
//   }

  render() {
    return (
      <div className="inputs">
        <form onSubmit={(e) => this.handleSubmit(e, this.state)}>
          <p>First Name:</p>
          <input
            name="firstName"
            onChange={this.handleChange}
            value={this.props.firstName ? this.props.firstName : this.state.firstName}
          />
          <p>Last Name:</p>
          <input
            name="lastName"
            onChange={this.handleChange}
            value={this.props.lastName ? this.props.lastName : this.state.lastName}
          />
          <p>Is Alive?</p>
          <input
            name="living"
            onChange={this.handleChange}
            value={this.props.living ? this.props.living : this.state.living}
          />
          <p>Reward Amount:</p>
          <input
            name="bountyAmount"
            onChange={this.handleChange}
            value={this.props.bountyAmount ? this.props.bountyAmount : this.state.bountyAmount}
          />
          <p>Type</p>
          <input
            name="type"
            onChange={this.handleChange}
            value={this.props.type ? this.props.type : this.state.type}
          /><br></br>
          <button>Enter Bounty</button>
        </form>
      </div>
    );
  }
}

export default withState(CreateBounty);
