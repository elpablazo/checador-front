<script lang="ts">
	export let primary: boolean = false;
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let disabled: boolean = false;
</script>

<button
	on:click
	{type}
	{disabled}
	class={`px-4 py-3 font-medium transition-all rounded-lg active:scale-95 ${
		primary
			? 'text-white bg-black hover:bg-black/80 disabled:bg-gray-300 hover:shadow-sm'
			: 'text-black hover:text-black/60 disabled:text-gray-300'
	}`}
>
	<slot />
</button>
