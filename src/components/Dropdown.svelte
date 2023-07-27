<script lang="ts">
	import ChevronDown from '$components/icons/ChevronDown.svelte';
	import { quintOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';

	export let disabled = false;

	export let isOpen = false;
	export let toggle = () => {
		if (disabled) return;
		isOpen = !isOpen;
	};

	export let label: string;
</script>

<div class="relative inline-block text-left">
	<button
		class={`inline-flex w-full disabled:bg-gray-100 disabled:text-gray-400 justify-center items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ${
			isOpen && 'bg-gray-50 ring-black'
		}`}
		on:click={toggle}
		{disabled}
	>
		{label}
		<ChevronDown className="-mr-1  h-5 w-5 text-gray-400" />
	</button>

	{#if isOpen}
		<div
			transition:scale={{ duration: 150, opacity: 0, start: 0.9, easing: quintOut }}
			class={`absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
			role="menu"
			aria-orientation="vertical"
			aria-labelledby="menu-button"
			tabindex="-1"
		>
			<div class="py-1" role="none">
				<slot />
			</div>
		</div>
	{/if}
</div>
