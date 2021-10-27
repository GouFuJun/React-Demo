import React, { Component } from 'react'

export default class Count extends Component {
    state = { num: 0 }

    increment = () => {
        const { num } = this.state
        const { value } = this.numberNode
        this.setState({num: num + value * 1})
    }
    decrement = () => {
        const { num } = this.state
        const { value } = this.numberNode
        this.setState({num: num - value * 1})
    }
    incrementAsync = () => {
        const { num } = this.state
        const { value } = this.numberNode
        setTimeout(() => {
            this.setState({num: num + value * 1})
        }, 500);
    }
    render() {
        return (
            <>
                <h2>计算结果：{this.state.num}</h2>
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