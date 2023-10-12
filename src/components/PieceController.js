import React from "react";
import { Button } from "reactstrap";

function PieceController(props) {
  return (
    <div className="sayac">
      <Button
        className="decrease"
        color="warning"
        disabled={props.sayac <= 0 ? true : false}
        onClick={props.decrease}
        data-cy="decrease"
      >
        -
      </Button>
      <div className="panel">{props.sayac}</div>
      <Button
        className="increase"
        color="warning"
        disabled={props.sayac >= 10 ? true : false}
        onClick={props.increase}
        data-cy="increase"
      >
        +
      </Button>
    </div>
  );
}

export default PieceController;
