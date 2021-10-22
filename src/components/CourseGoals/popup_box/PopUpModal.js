import React from "react";
import Button from "../../UI/Button/Button";
import Card from "./Card";
import classes from "./PopUpModal.module.css";

const PopUpModal = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onCancel}>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onDelete}>Okay</Button>
          <Button onClick={props.onCancel}>Cancel</Button>
        </footer>
      </Card>
    </div>
  );
};

export default PopUpModal;
