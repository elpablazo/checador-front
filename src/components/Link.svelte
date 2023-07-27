<script lang="ts">
	export let href: string;
</script>

<a
	{href}
	class="font-medium underline underline-offset-6 hover:text-black/60 decoration-1 decoration-gray-300 transition-all"
>
	<slot />
</a>
