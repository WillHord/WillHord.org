<script lang="ts">
import type { ISheet } from "@theatre/core";
import { T, useThrelte } from "@threlte/core";
import {
	Grid,
	interactivity,
	OrbitControls,
	Portal,
	Stars,
} from "@threlte/extras";
import { Sequence, SheetObject } from "@threlte/theatre";
import { onMount } from "svelte";
// import AnimatableCube from './AnimatableCube.svelte'
import KeyboardControls from "./KeyboardControls.svelte";
import { mouseCoordsSpring, springScrollPos } from "./scrollPos";
import ScrollSheet from "./ScrollSheet.svelte";

import Planet from "./SolarSystem/planet.svelte";
import Sun from "./SolarSystem/sun.svelte";
import System from "./SolarSystem/system.svelte";

// import { debug } from "./state";

let debug = true;
let camera_debug: boolean = false;

interactivity();

let sheet = $state<ISheet>();

$effect(() => {
	if (sheet) {
		sheet.sequence.position = $springScrollPos * 10;
	}
});

const { scene } = useThrelte();

let fov = $state(40);
onMount(() => {
	if (window.innerWidth > 640) {
		fov = 35;
	}
});
</script>

<svelte:window
  onresize={() => {
    if (window.innerWidth > 640) {
      fov = 35;
    } else {
      fov = 40;
    }
  }}
/>

<T.PerspectiveCamera
  makeDefault={camera_debug}
  oncreate={(ref) => {
    ref.position.set(10, 10, 10);
    ref.lookAt(0, 0, 0);
  }}
>
  {#if debug}
    <OrbitControls />
  {/if}
</T.PerspectiveCamera>

<ScrollSheet name="Scene" startAtScrollPosition={0} endAtScrollPosition={3}>
  <SheetObject key="Camera">
    {#snippet children({ Transform })}
      <KeyboardControls>
        {#snippet children({ transform })}
          <Transform {...transform}>
            <T.PerspectiveCamera {fov} makeDefault={!camera_debug}>
              {#snippet children({ ref: camera })}
                {#if camera_debug}
                  <Portal object={scene}>
                    <T.CameraHelper args={[camera]} />
                  </Portal>
                {/if}
              {/snippet}
            </T.PerspectiveCamera>
          </Transform>
        {/snippet}
      </KeyboardControls>
    {/snippet}
  </SheetObject>
</ScrollSheet>

{#if debug}
  <Grid />
{/if}

<SheetObject key="Ambient Light">
  {#snippet children({ Sync })}
    <T.AmbientLight>
      <Sync intensity color />
    </T.AmbientLight>
  {/snippet}
</SheetObject>

<!-- <SheetObject key="Directional Light"> -->
<!--   {#snippet children({ Sync })} -->
<!--     <T.DirectionalLight position={[0, 0, 10]}> -->
<!--       <Sync intensity color position /> -->
<!--     </T.DirectionalLight> -->
<!--   {/snippet} -->
<!-- </SheetObject> -->

<Sequence autoplay>

  <SheetObject key="sun">
    {#snippet children({ Transform })}
      <Transform>
        <Sun />
      </Transform>
    {/snippet}

  </SheetObject>



<SheetObject key="mars">
  {#snippet children({ Sync, Transform })}
    <Transform>

    <System
      distance={6.5}
      speed={1}
      orbit={true}
    >
      {#snippet children()}
        <Planet
          radius={1}
          color={"#0000ff"}
          texture={"/texture/mars_texture.jpg"}
        />
      {/snippet}
    </System>
    </Transform>
  {/snippet}
</SheetObject>

  <SheetObject key="earth">
    {#snippet children({Transform})}
      <Transform>
        <System distance={10}>
          {#snippet children()}
            <Planet
              radius={0.8}
              color={"#00ff00"}
              speed={1}
              texture={"/texture/earth_texture.jpg"}
            />
            <System distance={1.75} speed={15}>
              {#snippet children()}
                <Planet
                  radius={0.3}
                  color="red"
                  texture={"/texture/moon_texture.jpg"}
                />
              {/snippet}
            </System>
          {/snippet}
        </System>
      </Transform>
    {/snippet}
  </SheetObject>

  <SheetObject key="jupiter">
    {#snippet children({ Transform })}
      <Transform>
        <System distance={14} speed={2}>
          {#snippet children()}
            <Planet
              radius={1}
              color="yellow"
              texture={"/texture/jupiter_texture.jpg"}
            />
          {/snippet}
        </System>
      </Transform>
    {/snippet}
  </SheetObject>

</Sequence>




<!-- <Sequence autoplay> -->
<!--   <SheetObject key="composite"> -->
<!--     {#snippet children({ Transform })} -->
<!--       <Transform> -->
<!--         <T.Group -->
<!--           position.x={-$mouseCoordsSpring.x * 0.2} -->
<!--           position.y={$mouseCoordsSpring.y * 0.1} -->
<!--         > -->
<!--           <ScrollSheet -->
<!--             name="Threlte-Composite" -->
<!--             startAtScrollPosition={0} -->
<!--             endAtScrollPosition={3} -->
<!--           > -->
<!--             <SheetObject -->
<!--               key="Composite" -->
<!--               props={{ -->
<!--                 position: { -->
<!--                   x: 0, -->
<!--                   y: -25, -->
<!--                   z: 0, -->
<!--                 }, -->
<!--                 floatIntensity: 1, -->
<!--                 rotationIntensity: 1, -->
<!--                 rotationSpeed: 1, -->
<!--                 floatSpeed: 1, -->
<!--                 opacity: 1, -->
<!--               }} -->
<!--             > -->
<!--               {#snippet children({ Transform, values })} -->
<!--                 <Float -->
<!--                   floatIntensity={values.floatIntensity} -->
<!--                   rotationIntensity={values.rotationIntensity} -->
<!--                   rotationSpeed={values.rotationSpeed} -->
<!--                   speed={values.floatSpeed} -->
<!--                   opacity={values.opacity} -->
<!--                 > -->
<!--                   <KeyboardControls> -->
<!--                     {#snippet children({ transform })} -->
<!--                       <Transform {...transform}> -->
<!--                         <AnimatablePlanet key="exoplanet" /> -->
<!--                       </Transform> -->
<!--                     {/snippet} -->
<!--                   </KeyboardControls> -->
<!--                 </Float> -->
<!--               {/snippet} -->
<!--             </SheetObject> -->
<!--           </ScrollSheet> -->
<!--         </T.Group> -->
<!--       </Transform> -->
<!--     {/snippet} -->
<!--   </SheetObject> -->
<!-- </Sequence> -->

<T.Group position.x={-$mouseCoordsSpring.x * 0.6}>
  <ScrollSheet
    name="Star Fields"
    startAtScrollPosition={4}
    endAtScrollPosition={5}
  >
    <Stars />
    <!-- <AnimatableStarField key="Star Field" /> -->
    <!-- <AnimatableStarField key="Star Field Top" /> -->
  </ScrollSheet>
</T.Group>
