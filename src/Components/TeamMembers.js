import React, { Component } from "react";

// function component
// function TeamMembers(this.props) {
//   return (
//     <div className="col-md-4 col-lg-3 col-sm-6">
//       <div className="card">
//         <div className="card-header">
//           <img style={{maxWidth:'100%'}} src={this.props.img} alt=""></img>
//         </div>
//         <div className="card-body" style={
//             this.props.website ?
//             {background:'white'}:
//             {background:'grey',color:'white'}
//             }>
//           <h2>{this.props.name}</h2>
//           <h5>{this.props.position}</h5>
//           <p>phone: {this.props.phone}</p>
//           <p>Email: {this.props.email}</p>
//           <p>Websit: {this.props.website}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// class component

class TeamMembers extends Component{
  
  render(){
    return(
      <div className="col-md-4 col-lg-3 col-sm-6">
      <div className="card">
        <div className="card-header">
          <img style={{maxWidth:'100%'}} src={this.props.img} alt=""></img>
        </div>
        <div className="card-body" style={
            this.props.website ?
            {background:'white'}:
            {background:'grey',color:'white'}
            }>
          <h2>{this.props.name}</h2>
          <h5>{this.props.position}</h5>
          <p>phone: {this.props.phone}</p>
          <p>Email: {this.props.email}</p>
          <p>Websit: {this.props.website}</p>
        </div>
      </div>
    </div>
    )
  }
}
export default TeamMembers;
