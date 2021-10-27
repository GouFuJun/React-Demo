import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAddAction } from '../../redux/actions/person'

// UI组件
class Person extends Component {
    state = {
        name: '',
        age: ''
    }

    changeInput = (type) => (event) => this.setState({[type]: event.target.value})

    add = () => {
        const { name, age } = this.state
        this.props.add({name,age})
        // 清空input输入
        this.setState({name: '',age: ''})
    }

    render() {
        const { name, age } = this.state
        const { list, num } = this.props
        return (
            <>
                <h2>人员列表：{list.length}</h2>
                <h4>当前计算结果：{num}</h4>
                <input type="text" value={name} placeholder="姓名" onChange={this.changeInput('name')} />&nbsp;
                <input type="number" value={age} placeholder="年龄" onChange={this.changeInput('age')} />&nbsp;
                <button onClick={ this.add }>新增</button>
                <p>渲染列表：</p>
                <ul>
                    {
                        list.map((item,index) => <li key={index}>{item.name} ---- {item.age}</li>)
                    }
                </ul>
            </>
        )
    }
}

const mapStateToProps = state => ({list: state.person, num: state.count})

const mapDispatchToProps = {
    add: createAddAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Person)