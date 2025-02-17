import type { IFile, IFileSystem } from "../types.js";

export class FileSystem implements IFileSystem {
	currentPath: string[] = [];
	root: IFile;

	constructor(initialFileSystem: IFile) {
		this.root = initialFileSystem;
	}

	getCurrentDirectory(): IFile {
		let current = this.root;
		for (const dir of this.currentPath) {
			const next = current.children?.get(dir);
			if (!next || next.type !== "directory") {
				throw new Error("Invalid path");
			}
			current = next;
		}
		return current;
	}

	private handlePathPart(accumulator: string[], part: string): string[] {
		switch (part) {
			case ".":
				return accumulator;
			case "..":
				return accumulator.length > 0 ? accumulator.slice(0, -1) : [];
			default:
				return [...accumulator, part];
		}
	}

	resolvePath(path: string): string[] {
		// Handle absolute paths
		if (path.startsWith("/")) {
			return [
				path
					.split("/")
					.filter(Boolean) // Remove empty strings
					.reduce((acc, part) => this.handlePathPart(acc, part), []),
			];
		}

		// Handle relative paths
		return path
			.split("/")
			.filter(Boolean)
			.reduce(
				(acc, part) => this.handlePathPart(acc, part),
				[...this.currentPath],
			);
	}

	// resolvePath(path: string): string[] {
	// 	if (path.startsWith("/")) {
	// 		return path.split("/").filter(Boolean);
	// 	}
	//
	// 	const parts = path.split("/").filter(Boolean);
	// 	const resolved = [...this.currentPath];
	//
	// 	for (const part of parts) {
	// 		if (part === "..") {
	// 			resolved.pop();
	// 		} else if (part !== ".") {
	// 			resolved.push(part);
	// 		}
	// 	}
	//
	// 	return resolved;
	// }

	getFile(path: string): IFile | null {
		const parts = this.resolvePath(path);
		let current = this.root;

		for (const part of parts) {
			const next = current.children?.get(part);
			if (!next) return null;
			current = next;
		}

		return current;
	}
}
