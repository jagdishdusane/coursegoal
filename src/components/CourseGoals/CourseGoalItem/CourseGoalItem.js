import React, { useState } from "react";
import "./CourseGoalItem.css";
import PopUpModal from "../popup_box/PopUpModal";
const CourseGoalItem = (props) => {
  const [error, setError] = useState(false);

  const showErrorModel = () => {
    setError(true);
  };

  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  const cancelHandler = () => {
    setError(false);
  };

  return (
    <>
      {error && (
        <PopUpModal
          title="Delete Data"
          message="You want delete data"
          onDelete={deleteHandler}
          onCancel={cancelHandler}
        />
      )}
      <li className="goal-item" onClick={showErrorModel}>
        {props.children}
      </li>
    </>
  );
};

export default CourseGoalItem;
