import React from 'react';
// import OptimizedSort from 'react-optimized-sort';
// import { sort as timsort } from 'timsort';

import TopMenu from '../../components/topMenu/Menu'
import BottomMenu from '../../components/BottomMenu/BottomMenu'

import ProjectBox from '../../components/LargeProjectBox/ProjectBox'
import Sort from '../../components/LargeProjectBox/Sort'

import './Projects.css'




class Projects extends React.Component{
    constructor(props){
        super (props);
        this.state = {
            isDesktop: false,
            sortBy: 'title',
        }
        this.SizeUpdate = this.SizeUpdate.bind(this);
        this.changeSort = this.changeSort.bind(this);
    }

    componentDidMount() {
        this.SizeUpdate();
        window.addEventListener("resize", this.SizeUpdate);
        document.getElementsByTagName('body')[0].className = 'projectBody';
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.SizeUpdate);
        document.getElementsByTagName('body')[0].className = '';
    }

    SizeUpdate() {
        this.setState({ isDesktop: window.innerWidth > 725 });
    }

    changeSort(type){
        this.setState({sortBy: type})
    }

    render(){
        // const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit purus nisl, sed viverra purus tristique non. Vivamus pulvinar malesuada est pretium convallis. Sed sit amet tortor et urna sodales pellentesque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ";

        // const testArray = ["python","sql"];

        const projects = [
            {
                title: 'Project A',
                description: 'Project Z',
                programmingLanguages: ['python','sql'],
            },
            {
                title: 'Project B',
                description: 'Project Y',
                programmingLanguages: ["sql"],
            },
            {
                title: 'Project C',
                description: 'Project X',
                programmingLanguages: ["C++"],
            },
            {
                title: 'Project D',
                description: 'Project W',
                programmingLanguages: ["Java", "python"],
            }
        ]
        return (
            <>
            <TopMenu color='white' lead={true} backgroundColor={'#1a1a1a'} burgerColor={'white'}/>
            <div className='ProjectTopImg'/>

            <div className='outerContentProjects'>
                <div className='innerContentProjects'>
                    <div className='ProjectTitle'>
                        <h3>Projects</h3>
                    </div>
                    <hr className='TitleDivider'/>
                    <br/>

                    <Sort by={this.state.sortBy}>
                        {projects.map( (attributes, index) =>
                            <ProjectBox key={index}
                            title={attributes.title}
                            description={attributes.description}
                            programmingLanguages={attributes.programmingLanguages}
                            changeSort={this.changeSort}/>
                            )}
                    </Sort>
                </div>
            </div>
            <BottomMenu/>
            </>
        )
    }
}

export default Projects;