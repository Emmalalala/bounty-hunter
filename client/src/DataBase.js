import React, { Component } from "react";
import CreateBounty from "./CreateBounty";
import axios from "axios";
import { withState } from './context/StateProvider'

class DataBase extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

// GET ALL
  componentDidMount() {
    axios.get("/bounty").then(res => {
      const data = res.data;
      this.setState({ data: data });
    });
  }

  handleSubmit = (inputData) => {
    console.log(inputData)
    this.setState(prevState => {
      return {
        data: [...prevState.data, inputData]
      };
    });

    //POST - post one
    axios.post('/bounty', inputData).then(res => {
        console.log(res.status)
    })
  };

  // DELETE - delete one
  handleDelete = (data, i) => { 
      axios.delete(`/bounty/${data[i]._id}`);
      const updateData = data.filter(datum => data[i]._id !== datum._id)
      this.setState({data: updateData})
  }

  render() {
    const mappedDB = this.state.data.map((bounty, index) => {
      return (
        <div key={index} className="gridItem">
          <h2>
            {bounty.firstName} {bounty.lastName}
          </h2>
          <h3>Alive: {bounty.living === true || "yes" ? "yes" : "no"}</h3>
          <h3>Bounty: ${bounty.bountyAmount}</h3>
          <h3>Type: {bounty.type}</h3>
          <button onClick={() => this.handleDelete(this.state.data, index)}>Delete</button>
          <button onClick={(e) => this.props.handleUpdate(e, this.state.data, index)}>Update</button>
        </div>
      );
    });
    return (
      <div>
        <CreateBounty onSubmit={this.handleSubmit}/>
        <div className="contentContainer">
        {mappedDB}
        </div>
      </div>
    );
  }
}

export default withState(DataBase);
