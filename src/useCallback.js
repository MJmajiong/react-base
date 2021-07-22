//useCallback
//作用：避免组件重复渲染，提高性能（useMemo）
//可以控制组件什么时候更新

//同样用到缓存技术，和useMemo不同的是
//useCallback缓存的是个函数，那么既然是函数，那就是可以执行的

//useCallback()有两个参数，第一个参数是个函数，第二个参数是个数组
//useCallback(() => {}, [可以不写])

// const callBack = useCallback(() => {}, [])
// useCallback执行完了之后的返回值是个函数，可以直接callback()执行

import {useState, useCallback} from 'react'
export default () => {
    const [count, setCount] = useState(0)
    const [num, setNum] = useState(0)
    const callback = useCallback(() => {
        console.log(count)
        return count
    })
    //如果没有第二个参数，那他就会跟着count的变化而变化
    //如果有第二个参数，那他就只会返回最初是的值，他还是会执行，但是返回的值是没变的了
    //如果第二个参数是[count],那他就是监听count的变化，返回的值也会改变
    //如果第二个参数是[num],那他就是监听num，如果num变了，返回的值也会变
    return (
        <div>
            <h3>状态：count:{count}</h3>
            <h4>callback:{callback()}</h4>
            <button onClick={() => {setCount(count+1)}}>加一</button>
        </div>
    )
}
