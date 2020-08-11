import React from 'react';
import { Link } from 'react-router-dom';


// import './BottomMenuItem.css'

class BottomMenuItem extends React.Component {

    constructor(props) {
        super(props)
        this.text = props.text
        this.path = props.path
    }

    render() {
        const itemStyle = {
            color: 'white',
            textDecoration: 'none',
            // fontSize: '17px',
        };

        return (
            <Link className='bottom-menu-item' style={itemStyle} to={this.path}>{this.text}</Link>
        )
    }
}

export default BottomMenuItem;