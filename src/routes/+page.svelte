<script lang="ts">
	import Map from '$components/Map.svelte';

	import { onMount } from 'svelte';

	let coordinates: any = null;

	onMount(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			coordinates = position.coords;
			console.log(position);
		});
	});
</script>

{#if coordinates}
	<Map latitude={coordinates.latitude} longitude={coordinates.longitude} />
{:else}
	<p>Esperando coordenadas...</p>
{/if}
