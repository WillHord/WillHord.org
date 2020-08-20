import React from 'react';

// import TopMenu from './../topMenu/Menu'
import './SolarSystem.css'

// class Planet1 extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         hovered: false
//       };
//     }
//     onMouseEnter = e => {
//     //   this.setState({ hovered: true });
//       console.log('hovered set to true');
//     };
//     onMouseLeave = e => {
//     //   this.setState({ hovered: false });
//       console.log('hovered set to false')
//     };
//     render() {
//         let orbitclassname = 'planet1Orbit';
//         let planetRotate = 'planet1Rotate';
//         const { hovered } = this.state;
//         const style = hovered ? { animation: 'paused' } : {};
//         console.log(hovered)
//         return (
//             //   <div style={style} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
//             <div className={orbitclassname} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
//                 <div className={planetRotate} style={style}>
//                     <div className='planet1CounterRotate'>
//                         <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
//                         <div className='planet1' onClick={console.log('clicked')}/>
//                     </div>
//                 </div>
//             </div>
//         </div>
//       );
//     }
//   }


class SolarSystem extends React.Component{
    constructor(props){
        super (props)
        this.state = {
            active: false,
        };
        this.nameAnimationDelay = this.nameAnimationDelay.bind(this);
    }

    nameAnimationDelay(){
        this.setState({active: true})
    }
    
    componentDidMount(){
        setTimeout(this.nameAnimationDelay,2000)
    }

    render(){
        // const nameState = this.state;
        return (
            <>
                <div className='solarSystem'>
                    <div className='stars'>
                        {/* <div className='twinkling'></div> */}
                    </div>
                    <div className='sun'/>
                    <div className={this.state.active ? 'name':null}>
                        <p>Will Hord</p>
                    </div>
                    <div className='planet1Orbit'>
                        <div className='planet1Rotate'>
                            <div className='planet1CounterRotate'>
                                <div className='planet1'/>
                            </div>
                        </div>
                    </div>
                    <div className='planet2Orbit'>
                        <div className='planet2Rotate'>
                                <div className='planet2CounterRotate'>
                                    <div className='planet2'/>
                                </div>
                        </div>
                    </div>
                    <div className='planet3Orbit'>
                        <div className='planet3Rotate'>
                                <div className='planet3CounterRotate'>
                                    <div className='planet3'/>
                                </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default SolarSystem;