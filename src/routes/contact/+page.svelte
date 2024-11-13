<script lang="ts">
	import Pagetitle from '@lib/pagetitle.svelte';
	import ContactIcons from '@lib/contacticons.svelte';
</script>

<svelte:head>
	<title>Contact | ytsruh.com</title>
	<meta
		name="description"
		content="Feel free to to contact me through email, LinkedIn, Twitter/X or Github"
	/>
</svelte:head>

<section class="w-full">
	<Pagetitle
		title="Contact"
		description="Feel free to to contact me through any of the below methods."
	/>
	<ContactIcons />
</section>
