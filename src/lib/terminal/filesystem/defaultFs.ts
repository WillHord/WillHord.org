import type { IFile } from "../types.ts";

export const defaultFileSystem: IFile = {
	name: "/",
	type: "directory",
	children: new Map([
		[
			"home",
			{
				name: "home",
				type: "directory",
				children: new Map([
					[
						"user",
						{
							name: "user",
							type: "directory",
							children: new Map([
								[
									"readme.txt",
									{
										name: "readme.txt",
										type: "file",
										content:
											'Welcome to the terminal!\nType "help" for available commands.',
									},
								],
							]),
						},
					],
				]),
			},
		],
		[
			"etc",
			{
				name: "etc",
				type: "directory",
				children: new Map([
					[
						"motd",
						{
							name: "motd",
							type: "file",
							content: `
    @@@@     
   @@@@~@    
  @@@~@@@@                                                                 o
  @@@@@@@                 O_/                         _ O  .------\\------.  ,_O _
    @@_@                _/|                         o' / \\ |\\      \\      \\    \\ \`o
     || \\___Q           __)\\                        __|\\___|_\\------\\------\\__ /|____
    _||_ /\\ /\\         \`    \\  o                      / |     |          |    | \\
""""""""""""""""""""""""""""""""""""""""""""""""              |          |
###################################################################################################
Hello! My name is Will Hord. I'm a software engineer, a maker, a developer and a collaborator. I make everything from websites and bots to machine learning algorithms and games. I'm interested in pushing the boundaries of what machines can do, to see how far humanity can go with the aid of technology. Through my career so far, I've worked on a variety of projects, from creating a machine learning model to predict patients at risk of addiction to developing and mainting a variety of sites for UC Santa Cruz. I'm always seeking out opportunities to put my skills to use towards any challenge. Check out my Resume and my Projects page to learn more about me and what I do. Or Check out my Github.
####################################################################################################
`,
						},
					],
				]),
			},
		],
	]),
};
