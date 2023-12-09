import { useEffect, useState } from "react";

const GetDesktop = (size = 705) => {
	const [isDesktop, setisDesktop] = useState(false);
	const sizeLimit = size;
	useEffect(() => {
		const Resize = () => {
			setisDesktop(window.innerWidth > sizeLimit);
		};
		window.addEventListener("resize", Resize);
		Resize();
		return () => window.removeEventListener("resize", Resize);
	}, [sizeLimit]);
	return isDesktop;
};

export default GetDesktop;
