<!-- // Todo: agregar cn para classnames (todos los componentes) -->
<!-- Todo: agregar todos los input types restantes -->
<script lang="ts">
	import { Field, ErrorMessage } from 'svelte-forms-lib';
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
	// Todo: que cuando haya un error, la clase cambie a border-red-500
	export let error: boolean | string = false;

	$: classname =
		'block w-full px-4 py-2 text-gray-700 border-0 transition-all rounded-md border-1 border-gray-300 enabled:shadow-sm outline-0 ring-offset-0 placeholder:text-gray-500 bg-gray-50 disabled:bg-gray-100 ring-offset-0' +
		(error ? ' border-red-500' : '');
</script>

<div class="flex flex-col gap-1">
	<label for={name} class="text-gray-800 text-sm">{label}</label>
	{#if type === 'text'}
		<Field type="text" {name} {placeholder} {disabled} bind:value class={classname} />
	{:else if type === 'password'}
		<Field type="password" {name} {placeholder} {disabled} bind:value class={classname} />
	{:else if type === 'number'}
		<Field type="number" {name} {placeholder} {disabled} bind:value class={classname} />
	{:else if type === 'email'}
		<Field type="email" {name} {placeholder} {disabled} bind:value class={classname} />
	{:else if type === 'tel'}
		<Field type="tel" {name} {placeholder} {disabled} bind:value class={classname} />
	{/if}
	<ErrorMessage {name} class="text-red-500 text-xs" />
</div>
