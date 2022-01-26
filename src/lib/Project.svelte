<script>
  export let modal = false;
  export let img;
  export let alt;
  const toggle = (event) => {
    modal = !modal;
  };
</script>

<img src={img} class="w-full bg-nav h-36 lg:h-72 object-cover" {alt} on:click={toggle} />

<div
  class={`${
    modal ? "" : "hidden"
  } fixed z-50 inset-0 bg-body bg-opacity-75 overflow-y-auto h-full w-full px-4`}
>
  <div class="relative top-40 mx-auto shadow-lg rounded-md bg-body max-w-md">
    <!-- Modal header -->
    <div class="flex justify-between items-center bg-theme text-white text-xl rounded-t-md px-4 py-2">
      <h2>Modal header</h2>
      <button on:click={toggle}>x</button>
    </div>

    <!-- Modal body -->
    <div class="max-h-48 overflow-y-scroll p-4">
      <p>Scrollable modal body</p>
      <p>Scrollable modal body</p>
      <p>Scrollable modal body</p>
      <p>Scrollable modal body</p>
      <p>Scrollable modal body</p>
      <p>Scrollable modal body</p>
      <p>Scrollable modal body</p>
      <p>Scrollable modal body</p>
      <p>Scrollable modal body</p>
      <p>Scrollable modal body</p>
    </div>

    <!-- Modal footer -->
    <div class="px-4 py-2 border-t border-t-white flex justify-end items-center space-x-4">
      <button class="bg-theme text-white px-4 py-2 rounded-md transition" on:click={toggle}>Close</button>
    </div>
  </div>
</div>
