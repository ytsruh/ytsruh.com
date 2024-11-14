<script lang="ts">
	import Pagetitle from '@lib/pagetitle.svelte';
	import Visitlink from '@lib/visitlink.svelte';
	import Techlink from '@lib/techlink.svelte';
	import { projects } from './projects';
</script>

<svelte:head>
	<title>Projects | ytsruh.com</title>
	<meta
		name="description"
		content="I've worked on a number of JavaScript & Go projects, both client & server side. I have featured some of them below to show new technologies that have been used or where a project is deployed."
	/>
</svelte:head>

<section class="w-full">
	<Pagetitle
		title="Projects"
		description="I've worked on a number of JavaScript & Go projects, both client & server side. I have featured some of them below to show new technologies that have been used or where a project is deployed."
	/>
	<ul class="flex flex-col gap-5">
		{#each projects as project}
			<div
				class="flex w-full flex-col flex-wrap justify-center border border-nav p-16 xl:flex-row xl:flex-nowrap"
			>
				<div class="flex flex-wrap justify-center text-center md:basis-2/3 lg:block lg:text-left">
					<h3 class="text-2xl font-semibold text-white">{project.name}</h3>
					<div
						class="mb-8 mt-6 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start"
					>
						<Visitlink link={project.link?.url!} type={project.link?.text!} />
						{#if project.github}
							<Visitlink link={project.github.url} type={project.github.text} />
						{/if}
					</div>
					<div class="flex max-w-full flex-wrap items-center justify-between gap-2">
						{#each project.technologies as tech}
							<Techlink text={tech} />
						{/each}
					</div>
					<p class="py-2">
						{project.description}
					</p>
				</div>
				<div class="m-6 flex md:basis-1/3 lg:mb-0">
					<img src={project.img} alt={project.name} class="w-full object-cover" />
				</div>
			</div>
		{/each}
	</ul>
</section>
