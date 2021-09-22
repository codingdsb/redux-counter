import React, { useState } from "react";
import Button from "./Button";
import "../styles/MutationRow.css";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../actions/action.creators";

const MutationRow = () => {
  const [payloadNumber, setPayloadNumber] = useState(1);
  const dispatch = useDispatch();
  return (
    <div className="mutation-row">
      <Button
        text="–"
        onClick={() => dispatch(decrement(Number(payloadNumber)))}
      />
      <input
        type="number"
        value={payloadNumber}
        onChange={(e) => setPayloadNumber(e.target.value)}
      />
      <Button
        text="+"
        onClick={() => dispatch(increment(Number(payloadNumber)))}
      />
    </div>
  );
};

export default MutationRow;
