import type { MainNavItem, SidebarNavItem } from "@/types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Resume",
      href: "/resume",
    },
    {
      title: "Projects",
      href: "/themes",
    },
  ],
  sidebarNav: [],
}
