import React from "react";

export default function PropsTemp(props) {
  const { name, age, sex } = props;
  return (
    <div>
      <h3>父组件通过Props 传过来的参数</h3>
      <ul>
        <li>{name}</li>
        <li>{age}</li>
        <li>{sex}</li>
      </ul>
    </div>
  );
}
