<script lang="ts">
	import Footer from '@lib/footer.svelte';
	import Header from '@lib/header.svelte';
	import '../app.css';

	let { children, data } = $props();
</script>

<div class="min-h-screen bg-body font-raleway text-white">
	<Header />
	<main class="container mx-auto mt-14 min-h-screen px-8 md:px-14 lg:mt-24 lg:px-24">
		{@render children?.()}
	</main>
	<Footer />
</div>
