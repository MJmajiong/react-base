import React, { useContext } from 'react'
import {MyContext} from './reducer'

export default () => {
    let [state, dispatch] = useContext(MyContext)
    return (
        <div>
            <h1>TEST1   名字：{state.name} --- 年龄：{state.age}</h1>
            <button onClick={()=>dispatch({
                type:'setname',
                name:'Text1'
            })}>setName</button>
            <button onClick={() => {
                dispatch({
                    type:'setage',
                    age:30
                })
            }}>setAge</button>
        </div>
    )
}