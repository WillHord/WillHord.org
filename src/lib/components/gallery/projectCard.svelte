<script lang="ts">
import type { HTMLAttributes } from "svelte/elements";
import * as Card from "$lib/components/ui/card/index.js";
import * as Dialog from "$lib/components/ui/dialog/index.js";
import { type Project } from "$lib/types/project";
import { cn, type WithElementRef } from "$lib/utils";

import { IconBrandGithub } from "@tabler/icons-svelte";

import { Button } from "$lib/components/ui/button/index";
import Badge from "../ui/badge/badge.svelte";

const {
	project,
	class: className,
	...rest
}: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
	project: Project;
} = $props();
</script>

<Dialog.Root>
  <Dialog.Trigger>
    <Card.Root 
      class={ cn( className, 
        `group/card aspect-square h-48 p-0 border-0 rounded-none cursor-pointer overflow-hidden`
      )} 
      {...rest}>
      <Card.Header class="absolute opacity-0 group-hover/card:opacity-100 transition-all duration-300 h-48 w-48 z-10 flex items-center justify-center">
        <div class="flex items-center justify-center">
          <Card.Title class="">{project.name}</Card.Title>
        </div>
      </Card.Header>
      <Card.Content class="p-0 w-full h-full flex justify-center items-center relative ">
        <img
          src={project.img.image.full_size}
          alt={project.name}
          class={cn( "object-cover w-full h-full transition-transform duration-300 group-hover/card:scale-110")}
        />
        <div class="absolute inset-0 bg-primary-foreground opacity-0 group-hover/card:opacity-60 transition-opacity duration-300"></div>
      </Card.Content>
    </Card.Root>
</Dialog.Trigger>
  <Dialog.Content showCloseButton={false} class="sm:max-w-[550px] max-h-[80vh] flex flex-col p-8">
    <Dialog.Header>
      <div class="aspect-video min-h-1/2 relative rounded-lg overflow-hidden">
        <img
          src={project.img.image.full_size}
          alt={project.name}
          class="object-contain"
        />
      </div>
      <Dialog.Title>{project.name}</Dialog.Title>
      <Dialog.Description> 
        <p class="text-md">{project.description}</p>
      </Dialog.Description>
    </Dialog.Header>
    <Dialog.Footer>
      <div class="w-full h-8 flex flex-row gap-3 items-center">
        {#each project.languages as language}
          <Badge>{language}</Badge>
        {/each}
      </div>
      <Button
        target="_blank"
        rel="noreferrer"
        href={project.link}
        class="flex items-center gap-1 cursor-pointer"
      >
        <IconBrandGithub size={16} />
        <span>Source</span>
      </Button>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog.Root>


