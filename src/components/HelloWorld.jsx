import React, { useState } from "react";

// const [array, setArray] = useState(["Hello", "World"]);
const array = ["hello", "world"];

const HelloWorld = () => {
  return (
    <div>
      {array.map((str) => {
        return <p>{str}</p>;
      })}
    </div>
  );
};

export default HelloWorld;
