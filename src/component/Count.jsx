import { connect } from "react-redux";

import { increment, decrement } from "../redux/Action";
import useState from "react";
import react from "react";

function Count(props) {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props[name] = value;
  };

  return (
    <div>
      <h1>Count: {props.count}</h1>

      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Count);
