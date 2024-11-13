<script lang="ts">
	import Pagetitle from '@lib/pagetitle.svelte';
	import * as Icon from 'lucide-svelte';
</script>

<svelte:head>
	<title>Now | ytsruh.com</title>
	<meta
		name="description"
		content="A now page. An overview of whats going on right now and what the plans are for the year."
	/>
</svelte:head>

<section class="w-full">
	<Pagetitle
		title="Now"
		description="A now page. An overview of whats going on right now and what the plans are for the year."
	/>
	<ul class="space-y-4 py-5">
		<li class="flex items-center">
			<div class="icon mr-5"><Icon.Tag size="36" /></div>
			<p>
				Working at <a href="http://www.lseg.com" class="text-theme/75" target="_blank">LSEG</a> in the
				digital team
			</p>
		</li>
		<li class="flex items-center">
			<div class="icon mr-5"><Icon.Tag size="36" /></div>
			<p>Improving my TypeScript & Go skills</p>
		</li>
		<li class="flex items-center">
			<div class="icon mr-5"><Icon.Tag size="36" /></div>
			<p>Improving my fitness</p>
		</li>
	</ul>
	<div class="grid grid-cols-1 gap-5 py-5 md:grid-cols-2 md:py-10 lg:grid-cols-3">
		<div>
			<h2 class="secondary-title">Go</h2>
			<p class="py-2">
				My main goal in 2024 is to continue learning Go. I've been keen to learn a faster language
				than JavaScript in order to deal with data more effeciently and Go provides speed &
				simplicty.
			</p>
		</div>
		<div>
			<h2 class="secondary-title">TypeScript</h2>
			<p class="py-2">
				Currently upgrading all projects to TypeScript. JavaScript is a great starting point but the
				advanced parts of TypeScript have really helped reduce bugs and make web applications easier
				to build.
			</p>
		</div>
		<div>
			<h2 class="secondary-title">Webiliti</h2>
			<p class="py-2">
				After running into various challenges working at LSEG I was inspired to build Webiliti. The
				web management & testing application that is designed to help web managers stay on top of
				their websites.
			</p>
		</div>
	</div>
	<p class="py-10 text-lg">
		What is a now page? Click <a class="text-secondary" href="https://nownownow.com/about">here</a> to
		find out.
	</p>
</section>
