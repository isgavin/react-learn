import React, { useState } from "react";

export default function MyState() {
  const [count, setCount] = useState(1);
  return (
    <div>
      <h3>MyState 单向数据</h3>
      <h3>当前值：{count} </h3>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        点我+1
      </button>
    </div>
  );
}
