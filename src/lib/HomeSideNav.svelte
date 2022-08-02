<script>
  import { onMount } from "svelte";
  onMount(() => {
    updateList();
    window.addEventListener("scroll", () => {
      updateList();
    });
  });

  function updateList() {
    const titles = [...document.querySelectorAll("h1, h2")].sort((a, b) => {
      return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
    });
    document.querySelectorAll(".selected-circle").forEach((c) => c.classList.remove("selected-circle"));
    document
      .querySelectorAll(".nav-dot")
      [[...document.querySelectorAll("h1, h2")].indexOf(titles[0])].classList.add("selected-circle");
  }
</script>

<nav class="lg:mr-24 lg:w-4 fixed left-percentage hidden xl:block">
  <div class="absolute left-50 transform -translate-x-1/2 space-y-6 mt-36">
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="#" class="nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav bg-body">
      <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Home</span>
    </a>
    <a href="#projects" class="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
      <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Projects</span>
    </a>
    <a href="#work" class="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
      <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Work</span>
    </a>
    <a href="#contact" class="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
      <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Contact</span>
    </a>
  </div>
</nav>

<style>
  .nav-dot {
    transition: background 200ms, border-color 200ms;
  }

  .selected-circle {
    @apply border-theme bg-theme;
  }

  .nav-dot:hover span {
    opacity: 1;
  }
</style>
