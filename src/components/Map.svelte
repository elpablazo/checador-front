<script lang="ts">
	// Todo: hacer este componente perrón
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	export let latitude: number;
	export let longitude: number;

	let mapElement: any;
	let map: any;

	onMount(async () => {
		if (browser) {
			const leaflet = await import('leaflet');

			map = leaflet.map(mapElement).setView([latitude, longitude], 18);

			leaflet
				.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
					attribution:
						'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				})
				.addTo(map);

			leaflet.marker([latitude, longitude]).addTo(map).bindPopup('Tu ubicación').openPopup();
		}
	});

	onDestroy(async () => {
		if (map) {
			console.log('Unloading Leaflet map.');
			map.remove();
		}
	});
</script>

<main class="w-full h-full flex items-stretch">
	<div bind:this={mapElement} />
</main>

<style>
	@import 'leaflet/dist/leaflet.css';
	main div {
		width: 100%;
		height: 95vh;
	}
</style>
