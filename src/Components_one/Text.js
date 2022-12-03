import React from "react";

function Text() {
  // this is internal style
  const style = {
    color: "black",
    fontSize: "20px",
  };
  let client = "designer"
  const job = {
    designer:"Design",
    programmer:"Programming"
  }
  return (
    <div>
      <p style={style}>
        Graphic and {client === 'designer'?job.designer:job.programmer} are far more than a job for me .Thanks to my extensive 
        technical Knowlege , I can implement my creative ideas very well, so thant i can offer
        tailor-made solutions for customers.
      </p>
    </div>
  );
}

export default Text;
