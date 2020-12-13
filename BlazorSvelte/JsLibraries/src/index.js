import App from './App.svelte';

let app;

export function RenderHello(count) {
	const target = document.getElementById('svelte-app');

	if (!target.childNodes.length) {
		console.log('Initialize App', app);
		app = null;
	}

	if (app) {		
		app.$set({ name: 'World ' + count });
	}
	else {
		app = new App({
			target,
			props: {
				name: 'World'
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