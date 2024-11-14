<script lang="ts">
	import Contacticons from '@lib/contacticons.svelte';
	import computer from '@lib/img/computer.webp';
	import thomsonreuters from '@lib/img/thomson-reuters.webp';
	import refinitiv from '@lib/img/refinitiv.webp';
	import lseg from '@lib/img/lseg.webp';
	import { projects } from './projects/projects';
</script>

<svelte:head>
	<title>Home | ytsruh.com</title>
	<meta
		name="description"
		content="Personal website & portfolio of Chris Hurst a digital marketer & TypeScript/Go developer. Typescript, Go and some other languages thrown in"
	/>
</svelte:head>

<section class="w-full">
	<!-- HERO SECTION-->
	<div
		id="hero"
		class="container mx-auto mt-16 flex w-full items-center justify-between px-8 md:px-14 lg:px-24"
	>
		<div class="flex flex-wrap md:flex-nowrap">
			<div class="flex flex-row items-center">
				<div class="basis-full lg:basis-1/2">
					<h1 class="text-center text-5xl font-bold md:text-left md:text-6xl lg:text-7xl">
						Chris Hurst
					</h1>
					<h2 class="text-center text-3xl font-bold md:text-left md:text-4xl lg:text-5xl">
						Digital Marketer & TypeScript / Go Developer
					</h2>
					<div class="flex w-full justify-center md:justify-start">
						<a
							href="/projects"
							class="mt-12 flex items-center space-x-3 bg-theme px-8 py-4 font-bold text-white"
						>
							<div>
								<svg
									width="22"
									height="22"
									viewBox="0 0 22 22"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M14.4375 11C14.4375 11.9117 14.0753 12.786 13.4307 13.4307C12.786 14.0753 11.9117 14.4375 11 14.4375C10.0883 14.4375 9.21398 14.0753 8.56932 13.4307C7.92466 12.786 7.5625 11.9117 7.5625 11C7.5625 10.0883 7.92466 9.21398 8.56932 8.56932C9.21398 7.92466 10.0883 7.5625 11 7.5625C11.9117 7.5625 12.786 7.92466 13.4307 8.56932C14.0753 9.21398 14.4375 10.0883 14.4375 11Z"
										fill="white"
									></path>
									<path
										d="M0 11C0 11 4.125 3.4375 11 3.4375C17.875 3.4375 22 11 22 11C22 11 17.875 18.5625 11 18.5625C4.125 18.5625 0 11 0 11ZM11 15.8125C12.2764 15.8125 13.5004 15.3055 14.403 14.403C15.3055 13.5004 15.8125 12.2764 15.8125 11C15.8125 9.72365 15.3055 8.49957 14.403 7.59705C13.5004 6.69453 12.2764 6.1875 11 6.1875C9.72365 6.1875 8.49957 6.69453 7.59705 7.59705C6.69453 8.49957 6.1875 9.72365 6.1875 11C6.1875 12.2764 6.69453 13.5004 7.59705 14.403C8.49957 15.3055 9.72365 15.8125 11 15.8125Z"
										fill="white"
									></path>
								</svg>
							</div>
							<span>View my Projects</span>
						</a>
					</div>
				</div>

				<div class="hidden lg:block lg:basis-1/2">
					<img src={computer} alt="Computer screen" class="-z-1 right-0 mt-12" />
				</div>
			</div>
		</div>
	</div>
	<!-- END HERO SECTION-->
	<!-- MY PROJECTS SECTION -->
	<div
		class="container mx-auto mt-32 flex w-full items-center justify-between px-8 md:px-14 lg:px-24"
	>
		<section class="w-full">
			<span class="mb-1 block h-2 w-12 bg-theme"></span>
			<h2 id="projects" class="text-3xl font-bold">Projects</h2>
			<p class="my-6 w-full text-lg text-secondary">
				I've worked on a number of projects, both client & server side. I have featured some of them
				below to show new technologies that have been used or where a project is deployed.
			</p>
			<div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each projects as project}
					<div>
						<h3 class="py-5 text-center text-2xl text-white">{project.name}</h3>
						<img
							src={project.img}
							class="h-36 w-full bg-nav object-cover xl:h-56"
							alt={project.description}
						/>
					</div>
				{/each}
			</div>
		</section>
	</div>
	<!-- END PROJECTS SECTION -->
	<!-- WORK SECTION -->
	<div
		class="container mx-auto mt-32 flex w-full items-center justify-between px-8 md:px-14 lg:px-24"
	>
		<section class="w-full">
			<span class="mb-1 block h-2 w-12 bg-theme"></span>
			<h2 id="work" class="text-3xl font-bold">Work History</h2>
			<p class="my-6 w-full text-lg text-secondary">
				With over 10 years of expereince in digital marketing I am a strong and well rounded leader
				of teams. I have a range of experience working in digital agenices as well multinational
				companies in various disiplines of digital & marketing.
			</p>
			<div class="my-16 space-y-12">
				<!-- work -->
				<div
					class="flex w-full flex-row flex-wrap justify-center border border-nav p-16 lg:flex-nowrap lg:justify-start lg:space-x-32 lg:px-16 lg:py-16"
				>
					<!-- logo -->
					<div class="m-6 grid grid-cols-1 place-content-center md:basis-1/3 lg:mb-0">
						<img src={lseg} alt="London Stock Exchange Logo" width="100%" />
					</div>
					<!-- info -->
					<div class="flex flex-wrap justify-center text-center md:basis-2/3 lg:block lg:text-left">
						<h3 class="text-3xl font-semibold text-white">London Stock Exchange Group</h3>
						<div
							class="mb-8 mt-6 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start"
						>
							<div class="badge">Oct 21 - Current</div>
							<div class="badge">Digital Strategy & Enablement Manager</div>
						</div>
					</div>
				</div>

				<!-- work -->
				<div
					class="flex w-full flex-row flex-wrap justify-center border border-nav p-16 lg:flex-nowrap lg:justify-start lg:space-x-32 lg:px-16 lg:py-20"
				>
					<!-- logo -->
					<div class="m-6 grid grid-cols-1 place-content-center md:basis-1/3 lg:mb-0">
						<img src={refinitiv} alt="Refinitiv Logo" width="100%" />
					</div>
					<!-- info -->
					<div class="flex flex-wrap justify-center text-center md:basis-2/3 lg:block lg:text-left">
						<h3 class="text-3xl font-semibold text-white">Refinitiv</h3>
						<div
							class="mb-8 mt-6 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start"
						>
							<div class="badge">Jan 19 - Oct 21</div>
							<div class="badge">Digital Localisation Manager</div>
						</div>
					</div>
				</div>

				<!-- work -->
				<div
					class="flex w-full flex-row flex-wrap justify-center border border-nav p-16 lg:flex-nowrap lg:justify-start lg:space-x-32 lg:px-16 lg:py-20"
				>
					<!-- logo -->
					<div class="m-6 grid grid-cols-1 place-content-center md:basis-1/3 lg:mb-0">
						<img src={thomsonreuters} alt="Thomson Reuters Logo" width="100%" />
					</div>
					<!-- info -->
					<div class="flex flex-wrap justify-center text-center md:basis-2/3 lg:block lg:text-left">
						<h3 class="text-3xl font-semibold text-white">Thomson Reuters</h3>
						<div
							class="mb-8 mt-6 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start"
						>
							<div class="badge">Dec 16 - Jan 19</div>
							<div class="badge">Head of Digital - Middle East</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
	<!-- END WORK SECTION -->
	<!-- CONTACT ME SECTION -->
	<div
		class="container mx-auto mt-32 flex w-full items-center justify-between px-8 md:px-14 lg:px-24"
	>
		<section class="w-full">
			<span class="mb-1 block h-2 w-12 bg-theme"></span>
			<h2 id="contact" class="text-3xl font-bold">Contact me</h2>
			<p class="my-6 w-full text-lg text-secondary">
				Feel free to to contact me through any of the below methods.
			</p>
			<Contacticons />
		</section>
	</div>
	<!-- END CONTACT ME SECTION -->
</section>
