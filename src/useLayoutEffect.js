//useLayoutEffect
//和useEffect作用一样，在组件生成过程中，可以做一些操作

//不同
// 1 执行的时候不同，useEffect实在componentDidMount以后执行的，useLayoutEffect在浏览器执行绘制之前执行
// (会阻塞组件挂载，慎用)
import React, {useEffect, useLayoutEffect, useState} from 'react'

export default () => {
    const [count, setCount] = useState(0)
    //这里主要是测试他们的生命周期
    //无论是渲染还是销毁，useLayoutEffect都在useEffect之前
    useEffect(() => {
        console.log('useEffect')
        return () => {
            console.log('useEffect-return')
        }
    })
    useLayoutEffect(() => {
        console.log('useLayoutEffect')
        return () => {
            console.log('useLayoutEffect-return')
        }
    })
    return (
        <div>
            <h1>useLayoutEffect-{count}</h1>
            <button onClick={() => {
                setCount(count+1)
            }}>useLayoutEffect-useEffect</button>
        </div>
    )
}