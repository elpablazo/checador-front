<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	const lang = browser ? navigator.language : null;

	let coordinates: any = null;

	onMount(async () => {
		const leaflet = await import('leaflet');

		navigator.geolocation.getCurrentPosition((position) => {
			coordinates = position.coords;
			console.log(position);
		});
		if (browser) {
		}
	});
</script>

<p class="w-full text-center">El lenguaje del navegador es: {lang}</p>
