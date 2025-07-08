<script lang="ts">
	import Pagetitle from '@lib/pagetitle.svelte';
	import img from '@lib/img/400.webp';
</script>

<section class="w-full">
	<div>
		<Pagetitle
			title="404: Page Not Found"
			description="We can't find this page. Please return to the homepage & try again"
		/>
		<img src={img} alt="404 Page Not Found" />
	</div>
</section>
