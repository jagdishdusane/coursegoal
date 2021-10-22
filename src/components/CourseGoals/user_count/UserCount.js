import React from "react";
import Card from "../popup_box/Card";
import "./UserCount.css";
const UserCount = (props) => {
  return (
    <Card className="count">
      <h1>{props.children}</h1>
    </Card>
  );
};

export default UserCount;
