import React from "react";

function AppSimplon(props) {
  return (
    <div>
      {props.tab.map((el) => (
        <div>
          <h1>{el.name}</h1>
          <h1>{el.age}</h1>
        </div>
      ))}
    </div>
  );
}
export default AppSimplon;
