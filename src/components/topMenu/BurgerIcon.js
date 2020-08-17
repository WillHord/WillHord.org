import React from 'react';

import './BurgerIcon.css'


class BurgerIcon extends React.Component{
    static defaultProps= {
        color: 'white',
        shadow: false,
    }

    constructor(props){
        super (props);
        this.state ={
            open: false,
        };
        this.changeState = this.changeState.bind(this);
    }

    changeState(){
        this.setState({open: !this.state.open});
        this.props.setToggleTopMenuClass();
    }

    render(){
        const open = this.state.open;

        const topTransform = {
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
            transitionDuration: '.3s',
            backgroundColor: open ? 'white' : this.props.color,
        }

        const middleTransform = {
            opacity: open ? "0" : "1",
            backgroundColor: open ? 'white' : this.props.color,
        }

        const bottomTransform = {
            transform: open ? "rotate(-45deg)" : "rotate(0deg)",
            transitionDuration: '.3s',
            backgroundColor: open ? 'white' : this.props.color,
        }

        return(
            <>
                <div className="burgerIconContainer" onClick={this.changeState}>
                    <div className='hamburgerBar' style={topTransform}/>
                    <div className='hamburgerBar' style={middleTransform}/>
                    <div className='hamburgerBar' style={bottomTransform}/>
                </div>
            </>
        )
    }
}

export default BurgerIcon;