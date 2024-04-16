import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";

import { Vector3, Matrix4 } from "three";

// Planet component
const Planet = ({ color, radius }) => {
	const ref = useRef();

	useFrame(() => {
		if (ref.current) {
			ref.current.rotation.y += 0.01; // Rotate the planet
		}
	});

	return (
		<mesh ref={ref}>
			<sphereGeometry args={[radius, 32, 32]} />
			<meshStandardMaterial color={color} />
		</mesh>
	);
};

// System component
const System = ({ distance, children }) => {
	const groupRef = useRef();

	useFrame(() => {
		if (groupRef.current) {
			groupRef.current.rotation.y += 0.005; // Rotate the system
		}
	});

	return (
		<group ref={groupRef} position={[distance, 0, 0]}>
			{children}
		</group>
	);
};

const NestedOrbitExample = () => (
	<Canvas>
		<ambientLight />
		<pointLight position={[10, 10, 10]} />

		<System distance={0}>
			<Planet color="blue" radius={1} /> {/* Center planet */}
			<System distance={5}>
				<Planet color="green" radius={0.5} /> {/* Orbiting planet */}
				<System distance={1}>
					<Planet color="red" radius={0.3} /> {/* Orbiting planet */}
				</System>
			</System>
			<System distance={10}>
				<Planet color="yellow" radius={0.7} />
				<System distance={2}>
					<Planet color="orange" radius={0.4} />
                    <System distance={1}>
                        <Planet color="red" radius={0.3} />
                        <Planet color="blue" radius={0.5} />
                        </System>
				</System>
			</System>
		</System>
		<OrbitControls target={[0, 0, 0]} />
		<axesHelper args={[5]} />
		<gridHelper args={[40, 40, 0xff0000, "teal"]} />
		<Stats />
	</Canvas>
);

export default NestedOrbitExample;
