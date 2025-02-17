import type { IFileSystem, IFile, ITerminal } from "../types";
import { BaseCommand } from "./baseCommand";

export class LsCommand extends BaseCommand {
	name = "ls";
	description = "List directory contents";

	execute(args: string[], fs: IFileSystem, terminal: ITerminal): string | void {
		try {
			// Get target directory
			let targetDir: IFile;
			if (args.length === 0) {
				targetDir = fs.getCurrentDirectory();
			} else {
				const path = args[0];
				const target = fs.getFile(path);
				if (!target) {
					return `ls: cannot access '${path}': No such file or directory`;
				}
				targetDir =
					target.type === "directory" ? target : fs.getCurrentDirectory();
			}

			// Get and format directory contents
			if (!targetDir.children) {
				return "";
			}

			const entries = Array.from(targetDir.children.values())
				.map((entry) => {
					if (entry.type === "directory") {
						return entry.name + "/";
					}
					return entry.name;
				})
				.sort()
				.join("  ");

			return entries;
		} catch (error) {
			return `ls: ${error.message}`;
		}
	}
}
