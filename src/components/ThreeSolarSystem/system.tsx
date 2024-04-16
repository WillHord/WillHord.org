import React from "react";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";
import * as THREE from "three";

// import type { Planet } from "./planet";
import { Orbit } from "./orbit";

interface SystemProps {
	children: React.ReactNode;
	speed?: number;
	distance?: number;
    orbit?: boolean;
}

export const System: React.FC<SystemProps> = ({
	children,
	speed = 1,
	distance = 0,
    orbit = true,
}) => {
	const groupRef = useRef<Group>(null);

	useFrame(() => {
		if (groupRef.current) {
			groupRef.current.rotation.y += 0.001 * speed;
		}
	});

	const renderChildren = ({
		children,
		distance,
	}: { children: any; distance: number }) => {
		const childCount = React.Children.count(children);

		return React.Children.map(children, (child, index) => {
			if (child.type === System)
				return <group position={[distance, 0, 0]}>{child}</group>;
			const angle = (index / childCount) * Math.PI * 2;
			const x = distance * Math.cos(angle);
			const z = distance * Math.sin(angle);
			return <group position={[x, 0, z]}>{child}</group>;
		});
	};

	return (
		<group ref={groupRef}>
            {orbit && <Orbit distance={distance} />}
			{/* <mesh rotation={[-Math.PI / 2, 0, 0]}>
				<torusGeometry args={[distance, 0.01, 16, 100]} />
				<meshBasicMaterial color="white" opacity={0.3} transparent />
			</mesh> */}
			{renderChildren({ children, distance })}
		</group>
	);
};
