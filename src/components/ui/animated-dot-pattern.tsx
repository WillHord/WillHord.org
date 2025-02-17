import React, { useId, useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedDotPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  cx?: number;
  cy?: number;
  cr?: number;
  className?: string;
  waveAmplitude?: number;
  waveSpeed?: number;
  opacityVariation?: number;
  [key: string]: unknown;
}

export function AnimatedDotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  waveAmplitude = 2,
  waveSpeed = 1,
  opacityVariation = 0.6, // Controls the range of opacity variation
  ...props
}: AnimatedDotPatternProps) {
  const id = useId();
  const [time, setTime] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Pre-generate random opacity and phase for each dot
  const [dotStyles, setDotStyles] = useState<{opacity: number, phase: number}[][]>([]);

  useEffect(() => {
    // Measure initial size
    const measureSize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    // Initial measurement and dot style generation
    measureSize();
    generateDotStyles();

    // Resize observer
    const resizeObserver = new ResizeObserver(measureSize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Animation loop
    const animationLoop = requestAnimationFrame(() => {
      setTime(prevTime => prevTime + 0.05);
    });

    return () => {
      cancelAnimationFrame(animationLoop);
      resizeObserver.disconnect();
    };
  }, []);

  // Generate consistent random styles for dots
  const generateDotStyles = () => {
    // Calculate number of dots
    const colCount = Math.ceil(window.innerWidth / width) + 2;
    const rowCount = Math.ceil(window.innerHeight / height) + 2;

    const styles = Array.from({ length: rowCount }, () => 
      Array.from({ length: colCount }, () => ({
        // Random base opacity
        opacity: Math.random() * opacityVariation + (1 - opacityVariation),
        // Random phase for independent opacity oscillation
        phase: Math.random() * Math.PI * 2
      }))
    );

    setDotStyles(styles);
  };

  // Use time in useEffect to trigger re-renders
  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      setTime(prevTime => prevTime + 0.05);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [time]);

  // Calculate number of dots needed to cover the component
  const colCount = Math.ceil(dimensions.width / width) + 2;
  const rowCount = Math.ceil(dimensions.height / height) + 2;

  return (
    <div ref={containerRef} className="absolute inset-0">
      <svg
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 h-full w-full",
          className
        )}
        width="100%"
        height="100%"
        {...props}
      >
        {dimensions.width > 0 && dimensions.height > 0 && dotStyles.length > 0 && (
          <>
            <defs>
              <pattern
                id={id}
                width="100%"
                height="100%"
                patternUnits="userSpaceOnUse"
                x={x}
                y={y}
              >
                <g>
                  {[...Array(rowCount)].map((_, rowIndex) => 
                    [...Array(colCount)].map((_, colIndex) => {
                      // Wave offset calculation
                      const waveOffset = Math.sin(
                        time * waveSpeed + 
                        ((rowIndex + colIndex) / (colCount + rowCount)) * Math.PI * 2
                      ) * waveAmplitude;

                      // Random opacity calculation
                      const dotStyle = dotStyles[rowIndex]?.[colIndex] || { opacity: 1, phase: 0 };
                      const dynamicOpacity = dotStyle.opacity * (
                        0.5 + 0.5 * Math.sin(time + dotStyle.phase)
                      );

                      return (
                        <circle 
                          key={`dot-${rowIndex}-${colIndex}`}
                          cx={colIndex * width + cx}
                          cy={rowIndex * height + cy + waveOffset}
                          r={cr}
                          className="fill-neutral-400"
                          opacity={dynamicOpacity}
                        />
                      );
                    })
                  )}
                </g>
              </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
          </>
        )}
      </svg>
    </div>
  );
}