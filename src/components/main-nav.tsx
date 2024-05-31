"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";

export function MainNav() {
	const pathname = usePathname();

	return (
		<div className="mr-4 hidden md:flex">
			<Link href="/" className="mr-6 flex items-center space-x-2">
				{/* <Icons.logo className="h-6 w-6" /> */}
				{pathname !== "/" && (
					<span className="hidden font-bold sm:inline-block">
						{siteConfig.name}
					</span>
				)}
			</Link>
			<nav className="flex items-center gap-4 text-sm lg:gap-6">
				<Link
					href="/"
					className={cn(
						"transition-colors hover:text-foreground/80",
						pathname === "/" ? "text-foreground" : "text-foreground/60",
					)}
				>
					Home
				</Link>
				<Link
					href="/resume"
					className={cn(
						"transition-colors hover:text-foreground/80",
						pathname?.startsWith("/resume")
							? "text-foreground"
							: "text-foreground/60",
					)}
				>
					Resume
				</Link>
				<Link
					href="/projects"
					className={cn(
						"transition-colors hover:text-foreground/80",
						pathname?.startsWith("/projects")
							? "text-foreground"
							: "text-foreground/60",
					)}
				>
					Projects
				</Link>

				<a
					target="_blank"
					rel="noreferrer"
					href="mailto:contactwillhord@gmail.com"
					className={cn(
						"hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block",
					)}
				>
					Contact
				</a>
			</nav>
		</div>
	);
}
