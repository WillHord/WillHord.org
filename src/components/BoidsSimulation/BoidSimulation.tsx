import type React from "react";
import { useEffect, useRef, useState, useCallback } from "react";
import Konva from "konva";

import BoidMenu from "./BoidMenu";

interface Boid {
	x: number;
	y: number;
	vx: number;
	vy: number;
}

const BoidSimulation: React.FC = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [cohesionFactor, setCohesionFactor] = useState(0.01);
	const [separationFactor, setSeparationFactor] = useState(0.05);
	const [alignmentFactor, setAlignmentFactor] = useState(0.05);
	const [maxSpeed, setMaxSpeed] = useState(4);

	const handleParametersChange = (params: {
		cohesionFactor: number;
		separationFactor: number;
		alignmentFactor: number;
		maxSpeed: number;
	}) => {
		console.log("params:", params);
		setCohesionFactor(params.cohesionFactor);
		setSeparationFactor(params.separationFactor);
		setAlignmentFactor(params.alignmentFactor);
		setMaxSpeed(params.maxSpeed);
	};

	// Initialize and setup the Konva stage and layers
	const stage = useRef<Konva.Stage | null>(null);
	const layer = useRef<Konva.Layer | null>(null);
	const boids = useRef<Boid[]>([]);

	// Helper functions
	const distance = (x1: number, y1: number, x2: number, y2: number) =>
		Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

	const limitMagnitude = (x: number, y: number, maxMagnitude: number) => {
		const magnitude = Math.sqrt(x ** 2 + y ** 2);
		if (magnitude > maxMagnitude) {
			const ratio = maxMagnitude / magnitude;
			return { x: x * ratio, y: y * ratio };
		}
		return { x, y };
	};

	// Render the boids on the stage
	const renderFrame = () => {
		// Update boid positions and behaviors
		// biome-ignore lint/complexity/noForEach: <explanation>
		boids.current.forEach((boid) => {
			// Cohesion
			const cohesionSum = boids.current.reduce(
				(acc, otherBoid) => ({
					x: acc.x + otherBoid.x,
					y: acc.y + otherBoid.y,
				}),
				{ x: 0, y: 0 },
			);
			const cohesionForce = {
				x: (cohesionSum.x / boids.current.length - boid.x) * cohesionFactor,
				y: (cohesionSum.y / boids.current.length - boid.y) * cohesionFactor,
			};

			// Separation
			const separationSum = boids.current.reduce(
				(acc, otherBoid) => {
					const d = distance(boid.x, boid.y, otherBoid.x, otherBoid.y);
					if (d > 0 && d < 25) {
						acc.x -= (otherBoid.x - boid.x) / d;
						acc.y -= (otherBoid.y - boid.y) / d;
					}
					return acc;
				},
				{ x: 0, y: 0 },
			);
			const separationForce = {
				x: separationSum.x * separationFactor,
				y: separationSum.y * separationFactor,
			};

			// Alignment
			const alignmentSum = boids.current.reduce(
				(acc, otherBoid) => ({
					x: acc.x + otherBoid.vx,
					y: acc.y + otherBoid.vy,
				}),
				{ x: 0, y: 0 },
			);
			const alignmentForce = {
				x: (alignmentSum.x / boids.current.length - boid.vx) * alignmentFactor,
				y: (alignmentSum.y / boids.current.length - boid.vy) * alignmentFactor,
			};

			// Apply forces to the boid
			boid.vx += cohesionForce.x + separationForce.x + alignmentForce.x;
			boid.vy += cohesionForce.y + separationForce.y + alignmentForce.y;

			// Limit the velocity magnitude
			const limitedVelocity = limitMagnitude(boid.vx, boid.vy, maxSpeed);
			boid.vx = limitedVelocity.x;
			boid.vy = limitedVelocity.y;

			// Update the boid's position
			boid.x += boid.vx;
			boid.y += boid.vy;

			// Wrap around the stage boundaries
			if (boid.x < 0) boid.x = stage.current!.width();
			if (boid.x > stage.current!.width()) boid.x = 0;
			if (boid.y < 0) boid.y = stage.current!.height();
			if (boid.y > stage.current!.height()) boid.y = 0;
		});

		// Clear the previous frame
		layer.current!.removeChildren();

		// Draw the boids on the layer
		// biome-ignore lint/complexity/noForEach: <explanation>
		boids.current.forEach((boid) => {
			const circle = new Konva.Circle({
				x: boid.x,
				y: boid.y,
				radius: 5,
				fill: "black",
			});
			layer.current!.add(circle);
		});

		// Request the next animation frame
		requestAnimationFrame(renderFrame);
	};

	// Initialize the simulation
	function initSimulation() {
		// Create and configure the boids
		const numBoids = 20;

		// Initialize boids with random positions and velocities
		for (let i = 0; i < numBoids; i++) {
			boids.current.push({
				x: Math.random() * window.innerWidth,
				y: Math.random() * window.innerHeight,
				vx: Math.random() * 4 - 2, // Increase the range
				vy: Math.random() * 4 - 2, // Increase the range
			});
		}

		// Setup the Konva stage and layers
		stage.current = new Konva.Stage({
			container: containerRef.current!,
			width: window.innerWidth,
			height: window.innerHeight,
		});

		layer.current = new Konva.Layer();
		stage.current.add(layer.current);

		// Start the animation loop
		renderFrame();
	}

	// Initialize the simulation on component mount
	useEffect(() => {
		initSimulation();

		// Cleanup function to remove the stage and layers
		return () => {
			stage.current?.destroy();
		};
	}, []);

	useEffect(() => {
		renderFrame();
	}, [cohesionFactor, separationFactor, alignmentFactor, maxSpeed]);


	return (
		<div>
			<BoidMenu onParametersChange={handleParametersChange} />
			<div ref={containerRef} style={{ width: "100%", height: "100vh" }} />
		</div>
	);
};

export default BoidSimulation;
