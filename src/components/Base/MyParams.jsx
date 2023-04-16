import React from "react";
import { Divider } from "antd";
import { useLocation } from "react-router-dom";

import PropsTemp from "./PropsTemp";

export default function MyParams() {
  const { state } = useLocation();
  const { name, age, sex } = state;
  return (
    <div>
      <h3>路由传参 State 最省事的方法</h3>
      <h3>
        {name},{age},{sex}
      </h3>
      <Divider />
      <h3>这是子组件</h3>
      <PropsTemp {...state} />
    </div>
  );
}
