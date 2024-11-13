<script lang="ts">
	import Footer from '@lib/footer.svelte';
	import Header from '@lib/header.svelte';
	import '../app.css';

	let { children, data } = $props();
</script>

<div class="min-h-screen bg-body font-raleway text-white">
	<Header />
	<main>
		{@render children?.()}
	</main>
	<Footer />
</div>
