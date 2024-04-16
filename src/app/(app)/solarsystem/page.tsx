"use client";
import type React from "react";

import SolarSystem from "@/components/ThreeSolarSystem";
import TestSolarSystem from "@/components/ThreeSolarSystem/test";

const SolarSystemPage = () => {
	return (
		<div className="h-[80vh]">
			<SolarSystem />
            {/* <TestSolarSystem /> */}
		</div>
	);
};

export default SolarSystemPage;
