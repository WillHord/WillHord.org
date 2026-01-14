<script lang="ts">
import { useThrelte } from "@threlte/core";
import { SheetObject } from "@threlte/theatre";
import type { Mesh } from "three";
import Scene from "./Scene.svelte";
import ScrollSheet from "./ScrollSheet.svelte";

type CubeGltf = {
	nodes: {
		Cube: Mesh;
	};
	materials: {};
};

const { scene } = useThrelte();
</script>

<ScrollSheet
  name="Environment"
  startAtScrollPosition={0}
  endAtScrollPosition={5}
  useSpring
>
  <SheetObject
    key="Settings"
    props={{
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
    }}
    onchange={(values) => {
      scene.environmentRotation.x = values.rotation.x;
      scene.environmentRotation.y = values.rotation.y;
      scene.environmentRotation.z = values.rotation.z;
    }}
  />
</ScrollSheet>

<Scene />
