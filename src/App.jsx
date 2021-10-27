import React, { Component } from 'react'
import Count from "./components/count"

import store from './redux/index'
export default class App extends Component {
    render() {
        return <Count store={store}/>
    }
}