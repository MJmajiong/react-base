import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

//hash 模式
// import {HashRouter as Router, Link, Route} from 'react-router-dom'

//history模式  匹配后端使用
import {BrowserRouter as Router, Link, Route, Redirect, Switch} from 'react-router-dom/'

import reportWebVitals from "./reportWebVitals";

const LoginInfo = (props) => {
  if(props.location.state.loginState === 'success'){
    return <Redirect to="/admin"></Redirect>
  }else{
    return <Redirect to="/login"></Redirect>
  }
}
class Helloword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "aa",
      age: 18,
      arr: [10, 20, 30],
    };
  }
  componentWillMount() {
    console.log('将要挂载')
  }
  //生命周期函数，组件渲染完成时的函数
  componentDidMount() {
    console.log('完成挂载')
    setInterval(() => {
      console.log("这是一个加湿器");
    }, 50000);
  }
  componentWillReceiveProps() {
    console.log('将要接受新的state和props')
  }
  shouldComponentUpdate() {
    console.log('进行判断是否要更新内容')
    console.log(this.state.name)
    if(this.state.name == 'nihao'){
      console.log('更新')
      return true
    }else{
      console.log('不更新')
      return false 
    }
  }
  componentWillUpdate() {
    console.log('组件将要更新')
  }
  componentDidUpdate() {
    console.log('组件更新完毕')
  }
  componentWillUnmount(){
    console.log('组件将要卸载')
  }
  onClickButton = () => {
    console.log(this);
    console.log(this.props.name)
    this.state.name = 'nihao'
    this.setState({
      // name:'nihao',
      age:19,
    })
    // console.log('dianjishijian')
    // this.state.age = 20
    // this.setState({name:'majiong'}, () => {
    //   console.log('更新了')
    // })
  };

  onClickButtonParse = (aa, e) => {
    console.log(aa);
    console.log(e);
  };

  render() {
    console.log('渲染函数')
    console.log(this);
    console.log(this.props);
    const self = this;
    return (
      <div>
        {/* 不传参数可以这么写 */}
        <span onClick={this.onClickButton}>类组件</span>
        {/* 传参数的写法 */}
        <div
          onClick={(e) => {
            this.onClickButtonParse(123, e);
          }}
        >
          带参数的
        </div>
        <ul>
          {this.state.arr.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>

        {/* {this.state.name === 'majiong' ? <First></First> : <Second></Second>}
        {this.state.age}
        {this.state.arr.map(item => {
          return <li>{item}</li>
        })} */}
      </div>
    );
  }
}

class ParentCom extends React.Component {
  constructor(props){
    super(props)
    console.log(props, 'aaa')
    this.state = {
      msg:'nihao'
    }
  } 

  changeMsg = () => {
    this.setState({
      msg:'gaibian'
    })
  }

  candanyi = () => {
    console.log(this)
    return
    this.props.history.push('/me')
  }

  candaner = () => {
    this.props.history.candaner('/home')
  }
 

  render() {
    const obj = {
      pathname:'/me',  //跳转的路径
      search:"?username=admin",   //get请求参数
      hash:"#abc",       //设置的hash值
      state:{msg:'nihao'}}   //传入组件的数据
    //会被拼接成 '/me?username=admin#abc'
    return (
      // <div>
      //   {this.state.msg === 'nihao' ? <Helloword name={this.state.msg}></Helloword> : <div>2222</div>}
      //   <button onClick={this.changeMsg}>改变msg的值</button>
      // </div>
      <div id='app'>
        <ul className="left-wrapper">
          
          <li onClick={this.candanyi}>candanyi</li>
          <li onClick={this.candaner}>candaner</li>
        </ul>
        <Router className="right-wrapper">
          <div>
            {/* js跳转，不用link跳转 */}
            {/* <Link to={ obj }></Link>
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to={ obj }>
              <span>个人中心</span>
            </Link>
            <Link to='/news/232332'>
              <span>新闻中心</span>
            </Link> */}
            {/* switch 只匹配一次 */}
            <Switch>   
            <Route path="/" exact component={Home}></Route>
            <Route path="/product" exact component={Product}></Route>
            <Route path="/me" exact component={Me}></Route>
            <Route path="/news/:id" exact component={News}></Route>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

class Home extends React.Component {
  render() {
    return (
      <div>
      Home
    </div>
    )
  }
}


class News extends React.Component {
  render() {
    return (
      <div>
      News
    </div>
    )
  }
}


class Product extends React.Component {
  render() {
    return (
      <div>
      Product
    </div>
    )
    
  }
}

class Me extends React.Component {
  constructor(props){
    console.log(props)
    super(props)
  }
  onTurnMe = () => {
    console.log(this.props)
    // return
    this.props.history.push('/news/sdfsdf',{msg:'这里可以传一些参数'})
  }
  render() {
    return (
      <div>
            <button onClick={this.onTurnMe}>跳转到个人中心</button>

      Me
    </div>
    )
  }
}

class Second extends React.Component {
  render() {
    return <div>第二</div>;
  }
}
class First extends React.Component {
  render() {
    return <div>第一</div>;
  }
}
const cc = {
  fontSize: "50px",
};
let element = (
  <div className="wrapper">
    {/* nihao  */}
    <h1 style="{fontSize:'16px'}">niaho</h1>
    <div>{}</div>
  </div>
);
ReactDOM.render(
  <ParentCom></ParentCom>,
  document.getElementById("root")
);
//jsx语法
//<app /> js普通对象
// let aa = function () {
//   ReactDOM.render(
//     <React.StrictMode>
//       {/* <App /> */}
//       <Clock date={new Date()}></Clock>
//     </React.StrictMode>,
//     document.getElementById("root"),
//     () => {
//       console.log("nihaoa");
//     }
//   );
// };

// setInterval(aa, 5000);

// function Clock(props) {
//   console.log(props, 'props')
//   let time = new Date().toLocaleTimeString();
//   let element = (
//     <div>
//       <h1>现在的时间式{time}</h1>
//       <p>这是一个副标题</p>
//     </div>
//   );
//   return element;
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
