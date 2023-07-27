<script lang="ts">
	import { page } from '$app/stores';
	import Planet from '$components/icons/Planet.svelte';
</script>

{#if $page.status === 404}
	<div
		class="container flex flex-col items-center justify-center h-full mx-auto font-semibold text-gray-800"
	>
		<div class="flex items-center">
			<span class="text-8xl">4</span>
			<Planet className="w-24 h-24 animate-pulse ease-in" />
			<span class="text-8xl">4</span>
		</div>
		<p class="text-xl text-center">Página no encontrada.</p>
	</div>
{/if}
