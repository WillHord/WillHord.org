<script lang="ts">
import { Canvas } from "@threlte/core";
import { Sheet, Theatre } from "@threlte/theatre";
import { onMount } from "svelte";
import { NoToneMapping, WebGLRenderer } from "three";
import App from "./App.svelte";
import FadeOut from "./FadeOut.svelte";
import Intro from "./Intro/Intro.svelte";
import Reveal from "./Reveal.svelte";
import TextEffect from "./TextEffect.svelte";
import Trigger from "./Trigger.svelte";
import {
	_springScrollPos,
	mouseCoords,
	mouseCoordsSpring,
	scrollPos,
	springScrollPos,
} from "./scrollPos";
// import { debug } from './state'
import state from "./state.json";

const onScroll = () => {
	// get normalized scroll position in document. 0 should equal top of page, 1
	// should equal 1 page height from top, 2 should equal 2 page heights from
	// top, etc. This allows easier addition of content to the bottom as opposed
	// to a normalized scroll position where 1 is the bottom of the page.
	const newScrollPos = Math.max(window.scrollY / window.innerHeight, 0);
	scrollPos.set(newScrollPos);
	_springScrollPos.set(newScrollPos);
};

onMount(() => {
	const newScrollPos = Math.max(window.scrollY / window.innerHeight, 0);
	scrollPos.set(newScrollPos);
	_springScrollPos.set(newScrollPos, {
		hard: true,
	});
});

const onKeyDown = (_e: KeyboardEvent) => {
	// if (e.key === 'd') debug.set(!debug.current)
};

const onMouseMove = (e: MouseEvent) => {
	// get normalized mouse coords
	const x = e.clientX / window.innerWidth;
	const y = e.clientY / window.innerHeight;
	mouseCoords.set({ x, y });
	mouseCoordsSpring.set({ x, y });
};
</script>

<svelte:window
  onscroll={onScroll}
  onkeydown={onKeyDown}
  onmousemove={onMouseMove}
/>

<div class="pointer-events-none relative -z-20 h-[300vh] bg-black">
  <Theatre config={{ state: state }} studio={{ enabled: true }}>
    <div class="fixed left-0 top-0 z-10 h-[100lvh] w-screen">
      <Canvas
        toneMapping={NoToneMapping}
        createRenderer={(canvas: HTMLCanvasElement) => {
          return new WebGLRenderer({
            canvas,
            alpha: true,
            powerPreference: "high-performance",
            antialias: false,
            stencil: false,
            depth: true,
            premultipliedAlpha: true,
          });
        }}
      >
        <App />
      </Canvas>
    </div>

    <div class="pointer-events-auto contents">
      <Sheet name="Intro">
        <Intro />
      </Sheet>
    </div>

  </Theatre>
</div>
