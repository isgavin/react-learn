import { useState, useEffect } from "react";

export default function MyLife() {
  const [now, setNow] = useState(0);

  useEffect(() => {
    // 在此可以执行任何带副作用操作
    //componentDidMount(),componentDidUpdate()
    let Timer = setInterval(() => {
      setNow((now) => now + 1);
    }, 1000);
    return () => {
      // 在组件卸载前执行一些收尾工作 componentWillUnmount
      clearInterval(Timer);
      console.log("定时器已关闭");
    };
  }, [0]); // 如果指定的是[], 回调函数只会在第一次render()后执行

  return (
    <div>
      <h3>MyLife 模拟生命周期开启定时器</h3>
      <h3>此刻的值：{now}</h3>
    </div>
  );
}
