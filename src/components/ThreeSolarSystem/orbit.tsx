import type React from "react";

interface OrbitProps {
	distance: number;
	opacity?: number;
	transparent?: boolean;
	color?: string;
}

export const Orbit: React.FC<OrbitProps> = ({
	distance,
	opacity = 0.3,
	transparent = true,
	color = "white",
}) => {
	return (
		<mesh rotation={[-Math.PI / 2, 0, 0]}>
			<torusGeometry args={[distance, 0.01, 16, 100]} />
			<meshBasicMaterial
				color={color}
				opacity={opacity}
				transparent={transparent}
			/>
		</mesh>
	);
};
