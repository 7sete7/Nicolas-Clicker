import {} from 'handlebars';

interface ICompiledStore {
	[key: string]: HandlebarsTemplateDelegate;
}

// const templates: { [key: string]: string } = {
// 	upgrade: decodeURIComponent(require(`data-url:../templates/upgrade.hbs`).split(',')[1]),
// };

const compiled: ICompiledStore = {};
export default function compileTemplateWith(templateName: string, data: object): string {
	if (compiled[templateName]) {
		return compiled[templateName](data);
	}

	// const template = readTemplate(templateName);
	const template = require('../templates/upgrade.hbs');
	console.log(template);
	return '';
	// const compiledTemplate = Handlebars.compile(template);
	// compiled[templateName] = compiledTemplate;

	// return compiledTemplate(data);
}

// const readTemplate = (name: string): Promise<string> =>
// 	new Promise(resolve => fs.readFile(`../templates/${name}`, { encoding: 'utf8' }, (err, data: string) => resolve(data)));

// const readTemplateFile = (filename: string): string => {
// 	const rawDataFile = require(`../templates/upgrade.hbs`);
// 	console.log(rawDataFile);
// 	return '';
// 	// const [, encodedData] = rawDataFile.split(',');

// 	// return decodeURIComponent(encodedData);
// };
