"use client";
import type React from "react";
import { useState, useEffect } from "react";

import "./SolarSystem.css";

interface SolarSystemProps {
    title: string;
}

const SolarSystem: React.FC<SolarSystemProps> = ({
    title,
}) => {
	return (
		<div className="solarSystem">
			<div className="stars"/>
			<div className="sun" />
			<div className="name">
				{title}
			</div>
			<div className="planet1Orbit">
				<div className="planet1Rotate">
					<div className="planet1CounterRotate">
						<div className="planet1" />
					</div>
				</div>
			</div>
			<div className="planet2Orbit">
				<div className="planet2Rotate">
					<div className="planet2CounterRotate">
						<div className="planet2" />
					</div>
				</div>
			</div>
			<div className="planet3Orbit">
				<div className="planet3Rotate">
					<div className="planet3CounterRotate">
						<div className="planet3" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SolarSystem;
