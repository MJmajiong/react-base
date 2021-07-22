//useMemo

//shouldComponentUpdate 类似作用，在渲染过程中避免重复渲染的问题
//当状态或者父组件传来的值变化时，更新组件

//1、useMemo就是用的memoization来提高性能的
//2、Memoizatino是javascript中的一种缓存技术

//如果我们有cpu密集型操作，我们可以通过将初始操作的结果存储在缓存中来优化使用。如果操作必然会再次执行，我们将不在麻烦再次使用我们的
//CPU,因为相同结果的结果存储在某个地方，我们只是简单的返回结果

//记住这个是以空间换速度，所以最好确定是是否值得这么做，有些场景很有使用必要

//usememo() 是一个函数，有两个参数，第一个参数是函数，第二个参数是数组

//useMemo(()=>{},[默认可以不写])
// useMemo和useEffect执行的时间不同，useEffect是在componentDidMound以后执行的，而useMemo是在组件渲染过程执行的
import {useState, useMemo, useEffect} from 'react'

function ChildMemo({c, n}){
    let res = useMemo(() => {
        return {c, n}
    }, [])
    //如果第二个参数没有，那就全部都监听
    //如果有写成了[],那就谁也不更新
    //如果写了[count]那就监听count，当count变得时候，就更新数值
    //如果写了[count, num]那就两个都监听，其中一个变化都更新
    return (
        <h3>子组件状态=count{res.c}----num{res.n}</h3>
    )
}
export default () => {
    const [count, setCount] = useState(0)
    const [num, setNum] = useState(0)
    // useEffect(() => {
    //     console.log('useEffect')
    //     return () => {
    //         console.log('willUnMout')
    //     }
    // })
    // let res = useMemo(() => {
    //     return {count}
    // }, [])
    //如果第二个参数没有，那就全部都监听
    //如果有写成了[],那就谁也不更新
    //如果写了[count]那就监听count，当count变得时候，就更新数值
    //如果写了[count, num]那就两个都监听，其中一个变化都更新
    return (
        <div>
            <h3>父组件状态=count{count}----num{num}</h3>
            <ChildMemo c={count} n={num}></ChildMemo>
            <button onClick={()=>{setCount(count+1)}}>change-count</button>
            <button onClick={()=>{setNum(num+1)}}>change-num</button>
        </div>
    )
}