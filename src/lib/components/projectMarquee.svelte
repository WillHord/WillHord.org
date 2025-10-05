<script lang="ts">
import ProjectCard from "$lib/components/gallery/projectCard.svelte";
import Marquee from "$lib/components/ui/marquee.svelte";

import { projectData } from "$lib/projectData";

const firstRow = projectData.slice(0, projectData.length / 2);
const secondRow = projectData.slice(projectData.length / 2);
</script>

<div
  class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-20 md:shadow-xl"
>
  <Marquee pauseOnHover class="[--duration:20s]">
    {#each firstRow as project}
      <a href={ `/projects#${encodeURIComponent(project.name.trim().toLowerCase().replaceAll(' ', '_'))}` }>
      <ProjectCard {project} />
  </a>
    {/each}
  </Marquee>
  <Marquee reverse pauseOnHover class="[--duration:20s]">
    {#each secondRow as project}
      <a href={ `/projects#${encodeURIComponent(project.name.trim().toLowerCase().replaceAll(' ', '_'))}` }>
      <ProjectCard {project} />
      </a>
    {/each}
  </Marquee>
  <div
    class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"
  ></div>
  <div
    class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"
  ></div>
</div>



