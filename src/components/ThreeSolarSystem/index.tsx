"use client";

import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Leva } from "leva";
import { useClickAway } from "@uidotdev/usehooks";

import { Debug, DebugControls } from "./debug";
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
	const { sunControl, ambientLight, system1, earthControl } = DebugControls();

	return (
		<div ref={ref} className="h-full bg-black">
			<Canvas
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
					<System distance={earthControl.distance}>
						<Planet
							radius={earthControl.planetRadius}
							color={earthControl.planetColor}
							speed={earthControl.planetSpeed}
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
							texture={"/textures/jupiter_texture.jpg"}
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
		</div>
	);
};

export default SolarSystem;
