<script>
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
  import "../index.css";

  import { onMount } from "svelte";
  import { page } from "$app/stores";

  onMount(() => {
    //Run on homepage only
    if ($page.url.pathname === "/") {
      updateList();
      window.addEventListener("scroll", () => {
        updateList();
      });
    }
  });

  function updateList() {
    const titles = [...document.querySelectorAll("h1, h2")].sort((a, b) => {
      return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
    });
    console.log(titles);
    document.querySelectorAll(".selected-circle").forEach((c) => c.classList.remove("selected-circle"));

    document
      .querySelectorAll(".nav-dot")
      [[...document.querySelectorAll("h1, h2")].indexOf(titles[0])].classList.add("selected-circle");
  }
</script>

<main>
  <Header />
  <body class="bg-body text-white font-raleway main-height">
    <slot />
  </body>
  <Footer />
</main>

<style>
  .main-height {
    min-height: 75vh;
  }
</style>
