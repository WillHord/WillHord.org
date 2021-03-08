import React, {useState} from 'react';
import Fade from 'react-reveal/Fade';
import GetDesktop from '../isDesktop';

import "./Box.css"

const Box = (props) => {
    const [hovered, setHovered] = useState(false);

    const title = props.title;
    const summary = props.summary;
    const path = props.path;
    const fadeIn = props.fadeIn;

    const isDesktop = GetDesktop(500);

    return(
        <>
        <Fade bottom duration={fadeIn}>
            <div style={{
                width: isDesktop ? '250px' : '90%',
                paddingBottom: '5%',
                margin:'15px',
            }}>
            <div style={{
                minHeight: '40vh',
                background: 'white',
                borderRadius:'3px',
                display: 'flex',
                flexDirection:'column',
                transition: 'transform .3s',
                transform: hovered ? "scale(1.1)" : "scale(1)",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            >
                <div style={{
                    flex:'1 0 1',
                    margin: '5% 1% 1% 1%',
                }}>
                    <div>{title}</div>
                    <hr className="dividerTop" style={{marginTop:'2%'}}/>
                </div>
                <div style={{
                    flex:'3',
                    margin: '1% 1% 1% 5%',
                    textAlign: 'left',
                    fontSize:'2vh',
                }}>
                    {summary}
                </div>
                <div style={{
                    flex:'1',
                    margin: '1% 1% 1% 1%',
                }}>
                    <hr className="dividerBottom" />
                    <a style={{
                        textDecoration: 'none',
                        color: 'black',
                    }} target="_blank" rel="noopener noreferrer" href={path}>
                        <div className="linkToProject">To Project &rarr;</div>
                    </a>
                </div>
            
            </div>
            </div>
        </Fade>
        </>
    )
}

export default Box;