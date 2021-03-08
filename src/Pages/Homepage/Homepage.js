import React, { useState, useEffect } from "react";

import "./Homepage.css"

import TopMenu from "../../components/topMenu/Menu";
import SolarSystem from "../../components/SolarSystem/SolarSystem";
import BottomBar from "../../components/BottomMenu/BottomMenu";
import Box from "../../components/ProjectBoxes/Box";
import GetDesktop from "../../components/isDesktop";

import ComponentAPI from "../../api/ComponentAPI";

import Terminal from "../../components/Terminal/Terminal";
import TerminalItem from "../../components/Terminal/TerminalItem";
import TerminalSkip from "../../components/Terminal/TerminalSkip";

function Homepage(props){
    const [ProjectBox, setProjectBox] = useState([]);
    const [BoxReturned, setBoxReturned] = useState(false);
    const [TerminalText, setTerminalText] = useState([]);
    const [TerminalTextRecieved, setTerminalTextRecieved] = useState(false);
    const [HeaderImages, setHeaderImages] = useState([]);
    const [HeaderImagesLoaded, setHeaderImagesLoaded] = useState(false);

    const isDesktop = GetDesktop();

    useEffect( () => {
      let _isMounted = true;
        const getData = async () => {
            Promise.all([
                await ComponentAPI.get('/Components/TerminalText/'),
                await ComponentAPI.get('/Files/HeaderImage/'),
            ]).then(res =>{
              _isMounted && setTerminalText(res[0].data);
              _isMounted && setTerminalTextRecieved(true);

              const imgs = ['HomePageImage1','HomePageImage1Mobile','HomePageImage2','HomePageImage2Mobile']
              let temp = [];
              imgs.forEach((img) => {
                temp.push(res[1].data.find(function(e) { return e.name === img; }).image.full_size);
              })
              _isMounted && setHeaderImages(temp);
              _isMounted && setHeaderImagesLoaded(true);
            }).catch(e =>{
              throw e;
            })
            const response = await ComponentAPI.get('/Components/SmallProjectBox/');
            _isMounted && setProjectBox(response.data);
            _isMounted && setBoxReturned(true);
        }
        _isMounted && getData();
        document.getElementsByTagName("body")[0].className = "HomepageBody";

        return () => {
          _isMounted = false;
        };
    },[]);

    const redirectToProjects = (e) => {
        let destUrlEdit = `/Projects/`;
        props.history.push(destUrlEdit);
    }


    return(
        <>
        <TopMenu />
        <SolarSystem />
        <section id="whoAmI">
          <div id="whoAmIInnerContent">
            <div className="HomepageTerminal">
              <div className="TerminalTop">
                <div className="closeWindowIcon" />
                <div className="minimizeWindowIcon" />
                <div className="expandWindowIcon" />
              </div>
              {TerminalTextRecieved && <>
                <Terminal className='Terminal' style={{color: 'white'}} prefix={'>'} typingSpeed={50}>
                {TerminalText.map((line, index) =>{
                  return <TerminalItem key={index}
                  shouldDelete={TerminalText[index].shouldDelete}
                  newLine={TerminalText[index].newLine}
                  >{TerminalText[index].description}</TerminalItem>
                })}
                <TerminalSkip style={{
                  paddingTop: '5%',
                }}>Skip &#9654;</TerminalSkip>
              </Terminal>
              </>
              }
            </div>
          </div>
        </section>
        <section id="img1Container">
            <div style={{
                width: isDesktop ? "90%" : "100%",
                height: "80vh",
                position: "relative",
                margin: "0 auto",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: HeaderImagesLoaded ? isDesktop
                  ? 'url(' + HeaderImages[0] +')'
                  : 'url(' + HeaderImages[1] + ')' : 'none',
            }} />
        </section>
        <section className="projects">
          <div className="innerHomepageContent" style={{
            width: '100%',
          }}>
            <h4>Recent Projects</h4>
            <div className="boxContainer" style={{padding:'5px'}}>{
            BoxReturned && (isDesktop ?
                ProjectBox.slice(0, 3).map((box) =>{
                    return <Box
                        key={box.pk}
                        title={box.name}
                        summary={box.description}
                        path={box.link}
                        fadeIn={1400}
                    />
                  })
                  : ProjectBox.slice(0, 2).map((box) =>{
                    return <Box
                        key={box.pk}
                        title={box.name}
                        summary={box.description}
                        path={box.link}
                        fadeIn={1400}
                    />
                  })
                )
            }</div>
            <button
              className="homepageButton"
              onClick={() => {
                redirectToProjects()
              }}
            >
              More Projects
            </button>
          </div>
        </section>
        <section id="img2Container">
            <div style={{
                width: isDesktop ? "90%" : "100%",
                height: "90vh",
                margin: "0 auto",
                position: "relative",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "50% 0%",
                backgroundImage: HeaderImagesLoaded ? isDesktop
                  ? 'url(' + HeaderImages[2] +')'
                  : 'url(' + HeaderImages[3] + ')': 'none',
            }}/>
        </section>
        <BottomBar />
      </>
    )
}

export default Homepage;