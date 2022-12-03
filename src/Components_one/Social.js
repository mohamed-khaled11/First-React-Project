import React from "react";
import SocialItem from "./SocialItem";

function Social() {
  return (
    <div>
      <ul className="list-group">
        <SocialItem
        p={{
          media:"facebook",
          id:"facebook",
          img:'https://picsum.photos/60',
        }}
          ></SocialItem>

        <SocialItem
         p={{
          media:"Youtube",
          id:"youtube",
          img:'https://picsum.photos/61',
         }}
          ></SocialItem>

        <SocialItem
         p={{
          media:"Instagram",
         id:"instagram",
         img:'https://picsum.photos/62',
         }}
         ></SocialItem>
        <SocialItem
         p={{
          media:"Linkedin",
         id:"linkedin",
         img:'https://picsum.photos/63',
         }}
         ></SocialItem>
      </ul>
    </div>
  );
}

export default Social;
