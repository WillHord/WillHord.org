<script lang="ts">
import { T, useTask } from "@threlte/core";
import type { Snippet } from "svelte";
import type { Group } from "three";
import Orbit from "./orbit.svelte";

const {
	children,
	speed = 1,
	distance = 0,
	orbit = true,
}: {
	speed?: number;
	distance?: number;
	orbit?: boolean;
	children: Snippet<[{ ref?: Group }]>;
} = $props();

let ref = $state<Group>();

useTask(() => {
	if (ref) {
		ref.rotateY(0.001 * speed);
	}
});
</script>

<T.Group bind:ref>
  {#if orbit}
    <Orbit { distance } />
  {/if}
  <T.Group position={[distance, 0, 0]} rotation={[0, Math.random() * Math.PI * 2, 0]}>
    {@render children?.({ref})}
  </T.Group>

</T.Group>
