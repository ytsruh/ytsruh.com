<script context="module">
  export function load({ error, status }) {
    return {
      props: {
        message: error.message,
        status, // same as status: status
      },
    };
  }
</script>

<script>
  import Error from "../lib/Error.svelte"; // your own Error screen component
  import NotFound from "../lib/NotFound.svelte"; // your own 404 screen component

  export let message;
  export let status;
</script>

{#if status == 404}
  <!-- Used '==' instead of '===' to match string/number status code (just to be sure) -->
  <NotFound />
{:else}
  <Error {message} {status} />
{/if}
