//redux-sage   中间件   实现副作用处理
//中文文档 https://redux-sage-in-chinese.js.org

//纯净
//强大
//灵活

//指令前面必须使用yield，以确保指令的返回结果被saga控制

//日志记录  redux-logger  (redux-thunk  redux-promise redux-saga) 利用中间件进行副作用处理
//在saga任务中，如果yield了一个普通数据，saga不做任何处理，仅仅将数据传递给yield表达式（把得到的数据放到next的参数中，因为在saga中，yield的一个普通数据没啥意义）

//每个指令本质上就是一个函数，改函数调用后，会返回一个指令对象，saga会接收到该指令对象，进行各种处理

//take指令：【造成阻塞】监听某个action，如果action发生了，则会进行下一步处理，take指令仅监听一次.yield得到的是完整的action对象
// all指令：【造成阻塞】该函数传入一个数组，数组中放入各种生成器，saga回等待所有的生成器全部完成后才会进一步处理
//takeEvery: 不断的监听某个action，当某个action到达之后，运行一个函数。用于不会结束当前的生成器
//delay指令：【阻塞】阻塞制定的毫秒数
//put指令：用于重新触发action，相当于dispatch一个action
//call指令：【可能阻塞，promise阻塞】用于副作用（通常是异步）函数调用，比如ajax获取数据
//apply指令：可能阻塞，promise阻塞】用于副作用（通常是异步）函数调用，比如ajax获取数据
//select指令： 用于取出当前仓库的数据
//cps指令：【可能阻塞】用于调用那些传统的回调方式的异步函数
//fork指令：
//cancel指令：
//cancelled指令：
//race指令：

//--------当saga发现得到的结果是一个promise对象，他会自动等待改promise完成
//--------完成之后，会把完成的结果作为值传递到下一次next
//--------如果promise对象被拒绝，saga会使用generator.throw()抛出错误



//一旦saga任务完成（生成器函数），则saga中间件一定结束

//saga需要i在yield后面放上一些合适的saga指令，如果放的是指令，saga中间件回根据不同的中间件回根据不同指令做不同的处理，以控制整个任务的流程
import {take} from 'redux-saga/effects'
import {actionTypes} from '../action/counter'

export default function* (){
    while(true){   //这样就能持续监听saga任务
        const action = yield take()
        console.log('increase action发生了')
    }
    
}







