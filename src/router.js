import React from 'react'
import { HashRouter, BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


function A() {
    return (
        <h1>组件a</h1>
    )
}
function B() {
    return (
        <h1>组件B</h1>
    )
}
function C() {
    return (
        <h1>组件C</h1>
    )
}

export default function routerPage() {
    return (
        <div>
            <Router>
                <div>
                    <Link to="/a">产品</Link>
                    <Switch>
                    <Route path="/a" exact component={A}>
                        <h1>如果有默认的组件，也就是这里写的html元素，那么他就会忽略掉component，直接显示这里的值</h1>
                    </Route>
                    <Route path="/b" component={B}></Route>
                    <Route path="/c" component={C}></Route>
                    </Switch>
                </div>
            </Router>
        </div>

    )
}