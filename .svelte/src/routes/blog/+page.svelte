<script lang="ts">
	import Pagetitle from '@lib/pagetitle.svelte';
	import { formatDate } from '$lib/utils';

	let { data } = $props();
</script>

<svelte:head>
	<title>Blog | ytsruh.com</title>
	<meta name="description" content="A collection of thoughts, ideas & experiences." />
</svelte:head>

<section>
	<Pagetitle title="Blog" description="Coming soon....." />
	<!-- <ul class="grid grid-cols-3 gap-5">
		{#each data.posts as post}
			<li class="flex flex-col border">
				<a href={'/blog/' + post.slug} class="title">{post.title}</a>
				<p class="date">{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul> -->
	<a href="/blog/first" class="hidden">First post</a>
</section>
