import type { ICommand } from "../types";
import { CatCommand } from "./cat";
import { CdCommand } from "./cd";
import { ClearCommand } from "./clear";
import { LsCommand } from "./ls";
import { PwdCommand } from "./pwd";

export const commands = new Map<string, ICommand>([
	["cd", new CdCommand()],
	["ls", new LsCommand()],
	["cat", new CatCommand()],
	["pwd", new PwdCommand()],
	["clear", new ClearCommand()],
	// Add other commands here
]);
