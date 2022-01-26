<script context="module">
  import PageTitle from "$lib/PageTitle.svelte";
  import Project from "../lib/Project.svelte";
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
      <Project img="img/marriages.png" alt="project1" />
      <img src="img/homeflix.png" class="w-full bg-nav h-36 lg:h-72 object-cover" alt="project2" />
      <img
        src="img/refinitiv.png"
        class="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover"
        alt="project3"
      />
      <img
        src="img/emirates.png"
        class="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover"
        alt="project4"
      />
      <img
        src="img/tag-manager.png"
        class="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover"
        alt="project5"
      />
      <img
        src="img/tr-mena.png"
        class="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover"
        alt="project6"
      />
    </div>
  </section>
</div>
