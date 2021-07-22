#迭代器和可迭代协议

解决副作用的redux中间件
redux-thunk：需要改动action，可接收action是一个函数
redux-promise：需要改动action，可接收action是一个promise对象，或action的payload是一个promise对象
以上两个中间件，回导致action或action创建函数不再纯净
redux-saga将解决这样的问题，他不仅可以保持action、action创建函数、
reducer的纯净，而且可以用模块化的方式解决副作用，并且功能非常强大
redux-saga是建立在es6的生成器基础上的，要熟练的使用saga，必须理解生成器
要理解生成器，必须先理解迭代器和可迭代协议

##迭代
类似于遍历

遍历：有多个数据组成的集合数据结构（map，set，array等其他类数组），需要从该结构中一次取出数据进行某种处理

迭代：按照某种逻辑，依次取出下一个数据进行处理（区别是，迭代不需要数据是类数组，只要是每次能取出下一个数据即可）

