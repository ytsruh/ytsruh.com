<script context="module">
  import FaEnvelope from "svelte-icons/fa/FaEnvelope.svelte";
  import FaLinkedin from "svelte-icons/fa/FaLinkedin.svelte";
  import FaTwitter from "svelte-icons/fa/FaTwitter.svelte";
  import FaGithub from "svelte-icons/fa/FaGithub.svelte";
</script>

<div class="flex space-x-5">
  <a class="icon" href="mailto:chris@ytsruh.com" aria-label="Contact by email">
    <FaEnvelope />
  </a>
  <a
    class="icon"
    href="https://www.linkedin.com/in/chrishurst2/"
    target="_blank"
    aria-label="Find me on LinkedIn"
  >
    <FaLinkedin />
  </a>
  <a
    class="icon"
    href="https://www.twitter.com/the_chrishurst"
    target="_blank"
    aria-label="Find me on Twitter"
  >
    <FaTwitter />
  </a>
  <a class="icon" href="https://github.com/ytsruh" target="_blank" aria-label="Find me on Github">
    <FaGithub />
  </a>
</div>

<style>
  .icon {
    color: white;
    width: 48px;
    height: 48px;
  }
</style>
