import type { IFileSystem, ITerminal } from "../types";
import { BaseCommand } from "./baseCommand";

// commands/cat.ts
// export class CatCommand extends BaseCommand {
//   name = "cat";
//   description = "Display file contents";
//
//   execute(args: string[], fs: IFileSystem, terminal: ITerminal): void {
//     if (args.length === 0) {
//       terminal.writeLine("Usage: cat <filename>");
//       return;
//     }
//
//     const filename = args[0];
//     const file = fs.getFile(filename);
//
//     if (!file) {
//       terminal.writeLine(`cat: ${filename}: No such file or directory`);
//       return;
//     }
//
//     if (file.type === "directory") {
//       terminal.writeLine(`cat: ${filename}: Is a directory`);
//       return;
//     }
//
//     const content = file.content || "";
//
//     // Split by existing newlines first
//     const paragraphs = content.split('\n');
//
//     // Process each paragraph
//     for (const paragraph of paragraphs) {
//       if (paragraph.trim() === '') {
//         terminal.writeLine(''); // Preserve empty lines
//         continue;
//       }
//
//       // Get terminal width (if available, default to 80)
//       const terminalWidth = (terminal as any).cols || 80;
//       const words = paragraph.split(' ');
//       let currentLine = '';
//
//       // Build lines word by word
//       for (const word of words) {
//         if (currentLine.length + word.length + 1 <= terminalWidth) {
//           currentLine += (currentLine ? ' ' : '') + word;
//         } else {
//           terminal.writeLine(currentLine);
//           currentLine = word;
//         }
//       }
//
//       // Write the last line
//       if (currentLine) {
//         terminal.writeLine(currentLine);
//       }
//     }
//   }
// }

export class CatCommand extends BaseCommand {
	name = "cat";
	description = "Display file contents";

	execute(args: string[], fs: IFileSystem, terminal: ITerminal): string | void {
		if (args.length === 0) {
			return "Usage: cat <filename>";
		}

		const filename = args[0];
		const file = fs.getFile(filename);

		if (!file) {
			return `cat: ${filename}: No such file or directory`;
		}

		if (file.type === "directory") {
			return `cat: ${filename}: Is a directory`;
		}

		return file.content || "";
	}
}
