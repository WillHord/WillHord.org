<script lang="ts">
import { T, useLoader, useTask } from "@threlte/core";
import { Group, Mesh, TextureLoader } from "three";

const {
	color = "white",
	intensity = 1,
	texture,
}: {
	color?: string;
	intensity?: number;
	texture?: any;
} = $props();

let ref = $state<Group>();
const { load } = useLoader(TextureLoader);

useTask(() => {
	if (ref) {
		ref.rotateY(0.001 * 1);
	}
});
</script>

<T.Group bind:ref >
  <T.PointLight position={[0, 0, 0]} color={color} intensity={Math.PI * 100 * intensity} />
  <T.Mesh >
    <T.SphereGeometry args={[2.5, 32, 32]} />
    {#await load(texture || "/texture/sun_texture.jpg") then map }
      <T.MeshBasicMaterial {map} color={texture ? undefined : color} />
    {/await}
  </T.Mesh>
</T.Group>
