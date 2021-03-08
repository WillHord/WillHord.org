import React, { useState, useEffect } from "react";

import TopMenu from "../../components/topMenu/Menu";
import BottomMenu from "../../components/BottomMenu/BottomMenu";
import ProjectBox from "../../components/LargeProjectBox/ProjectBox";
import Sort from "../../components/LargeProjectBox/Sort";

import ComponentAPI from "../../api/ComponentAPI";

import "./Projects.css";

const Projects = (props) => {
	const [sortBy, setSortBy] = useState("title");
	const [headerImage, setHeaderImage] = useState(null);
	const [HeaderImageLoaded, setHeaderImageLoaded] = useState(false);
	const [projectBoxes, setProjectBoxes] = useState([]);

	useEffect(() => {
		let isMounted = true;
		const getData = async () => {
			Promise.all([
				await ComponentAPI.get("/Files/HeaderImage/Projects/"),
				await ComponentAPI.get(
					"/Components/LargeProjectBoxViewSet/?expand=~all"
				),
			])
				.then((res) => {
					isMounted && setHeaderImage(res[0].data.image.full_size);
					isMounted && setHeaderImageLoaded(true);
					isMounted && setProjectBoxes(res[1].data);
				})
				.catch((err) => {
					throw err;
				});
		};
		getData();
		document.getElementsByTagName("body")[0].className = "projectBody";

		return () => {
			isMounted = false;
		};
	}, []);

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
					backgroundImage: HeaderImageLoaded
						? "url(" + headerImage + ")"
						: "none",
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
							{projectBoxes.map((project) => (
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
