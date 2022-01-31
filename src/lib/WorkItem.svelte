<script>
  export let logo;
  export let company;
  export let time;
  export let title;
  export let desc;
</script>

<div
  class="w-full border border-nav p-16 lg:px-16 lg:py-16 lg:space-x-32 flex flex-row justify-center lg:justify-start flex-wrap lg:flex-nowrap"
>
  <!-- logo -->
  <div class="m-6 lg:mb-0 grid grid-cols-1 place-content-center md:basis-1/3">
    <img src={logo} alt={company} width="100%" />
  </div>
  <!-- info -->
  <div class="flex flex-wrap justify-center text-center lg:text-left lg:block md:basis-2/3">
    <h3 class="text-white text-3xl font-semibold">{company}</h3>
    <div class="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
      <div class="badge">{time}</div>
      <div class="badge">{title}</div>
    </div>
    <p class="text-secondary">
      {desc}
    </p>
  </div>
</div>
