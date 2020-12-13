<script>
	import { onDestroy } from 'svelte';

	export let name;

	onDestroy(() => {
		console.log('Svelte - onDestroy');
	});
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {name}!</h1>
