import App from './App.svelte';

let app;

export function RenderHello(count) {
	const target = document.getElementById('svelte-app');

	console.log(target.childNodes, app);

	if (!target.childNodes.length) {
		app = null;
	}

	if (app) {		
		app.$set({ name: 'Kiho ' + count });
	}
	else {
		app = new App({
			target,
			props: {
				name: 'Kiho'
			}
		});
	}
	return app;
}

export function DestroyHello() {
	if (app) {
		app.$destroy();
		app = null;
	}
}