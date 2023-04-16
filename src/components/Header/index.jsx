import React from "react";
import { Button, Divider } from "antd";
import { useNavigate } from "react-router-dom";

export default function index() {
  const navigate = useNavigate(); // 仅支持 State 参数
  return (
    <div>
      <h3>普通组件Header实现编程式跳转</h3>
      <Divider />
      <Button type="link" onClick={navigate(1)}>
        前进→
      </Button>
      <Button type="link" onClick={navigate(-1)}>
        ←后退
      </Button>
      <Button type="link">跳到 News 页</Button>
      <Button type="link">回到主页 Home</Button>
    </div>
  );
}
