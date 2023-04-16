import React from "react";
import { Button, Divider } from "antd";
import { NavLink, Outlet } from "react-router-dom";

const Person = {
  name: "张三",
  age: 181,
  sex: "男",
};

// 如何向子路由组件传数据？
// 这可能是 路由传输数据的原因了

export default function index() {
  const { name, age, sex } = Person;
  function hanleClass({ isActive }) {
    return isActive ? "link-style is-this" : "link-style";
  }
  return (
    <div>
      <h3>About 组件，使用函数式组件完成React 特性</h3>
      <Divider />
      <span>React 三大特性</span>
      <NavLink to="state" className={hanleClass}>
        <Button type="link">State</Button>
      </NavLink>
      <NavLink
        to="rparams"
        state={{
          name,
          age,
          sex,
        }}
        className={hanleClass}
      >
        <Button type="link">Params</Button>
      </NavLink>
      <NavLink to="refs" className={hanleClass}>
        <Button type="link">Ref</Button>
      </NavLink>
      <NavLink to="life" className={hanleClass}>
        <Button type="link">Life</Button>
      </NavLink>

      <Divider />
      <Outlet />
      <Divider />
    </div>
  );
}
