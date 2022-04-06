import React from "react";

// passing in props as a parameter brings our data imported from the fetch request 
 export default function Gallery (props) {
 return (
   <div style={{ width: "100%" }}>
     <img src={props.objectImg} alt={props.title} />
     <p>{props.artist}</p>
   </div>
 );
}
