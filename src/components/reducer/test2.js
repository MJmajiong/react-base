import React, { useContext } from 'react'
import {MyContext} from './reducer'

export default () => {
    let [state, dispatch] = useContext(MyContext)
    return (
        <div>
            <h1>TEST2  名字：{state.name} --- 年龄：{state.age}</h1>
            <button onClick={()=>dispatch({
                type:'setname',
                name:'Text2'
            })}>setName</button>
            <button onClick={() => {
                dispatch({
                    type:'setage',
                    age:40
                })
            }}>setAge</button>
        </div>
    )
}