import React, { useState, useEffect } from "react";

import TopMenu from "../../components/topMenu/Menu";
import BottomMenu from "../../components/BottomMenu/BottomMenu";
import GetDesktop from "../../components/isDesktop";

import ComponentAPI from "../../api/ComponentAPI";
import "./About.css";

const About = (props) => {
	const [HeaderImage, setHeaderImage] = useState([]);
	const [HeaderImageLoaded, setHeaderImageLoaded] = useState(false);
	const [AboutPageImages, setAboutPageImages] = useState([]);
	const [AboutPageImagesLoaded, setAboutPageImagesLoaded] = useState(false);
	const [AboutPageContent, setAboutPageContent] = useState([]);
	const [AboutPageContentLoaded, setAboutPageContentLoader] = useState(false);

	const isDesktop = GetDesktop();

	useEffect(() => {
		const getData = async () => {
			Promise.all([
				await ComponentAPI.get("/Files/HeaderImage/"),
				await ComponentAPI.get("/Files/MiscImages/"),
				await ComponentAPI.get("/Components/AboutPage/"),
			]).then((res) => {
				setHeaderImage([
					res[0].data.find(function (e) {
						return e.name === "AboutPageImage";
					}).image.full_size,
					res[0].data.find(function (e) {
						return e.name === "AboutPageImageMobile";
					}).image.full_size,
				]);
				setHeaderImageLoaded(true);
				setAboutPageImages([
					res[1].data.find(function (e) {
						return e.name === "AboutPageImage1";
					}).image.full_size,
					res[1].data.find(function (e) {
						return e.name === "AboutPageImage2";
					}).image.full_size,
				]);
				setAboutPageImagesLoaded(true);
				setAboutPageContent(res[2].data);
				setAboutPageContentLoader(true);
			});
		};
		getData();
		document.getElementsByTagName("body")[0].className = "AboutBody";
	}, []);

	const redirect = (page) => {
		props.history.push(page);
	};

	return (
		<>
			<TopMenu
				color="white"
				lead={true}
				backgroundColor={"#1a1a1a"}
				burgerColor={"black"}
			/>
			<div
				className="AboutTopPicture"
				style={{
					backgroundImage: HeaderImageLoaded
						? isDesktop
							? "url(" + HeaderImage[0] + ")"
							: "url(" + HeaderImage[1] + ")"
						: "none",
					backgroundPosition: isDesktop ? "initial" : "50% 25%",
				}}
			></div>
			<section id="FunFactsAboutMe">
				<div className="aboutInnerContent">
					<figure id="FactsAboutMeFigure">
						<div
							className="SidePicture"
							style={{
								marginLeft: isDesktop ? "0" : "auto",
								marginRight: isDesktop ? "10%" : "auto",
							}}
						>
							<img
								src={AboutPageImagesLoaded ? AboutPageImages[0] : "//:0"}
								style={{ width: "100%" }}
								alt=""
							/>
						</div>
						<figcaption style={{ marginTop: isDesktop ? "0" : "10%" }}>
							<h4>{AboutPageContentLoaded && AboutPageContent[0].name}</h4>
							<p style={{ maxWidth: "700px" }}>
								{AboutPageContentLoaded && AboutPageContent[0].description}
							</p>
						</figcaption>
					</figure>
				</div>
			</section>

			<section id="AboutMe">
				<div className="aboutInnerContent">
					<figure id="AboutMeFigure">
						{isDesktop ? (
							<>
								<figcaption id="FactsAboutMeCaption">
									<h4>{AboutPageContentLoaded && AboutPageContent[1].name}</h4>
									<p style={{ maxWidth: "700px" }}>
										{AboutPageContentLoaded && AboutPageContent[1].description}
									</p>
								</figcaption>
								<div className="SidePicture">
									<img
										src={AboutPageImagesLoaded ? AboutPageImages[1] : "//:0"}
										style={{ width: "100%" }}
										alt=""
									/>
								</div>
							</>
						) : (
							<>
								<div className="SidePicture">
									<img
										src={AboutPageImagesLoaded ? AboutPageImages[1] : "//:0"}
										style={{ width: "100%" }}
										alt=""
									/>
								</div>
								<figcaption style={{ marginTop: "15px" }}>
									<h4>{AboutPageContentLoaded && AboutPageContent[1].name}</h4>
									<p style={{ maxWidth: "600px" }}>
										{AboutPageContentLoaded && AboutPageContent[1].description}
									</p>
								</figcaption>
							</>
						)}
					</figure>
				</div>
			</section>
			<section id="MoreAboutMe">
				<div className="aboutInnerContent">
					<div className="aboutCenteredContent">
						<h2>Find out more about what I've done</h2>
						<p style={{ maxWidth: "400px", margin: "0 auto" }}>
							Look at the projects I have made and look at my resume to get a
							better understanding of what I can do.{" "}
						</p>
						<div id="aboutButtonDiv" style={{ marginTop: "15px" }}>
							<button
								className="MoreAboutMeButton"
								style={{ marginRight: "30px" }}
								onClick={() => {
									redirect("/Resume/");
								}}
							>
								Resume
							</button>
							<button
								className="MoreAboutMeButton"
								onClick={() => {
									redirect("/Projects/");
								}}
							>
								Projects
							</button>
						</div>
					</div>
				</div>
			</section>
			<BottomMenu />
		</>
	);
};

export default About;
