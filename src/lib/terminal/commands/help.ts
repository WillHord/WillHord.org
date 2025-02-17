import type { IFileSystem, ITerminal } from "../types";
import { BaseCommand } from "./baseCommand";

export class HelpCommand extends BaseCommand {
	name = "help";
	description = "Help command";

	execute(args: string[], fs: IFileSystem, terminal: ITerminal): string | void {
		terminal.write(`I haven't set this up yet. You are on your own`);
	}
}
