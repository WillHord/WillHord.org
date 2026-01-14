<script lang="ts">
import { Sequence } from "@threlte/theatre";
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

