import mammoth from "mammoth";

export async function convertDocxToHTML(path: string) {
	try {
		const result = await mammoth.convertToHtml({ path: path });

		const html = result.value;
		const messages = result.messages;

		if (messages.length > 0) {
			console.log(`Messages during conversion for ${path}:`, messages);
		}

		return html;
	} catch (error) {
		console.error(`Error converting DOCX file ${path}:`, error);
		throw error;
	}
}
