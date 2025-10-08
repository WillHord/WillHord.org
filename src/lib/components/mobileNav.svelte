<script lang="ts">
import * as Sheet from "$lib/components/ui/sheet/index.js";
import { cn } from "$lib/utils";

let { pathname } = $props();

// TODO: add link icons
</script>
<Sheet.Root >
<Sheet.Trigger class="flex md:hidden">
  <div class="w-8 h-8"><svg
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="h-5 w-5"
  >
    <path
      d="M3 5H11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M3 12H16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M3 19H21"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg></div>
  </Sheet.Trigger>
<Sheet.Content side="left" class="w-[240px]">
  <Sheet.Header>
    <Sheet.Title>
  <a href="/" class="mr-6 flex items-center font-thin text-2xl space-x-2 font-potra">
              Will Hord
  </a>
</Sheet.Title>
    <Sheet.Description>
  <nav class="flex flex-col items-start gap-4 text-xl lg:gap-6">
    <a
      href="/"
      class={cn(
        "transition-colors hover:text-foreground/80",
        pathname === "/" ? "text-foreground" : "text-foreground/60",
      )}
    >
      Home
    </a>
    <a
      href="/resume"
      class={cn(
        "transition-colors hover:text-foreground/80",
        pathname?.startsWith("/resume")
          ? "text-foreground"
          : "text-foreground/60",
      )}
    >
      Resume
    </a>
    <a
      href="/projects"
      class={cn(
        "transition-colors hover:text-foreground/80",
        pathname?.startsWith("/projects")
          ? "text-foreground"
          : "text-foreground/60",
      )}
    >
      Projects
    </a>

    <a
      target="_blank"
      rel="noreferrer"
      href="mailto:contactwillhord@gmail.com"
      class={cn(
        "text-foreground/60 transition-colors hover:text-foreground/80 ",
      )}
    >
      Contact
    </a>
          </nav>
    </Sheet.Description>
  </Sheet.Header>
</Sheet.Content>
</Sheet.Root>
