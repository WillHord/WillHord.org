import type { IFileSystem, IFile, ITerminal } from "../types";
import { BaseCommand } from "./baseCommand";

export class PwdCommand extends BaseCommand {
	name = "pwd";
	description = "List current directory";

	execute(args: string[], fs: IFileSystem, terminal: ITerminal): string | void {
		try {
			if (args.length > 0) {
				return "pwd: too many arguments";
			}
			return fs.currentPath.length === 0 ? "/" : `/${fs.currentPath.join("/")}`;
		} catch (error) {
			return `pwd: ${error.message}`;
		}
	}
}
