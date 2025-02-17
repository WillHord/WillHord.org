"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function AnimatedLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	return (
		<motion.div
			key={pathname}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ ease: "easeInOut", duration: 0.75 }}
		>
			{children}
		</motion.div>
	);
}

// <AnimatePresence
// 	mode="wait"
// 	initial={false}
// 	onExitComplete={() => window.scrollTo(0, 0)}
// >
