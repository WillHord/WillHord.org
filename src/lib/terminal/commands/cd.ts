import type { IFileSystem, ITerminal } from "../types";
import { BaseCommand } from "./baseCommand";

export class CdCommand extends BaseCommand {
	name = "cd";
	description = "Change current directory";

	execute(args: string[], fs: IFileSystem, terminal: ITerminal): string | void {
		if (args.length === 0) {
			fs.currentPath = [];
			return;
		}

		const path = args[0];
		const resolved = fs.resolvePath(path);
		const target = fs.getFile(resolved.join("/"));

		if (!target || target.type !== "directory") {
			return `cd: ${path}: No such directory`;
		}

		fs.currentPath = resolved;
	}
}
