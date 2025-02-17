export type FileType = "file" | "directory";

export interface IFile {
	name: string;
	type: FileType;
	content?: string;
	children?: Map<string, IFile>;
}

export interface IFileSystem {
	currentPath: string[];
	root: IFile;
	getCurrentDirectory: () => IFile;
	getFile: (path: string) => IFile | null;
	resolvePath: (path: string) => string[];
}

export interface ICommand {
	name: string;
	description: string;
	execute: (
		args: string[],
		fs: IFileSystem,
		terminal: ITerminal,
	) => string | void;
}

export interface ITerminal {
	write: (text: string) => void;
	writeLine: (text: string) => void;
	clear: () => void;
	getFileSystem: () => IFileSystem;
}
