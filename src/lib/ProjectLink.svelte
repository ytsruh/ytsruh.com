<script>
  export let data;
</script>

<div>
  <h5 class="text-center text-white py-5 text-2xl">{data.name}</h5>
  <img src={data.img} class="w-full bg-nav h-36 lg:h-72 object-cover" alt={data.alt} />
  <a href={`/projects/${data.id}`}><button class="my-6 px-6 py-3 w-full bg-theme font-bold">View</button></a>
</div>
