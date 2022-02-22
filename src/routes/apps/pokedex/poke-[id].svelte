<script context="module">
  import { getPokemonById } from "./pokestore";
  export async function load({ params }) {
    let id = params.id;
    const pokeman = await getPokemonById(id);
    return { props: { pokeman } };
  }
</script>

<script>
  import Nav from "../../../lib/pokedex/nav.svelte";
  export let pokeman;
  const type = pokeman.types[0].type.name;
</script>

<svelte:head>
  <title>Pokedex - {pokeman.name}</title>
</svelte:head>

<div class="p-8 max-w-6xl mx-auto">
  <Nav />
  <div class="flex flex-col items-center">
    <h1 class="text-4xl text-center my-8 uppercase">{pokeman.name}</h1>
    <p>
      Type: <strong class="capitalize">{type}</strong> | Height: <strong>{pokeman.height}</strong>
      | Weight: <strong>{pokeman.weight}</strong>
    </p>
    <img class="card-image h-96 w-96" src={pokeman.sprites["front_default"]} alt={pokeman.name} />
    <a href="/apps/pokedex" class="bg-gray-400 text-white text-center px-5 py-2 rounded-md w-1/3">
      &#8592 Back
    </a>
  </div>
</div>
