/* create react component that increments a counter when a button is clicked
 Note: the challenge is to implement it in such a way that it does not use
      useState hook or class state.
*/
import React, { useRef, useState } from "react";

const Counter = () => {
  const counterRef = useRef(0);
  const handleClick = () => {
    counterRef.current += 1;
    setForceRender({});
  };
  const [, setForceRender] = useState({});
  return (
    <div className="justify-center flex flex-col mt-3">
      <h1 className="text-center">{counterRef.current}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default Counter;
