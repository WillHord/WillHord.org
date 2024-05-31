import type React from "react";
import { useState } from "react";

interface BoidMenuProps {
	onParametersChange: (params: {
		cohesionFactor: number;
		separationFactor: number;
		alignmentFactor: number;
		maxSpeed: number;
	}) => void;
}

const BoidMenu: React.FC<BoidMenuProps> = ({ onParametersChange }) => {
	const [cohesionFactor, setCohesionFactor] = useState(0.01);
	const [separationFactor, setSeparationFactor] = useState(0.05);
	const [alignmentFactor, setAlignmentFactor] = useState(0.05);
	const [maxSpeed, setMaxSpeed] = useState(4);

	const handleParameterChange = () => {
		onParametersChange({
			cohesionFactor,
			separationFactor,
			alignmentFactor,
			maxSpeed,
		});
	};

	return (
		<div>
			<h3>Boid Simulation Parameters</h3>
			<div>
				<label>Cohesion Factor:</label>
				<input
					type="range"
					min={0}
					max={1}
					step={0.01}
					value={cohesionFactor}
					onChange={(e) => {
						setCohesionFactor(Number.parseFloat(e.target.value));
						handleParameterChange();
					}}
				/>
				<span>{cohesionFactor}</span>
			</div>
			<div>
				<label>Separation Factor:</label>
				<input
					type="range"
					min={0}
					max={1}
					step={0.01}
					value={separationFactor}
					onChange={(e) => {
						setSeparationFactor(Number.parseFloat(e.target.value));
						handleParameterChange();
					}}
				/>
				<span>{separationFactor}</span>
			</div>
			<div>
				<label>Alignment Factor:</label>
				<input
					type="range"
					min={0}
					max={1}
					step={0.01}
					value={alignmentFactor}
					onChange={(e) => {
						setAlignmentFactor(Number.parseFloat(e.target.value));
						handleParameterChange();
					}}
				/>
				<span>{alignmentFactor}</span>
			</div>
			<div>
				<label>Max Speed:</label>
				<input
					type="range"
					min={0}
					max={10}
					step={0.1}
					value={maxSpeed}
					onChange={(e) => {
						setMaxSpeed(Number.parseFloat(e.target.value));
						handleParameterChange();
					}}
				/>
				<span>{maxSpeed}</span>
			</div>
		</div>
	);
};

export default BoidMenu;
