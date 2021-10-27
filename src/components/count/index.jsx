import React, { Component } from 'react'
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/actions/count'

export default class Count extends Component {
    dispatch = this.props.store.dispatch
    increment = (event) => {
        const { value } = this.numberNode
        this.dispatch(createIncrementAction(value * 1))
    }
    decrement = () => {
        const { value } = this.numberNode
        this.dispatch(createDecrementAction(value * 1))
    }
    incrementAsync = () => {
        const { value } = this.numberNode
        this.dispatch(createIncrementAsyncAction(value * 1, 500))
    }
    render() {
        return (
            <>
                <h2>计算结果：{this.props.store.getState()}</h2>
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