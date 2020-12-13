import App from './App.svelte';

const reg = {};

export function Render(target, ...p) {
	console.log(target, p);
	return renderComponent(target, p);
}

function getKey(target) {
	const atts = target.attributes;
	const name = atts.name.value;
	return { name, key: `${name}-${atts[atts.length - 1].name}` };
}

function renderComponent(target, p) {
	const { key } = getKey(target);
	const count = p[0];

	if (!target.childNodes.length) {
		console.log('Initialize App', app);
		reg[key] = null;
	}

	if (reg[key]) {		
		reg[key].$set({ name: 'World ' + count });
	}
	else {
		reg[key] = new App({
			target,
			props: {
				name: 'World'
			}
		});
	}
	return reg[key];
}

export function Destroy(target) {
	const { key } = getKey(target);
	if (reg[key]) {
		reg[key].$destroy();
	  delete reg[key];
	}
}
