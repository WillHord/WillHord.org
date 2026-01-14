<script lang="ts">
import { T } from "@threlte/core";

const {
	distance,
	opacity = 0.3,
	transparent = true,
	color = "white",
}: {
	distance: number;
	opacity?: number;
	transparent?: boolean;
	color?: string;
} = $props();
</script>

<T.Mesh rotation={[-Math.PI / 2, 0, 0]}>
  <T.TorusGeometry args={ [distance, 0.02, 16, 100] } />
  <T.MeshBasicMaterial {color} {opacity} {transparent} />
</T.Mesh>
