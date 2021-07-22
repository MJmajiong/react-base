import React from 'react'

export default class RefsAndDom extends React.Component{
    constructor() {
        super()
        this.HelloDiv = React.createRef()
        //就相当于vue中的ref，只不过这里是需要先创建ref的
    }

    componentDidMount() {
        this.HelloDiv.current.style.color = 'red'
        console.log(this.HelloDiv.current)
    }

    render() {
        return (
            <div>
                Refs和dom
                <div ref={this.HelloDiv}>
                    Hello
                </div>
            </div>
        )
    }
}