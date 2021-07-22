//useReducer和redux中的reducer是一样的，说白了Reducer就是个函数
//和useContext 结合起来 做出redux的效果

//useReducer()是一个函数，有三个参数，第一个参数reducer，第二个参数是初始值，第三个参数是init
//useReducer()返回值是个数组，第一个是state，第二个是dispatch

//const [state, dispatch] = useReducer(reducer, 初始值)

import React, {useReducer} from 'react'

export default () => {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type){
            case 'setname':
                return {
                    ...state,
                    name:action.name
                }
            case 'setage':
                return {
                    ...state,
                    age:action.age
                }
            default:
                return state
        }
    }, {name:'张三',age:18})
    return (
        <div>
            <h1>{state.name}-{state.age}</h1>
            <button onClick={()=>{dispatch({type:'setname', name:'lisi'})}}>setName</button>
            <button onClick={()=>{dispatch({type:'setage', age:'39'})}}>setName</button>
        </div>
    )
}
