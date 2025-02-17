// components/Terminal.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import type { Terminal } from "@xterm/xterm";

// Dynamically import the Terminal style
import "@xterm/xterm/css/xterm.css";

// Create a wrapper component for the terminal
const TerminalComponent = () => {
	const terminalRef = useRef<HTMLDivElement>(null);
	const xtermRef = useRef<Terminal | null>(null);
	const commandRef = useRef("");
	const [mounted, setMounted] = useState(false);

	const executeCommand = (command: string) => {
		switch (command.trim().toLowerCase()) {
			case "help":
				return "Available commands: help, echo, clear, date";
			case "clear":
				xtermRef.current?.clear();
				return "";
			case "date":
				return new Date().toLocaleString();
			default:
				if (command.startsWith("echo ")) {
					return command.slice(5);
				}
				return `Command not found: ${command}`;
		}
	};

	useEffect(() => {
		const initTerminal = async () => {
			if (!terminalRef.current || xtermRef.current) return;

			// Dynamically import Terminal
			const { Terminal } = await import("@xterm/xterm");

			xtermRef.current = new Terminal({
				cursorBlink: true,
				fontSize: 14,
				fontFamily: "monospace",
				theme: {
					background: "#1e1e1e",
					foreground: "#ffffff",
				},
				rows: 20,
				cols: 80,
			});

			const terminal = xtermRef.current;
			terminal.open(terminalRef.current);

			terminal.writeln(
				'Welcome to the terminal! Type "help" for available commands.',
			);
			terminal.write("$ ");

			terminal.onKey(({ key, domEvent }) => {
				if (domEvent.key === "Enter") {
					terminal.writeln("");
					if (commandRef.current.trim()) {
						const output = executeCommand(commandRef.current);
						if (output) {
							terminal.writeln(output);
						}
					}
					terminal.write("$ ");
					commandRef.current = "";
					return;
				}

				if (domEvent.key === "Backspace") {
					if (commandRef.current.length > 0) {
						terminal.write("\b \b");
						commandRef.current = commandRef.current.slice(0, -1);
					}
					return;
				}

				if (key.length === 1 && !domEvent.ctrlKey && !domEvent.altKey) {
					terminal.write(key);
					commandRef.current += key;
				}
			});
		};

		if (mounted) {
			initTerminal();
		}

		return () => {
			if (xtermRef.current) {
				xtermRef.current.dispose();
			}
		};
	}, [mounted]);

	useEffect(() => {
		setMounted(true);
		return () => setMounted(false);
	}, []);

	return (
		<div
			ref={terminalRef}
			style={{
				height: "400px",
				width: "800px",
				border: "1px solid #333",
				borderRadius: "4px",
				padding: "4px",
			}}
		/>
	);
};

// Export the component with dynamic loading and no SSR
export default dynamic(() => Promise.resolve(TerminalComponent), {
	ssr: false,
});
