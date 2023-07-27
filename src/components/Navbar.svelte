<script>
	import '../app.css';

	import { fly } from 'svelte/transition';

	import Fingerprint from '$components/icons/Fingerprint.svelte';
	import Button from '$components/Button.svelte';
	import BurgerMenu from '$components/icons/BurgerMenu.svelte';
	import XSquare from '$components/icons/XSquare.svelte';

	// Todo: pasar isBurgerMenuOpen a un store
	let isBurgerMenuOpen = false;

	// Función que hace toggle al menú lateral
	function toggleBurgerMenu() {
		isBurgerMenuOpen = !isBurgerMenuOpen;
	}

	const navbarItems = [
		{
			label: 'Iniciar sesión',
			primary: false,
			href: '/login'
		},
		{
			label: 'Registrarse',
			primary: true,
			href: '/register'
		}
	];
</script>

{#if isBurgerMenuOpen}
	<!-- Overlay -->
	<button
		class="fixed top-0 left-0 w-full h-full bg-black opacity-50"
		on:click={() => {
			isBurgerMenuOpen = false;
		}}
	/>

	<!-- Menú lateral para dispositivos móviles -->
	<div
		class={`fixed top-0 flex flex-col w-64 h-full p-4 bg-white shadow-lg ${
			isBurgerMenuOpen ? 'right-0' : 'right-[-256px]'
		}`}
		transition:fly={{ x: 256 }}
	>
		<button on:click={toggleBurgerMenu}>
			<XSquare className="absolute top-0 right-0 w-6 h-6 mt-5 mr-4 text-black" />
		</button>
		<h2 class="w-full text-lg font-bold text-center">Menú</h2>
		<ul class="flex flex-col items-center justify-center h-full gap-2">
			{#each navbarItems as { href, label, primary }}
				{#if primary}
					<a {href}><Button primary>{label}</Button></a>
				{:else}
					<a {href}><Button>{label}</Button></a>
				{/if}
			{/each}
		</ul>
	</div>
{/if}

<nav class="flex justify-between p-4 bg-white">
	<a href="/">
		<div class="flex gap-2 transition-all hover:text-black/60">
			<Fingerprint />
			<h1 class="flex items-center text-xl font-bold">Passport</h1>
		</div>
	</a>
	<ul class="hidden gap-2 md:flex">
		{#each navbarItems as { href, label, primary }}
			{#if primary}
				<a {href}><Button primary>{label}</Button></a>
			{:else}
				<a {href}><Button>{label}</Button></a>
			{/if}
		{/each}
	</ul>
	<div class="flex items-center md:hidden">
		<button on:click={toggleBurgerMenu}>
			<BurgerMenu />
		</button>
	</div>
</nav>
