import React, { Component } from "react";
import TeamMembers from "./TeamMembers";
import MembersInfo from "./MembersInfo";
// function component
// function Team() {
//   const info = [
//     {
//       id: 1,
//       img: "/imgs/01.jpg",
//       name: "Walter white",
//       position: "Bryan Cranston",
//       phone: "+93499459",
//       email: "did.j@gmail.com",
//       website: "milkd fij ",
//     },
//     {
//       id: 2,
//       img: "/imgs/02.jpg",
//       name: "Skyler white",
//       position: "Anna Gunn",
//       phone: "+93499459",
//       email: "did.j@gmail.com",
//       website: "milkd fij ",
//     },
//     {
//       id: 3,
//       img: "/imgs/03.jpg",
//       name: "Jesse Pinkman",
//       position: "Aaron Paul",
//       phone: "+93499459",
//       email: "did.j@gmail.com",
//       website: "milkd fij ",
//     },
//     {
//       id: 4,
//       img: "/imgs/04.jpg",
//       name: "Saul Goodman",
//       position: "Bob Odenkirk",
//       phone: "+93499459",
//       email: "did.j@gmail.com",
//       website: "milkd fij ",
//     },
//     {
//       id: 5,
//       img: "/imgs/05.jpg",
//       name: "Gus Fring",
//       position: "Giancarlo Esposito",
//       phone: "+93499459",
//       email: "did.j@gmail.com",
//       website: "milkd fij ",
//     },
//     {
//       id: 6,
//       img: "/imgs/06.jpg",
//       name: "Hank Schrader",
//       position: "Dean Norris",
//       phone: "+93499459",
//       email: "did.j@gmail.com",
//       website: "milkd fij ",
//     },
//     {
//       id: 7,
//       img: "/imgs/07.jpg",
//       name: "link dii ",
//       position: "jack open",
//       phone: "+93499459",
//       email: "did.j@gmail.com",
//       website: "milkd fij ",
//     },
//     {
//       id: 8,
//       img: "/imgs/08.jpg",
//       name: "pain ked",
//       position: "jack close",
//       phone: "+93499459",
//       email: "did.j@gmail.com",
//       website: "milkd fij ",
//     },
//   ];
//   const members =info.map((member) => {
//     return (
//       <TeamMembers
//         key={member.id}
//         img={member.img}
//         name={member.name}
//         positoin={member.position}
//         phone={member.phone}
//         email={member.email}
//         website={member.website}
//       ></TeamMembers>
//     );
//   });
//   return (
//     <div className="row" >
//         {members}
//     </div>
//   );
// }
// class component

class Team extends Component {
  // this is function call constructor in class
  constructor() {
    super();
    this.state = {
      info: MembersInfo,
      count: 0,
      NewMembers: [],
    };
    this.mapping = this.mapping.bind(this);
    this.ClickHandler = this.ClickHandler.bind(this);
  }
  // events in the page
  ClickHandler() {
    if(this.state.count < MembersInfo.length){
      this.state.NewMembers.push(this.state.info[this.state.count]);
      this.setState((prevstate) => {
        return {
          count: prevstate.count + 1
        };
      });
    }
    
  }
  // function to do map on the element
  mapping(x) {
    const members = x.map((member) => (
      <TeamMembers
        key={member.id}
        img={member.img}
        name={member.name}
        positoin={member.position}
        phone={member.phone}
        email={member.email}
        website={member.website}
      ></TeamMembers>
    ));

    return members;
  }
  // print the elements
  render() {
    return (
      <div className="row">
        <div className="col-md-12 col-sm-12">
        <button
          onClick={this.ClickHandler}
          type="button"
          className="btn btn-primary btn-lg "
        >
          Show Member
        </button>
        </div>
        {this.mapping(this.state.NewMembers)}
      </div>
    );
  }
}
export default Team;
