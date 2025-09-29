<script>
import { onMount } from "svelte";
import { animate, stagger } from "animejs";

// Sample gallery data - replace with your actual data
let galleryItems = [
	{ id: 1, title: "Image 1", color: "#ff6b6b" },
	{ id: 2, title: "Image 2", color: "#4ecdc4" },
	{ id: 3, title: "Image 3", color: "#45b7d1" },
	{ id: 4, title: "Image 4", color: "#96ceb4" },
	{ id: 5, title: "Image 5", color: "#ffeaa7" },
	{ id: 6, title: "Image 6", color: "#dda0dd" },
	{ id: 7, title: "Image 7", color: "#98d8c8" },
	{ id: 8, title: "Image 8", color: "#f7dc6f" },
	{ id: 9, title: "Image 9", color: "#bb8fce" },
];

let galleryRef;

onMount(() => {
	// Set initial state - all items invisible
	// animate(".gallery-item", {
	// 	opacity: 0,
	// 	translateY: 60,
	// 	scale: 0.8,
	// 	duration: 0,
	// });

	// Create the staggered animation
	animate(".gallery-item", {
		opacity: [0, 1],
		// translateY: [60, 0],
		// scale: [0.8, 1],
		duration: 500,
		easing: "outQuart",
		delay: stagger(200, {
			grid: [3, 3], // Adjust based on your grid columns/rows
			from: "first", // Start from top-left
		}),
	});
});

// Function to restart animation (optional)
function restartAnimation() {
	animate(".gallery-item", {
		opacity: [1, 0],
		// translateY: [0, -60],
		// scale: [1, 0.8],
		duration: 800,
		easing: "inQuart",
		complete: () => {
			animate(".gallery-item", {
				opacity: [0, 1],
				// translateY: [60, 0],
				// scale: [0.8, 1],
				duration: 500,
				easing: "outQuart",
				delay: stagger(200, {
					grid: [3, 3],
					from: "first",
				}),
			});
		},
	});
}
</script>

<div class="max-w-6xl mx-auto p-5">
  <h1 class="text-3xl font-bold text-center mb-5 text-gray-800">Gallery Grid Animation</h1>
  
  <button 
    on:click={restartAnimation} 
    class="block mx-auto mb-8 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white border-0 rounded-lg cursor-pointer text-base transition-colors duration-300"
  >
    Restart Animation
  </button>

  <div class="grid grid-cols-3 gap-5 max-w-4xl mx-auto" bind:this={galleryRef}>
    {#each galleryItems as item (item.id)}
      <div 
        class="gallery-item aspect-square rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer opacity-0" 
        style="background-color: {item.color}"
      >
        <div class="text-center">
          <h3 class="m-0 text-white text-xl font-semibold drop-shadow-sm">{item.title}</h3>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  /* Responsive grid adjustments for mobile */
  @media (max-width: 768px) {
    .grid-cols-3 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 480px) {
    .grid-cols-3 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }
</style>
