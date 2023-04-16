import React from "react";
import { NavLink } from "react-router-dom";
import MyRoutes from "./routes";

import { Divider, Button } from "antd";

export default function App() {
  function hanleClass({ isActive }) {
    return isActive ? "link-style is-this" : "link-style";
  }
  return (
    <div>
      {/* 路由链接 */}
      <NavLink to="/home" className={hanleClass}>
        <Button type="link">去Home</Button>
      </NavLink>
      <NavLink to="/about" className={hanleClass}>
        <Button type="link">去About</Button>
      </NavLink>
      <Divider />
      {/* 路由展示区域 */}
      {/* <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/" element={<Navigate to="/about" />}></Route>
      </Routes> */}

      {/* 路由展示，使用路由表 */}
      <MyRoutes />
      
      <Divider />
      <h3>重定向</h3>
    </div>
  );
}
