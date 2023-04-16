import React from "react";
import { Menu, Divider } from "antd";
import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import "./index.scss";
const items = [
  {
    label: "Msg 页面",
    key: "msg",
  },
  {
    label: "News 页面",
    key: "news",
  },
];

export default function index() {
  const navigate = useNavigate();

  const [current, setCurrent] = useState("msg");

  const onClick = (e) => {
    console.log(e);
    setCurrent(e.key);
    navigate(e.key, {
      replace: false,
      state: {
        id: 1,
        title: "One",
        content: "isContent",
      },
    });
  };
  return (
    <div>
      这里是Home 界面，实现编程式导航
      <Divider/>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="vertical"
        items={items}
        theme="dark"
        className="menu-width"
        // style={{ width: "80px" }}
      />
      <Divider />
      <Outlet />
    </div>
  );
}
