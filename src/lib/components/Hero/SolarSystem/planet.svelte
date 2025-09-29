<script lang="ts">
import { T, useLoader, useTask } from "@threlte/core";
import { Mesh, TextureLoader } from "three";
import { useTexture } from "@threlte/extras";

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
const { load } = useLoader(TextureLoader);

useTask(() => {
	if (ref) {
		ref.rotateY(0.01 * speed);
	}
});
</script>

<T.Mesh bind:ref>
  <T.SphereGeometry args={[radius, 32, 32]} />
  {#if texture}
    {#await load(texture) then map}
      <T.MeshStandardMaterial {map}  />
    {/await}
  {:else}
      <T.MeshStandardMaterial  { color } />
  {/if}
</T.Mesh>
