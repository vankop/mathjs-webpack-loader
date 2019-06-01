import mathjs from 'mathjs';

function insertInTemplate(data) {
	return `
		export default function (mathjs) {
			function revive(obj) {
				if (typeof obj !== "object") return obj
				if (Array.isArray(obj)) return obj.map(revive)
				else Object.keys(obj).forEach(key => obj[key] = revive(obj[key]))
				
				return mathjs.json.reviver(null, obj)
			}
			return ${data}
		}`;
}

function mathjsJSONTemplate(parsed) {
	return `revive(${JSON.stringify(parsed)})`;
}

export default function(source) {
	const expressions = (
		source
			.split('\n')
			.filter(s => s.trim())
			.map(exp => mathjs.parse(exp))
	);

	return insertInTemplate(
		expressions.length === 1
			? mathjsJSONTemplate(expressions[0])
			: `[${expressions.map(mathjsJSONTemplate).join(',')}]`
	);
}
