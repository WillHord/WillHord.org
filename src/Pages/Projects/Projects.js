import React from "react";

import TopMenu from "../../components/topMenu/Menu";
import BottomMenu from "../../components/BottomMenu/BottomMenu";

import ProjectBox from "../../components/LargeProjectBox/ProjectBox";
import Sort from "../../components/LargeProjectBox/Sort";

import axios from 'axios';
import ComponentAPI from '../../api/ComponentAPI';

import "./Projects.css";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false,
      sortBy: "title",
      projects: [],
      HeaderImage: null,
    };
    this.SizeUpdate = this.SizeUpdate.bind(this);
    this.changeSort = this.changeSort.bind(this);
    this.getProjects = this.getProjects.bind(this);
    this.getHeaderImage = this.getHeaderImage.bind(this);
  }

  async getHeaderImage(){
    try{
      const response = await ComponentAPI.get('/Files/HeaderImage/Projects/');
      this.setState({headerImage: response.data.image.full_size});
      // console.log(response.data.image.full_size)
    } catch (error){
      throw error;
    }
  }

  async getProjects(){
    try{
      const response = await ComponentAPI.get('/Components/LargeProjectBoxViewSet/?expand=~all');
      this.setState({projects: response.data})
    } catch (error){
      throw error;
    }
  }

  componentDidMount() {
    this.getHeaderImage();
    this.getProjects();
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
    return (
      <>
        <TopMenu
          color="white"
          lead={true}
          backgroundColor={"#1a1a1a"}
          burgerColor={"white"}
        />
        <div className="ProjectTopImg" style={{backgroundImage: 'url(' + this.state.headerImage + ')'}}/>

        <div className="outerContentProjects">
          <div className="innerContentProjects">
            <div>
              <h3 style={{}}>Projects</h3>
            </div>
            <hr className="TitleDivider" />
            <br />

            <Sort by={this.state.sortBy}>
              {this.state.projects.map((project) => (
                <ProjectBox
                  key={project.pk}
                  title={project.name}
                  description={project.description}
                  programmingLanguages={project.languages}
                  image={project.img.image.full_size}
                  github={project.link}
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
