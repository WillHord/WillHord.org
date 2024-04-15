import type React from "react";

import { terminalText } from "@/config/homepageData";

import { ChevronRight } from "lucide-react";

interface TerminalLineProps {
	path?: string;
	command?: string;
	text: string | React.ReactNode;
}

const TerminalLine: React.FC<TerminalLineProps> = ({
	path = "",
	command = "",
	text,
}) => {
	return (
		<p className="flex flex-row">
			<span className="text-blue-500">{path}</span>
			<span className="text-[#00c200]">
				<ChevronRight />
			</span>
			<span className="text-[#00c200]">{command}</span>
			<span>&nbsp;</span>
			<span className="text-gray-100 flex items-center justify-center">
				{text}
			</span>
		</p>
	);
};

const Terminal: React.FC = () => {
	return (
		<div className="font-mono h-full flex flex-row items-center justify-center">
			<div className="w-3/5 min-h-[80vh] flex flex-col overflow-x-hidden rounded-lg bg-gray-800 shadow-lg">
				<div className="w-full h-8 bg-gray-400 flex items-center justify-left gap-2 pl-2">
					<div className="w-4 h-4 bg-red-500 rounded-full" />
					<div className="w-4 h-4 bg-orange-300 rounded-full" />
					<div className="w-4 h-4 bg-green-500 rounded-full" />
				</div>
				<div className="flex flex-col p-2">
					<TerminalLine path="~" command="cd" text="~/Documents/WillHord" />
					<TerminalLine
						path="~/Documents/WillHord"
						command="less"
						text="about.txt"
					/>
					{/* prettier-ignore-start */}
					{/* biome-ignore format: changing the format of this makes it impossible to change */}
					<div>
                        <pre>&nbsp;&nbsp;&nbsp;&nbsp;@@@@&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</pre>
                        <pre>&nbsp;&nbsp;&nbsp;@@@@~@&nbsp;&nbsp;&nbsp;&nbsp;</pre>
                        <pre>  @@@~@@@@                                                                 o</pre>
                        <pre>  @@@@@@@                 O_/                         _ O  .------\------.  ,_O _</pre>
                        <pre>    @@_@                _/|                         o' / \ |\      \      \    \ `o</pre>
                        <pre>     || \___Q           __)\                        __|\___|_`------\------`__ /|____</pre>
                        <pre>    _||_ /\ /\         `    \  o                      / |     |          |    | \</pre>
                        <pre>{'""""""""""""""""""""""""""""""""""""""""""""""""'}              |          |</pre>
                    </div>
					{/* prettier-ignore-end */}
					<p className="max-w-full overflow-hidden truncate text-clip">
						##################################################################################################################################
					</p>
					<p className="px-12 indent-8 flex justify-center">
						Hello! My name is Will Hord. I{"'"}m a software engineer, a maker, a
						developer and a collaborator. I make everything from websites and
						bots to machine learning algorithms and games. I{"'"}m interested in
						pushing the boundaries of what machines can do, to see how far
						humanity can go with the aid of technology. Through my career so
						far, I{"'"}ve worked on a variety of projects, from creating a
						machine learning model to predict patients at risk of addiction to
						developing and mainting a variety of sites for UC Santa Cruz. I{"'"}
						m always seeking out opportunities to put my skills to use towards
						any challenge. Check out my Resume and my Projects page to learn
						more about me and what I do. Or Check out my Github.
					</p>
					<p className="max-w-full overflow-hidden truncate text-clip">
						##################################################################################################################################
					</p>
					<TerminalLine
						path="~/Documents/WillHord"
						command=""
						text={
							<span className="w-[10px] h-5 animate-pulse duration-1000 text-xl bg-gray-100" />
							// <span className="animate-pulse text-xl">&#9646;</span>
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default Terminal;
