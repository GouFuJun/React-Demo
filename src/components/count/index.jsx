import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/actions/count'

// UI 组件
class Count extends Component {
    increment = (event) => {
        const { value } = this.numberNode
        this.props.increment(value * 1)
    }
    decrement = () => {
        const { value } = this.numberNode
        this.props.decrement(value * 1)
    }
    incrementAsync = () => {
        const { value } = this.numberNode
        this.props.incrementAsync(value * 1)
    }
    render() {
        return (
            <>
                <h2>计算结果：{this.props.num}</h2>
                <select ref={c => this.numberNode = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={ this.increment }>+</button>&nbsp;
                <button onClick={ this.decrement }>-</button>&nbsp;
                <button onClick={ this.incrementAsync }>incrementAsync</button>
            </>
        )
    }
}


const mapStateToProps = state => ({num: state})

const mapDispatchToProps = {
    increment: createIncrementAction,
    decrement: createDecrementAction,
    incrementAsync:createIncrementAsyncAction
}
// react-redux 创建的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(Count)