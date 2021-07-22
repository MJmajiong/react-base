//useImperativeHandle

//useImperativeHandle 可以让你在使用ref时自定义暴露给父组件的实例值。在多数情况下，应该避免使用ref
//这样的命令式代码，useImperativeHandle应该与forwardRef一起

//useImperativeHandle(ref(传递来的), ()=>{}, [])  三个参数
//forwardRef  获取子组件中的自定义的ref
import { forwardRef, useRef, useImperativeHandle, useState } from "react";
const Imperative = forwardRef((props, refa) => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);
  const inputRef = useRef();
  useImperativeHandle(
    refa,
    () => ({
      //自定义暴露给父组件的实例值
      name: "zhangsan",
      focus: () => {
        inputRef.current.focus();
      },
      count
    }),
    [num]
  );
  //这里也是一样的，如果不写，就都会把变化的值返回去
  //如果像上面这样写了，那就只有在num变化的时候，才会返回变化的值，否则会回去的值都是之前的初始值
  return (
    <div>
      <h3>cont:{count}</h3>
      <h3>num:{num}</h3>
      <input type="text" ref={inputRef}></input>
      <button onClick={()=>{setCount(count+1)}}>count加一</button>
      <button onClick={()=>{setCount(num+1)}}>num加一</button>
    </div>
  );
});

export default () => {
  const el = useRef();
  return (
    <div>
      <Imperative ref={el}></Imperative>
      <button
        onClick={() => {
            console.log(el)
          el.current.focus();
        }}
      >
        获取子组件的自定义方法或者属性
      </button>
    </div>
  );
};
