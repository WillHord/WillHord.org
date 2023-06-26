import React, { useState, useEffect } from "react";

import TopMenu from "../../components/topMenu/Menu";
import BottomMenu from "../../components/BottomMenu/BottomMenu";
import ProjectBox from "../../components/LargeProjectBox/ProjectBox";
import Sort from "../../components/LargeProjectBox/Sort";

import ComponentAPI from "../../api/ComponentAPI";

import { headerImages } from "../../data/headerImages";
import { projectData } from "../../data/projectData";

import "./Projects.css";

const Projects = (props) => {
	const [sortBy, setSortBy] = useState("title");

	return (
		<>
			<TopMenu
				color="white"
				lead={true}
				backgroundColor={"#1a1a1a"}
				burgerColor={"white"}
			/>
			<div
				className="ProjectTopImg"
				style={{
					backgroundImage: "url(" + headerImages.Projects + ")",
				}}
			/>

			<div className="outerContentProjects">
				<div className="innerContentProjects">
					<div>
						<h3>Projects</h3>
					</div>
					<br />
					<hr className="TitleDivider" />
					<br />
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							flexWrap: "wrap",
							justifyContent: "space-around",
						}}
					>
						<Sort by={sortBy}>
							{projectData
								.filter((item) => item.displayed)
								.map((project) => (
								<ProjectBox
									key={project.pk}
									title={project.name}
									description={project.description}
									programmingLanguages={project.languages}
									image={project.img.image.full_size}
									github={project.link}
									sortBy={setSortBy}
								/>
							))}
						</Sort>
					</div>
				</div>
			</div>
			<BottomMenu />
		</>
	);
};
export default Projects;
