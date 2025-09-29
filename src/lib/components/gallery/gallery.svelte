<script lang="ts">
import type { Project } from "$lib/types/projects";
import { animate, stagger } from "animejs";
import { onDestroy, onMount } from "svelte";
import ProjectCard from "./projectCard.svelte";

const { projects }: { projects: Project[] } = $props();

let columns = $state(4);
let rows = $state(4);
let galleryRef = $state(null);

const max = $derived(projects.length);

const updateColumns = () => {
	if (galleryRef?.current) {
		const containerWidth = galleryRef.current["offsetWidth"];
		const itemWidth = 210;
		columns = Math.floor(containerWidth / itemWidth);
		rows = projects.length / columns;
	}
};

onMount(() => {
	window.addEventListener("resize", updateColumns);
	// console.log("PATH: ", page.route);
	animate(".gallery-item", {
		opacity: [0, 1],
		translateY: [60, 0],
		scale: [0.8, 1],
		duration: 500,
		easing: "outQuart",
		delay: stagger(200, {
			grid: [columns, rows],
			from: "first",
		}),
	});
});

onDestroy(() => {
	window.removeEventListener("resize", updateColumns);
});

const displayedProjects = $derived(
	projects
		.filter((item) => item.displayed)
		.slice(0, max)
		.sort((a, b) => a.weight - b.weight),
);
</script>



<div class="w-full h-full flex justify-center items-center">

<div
  bind:this={galleryRef}
  class="flex flex-wrap justify-center items-center gap-1 w-full max-w-[1000px]"
>
  {#each displayedProjects as project }
    <ProjectCard
      project={project}
      class="gallery-item"
    />
  {/each}
</div></div>
