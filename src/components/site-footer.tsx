"use client";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { Icons } from "@/components/icons";
import { Mail } from "lucide-react";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function SiteFooter() {
	const pathname = usePathname();

	return (
		<footer className="py-6 md:px-8 md:py-6">
			<div className="text-center flex flex-col gap-3">
				<nav className="flex flex-row text-center space-x-4 justify-center">
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
				<div className="flex flex-row items-center space-x-6 justify-center grow">
					<a
						href="https://www.linkedin.com/in/willhord/"
						className="text-white font-semibold hover:opacity-50 transition-opacity"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Icons.linkedin className="h-8 w-8" />
					</a>
					<a
						href="https://github.com/WillHord"
						className="text-white font-semibold hover:opacity-50 transition-opacity"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Icons.gitHub className="h-8 w-8" />
					</a>
					<a
						href="mailto:contactwillhord@gmail.com"
						className="text-white font-semibold hover:opacity-50 transition-opacity"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Mail size={40} />
					</a>
				</div>
				<div>
					<p className="text-balance text-center text-sm leading-loose text-muted-foreground">
						Built by Will Hord. The source code is available on{" "}
						<a
							href={siteConfig.links.site_repo}
							target="_blank"
							rel="noreferrer"
							className="font-medium underline underline-offset-4"
						>
							GitHub
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
}
