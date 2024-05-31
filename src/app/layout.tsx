import { type Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";

import { ThemeProvider } from "@/components/providers";
import { ThemeSwitcher } from "@/components/theme-switcher";

import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/site-header";

import "@/styles/globals.css";

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
