<!-- // Todo: agregar cn para classnames (todos los componentes) -->
<!-- Todo: agregar todos los input types restantes -->
<script lang="ts">
	export let type:
		| 'text'
		| 'password'
		| 'email'
		| 'number'
		| 'tel'
		| 'url'
		| 'search'
		| 'date'
		| 'time'
		| 'datetime-local'
		| 'month'
		| 'week' = 'text';
	export let name: string;
	export let label: string;
	export let placeholder: string = '';
	export let value: string = '';
	export let disabled: boolean = false;

	const classname =
		'px-4 py-3 bg-gray-100 rounded-lg text-black/70 disabled:bg-gray-200 disabled:placeholder:text-gray-400 disabled:text-gray-400 outline-0 focus:ring-1 ring-black focus:bg-white focus:shadow';
</script>

<div class="flex flex-col gap-1">
	<label for={name} class="font-medium">{label}</label>
	{#if type === 'text'}
		<input type="text" {name} {placeholder} {disabled} bind:value class={classname} />
	{:else if type === 'password'}
		<input type="password" {name} {placeholder} {disabled} bind:value class={classname} />
	{:else if type === 'number'}
		<input type="number" {name} {placeholder} {disabled} bind:value class={classname} />
	{/if}
</div>
