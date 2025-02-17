import { ThemeProvider } from "@/components/providers";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.css";

const variants = {
	hidden: { opacity: 0, x: -200, y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	metadataBase: new URL(siteConfig.url),
	description: siteConfig.description,
	keywords: [
		"Will Hord",
		"Software Eningeer",
		"Machine Learning Engineer",
		"New York",
	],
	authors: [
		{
			name: "Will Hord",
			url: "https://willhord.dev",
		},
	],
	creator: "Will Hord",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
	},
	icons: {
		icon: "/icon.png",
		shortcut: "/icon.png",
		apple: "/icon.png",
	},
	manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head />
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<div vaul-drawer-wrapper="">
						<div className="relative flex min-h-screen flex-col bg-background">
							{children}
						</div>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
