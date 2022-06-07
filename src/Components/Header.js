import React from "react";

export default function Header({ image="https://via.placeholder.com/215", name }) {
  console.log({image})
  return (
      <aside className="header">
        <img src={image} alt="image of Ward McKinley" width="150px"></img>
        <h2>{name}</h2>
      </aside>
  )
}