<script lang="ts">
	import * as Icon from 'lucide-svelte';
</script>

<div class="grid grid-cols-2 items-center justify-center gap-5 py-10 md:grid-cols-5">
	<a
		href="mailto:chris@ytsruh.com"
		aria-label="Contact by email"
		class="flex items-center justify-center"
	>
		<Icon.Mail size="50" />
	</a>
	<a
		href="https://www.linkedin.com/in/chrishurst2/"
		target="_blank"
		aria-label="Find me on LinkedIn"
		class="flex items-center justify-center"
	>
		<Icon.Linkedin size="50" />
	</a>
	<a
		href="https://www.twitter.com/the_chrishurst"
		target="_blank"
		aria-label="Find me on Twitter"
		class="flex items-center justify-center"
	>
		<Icon.Twitter size="50" />
	</a>
	<a
		href="https://github.com/ytsruh"
		target="_blank"
		aria-label="Find me on Github"
		class="flex items-center justify-center"
	>
		<Icon.Github size="50" />
	</a>
</div>
