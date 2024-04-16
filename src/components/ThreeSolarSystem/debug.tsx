import type React from "react";
import { Stats } from "@react-three/drei";
import { folder, useControls } from "leva";

export const Debug: React.FC = () => {
	const degbugControls = useControls(
		"Debug",
		{
			Axes: false,
			Grid: false,
			Stats: false,
		},
		{ collapsed: true },
	);

	return (
		<>
			{degbugControls.Axes && <axesHelper args={[5]} />}
			{degbugControls.Grid && <gridHelper args={[40, 40, 0xff0000, "teal"]} />}
			{degbugControls.Stats && <Stats />}
		</>
	);
};

export const DebugControls = () => {
	const sunControl = useControls(
		"Sun",
		{
			color: "#ffffff",
			intensity: 1,
		},
		{ collapsed: true },
	);

	const ambientLight = useControls(
		"Ambient Light",
		{
			color: "#ffffff",
			intensity: {
				value: 0.4,
				min: 0.1,
				max: 1,
			
			},
		},
		{ collapsed: true },
	);

	const system1 = useControls(
		"System 1",
		{
			distance: {
				value: 6.5,
				min: 1,
				max: 10,
			},
			speed: {
				value: 1,
				min: 0.01,
				max: 25,
			},
			orbit: true,
			planetRadius: {
				value: 1,
				min: 0.1,
				max: 2,
			},
			PlanetColor: "#0000ff",
		},
		{ collapsed: true },
	);

	const earthControl = useControls(
		"Earth",
		{
			distance: {
				value: 10,
				min: 1,
				max: 20,
			},
			speed: {
				value: 1,
				min: 0.01,
				max: 25,
			},
			orbit: true,
			planetRadius: {
				value: 0.8,
				min: 0.1,
				max: 2,
			},
			planetColor: "#00ff00",
			planetSpeed: {
				value: 1,
				min: 0.01,
				max: 25,
			},
		},
		{ collapsed: true },
	);

	return { sunControl, ambientLight, system1, earthControl };
};
