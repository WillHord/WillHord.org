<script lang="ts">
import { Sequence, createSheetObjectAction } from "@threlte/theatre";
import FadeOut from "../FadeOut.svelte";
import { springScrollPos } from "../scrollPos";
import TheatreTextBox from "./TheatreTextBox.svelte";
</script>

<Sequence autoplay />

<FadeOut progress={$springScrollPos} from={0.3} to={0.6}>
  <div
    class="fixed left-0 top-0 mt-[18vh] flex w-screen flex-col items-center justify-center gap-12 px-8 sm:mt-[25vh] md:mt-[30vh] z-10"
    style="transform: translateY({$springScrollPos * -50}px) "
  >
    <div>
      <TheatreTextBox key="statement">
        <h1 class="w-full text-center text-9xl text-white/90 font-potra">
          Will Hord
        </h1>
      </TheatreTextBox>
    </div>

  </div>
</FadeOut>

<style>
  @keyframes custom-pulse {
    50% {
      opacity: 0;
    }
  }
  .pulse-1 {
    animation: custom-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  .pulse-2 {
    animation: custom-pulse 2s 0.3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  .pulse-3 {
    animation: custom-pulse 2s 0.6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
</style>
