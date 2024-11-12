<script lang="ts">
	import Footer from './footer.svelte';
	import Header from './header.svelte';
	import '../app.css';

	let { children, data } = $props();
</script>

<div class="layout">
	<Header />

	<main>
		{@render children?.()}
	</main>

	<Footer />
</div>
