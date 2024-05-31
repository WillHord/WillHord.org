"use client";
import { useState, useEffect } from "react";

type DesktopSizeProps = {
	desktopWidth?: number;
};

export function useIsDesktop({ desktopWidth = 768 }: DesktopSizeProps = {}) {
	const [isDesktop, setIsDesktop] = useState<boolean>(true);

	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth >= desktopWidth);
		};

		if (typeof window === "undefined") {
			return;
		}

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [desktopWidth]);

	return isDesktop;
}

export default useIsDesktop;
