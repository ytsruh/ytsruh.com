<script lang="ts">
	import { page } from '$app/stores';
	let menuOpen = $state(false);
	function toggleMenu() {
		menuOpen = !menuOpen;
	}
</script>

<header class="py-6">
	<div class="container mx-auto flex w-full items-center justify-between px-8 md:px-14 lg:px-24">
		<a href="/" class="text-lg font-bold">ytsruh.com</a>
		<div class="hidden items-center space-x-6 md:flex xl:space-x-12">
			<a href="/" class={$page.route.id === '/' ? 'text-theme' : ''}>Home</a>
			<a href="/projects" class={$page.route.id?.includes('/projects') ? 'text-theme' : ''}>
				Projects
			</a>
			<a href="/work-history" class={$page.route.id === '/work-history' ? 'text-theme' : ''}>
				Work History
			</a>
			<a href="/blog" class={$page.route.id?.includes('/blog') ? 'text-theme' : ''}>Blog</a>
			<a href="/now" class={$page.route.id === '/now' ? 'text-theme' : ''}>Now</a>
			<a href="/contact"><button class="bg-theme px-6 py-2 font-bold">Contact me</button></a>
		</div>
		<button class="md:hidden" onclick={() => toggleMenu()} aria-label="Menu">
			<svg
				width="26"
				height="18"
				viewBox="0 0 26 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z"
					fill="white"
				/>
			</svg>
		</button>
	</div>
	{#if menuOpen === true}
		<div>
			<ul class="py-3 text-center">
				<li class="my-2 text-lg">
					<a href="/" class={$page.route.id === '/' ? 'text-theme' : ''}>Home</a>
				</li>
				<li class="my-2 text-lg">
					<a href="/projects" class={$page.route.id?.includes('/projects') ? 'text-theme' : ''}>
						Projects
					</a>
				</li>
				<li class="my-2 text-lg">
					<a href="/work-history" class={$page.route.id === '/work-history' ? 'text-theme' : ''}>
						Work History
					</a>
				</li>
				<li class="my-2 text-lg">
					<a
						href="https://ytsruh.hashnode.dev/"
						class={$page.route.id?.includes('/blog') ? 'text-theme' : ''}
					>
						Blog
					</a>
				</li>
				<li class="my-2 text-lg">
					<a href="/now" class={$page.route.id === '/now' ? 'text-theme' : ''}>Now</a>
				</li>
				<li class="my-2 text-lg">
					<a href="/contact" class={$page.route.id === '/contact' ? 'text-theme' : ''}>Contact me</a
					>
				</li>
			</ul>
		</div>
	{/if}
</header>
