import type { IFileSystem, ITerminal } from "../types";
import { BaseCommand } from "./baseCommand";

export class ClearCommand extends BaseCommand {
	name = "clear";
	description = "Clear terminal screen";

	execute(args: string[], fs: IFileSystem, terminal: ITerminal): void {
		terminal.clear();
	}
}
