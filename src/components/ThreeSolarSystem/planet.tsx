import type React from "react";
import type { Mesh } from "three";
import { useRef } from "react";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

interface PlanetProps {
	color: string;
	speed?: number;
	radius: number;
	texture?: string | null;
	rightClick?: () => void;
}

export const Planet: React.FC<PlanetProps> = ({
	color,
	radius,
	speed = 1,
	texture = null,
    rightClick = () => {},
}) => {
	const ref = useRef<Mesh>(null);
	const _texture = useLoader(
		TextureLoader,
		texture || "/textures/earth_texture.jpg",
	);

	useFrame(() => {
		if (ref.current) {
			ref.current.rotation.y += 0.01 * speed;
		}
	});

	return (
		<>
			<mesh ref={ref} onContextMenu={rightClick}>
				<sphereGeometry args={[radius, 32, 32]} />
				<meshStandardMaterial
					map={texture ? _texture : null}
					color={texture ? undefined : color}
				/>
			</mesh>
		</>
	);
};
