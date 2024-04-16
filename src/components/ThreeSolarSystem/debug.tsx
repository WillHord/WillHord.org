import type React from "react";
import { Stats } from "@react-three/drei";
import { useControls } from "leva";

export const Debug: React.FC = () => {
	const degbugControls = useControls("Debug", {
		Axes: false,
		Grid: false,
		Stats: false,
	});

	return (
		<>
			{degbugControls.Axes && <axesHelper args={[5]} />}
			{degbugControls.Grid && <gridHelper args={[40, 40, 0xff0000, "teal"]} />}
			{degbugControls.Stats && <Stats />}
		</>
	);
};
