import React from "react";

function ListItem({ name, id, onButtonClick }) {
  //function handleClick(colorSelected) {
  //console.log("Handling click: ", colorSelected);
  //}

  return (
    <li>
      <div>
        <label>{name}: </label>
        <button onClick={() => onButtonClick(id)}>Click to Select</button>
      </div>
    </li>
  );
}

export default ListItem;
