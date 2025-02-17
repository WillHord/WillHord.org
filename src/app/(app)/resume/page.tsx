import { resumeData } from "@/config/resumeData";
import type React from "react";
import Resume from "./resume";

const ResumePage: React.FC = () => {
	return (
		<div className="min-h-screen flex justify-center py-16">
			<Resume data={resumeData} className="relative pointer-events-auto z-10" />
		</div>
	);
};

export default ResumePage;
