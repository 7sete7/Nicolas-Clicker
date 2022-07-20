import Handlebars from 'handlebars';

interface ICompiledStore {
	[key: string]: HandlebarsTemplateDelegate;
}

const compiled: ICompiledStore = {};
export default function compileTemplateWith(templateName: string, data: object): string {
	if (compiled[templateName]) {
		return compiled[templateName](data);
	}

	const { default: template }: { default?: string } = require(`../templates/${templateName}.hbs`);
	if (template == null) throw new Error(`Template ${templateName} não existe!`);

	const compiledTemplate = Handlebars.compile(template);
	compiled[templateName] = compiledTemplate;

	return compiledTemplate(data);
}
