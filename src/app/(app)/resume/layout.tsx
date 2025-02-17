import { AnimatedInteractiveGridPattern } from "@/components/ui/animated-interactive-grid-pattern";
import { cn } from "@/lib/utils";

export default function Layout({ children }) {
	return (
		<div className="relative min-h-screen ">
			<div className="fixed inset-0 z-0 pointer-events-none">
				<AnimatedInteractiveGridPattern
					numSquares={60}
					duration={3}
					squaresClassName="stroke-1"
					className={cn(
						"[mask-image:radial-gradient(1200px_circle_at_center,white,transparent)]",
						"inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
					)}
				/>
			</div>
			<div>{children}</div>
		</div>
	);
}
