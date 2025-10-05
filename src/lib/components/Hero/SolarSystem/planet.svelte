<script lang="ts">
import { T, useTask } from "@threlte/core";
import { useTexture } from "@threlte/extras";
import { Mesh } from "three";

const {
	color,
	radius,
	texture,
	speed = 1,
}: {
	color: string;
	speed?: number;
	radius: number;
	texture?: string;
} = $props();

let ref = $state<Mesh>();

useTask(() => {
	if (ref) {
		ref.rotateY(0.01 * speed);
	}
});
</script>

<T.Mesh bind:ref>
  <T.SphereGeometry args={[radius, 32, 32]} />
  {#if texture}
    {#await useTexture(texture) then map}
      <T.MeshStandardMaterial {map}  />
    {/await}
  {:else}
      <T.MeshStandardMaterial  { color } />
  {/if}
</T.Mesh>
