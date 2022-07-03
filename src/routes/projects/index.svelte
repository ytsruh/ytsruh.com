<script context="module">
  import PageTitle from "$lib/PageTitle.svelte";
  import ProjectLink from "$lib/ProjectLink.svelte";
  import projects from "../../lib/projects.json";
  export const prerender = true;
  const introText =
    "I've worked on a number of JavaScript projects, both client & server side. I have featured some of them below to show new technologies that have been used or where a project is deployed.";
</script>

<svelte:head>
  <title>Projects | ytsruh.com</title>
  <meta name="description" content="ytsruh.com Projects Page" />
</svelte:head>

<div class="container mt-20 lg:mt-36 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
  <section class="w-full">
    <PageTitle title="Projects" intro={introText} />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-24">
      {#each projects as project}
        <ProjectLink data={project} />
      {/each}
    </div>
  </section>
</div>
