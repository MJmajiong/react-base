//redux只允许action返回一个对象，但是由于redux-thunk的存在，action就可以返回一个函数了

//thunk允许action是一个带有副作用的函数，当action是一个函数被分发的时，thunk会阻止action继续向后移交
//thunk会向函数中传递三个参数
//1、dispatch，来自于store.dispatch
//2、getState, 来自于store.getState
//3、extra,来自于用户设置的额外参数

//第三个参数比较特殊
//在store文件夹的index.js中
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";
// thunk.withExtraArgument();  //如果需要设置第三个参数才写这个，如果不用，这句不用谢，下面的中间件也不用withExtraArgument，直接就引入thunk就可以了
export default createStore(
  reducer,
  applyMiddleware(thunk.withExtraArgument(333), logger)
);
//chunk
