<script lang="ts">
  import { T } from "@threlte/core";
  import { SheetObject } from "@threlte/theatre";
  import KeyboardControls from "./KeyboardControls.svelte";

  interface Props {
    key: string;
  }

  let { key }: Props = $props();

  import { onMount } from "svelte";

  let sphereMesh;
  let ringMesh;

  onMount(() => {
    if (sphereMesh) {
      console.log("Sphere material:", sphereMesh.material);
      console.log("Sphere opacity:", sphereMesh.material.opacity);
      console.log("Sphere transparent:", sphereMesh.material.transparent);
    }
  });
</script>

<SheetObject {key}>
  {#snippet children({ Transform, Sync, Declare })}
    <KeyboardControls>
      {#snippet children({ transform })}
        <Transform {...transform}>
          <!-- <T.DirectionalLight position={[0, 10, 10]} /> -->

          <T.Group>
            <T.Mesh
              bind:ref={sphereMesh}
              rotation.y={0}
              position.y={1}
              scale={1}
              opacity={1}
            >
              <T.SphereGeometry args={[3, 50, 50]} />
              <!-- <T.BoxGeometry args={[1, 2, 1]} /> -->
              <T.MeshStandardMaterial color="orange" />
            </T.Mesh>

            <T.Mesh rotation.y={0} position.y={1} rotation.x={90} scale={1}>
              <T.RingGeometry args={[4, 5, 50, 50]} />
              <T.MeshStandardMaterial
                color="brown"
                opacity={1}
                transparent={false}
                side={2}
              />
            </T.Mesh>
          </T.Group>
        </Transform>
      {/snippet}
    </KeyboardControls>
  {/snippet}
</SheetObject>
