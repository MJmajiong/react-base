import React, {useState, useEffect, useRef, createContext, useContext} from 'react'
import ReactDOM from 'react-dom'
import RefsAndDom from './ref'
import UseCallbacckChild from './useCallback'
import Forward from './forward'
import UseImperativeHandle from './useImperativeHandle'
import UseLayoutEffect from './useLayoutEffect'
import UseMemo from './useMemo'
import CustomHook from './custom-hook'
import UseReducer from './useReducer'
import UseReducerAndUseContext from './components/reducer'
import RouterPage from './router'
import {EditableTable} from './table'

//父子组件传值 useContext  createContext
const MyContext = createContext()  //如果是把这个子组件放到一个单独的文件的话，那就将这句话放到一个单独的文件，然后分别引入到子组件和父组件中
const ChildContext = () => {    
  let count = useContext(MyContext)
  return (
    <h3>
      我是子组件context{count}
      <SonChild></SonChild>
    </h3>
  )
}

const SonChild = () => {
  let count = useContext(MyContext)
  return (
    <h2 style={{color:'red'}}>孙子的context{count+2}</h2>
  )
}

function AA() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState(33)
  //useEffect: componentDidMount componentDidUpdate componentWillUnmount
  useEffect(() => {
    console.log('改变了')    //componentDidMount  componentDidUpdate这两个生命周期，再这里就能监听改变
    return () => {          //如果需要触发componentWillUnmount  则需要返回一个闭包
      document.title = `you click ${count} times`
    } 
  }, [])
  //第二个参数不写就是监听所有
  //[] 代表只在componentDidMount执行
  //[count] 只监听count的三个生命周期的变化，不监听user
  const inputEl = useRef(null)
  return (
    <div>
      <EditableTable></EditableTable>
      {/* userReduer和usecontext联合使用 */}
      <RouterPage></RouterPage>

      <UseReducerAndUseContext></UseReducerAndUseContext>
      {/* useReducer使用 */}
      <UseReducer></UseReducer>
      <CustomHook></CustomHook>
      <UseMemo></UseMemo>
      <UseLayoutEffect></UseLayoutEffect>
      <Forward></Forward>
      <UseImperativeHandle></UseImperativeHandle>
      <UseCallbacckChild></UseCallbacckChild>
      <MyContext.Provider value={count}>
        <ChildContext></ChildContext>
      </MyContext.Provider>
      <button onClick={() => {setCount(33)}}>改变数组</button>
      Hello:{`you click ${count} times`}
      <button onClick={() => {setCount(count+1)}}>Add</button>
      <RefsAndDom></RefsAndDom>
      <input
        ref={inputEl}
        placeholder="请输入内容"
      >
      </input>
      <button onClick={() => {console.log(inputEl.current)}}>
        获取ref值
      </button>
    </div>
  )
}

ReactDOM.render(<AA />, document.querySelector('#root'))