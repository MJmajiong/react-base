//自定义hook

//自定义hook和普通函数没有区别，都是做一些函数的封装，方便使用

//注意点：
//1、自定义hook，必须以use开头
//2、自定义hook，可以使用我们这些hook（usehook useEffect）来封装

import React, {useState} from 'react'

const useCus = (value, num) => {
    let [count, setCount] = useState(value)
    const add = () => {
        setCount(count+num)
    }
    return {count, add}
}


export default () => {
    let {count, add} = useCus(10, 3)
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={()=>{add()}}>
                点击自定义hook
            </button>
        </div>
    )
}