import React, { useRef } from "react";
import { Button, Divider } from "antd";
export default function MyRefs() {
  const inputVal = useRef();
  function handleShow() {
    alert(inputVal.current.value);
  }
  return (
    <div>
      <h3>MyRefs 实现双向数据绑定</h3>
      <div>
        <span>此刻输入： </span>
        <input type="text" ref={inputVal} />
      </div>
      <Button type="primary" onClick={handleShow}>
        输入框的值
      </Button>
    </div>
  );
}
