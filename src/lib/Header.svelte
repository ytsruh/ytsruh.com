<script>
  import { onMount } from "svelte";
  export let menuOpen = false;
  let page = "";
  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  onMount(() => {
    page = window.location.pathname;
  });
</script>

<header class="py-6">
  <div class="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
    <a href="/" class="text-lg font-bold">ytsruh.com</a>
    <div class="hidden md:flex items-center space-x-6 xl:space-x-12">
      <a href="/" class={page === "/" ? "text-theme" : ""}>Home</a>
      <a href="/projects" class={page.includes("/projects") ? "text-theme" : ""}>Projects</a>
      <a href="/work-history" class={page.includes("/work-history") ? "text-theme" : ""}>Work History</a>
      <a href="https://www.youtube.com/channel/UCX1Oo4M36jbSrnC9Ui_D2CA">YouTube</a>
      <a href="/now" class={page.includes("/now") ? "text-theme" : ""}>Now</a>
      <a href="/contact"><button class="px-6 py-2 bg-theme font-bold">Contact me</button></a>
    </div>
    <div class="md:hidden" on:click={() => toggleMenu()}>
      <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z"
          fill="white"
        />
      </svg>
    </div>
  </div>
  {#if menuOpen === true}
    <div>
      <ul class="text-center py-3">
        <li class="text-lg my-2">
          <a href="/" class={page === "/" ? "text-theme" : ""}>Home</a>
        </li>
        <li class="text-lg my-2">
          <a href="/projects" class={page.includes("/projects") ? "text-theme" : ""}>Projects</a>
        </li>
        <li class="text-lg my-2">
          <a href="/work-history" class={page.includes("/work-history") ? "text-theme" : ""}>Work History</a>
        </li>
        <li class="text-lg my-2">
          <a href="https://ytsruh.hashnode.dev/">Blog</a>
        </li>
        <li class="text-lg my-2">
          <a href="/now" class={page.includes("/now") ? "text-theme" : ""}>Now</a>
        </li>
        <li class="text-lg my-2">
          <a href="/contact" class={page.includes("/contact") ? "text-theme" : ""}>Contact me</a>
        </li>
      </ul>
    </div>
  {/if}
</header>
