import React, { Component } from 'react'; 
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

//import style from './homepage.css'

// function HomepageImage(){
//     const url = 'https://cdn.filestackcontent.com/XYrHCaFGRSaq0EPKY1S6';
//     return(
//         <img src={url} style={{width: 650}} alt='Image of Golden Gate Bridge' />
//     );
// }

// export default HomepageImage;

class TopNavigation extends React.Component {
    render(){
        return(
            <>
                <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                crossorigin="anonymous"
                />
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Will Hord</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }
}

export default TopNavigation;

// var NewComponent = React.createClass({
//     render: function() {
//       return (
//         <div>
//           <meta name="viewport" content="width=device-width, initial-scale=1" />
//           <link rel="stylesheet" type="text/css" href="/fonts/fonts.css" />
//           <link rel="stylesheet" type="text/css" href="homepage.css" />
//           <div className="img-1">
//             <div className="topnav">
//               <ul>
//                 <a href="#home">Home</a>
//                 <a href="#news">News</a>
//                 <a href="#Resume">Resume</a>
//                 <a href="#about">About</a>
//                 <a href="#contact">Contact</a>
//               </ul>
//             </div>
//             <div className="caption">
//               <span className="border" , style={{color: 'rgb(255, 255, 255)'}}>Will Hord</span>
//             </div>
//           </div>
//           <div style={{color: 'black', backgroundColor: '#EDEEEF', textAlign: 'justify', padding: '50px 80px'}}>
//             <h3 style={{textAlign: 'center'}}>Who am I?</h3>
//             <p>A coder, nerd, researcher, amateur giraffe enthusiast. I love destroying the toasters and other pieces of technology you put by the curb, making useless programs, long walks on the beach, and making an AI to destroy the human race (still unsuccessful). I am currently a high school senior at Dobbs Ferry High School. Learn more about me in by About page!</p>
//           </div>
//           <div className="img-2">
//             <div className="caption">
//               <span className="border" style={{backgroundColor: 'transparent', fontSize: '25px', color: '#f7f7f7'}} />
//             </div>
//           </div>
//           <div style={{position: 'relative'}}>
//             <div style={{color: '#ddd', backgroundColor: '#282E34', padding: '50px 80px', textAlign: 'center'}}>
//               <h1 style={{textAlign: 'center'}}>Where to Find Me:</h1>
//               <div className="social-icon">
//                 <ul>
//                   <a href="#"><i className="fab fa-facebook-f" /></a>
//                   <a href="#"><i className="fab fa-twitter" /></a>
//                   <a href="#"><i className="fab fa-github" /></a>
//                   <a href="#"><i className="fab fa-instagram" /></a>
//                   <a href="#"><i className="fab fa-linkedin" /></a>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="img-3">
//             <div className="caption">
//               <span className="border" style={{backgroundColor: 'transparent', fontSize: '25px', color: '#f7f7f7'}} />
//             </div>
//           </div>
//           <div style={{position: 'relative'}}>
//             <div style={{color: '#ddd', backgroundColor: '#282E34', textAlign: 'justify', padding: '50px 80px'}}>
//             </div>
//           </div>
//           <div className="img-1">
//             <div className="caption">
//               <span className="border" />
//             </div>
//           </div>
//           <div style={{color: '#ddd', backgroundColor: '#282E34', textAlign: 'center', padding: '50px 80px'}}>
//             <h1>Trying to make the world a better place</h1>
//             <p />
//             <div className="bottomnav">
//               <ul>
//                 <a href="#home">Home</a>
//                 <a href="#news">News</a>
//                 <a href="#Resume">Resume</a>
//                 <a href="#about">About</a>
//                 <a href="#contact">Contact</a>
//               </ul>
//             </div>
//             <div className="social-icon">
//               <ul>
//                 <a href="#"><i className="fab fa-facebook-f" /></a>
//                 <a href="#"><i className="fab fa-twitter" /></a>
//                 <a href="#"><i className="fab fa-github" /></a>
//                 <a href="#"><i className="fab fa-instagram" /></a>
//                 <a href="#"><i className="fab fa-linkedin" /></a>
//               </ul>
//             </div>
//             <div className="login">
//               <p />
//               <a href="#login">Login</a>
//             </div>
//           </div>
//         </div>
//       );
//     }
//   });
