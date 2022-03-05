<script context="module">
  import projects from "../../lib/projects.json";
  import PageTitle from "$lib/PageTitle.svelte";
  export async function load({ params }) {
    const project = projects.filter((p) => p.id == params.id);
    return { props: { project: project[0] } };
  }
</script>

<script>
  export let project;
</script>

<svelte:head>
  <title>Project - {project.name}</title>
</svelte:head>

<div class="container mt-32 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
  <div class="w-full">
    <PageTitle title={project.name} intro={project.description} />
    <div class="flex flex-row flex-wrap py-10">
      <div class="flex-none w-full md:basis-1/2 p-5">
        <img src={`../${project.img}`} class="w-full bg-nav h-72 object-cover" alt={project.name} />
      </div>
      <div class="flex-none w-full md:basis-1/2 p-5">
        <h2 class="text-white text-xl">Project Links</h2>
        <div class="my-5 flex flex-row">
          {#if project.link}
            <a
              href={project.link}
              target="_blank"
              class="bg-theme text-white text-center px-4 py-3 mx-2 rounded-md transition"
              >View this project</a
            >
          {/if}
          {#if project.github}
            <a
              href={project.github}
              target="_blank"
              class="bg-theme text-white text-center px-4 py-3 mx-2 rounded-md transition">View on Github</a
            >
          {/if}
        </div>
        <div class="my-5">
          <h2 class="text-white text-xl">Technologies</h2>
          {#if project.technologies}
            {#each project.technologies as tech}
              <button class="badge m-2">{tech}</button>
            {/each}
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
