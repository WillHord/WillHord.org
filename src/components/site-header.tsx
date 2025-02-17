"use client";

import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteHeader() {
	const pathname = usePathname();

	console.log("pathname", pathname);
	return (
		<header
			className={`top-0 z-50 w-full  ${pathname === "/" ? "absolute bg-transparent" : "border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 relative"} pointer-events-auto `}
		>
			<div className="container flex h-14 max-w-screen-2xl items-center">
				<MainNav />
				<MobileNav />
				<div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
					<nav className="flex items-center">
						<Link
							href={siteConfig.links.github}
							target="_blank"
							rel="noreferrer"
						>
							<div
								className={cn(
									buttonVariants({
										variant: "ghost",
									}),
									"w-9 px-0",
								)}
							>
								<Icons.gitHub className="h-4 w-4" />
								<span className="sr-only">GitHub</span>
							</div>
						</Link>
						<Link
							href={siteConfig.links.linkedin}
							target="_blank"
							rel="noreferrer"
						>
							<div
								className={cn(
									buttonVariants({
										variant: "ghost",
									}),
									"w-9 px-0",
								)}
							>
								<Icons.linkedin className="h-4 w-4" />
								<span className="sr-only">Linkedin</span>
							</div>
						</Link>
						{/* <ModeToggle /> */}
					</nav>
				</div>
			</div>
		</header>
	);
}

