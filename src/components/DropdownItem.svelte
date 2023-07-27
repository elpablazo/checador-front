<script lang="ts">
	export let disabled = false;
</script>

<!-- // Todo: Si esta deshabilitado, no deberia poder hacer click -->
<div
	class={`block px-4 py-2 text-sm ${
		disabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100 cursor-pointer'
	}`}
	role="menuitem"
	tabindex="-1"
	id="menu-item-0"
>
	<slot />
</div>
