import type React from "react";
import { useRef } from "react";
import { MeshStandardMaterial } from "three";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

interface SunProps {
	color?: string;
	intensity?: number;
	texture?: string | null;
	onClick?: () => void;
}

// Sun component
export const Sun: React.FC<SunProps> = ({
	color = "white",
	intensity = 1,
	texture = null,
	onClick = () => {},
}) => {
	const _texture = useLoader(
		TextureLoader,
		texture || "/textures/sun_texture.jpg",
	);
	return (
		<>
			<pointLight
				position={[0, 0, 0]}
				color={color}
				intensity={Math.PI * 100 * intensity}
			/>
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<mesh onClick={onClick}>
				<sphereGeometry args={[2.5, 32, 32]} />
				<meshBasicMaterial map={texture ? _texture: null} color={texture ? undefined : color}/>
			</mesh>
		</>
	);
};
