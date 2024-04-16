"use client";

import React, { useRef, useState, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stats, Stars } from "@react-three/drei";
import { Leva, useControls } from "leva";
import { useClickAway } from "@uidotdev/usehooks";

import { Debug } from "./debug";
import { Planet } from "./planet";
import { Sun } from "./sun";
import { System } from "./system";

// Main component
const SolarSystem = () => {
	const [controlOpen, setControlOpen] = useState(false);
	const [orbitEnabled, setOrbitEnabled] = useState(false);
	const ref = useClickAway(() => {
		setOrbitEnabled(false);
	});

	const sunControl = useControls("Sun", {
		color: "#ffffff",
		intensity: 1,
	});

	const ambientLight = useControls("Ambient Light", {
		color: "#ffffff",
		intensity: 0.2,
	});

	const system1 = useControls("System 1", {
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
	});

	return (
		<>
			<Canvas
				ref={ref}
				className="flex-1 bg-black"
				camera={{ fov: 45, position: [30, 10, 0], rotation: [0, 0, 45] }}
			>
				<System>
					<System
						distance={system1.distance}
						speed={system1.speed}
						orbit={system1.orbit}
					>
						<Planet
							radius={system1.planetRadius}
							color={system1.PlanetColor}
							texture={"/textures/mars_texture.jpg"}
						/>
					</System>
					<System distance={10}>
						<Planet
							radius={0.8}
							color="green"
							texture={"/textures/earth_texture.jpg"}
						/>
						<System distance={1.75} speed={15}>
							<Planet
								radius={0.3}
								color="red"
								texture={"/textures/moon_texture.jpg"}
								rightClick={() => setControlOpen(!controlOpen)}
							/>
						</System>
					</System>
					<System distance={14} speed={2}>
						<Planet
							radius={1}
							color="yellow"
							texture={"/textures/saturn_texture.jpg"}
						/>
					</System>
					<Sun
						texture={"/textures/sun_texture.jpg"}
						color={sunControl.color}
						intensity={sunControl.intensity}
						onClick={() => setOrbitEnabled(true)}
					/>
				</System>
				<Stars
					radius={100}
					depth={50}
					count={5000}
					factor={4}
					saturation={0}
					fade
					speed={1}
				/>
				<ambientLight
					intensity={ambientLight.intensity}
					color={ambientLight.color}
				/>
				<OrbitControls
					target={[0, 0, 0]}
					enablePan={false}
                    minDistance={10}
					maxDistance={50}
					enabled={orbitEnabled}
				/>
				<Debug />
			</Canvas>
			<Leva hidden={!controlOpen} />
		</>
	);
};

export default SolarSystem;
