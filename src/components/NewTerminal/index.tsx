import { useEffect, useRef, useState } from "react";
import type { Terminal as XTerm } from "@xterm/xterm";
import type { ITerminal, IFileSystem } from "@/lib/terminal/types";
import { FileSystem } from "@/lib/terminal/filesystem/fileSystem";
import { defaultFileSystem } from "@/lib/terminal/filesystem/defaultFs";
import { commands } from "@/lib/terminal/commands";

import dynamic from "next/dynamic";
import "@xterm/xterm/css/xterm.css";

function Terminal() {
	const terminalRef = useRef<HTMLDivElement>(null);
	const xtermRef = useRef<XTerm | null>(null);
	const commandRef = useRef("");
	const [mounted, setMounted] = useState(false);
	const fsRef = useRef<IFileSystem>(new FileSystem(defaultFileSystem));

	const terminal: ITerminal = {
		write: (text: string) => xtermRef.current?.write(text),
		writeLine: (text: string) => xtermRef.current?.writeln(text),
		clear: () => xtermRef.current?.clear(),
		getFileSystem: () => fsRef.current,
	};

	const executeCommand = (input: string) => {
		const [cmd, ...args] = input.trim().split(/\s+/);
		const command = commands.get(cmd);

		if (!command) {
			return `Command not found: ${cmd}`;
		}

		try {
			return command.execute(args, fsRef.current, terminal);
		} catch (error) {
			return `Error: ${error.message}`;
		}
	};

	// ... rest of the terminal implementation
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
				rows: 30,
				cols: 100,
			});

			const terminal = xtermRef.current;
			terminal.open(terminalRef.current);

			const motd = fsRef.current.getFile("/etc/motd");

			if (motd && motd.type === "file" && motd.content) {
				const normalizedContent = motd.content.replace(/\n/g, "\r\n");
				terminal.write(normalizedContent);
				// terminal.write(motd.content);
				console.log(motd.content);
				terminal.writeln("");
			}

			terminal.write("$ ");

			terminalRef.current.addEventListener("keydown", (e) => {
				if (e.key === "Tab") {
					e.preventDefault();
				}
			});

			terminal.onKey(({ key, domEvent }) => {
				if (domEvent.ctrlKey && domEvent.key === "l") {
					terminal.clear();
					return;
				}

				if (domEvent.key === "Enter") {
					terminal.writeln("");
					if (commandRef.current.trim()) {
						const output = executeCommand(commandRef.current);
						if (output) {
							const normalizedOutput = output.replace(/\n/g, "\r\n");
							terminal.write(normalizedOutput);
							terminal.writeln("");
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
				width: "1000px",
				border: "1px solid #333",
				borderRadius: "4px",
				padding: "4px",
			}}
		/>
	);
}

// Export the component with dynamic loading and no SSR
export default dynamic(() => Promise.resolve(Terminal), {
	ssr: false,
});
