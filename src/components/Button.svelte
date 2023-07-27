<script lang="ts">
	export let primary: boolean = false;
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let disabled: boolean = false;
</script>

<button
	on:click
	class={`block w-full px-4 py-2 font-medium text-center rounded-md outline-0 ring-offset-0 ${
		primary
			? 'text-white bg-black hover:bg-black/80 disabled:bg-gray-300 hover:shadow-sm ring-black transition-all duration-200 active:enabled:scale-[0.97]'
			: 'text-black hover:text-black/60 disabled:text-gray-300 ring-transparent'
	}`}
	{type}
	{disabled}
>
	<slot />
</button>
