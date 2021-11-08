import React, { useState } from "react";

const Rate = ({ callback }) => {
  const [value, setValue] = useState(5);

  return (
    <div>
      <input
        type="range"
        min="1"
        max="10"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      {value}
      <div>
        <button onClick={() => callback(value)}> Rate</button>
      </div>
    </div>
  );
};

export default Rate;
