import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { type HemisphereLight, HemisphereLightHelper } from "three";
import { Stats, useHelper } from "@react-three/drei";
import Aquarium from "./Aquarium";
import { useControls } from "leva";
import { GizmoHelper, GizmoViewport } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";


function BoidsSimulation() {
	const MyLight = () => {
		const { intensity, size, y, x, z } = useControls("Light", {
			intensity: { value: 2, min: 0, max: 20, step: 0.5 },
			size: { value: 10, min: 4, max: 300, step: 2 },
			y: { value: 200, min: 50, max: 300, step: 10 },
			x: { value: 80, min: -200, max: 200, step: 10 },
			z: { value: 60, min: -200, max: 200, step: 10 },
		});

		const lightRef = useRef<HemisphereLight>(null!);
		useHelper(lightRef, HemisphereLightHelper, size, "red");
		return (
			<hemisphereLight
				castShadow={true}
				ref={lightRef}
				position={[x, y, z]}
				args={["white", "black", intensity]}
			/>
		);
	};

	return (
		<Canvas shadows>
			<Aquarium />
			<Stats />
			{/* <ControllableCamera /> */}
			{/*<Terrain/>*/}
			{/* <MyLight /> */}
			{/* <GizmoHelper alignment="bottom-right" margin={[100, 100]}>
				<GizmoViewport labelColor="white" axisHeadScale={1} />
			</GizmoHelper> */}
			<ambientLight intensity={1} />
            <OrbitControls />
		</Canvas>
	);
}

export default BoidsSimulation;
