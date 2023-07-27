<script lang="ts">
	import Check from '$components/icons/Check.svelte';
	import ExpandUpDown from '$components/icons/ExpandUpDown.svelte';
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	export let disabled = false;
	export let name: string;
	export let id: string | null = null;
	export let label: string;

	export let options: {
		value: string;
		label: string;
		disabled?: boolean;
	}[];

	let isOpen = false;
	let toggle = () => {
		if (disabled) return;
		isOpen = !isOpen;
	};
	let selected: any;
</script>

<div class="flex flex-col gap-1">
	<label for={name} class="font-medium">{label}</label>
	<div class="relative">
		<button
			{disabled}
			id="name"
			aria-haspopup="listbox"
			aria-expanded="true"
			aria-labelledby="listbox-label"
			class="relative w-full px-4 py-2 pr-10 text-left text-gray-700 bg-white rounded-md cursor-default hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 ring-1 ring-inset ring-gray-300 focus:outline-none disabled:cursor-not-allowed"
			on:click={toggle}
		>
			Selecciona una opción
			<span class="absolute inset-y-0 right-0 flex items-center pr-2 ml-3 pointer-events-none">
				<ExpandUpDown className="w-5 h-5 text-gray-400" />
			</span>
		</button>
		{#if isOpen}
			<ul
				class="absolute z-10 w-full py-1 mt-1 overflow-auto text-sm bg-white rounded-md shadow-lg max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none"
				tabindex="-1"
				role="listbox"
				aria-labelledby="listbox-label"
				aria-activedescendant="listbox-option-3"
				transition:scale={{ duration: 150, opacity: 0, start: 0.9, easing: quintOut }}
			>
				{#each options as option}
					<!-- TODO: Añadir on key up y on keydown (Accesibilidad) -->
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<li
						class={`relative py-2 pl-3 cursor-default select-none pr-9 ${
							option.disabled
								? 'text-gray-400 cursor-not-allowed'
								: 'text-gray-700 hover:bg-gray-100 cursor-pointer'
						}`}
						id={option.value}
						role="option"
						aria-selected="false"
						value={option.value}
						on:click={() => {
							if (option.disabled) return;
							selected = option.value;
							isOpen = false;
						}}
					>
						{option.label}
						{#if selected === option.value}
							<span class="absolute inset-y-0 right-0 flex items-center pr-4 text-black">
								<Check className="w-5 h-5" />
							</span>
						{/if}
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>

<select {name} id={id ?? name} bind:value={selected} class="hidden">
	{#each options as { value, label, disabled }}
		<option {value} {disabled}>{label}</option>
	{/each}
</select>
