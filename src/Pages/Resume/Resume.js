import React, { useState, useEffect } from "react";

import TopMenu from "../../components/topMenu/Menu";
import BottomMenu from "../../components/BottomMenu/BottomMenu";
import ComponentAPI from "../../api/ComponentAPI";
import GetDesktop from "../../components/isDesktop";

import "./Resume.css";

const Resume = (props) => {
	const [HeaderImage, setHeaderImage] = useState([]);
	const [HeaderImageLoaded, setHeaderImageLoaded] = useState(false);
	const [Education, setEducation] = useState([]);
	const [EducationReturned, setEducationReturned] = useState(false);
	const [WorkExperience, setWorkExperience] = useState([]);
	const [WorkExperienceReturned, setWorkExperienceReturned] = useState(false);
	const [resume, setresume] = useState([]);
	const [techExperience, setTechExperience] = useState([]);
	const [techExperienceReturned, setTechExperienceReturned] = useState(false);

	const isDesktop = GetDesktop();

	useEffect(() => {
		let isMounted = true;
		const getData = async () => {
			Promise.all([
				await ComponentAPI.get("/Files/HeaderImage/"),
				await ComponentAPI.get("/Components/Education/?expand=~all"),
				await ComponentAPI.get("Components/WorkExperience/?expand=~all"),
				await ComponentAPI.get("/Files/FileUpload/"),
				await ComponentAPI.get("/Components/Experience/?expand=~all"),
			]).then((res) => {
				setHeaderImage([
					res[0].data.find(function (e) {
						return e.name === "ResumePageImage";
					}).image.full_size,
					res[0].data.find(function (e) {
						return e.name === "ResumePageImageMobile";
					}).image.full_size,
				]);
				setHeaderImageLoaded(true);
				setEducation(res[1].data);
				setEducationReturned(true);
				setWorkExperience(res[2].data);
				setWorkExperienceReturned(true);

				setresume(
					res[3].data.find(function (e) {
						return e.name === "Resume";
					})
				);

				setTechExperience([
					res[4].data.find(function (e) {
						return e.name === "Proficient";
					}),
					res[4].data.find(function (e) {
						return e.name === "Familiar";
					}),
					res[4].data.find(function (e) {
						return e.name === "Exposure";
					}),
					res[4].data.find(function (e) {
						return e.name === "Technical";
					}),
				]);
				setTechExperienceReturned(true);
			});
		};
		isMounted && getData();
		document.getElementsByTagName("body")[0].className = "ResumeBody";

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
				burgerColor={"black"}
			/>
			<div
				className="TopPicture"
				style={{
					backgroundImage: HeaderImageLoaded
						? isDesktop
							? "url(" + HeaderImage[0] + ")"
							: "url(" + HeaderImage[1] + ")"
						: "none",
					backgroundSize: "cover",
					backgroundPosition: isDesktop ? "50% 25%" : "initial",
				}}
			/>
			<div className="outerContent">
				<div className="innerContent">
					<div className="ResumeTitle">
						<h5>Resume</h5>
					</div>
					<div className="SectionTitle">
						<h5>Education</h5>
					</div>
					<hr className="TitleDivider" />
					{EducationReturned &&
						Education.map((item, index) => {
							return (
								<div className="EducationSection" key={index}>
									<a
										target="_blank"
										rel="noopener noreferrer"
										href={item.image.link}
									>
										<img
											className="LargeIcon"
											src={item.image.image.full_size}
											alt={item.image.description}
										/>
									</a>
									<b className="wrap">{item.school}</b>
									<span className="alignRight">{item.dates}</span>
									<br />
									<b className="wrap">{item.degree}</b>
									<span className="alignRight">{item.location}</span>
									<br />
									<br />
									{item.coursework.length > 0 ? (
										<>
											<span>Relevant Coursework:</span>
											<br />
											<br />
											<ul className="Coursework">
												{item.coursework.map((course, key) => {
													return <li key={key}>{course.name}</li>;
												})}
											</ul>
											<br />
											<br />
										</>
									) : (
										<></>
									)}
								</div>
							);
						})}

					<div className="SectionTitle">
						<h5>Work Experience</h5>
					</div>
					<hr className="TitleDivider" />

					{WorkExperienceReturned &&
						WorkExperience.map((item, index) => {
							return (
								<div key={index} className="WorkSection">
									<a
										target="_blank"
										rel="noopener noreferrer"
										href={item.image.link}
									>
										<img
											className="LargeIcon"
											src={item.image.image.full_size}
											alt={item.image.description}
										/>
									</a>
									<b>{item.title}</b>
									<span className="alignRight">{item.dates}</span>
									<br />
									<b>{item.position}</b>
									<span className="alignRight">{item.location}</span>
									<br />
									<br />
									<br />
									<p>{item.description}</p>
									{item.optionalFile !== null ? (
										<div
											style={{
												float: isDesktop ? "right" : "none",
												textAlign: isDesktop ? "inherit" : "center",
											}}
										>
											<button
												className="PaperButton"
												onClick={() =>
													window.open(item.optionalFile.fileupload)
												}
											>
												{item.fileText}
											</button>
										</div>
									) : (
										<></>
									)}
									<br />
									<br />
								</div>
							);
						})}

					<div className="SectionTitle">
						<h5>Programming Experience</h5>
					</div>
					<hr className="TitleDivider" />
					<div className="TechnicalSection">
						<b>
							<h5>Proficient In:</h5>
						</b>
						<br />
						{techExperienceReturned &&
							techExperience[0].skills.map((skill, index) => {
								return (
									<div key={index}>
										<span className="indent">{skill.name}</span>
										<span className="alignRight">
											{skill.experience} Years of Experience
										</span>
										<br />
										<br />
									</div>
								);
							})}
						<br />
						<b>
							<h5>Familiar With:</h5>
						</b>
						<br />
						{techExperienceReturned &&
							techExperience[1].skills.map((skill, index) => {
								return (
									<div key={index}>
										<span className="indent">{skill.name}</span>
										<span className="alignRight">
											{skill.experience} Years of Experience
										</span>
										<br />
										<br />
									</div>
								);
							})}
						<br />
						<b>
							<h5>Exposure To:</h5>
						</b>
						<div
							className="alignCenter"
							style={{
								overflowX: "scroll",
								paddingBottom: "10px",
							}}
						>
							{techExperienceReturned &&
								techExperience[2].skills.map((skill, index) => {
									return (
										<span key={index} className="sideBySide">
											{skill.name}
										</span>
									);
								})}
						</div>
						<br />
						<hr className="TitleDivider" />
						<br />
						<b>
							<h5>Other Technical Skills:</h5>
						</b>
						<ul>
							{techExperienceReturned &&
								techExperience[3].skills.map((skill, index) => {
									return <li key={index}>{skill.name}</li>;
								})}
						</ul>
						<br />
					</div>
					<hr className="TitleDivider" />
					<div className="alignCenter" style={{ paddingBottom: "30px" }}>
						<button
							className="FullResumeButton"
							onClick={() => window.open(resume.fileupload)}
						>
							Full Resume
						</button>
					</div>
				</div>
			</div>
			<BottomMenu />
		</>
	);
};

export default Resume;
