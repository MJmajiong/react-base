//这一整个文件夹都是用来展示useReducer和useContext结合起来使用的
import React from 'react'
import Reducer from './reducer'
import Text1 from './test1'
import Text2 from './test2'
export default ()=> {

    return (
        <Reducer>
            <Text1></Text1>
            <Text2></Text2>
        </Reducer>
    )
}