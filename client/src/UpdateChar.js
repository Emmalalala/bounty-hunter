// import React, { Component } from 'react';
// // import { withState } from './context/StateProvider';
// import axios from 'axios'

// class UpdateChar extends Component {
//     constructor() {
//         super();
//         this.state = {
//           firstName: "",
//           lastName: "",
//           living: "",
//           bountyAmount: "",
//           type: ""
//         };
//       }
//       handleUpdate = (e, data, i) => {
//         console.log(this.props.state)
//         e.preventDefault();
//         console.log(data[i]._id)
//         this.setState({
//           firstName: data[i].firstName,
//           lastName: data[i].lastName,
//           living: data[i].living,
//           bountyAmount: data[i].bountyAmount,
//           type: data[i].type
//         })
//     axios.put(`/bounty/${data[i]._id}`)
//     }
//     render() {
//         return (
//             <div>
                
//             </div>
//         );
//     }
// }

// export default UpdateChar;