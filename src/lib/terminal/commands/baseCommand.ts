import type { ICommand, IFileSystem, ITerminal } from "../types.ts";

export abstract class BaseCommand implements ICommand {
	abstract name: string;
	abstract description: string;
	abstract execute(
		args: string[],
		fs: IFileSystem,
		terminal: ITerminal,
	): string | void;
}
