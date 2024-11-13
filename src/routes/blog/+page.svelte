<script lang="ts">
	import { formatDate } from '$lib/utils';

	let { data } = $props();
</script>

<svelte:head>
	<title>Blog Home</title>
</svelte:head>

<section>
	<ul class="grid grid-cols-3 gap-5">
		{#each data.posts as post}
			<li class="flex flex-col border">
				<a href={'/blog/' + post.slug} class="title">{post.title}</a>
				<p class="date">{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>
