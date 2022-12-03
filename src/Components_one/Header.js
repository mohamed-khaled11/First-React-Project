import React from "react";

function Header() {
  const client = "programmer";

  const title ={
    designer:'Design',
    programmer:"Programming"
  }
  const info ={
    name:'mohamed',
    nick:'khaled'
  }
  return (
    <div className="bg-dark p-3 rounded">
      {/*this is inline style */}
      {/* <h1 style={{color:'red',fontSize:'50px',background:'grey'}}>Programming Is My Life</h1> */}
      <h1 className="text-white">{`Hello ${info.name} ${info.nick}`}</h1>
      <h2 className="text-white">
        {client === "Designer" ? title.designer : title.programmer} is my life.
      </h2>
    </div>
  );
}
export default Header;
