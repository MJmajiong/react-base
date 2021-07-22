import {forwardRef, useRef} from 'react'
const Forward = forwardRef((props, ref) => { //这样子的话就只获取了h3的元素
    return (
        <div>
            <h3 ref={ref}>123</h3>
            <h4>456</h4>
        </div>
    )
})

export default () => {
    const el = useRef(null)
    return (
        <div>
            <Forward ref={el}></Forward>
            <button onClick={() => {console.log(el)}}>
                获取子组件dom
            </button>
        </div>
    )
}