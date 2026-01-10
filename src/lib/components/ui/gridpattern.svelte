<script lang="ts">
import { cn } from "$lib/utils";
import { createTimeline, utils } from "animejs";
import _ from "lodash";
import type { SVGAttributes } from "svelte/elements";

// TODO: clean up props
let {
	width = 40,
	height = 40,
	x = -1,
	y = -1,
	strokeDashArray = "",
	squares = [[0, 0]],
	class: className,
	fillColor = "rgb(156 163 175 / 0.3",
	strokeWidth = 1,
	...rest
}: {
	width: number;
	height: number;
	x: number;
	y: number;
	strokeDashArray: string;
	squares: Array<[x: number, y: number]>;
	fillColor: string;
	strokeWidth: number;
} & SVGAttributes<SVGSVGElement> = $props();

let id = crypto.randomUUID().toString().slice(0, 8);

const endFillColor = "#99a1af";

let svgElement: SVGSVGElement;

function animateRandomSquare() {
	if (!svgElement) return;

	// Use querySelectorAll on the SVG to get all targets
	const targets = svgElement.querySelectorAll(".animated-square");

	if (targets.length === 0) {
		console.warn(
			"Anime.js targets not found. Check the '.anime-target' class.",
		);
		return;
	}

	function animateSquares(squares: Element[], last: boolean = false) {
		createTimeline({
			defaults: {
				ease: "inOutSine",
			},
		}).add(
			squares,
			{
				transitionDuration: utils.random(1000, 5000),
				duration: utils.random(1000, 4000),
				onBegin: (timeline) => {
					timeline.targets.forEach((a) => {
						a.classList.add("!fill-gray-400");
					});
				},
				onComplete: (timeline) => {
					timeline.targets.forEach((a) => {
						a.classList.remove("!fill-gray-400");
					});
					timeline.revert();
					if (last)
						setTimeout(animateRandomSquare, Math.random() * 1500 + 1000);
				},
			},
			utils.random(100, 1500),
		);
	}

	const numChunks = 2;
	const randomTargets = _.chunk(
		_.sampleSize(targets, utils.random(10, 30)),
		numChunks,
	);

	randomTargets.forEach((targets, index) => {
		animateSquares(targets, index === numChunks - 1);
	});
}

$effect(() => {
	if (svgElement) {
		animateRandomSquare();
	}
});
</script>

<svg
  bind:this={svgElement}
  aria-hidden="true"
  class={cn(
    "absolute inset-0 h-full w-full",
    className
  )}
  {...rest}
  stroke={fillColor}
  stroke-width={strokeWidth}
>
  <defs>
    <pattern {id} {width} {height} patternUnits="userSpaceOnUse" {x} {y}>
      <path
        d="M.5 {height}V.5H{width}"
        fill="none"
        stroke-dasharray={strokeDashArray}
      />
    </pattern>
  </defs>
  <rect width="100%" height="100%" stroke-width={0} fill="url(#{id})" />

          <svg {x} {y} class="overflow-visible">
            {#each {length: width}, w}
              {#each {length: height}, h}
                <g 
                  class="group transition-transform" 
                  style="pointer-events: all;" 
                  transform={`translate(${w * width + 1}, ${h * height + 1})`}
                >
                  <rect
                    stroke-width="0"
                    width={width - 1}
                    height={height - 1}
                    x={0} 
                    y={0}
                    stroke={fillColor}
                    class={cn(
                      "group-hover:fill-gray-400 transition-all duration-100 ease-in-out [&:not(:hover)]:duration-1000",
                      "fill-gray-400/0",
                      "animated-square"
                    )}
                  />
                </g>
              {/each}
            {/each}
          </svg>
</svg>
