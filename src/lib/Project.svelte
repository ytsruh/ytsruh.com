<script>
  export let modal = false;
  const toggle = (event) => {
    modal = !modal;
  };
  export let data;
</script>

<div on:click={toggle}>
  <h5 class="text-center text-white py-5 text-2xl">{data.name}</h5>
  <img src={data.img} class="w-full bg-nav h-36 lg:h-72 object-cover" alt={data.alt} />
</div>

<div
  class={`${
    modal ? "" : "hidden"
  } fixed z-50 inset-0 bg-body bg-opacity-75 overflow-y-auto h-full w-full px-4`}
>
  <div class="relative top-40 mx-auto shadow-lg rounded-md bg-body max-w-md">
    <!-- Modal header -->
    <div class="flex justify-between items-center bg-theme text-white text-xl rounded-t-md p-5">
      <h2>{data.name}</h2>
      <button on:click={toggle}>x</button>
    </div>

    <!-- Modal body -->
    <div class="p-8">
      <p class="text-secondary">{data.description}</p>
    </div>

    <!-- Modal footer -->
    <div class="p-5 border-t border-t-white flex justify-end items-center space-x-4">
      <button class="bg-theme text-white px-4 py-2 rounded-md transition" on:click={toggle}>Close</button>
    </div>
  </div>
</div>
