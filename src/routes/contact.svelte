<script context="module">
  // Since there's no dynamic data here, we can prerender
  // it so that it gets served as a static asset in prod
  export const prerender = true;
  import ContactIcons from "$lib/ContactIcons.svelte";
</script>

<svelte:head>
  <title>Contact | ytsruh.com</title>
  <meta name="description" content="ytsruh.com Contact Page" />
</svelte:head>

<div class="container flex mt-20 lg:mt-36 mx-auto px-8 md:px-14 lg:px-24 w-full">
  <section class="w-full">
    <h2 id="contact" class="secondary-title">Contact me</h2>
    <p class="section-paragraph">Feel free to to contact me through any of the below methods.</p>
    <ContactIcons />
  </section>
</div>
