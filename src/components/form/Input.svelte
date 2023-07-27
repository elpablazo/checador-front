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
		'block w-full px-4 py-2 text-gray-700 border-0 transition-all rounded-md enabled:shadow-sm ring-1 ring-inset ring-gray-300 outline-0 ring-offset-0 placeholder:text-gray-400 disabled:bg-gray-100 enabled:focus:ring-black ring-offset-0';
</script>

<div class="flex flex-col gap-1">
	<label for={name} class="font-medium">{label}</label>
	{#if type === 'text'}
		<input type="text" {name} {placeholder} {disabled} bind:value class={classname} />
	{:else if type === 'password'}
		<input type="password" {name} {placeholder} {disabled} bind:value class={classname} />
	{:else if type === 'number'}
		<input type="number" {name} {placeholder} {disabled} bind:value class={classname} />
	{:else if type === 'email'}
		<input type="email" {name} {placeholder} {disabled} bind:value class={classname} />
	{:else if type === 'tel'}
		<input type="tel" {name} {placeholder} {disabled} bind:value class={classname} />
	{/if}
</div>
