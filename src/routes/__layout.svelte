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
    document.querySelectorAll(".selected-circle").forEach((c) => c.classList.remove("selected-circle"));
    document
      .querySelectorAll(".nav-dot")
      [[...document.querySelectorAll("h1, h2")].indexOf(titles[0])].classList.add("selected-circle");
  }
</script>

<svelte:head>
  <!-- Google Tag Manager -->
  <script>
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-W8HB92T");
  </script>
  <!-- End Google Tag Manager -->
</svelte:head>

<main>
  <!-- Google Tag Manager (noscript) -->
  <noscript>
    <iframe
      title="Google Tag Manager"
      src="https://www.googletagmanager.com/ns.html?id=GTM-W8HB92T"
      height="0"
      width="0"
      style="display:none;visibility:hidden"
    />
  </noscript>
  <!-- End Google Tag Manager (noscript) -->
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
