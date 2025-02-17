"use client";

import { motion } from "motion/react";
import {
	type ComponentPropsWithoutRef,
	useEffect,
	useId,
	useRef,
	useState,
} from "react";

import { cn } from "@/lib/utils";

export interface AnimatedGridPatternProps
	extends ComponentPropsWithoutRef<"svg"> {
	width?: number;
	height?: number;
	x?: number;
	y?: number;
	strokeDasharray?: any;
	numSquares?: number;
	maxOpacity?: number;
	duration?: number;
	repeatDelay?: number;
	nsquares?: [number, number];
	squaresClassName?: string;
}

export function AnimatedInteractiveGridPattern({
	width = 40,
	height = 40,
	x = -1,
	y = -1,
	strokeDasharray = 0,
	numSquares = 50,
	nsquares = [40, 40],
	className,
	maxOpacity = 0.5,
	duration = 4,
	repeatDelay = 0.5,
	squaresClassName,
	...props
}: AnimatedGridPatternProps) {
	const id = useId();
	const containerRef = useRef(null);
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
	const [squares, setSquares] = useState(() => generateSquares(numSquares));
	const [horizontal, vertical] = nsquares;

	const [hoveredSquare, setHoveredSquare] = useState<number | null>(null);

	function getPos() {
		return [
			Math.floor((Math.random() * dimensions.width) / width),
			Math.floor((Math.random() * dimensions.height) / height),
		];
	}

	// Adjust the generateSquares function to return objects with an id, x, and y
	function generateSquares(count: number) {
		return Array.from({ length: count }, (_, i) => ({
			id: i,
			pos: getPos(),
		}));
	}

	// Function to update a single square's position
	const updateSquarePosition = (id: number) => {
		setSquares((currentSquares) =>
			currentSquares.map((sq) =>
				sq.id === id
					? {
							...sq,
							pos: getPos(),
						}
					: sq,
			),
		);
	};

	// Update squares to animate in
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (dimensions.width && dimensions.height) {
			setSquares(generateSquares(numSquares));
		}
	}, [dimensions, numSquares]);

	// Resize observer to update container dimensions
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const resizeObserver = new ResizeObserver((entries) => {
			for (const entry of entries) {
				setDimensions({
					width: entry.contentRect.width,
					height: entry.contentRect.height,
				});
			}
		});

		if (containerRef.current) {
			resizeObserver.observe(containerRef.current);
		}

		return () => {
			if (containerRef.current) {
				resizeObserver.unobserve(containerRef.current);
			}
		};
	}, [containerRef]);

	return (
		<svg
			ref={containerRef}
			aria-hidden="true"
			className={cn(
				"absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
				"pointer-events-none",
				className,
			)}
			{...props}
		>
			<defs>
				<pattern
					id={id}
					width={width}
					height={height}
					patternUnits="userSpaceOnUse"
					x={x}
					y={y}
				>
					<path
						d={`M.5 ${height}V.5H${width}`}
						fill="none"
						strokeDasharray={strokeDasharray}
					/>
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill={`url(#${id})`} />
			{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
			<svg x={x} y={y} className="overflow-visible">
				{Array.from({ length: horizontal * vertical }).map((_, index) => {
					const x = (index % horizontal) * width;
					const y = Math.floor(index / horizontal) * height;
					return (
						<rect
							key={`rect-${index}-${x}-${y}`}
							x={x}
							y={y}
							width={width}
							height={height}
							className={cn(
								"stroke-gray-400/0 transition-all duration-100 ease-in-out [&:not(:hover)]:duration-1000",
								hoveredSquare === index
									? "fill-gray-300/30"
									: "fill-transparent",
								"pointer-events-auto",
								squaresClassName,
							)}
							onMouseEnter={() => setHoveredSquare(index)}
							onMouseLeave={() => setHoveredSquare(null)}
						/>
					);
				})}

				{squares.map(({ pos: [x, y], id }, index) => (
					<motion.rect
						initial={{ opacity: 0 }}
						animate={{ opacity: maxOpacity }}
						transition={{
							duration,
							repeat: 1,
							delay: index * 0.1,
							repeatType: "reverse",
						}}
						onAnimationComplete={() => updateSquarePosition(id)}
						key={`animated-rect-${index}-${x}-${y}`}
						width={width - 1}
						height={height - 1}
						x={x * width + 1}
						y={y * height + 1}
						fill="currentColor"
						strokeWidth="0"
					/>
				))}
			</svg>
		</svg>
	);
}
