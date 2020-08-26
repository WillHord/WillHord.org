import React from "react";

import TopMenu from "../../components/topMenu/Menu";
import BottomMenu from "../../components/BottomMenu/BottomMenu";

import ProjectBox from "../../components/LargeProjectBox/ProjectBox";
import Sort from "../../components/LargeProjectBox/Sort";

import "./Projects.css";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false,
      sortBy: "title",
    };
    this.SizeUpdate = this.SizeUpdate.bind(this);
    this.changeSort = this.changeSort.bind(this);
  }

  componentDidMount() {
    this.SizeUpdate();
    window.addEventListener("resize", this.SizeUpdate);
    document.getElementsByTagName("body")[0].className = "projectBody";
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.SizeUpdate);
    document.getElementsByTagName("body")[0].className = "";
  }

  SizeUpdate() {
    this.setState({ isDesktop: window.innerWidth > 725 });
  }

  changeSort(type) {
    this.setState({ sortBy: type });
  }

  render() {
    const projects = [
      {
        title: "WillHord.org",
        description: `This website! This is my personal website which houses
                my resume, my past work, and information about me, along with the professional side
                of this website I made it so that I can use it as a place to interface with any future projects which
                can be connected to the internet.`,
        programmingLanguages: ["React JS", "HTML", "CSS", "PHP"],
        image: "/Images/WillHordorg.jpg",
        github: "https://github.com/WillHord/WillHord.org",
      },
      {
        title: "Discord Bot",
        description: `A bot written in python which uses the discord api to play music, games, and give 
                information on stocks all in discord.`,
        programmingLanguages: ["python"],
        image: "/Images/TempProjectPic.jpg",
        github: "https://github.com/WillHord/DiscordBot",
      },
      {
        title: "iMessage Bot",
        description: `A framework for an iMessage chat bot which uses python and sql to detect new messages
                received and uses AppleScript to reply to commands given by the user. The bot must be run
                on MacOS and is still being worked on.`,
        programmingLanguages: ["python", "sql"],
        image: "/Images/TempProjectPic.jpg",
        github: "https://github.com/WillHord/iMessageBot",
      },
      {
        title: "Mat2Csv",
        description: `A script used to clean up and convert MAT files containing csv style data
                into CSV files.`,
        programmingLanguages: ["python"],
        image: "/Images/TempProjectPic.jpg",
        github: "https://github.com/WillHord/Mat2Csv",
      },
    ];
    return (
      <>
        <TopMenu
          color="white"
          lead={true}
          backgroundColor={"#1a1a1a"}
          burgerColor={"white"}
        />
        <div className="ProjectTopImg" />

        <div className="outerContentProjects">
          <div className="innerContentProjects">
            <div className="ProjectTitle">
              <h3>Projects</h3>
            </div>
            <hr className="TitleDivider" />
            <br />

            <Sort by={this.state.sortBy}>
              {projects.map((attributes, index) => (
                <ProjectBox
                  key={index}
                  title={attributes.title}
                  description={attributes.description}
                  programmingLanguages={attributes.programmingLanguages}
                  image={attributes.image}
                  github={attributes.github}
                  changeSort={this.changeSort}
                />
              ))}
            </Sort>
          </div>
        </div>
        <BottomMenu />
      </>
    );
  }
}

export default Projects;
