<script>
	import '../app.css';

	import Navbar from '$components/Navbar.svelte';

	import { Toaster } from 'svelte-french-toast';
</script>

<Toaster />
<Navbar />
<slot />
