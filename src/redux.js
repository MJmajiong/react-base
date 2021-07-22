//Redux
import React from 'react';
import ReactDom from 'react-dom'
import {createStore} from 'redux'

//用于通过动作，创建新的state
const reducer = function (state={num:0}, action) {
  switch(action.type){
    case "add":
      state.num++
      break
    case 'decrement':
      state.num--
      break
    default:
      break

  }
  return {...state}  //相当于对象的copy
}

//创建仓库
const store = createStore(reducer)
console.log(store)

function add() {
  //通过仓库的方法dispatch进行调用
  store.dispatch({type:'add'})
}

function decrement() {
  store.dispatch({type:'decrement'})
}
// 函数式计数器
const Count = function (props) {
  console.log(store.getState())
  return (
    <div>
      <h1>计数数量：{store.getState().num}</h1>
      <button onClick={add}>计数加一</button>
      <button onClick={decrement}>计数减一</button>
    </div>
  )
}
ReactDom.render(<Count></Count>, document.querySelector('#root'))

store.subscribe(() => {
  ReactDom.render(<Count></Count>, document.querySelector('#root'))
})