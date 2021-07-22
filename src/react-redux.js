//React-Redux
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider, connect} from 'react-redux'

class Counter extends React.Component {
  render() {
    console.log(this.props)
    //计数，通过store的state传给props，直接通过props就可以将state的数据获取
    const value = this.props.value
    //将修改数据的时间或者方法传入到props
    const onAddClick = this.props.onAddClick
    const onAddNumber = this.props.onAddNumber
    //等同于vuex的mapMutation  mapstate
    return (
      <div>
        <h1>计数的数量：{value}</h1>
        <button onClick={onAddClick}>数量加一</button>
        <button onClick={onAddNumber}>数量加五</button>
      </div>
    )
  }
}

const ActionFnObj = {
  add:(state) => {
    state.num++
    return state
  },
  addNum:(state) => {
    state.num = state.num + 5
    return state
  }
}

//这里的action参数是onAddClick:()=>{dispatch({type:'add'})}传过来的，action={type:'add}
function reducer(state={num:0}, action) {
  // switch(action.type){
  //   case 'add':
  //     state.num++
  //     break
  //   default:
  //     break
  // }   //等同于下面这种写法，就是把一些东西抽取到ActinoFnObj中
  if(action.type.indexOf('redux') === -1){
    console.log(ActionFnObj[action.type])
    state = ActionFnObj[action.type](state)  //state后面还以自己加参数，可以从action那边传过来
    return {...state}
  }else{
    return state
  }
  
}

const store = createStore(reducer)

//将state映射到props函数
function mapStateToProps(state) {
  return {
    value:state.num
  }
}

//将修改state数据的方法，映射到props
function mapDispatchToProps(dispatch) {
  return {
    onAddClick:()=>{dispatch({type:'add'})},
    onAddNumber:()=>{dispatch({type:'addNum'})}
  }
}

//将上面的这两个方法，将输仓库的state和修改state的方法映射到组件上，形成新的组件
const App = connect(mapStateToProps,mapDispatchToProps)(Counter)

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.querySelector('#root')
)