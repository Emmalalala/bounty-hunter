import React, { Component } from "react";
import { withState } from "./context/StateProvider";

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

  handleSubmit = (e, data) => {
    e.preventDefault();
    this.setState({
      firstName: "",
      lastName: "",
      living: "",
      bountyAmount: "",
      type: ""
    });
    if(!data._id){
    this.props.onSubmit(data);
  }else{
    this.props.handleUpdate(data)
  }
  }
  // handleUpdate = e => {
  //   const { name, value } = e.target;
  //   this.setState({ [name]: value });
  //   this.props.onChange(this.state);
  // };

  render() {
    return (
      <div className="inputs">
        <form onSubmit={e => this.handleSubmit(e, this.props)}>
          <p>First Name:</p>
          <input
            name="firstName"
            onChange={this.props.onChange}
            value={
              this.props.firstName ? this.props.firstName : this.state.firstName
            }
          />
          <p>Last Name:</p>
          <input
            name="lastName"
            onChange={this.props.onChange}
            value={
              this.props.lastName ? this.props.lastName : this.state.lastName
            }
          />
          <p>Is Alive?</p>
          <input
            name="living"
            onChange={this.props.onChange}
            value={this.props.living ? this.props.living : this.state.living}
          />
          <p>Reward Amount:</p>
          <input
            name="bountyAmount"
            onChange={this.props.onChange}
            value={
              this.props.bountyAmount
                ? this.props.bountyAmount
                : this.state.bountyAmount
            }
          />
          <p>Type</p>
          <input
            name="type"
            onChange={this.props.onChange}
            value={this.props.type ? this.props.type : this.state.type}
          />
          <br />
          <button>Enter Bounty</button>
        </form>
      </div>
    );
  }
}

export default withState(CreateBounty);
