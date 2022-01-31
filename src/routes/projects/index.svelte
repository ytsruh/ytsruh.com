<script context="module">
  import PageTitle from "$lib/PageTitle.svelte";
  import ProjectLink from "$lib/ProjectLink.svelte";
  import projects from "../../lib/projects.json";
  export const prerender = true;
  const introText =
    "I've worked on a range of high impact marketing projects in my career, in both agencies as well major international companies. JavaScript has been used for projects in both a professional & personal capacity.";
</script>

<svelte:head>
  <title>Projects | ytsruh.com</title>
  <meta name="description" content="ytsruh.com Projects Page" />
</svelte:head>

<div class="container mt-32 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
  <section class="w-full">
    <PageTitle title="Projects" intro={introText} />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-24">
      {#each projects as project}
        <ProjectLink data={project} />
      {/each}
    </div>
  </section>
</div>
