import React, { Component } from 'react';

import './Lead.css'

class Lead extends Component {

    constructor(props) {
        super(props)
        this.text = props.text
    }

    render() {
        const color = this.props.color;
        const colorStyle ={
            color: color,
        }
        return (
            <div className='top-menu-lead' style={colorStyle}>
                {this.text}
            </div>
        )
    }
}

export default Lead;