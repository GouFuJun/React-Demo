import React, { Component } from 'react'
import Count from "./components/count"
import Person from "./components/person"

export default class App extends Component {
    render() {
        return (
            <>
                <Count/>
                <hr/>
                <Person/>
            </>
        )
    }
}