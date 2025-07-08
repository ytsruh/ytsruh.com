<script lang="ts">
	const { type, link } = $props<{
		type: string;
		link: string;
	}>();
</script>

<a
	href={link}
	target="_blank"
	class="border border-theme px-4 py-2 text-sm capitalize hover:bg-theme"
>
	{type}
</a>
