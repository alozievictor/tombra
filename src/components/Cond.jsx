import React from "react";

const Cond = () => {
  const Age = 18;
  const [isGreen, setIsGreen] = React.useState(false);
  return (
    <div className="App">
      {/* this here conditionally render each tag base on the condition specified. */}
      <h1>
        {Age >= 18 ? (
          <h3>Your are above 18 yrs.</h3>
        ) : (
          <h3>Sorry you are below 18 please.</h3>
        )}
      </h1>

      {/* this method is saying if isGreen = true show green color and if its false show red color yeah. */}
      <h4 style={{ color: isGreen ? "green" : "red" }}>
        this is condition to change text color
      </h4>

      {/* this is saying here is that if is not isGreen then show the chnage button  */}
      {/* this will return to the opposite of the initial state which is true */}
      {!isGreen && (
        <button onClick={() => setIsGreen(true)}>chnage color</button>
      )}
      {/* smae goes this */}
      {isGreen ? <button onClick={() => setIsGreen(false)}>back</button> : null}
    </div>
  );
};

export default Cond;
