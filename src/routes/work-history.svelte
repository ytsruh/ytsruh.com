<script context="module">
  // Since there's no dynamic data here, we can prerender
  // it so that it gets served as a static asset in prod
  export const prerender = true;
</script>

<svelte:head>
  <title>Work History | ytsruh.com</title>
  <meta name="description" content="ytsruh.com Work History Page" />
</svelte:head>

<div class="container mt-32 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
  <section class="w-full">
    <h2 id="work" class="secondary-title">Work History</h2>
    <p class="section-paragraph">
      I have a range of experience working in digital agenices as well multinational companies in various
      disiplines of digital & marketing.
    </p>
    <div class="space-y-12 my-16">
      <!-- work -->
      <div
        class="w-full border border-nav p-16 lg:px-16 lg:py-16 lg:space-x-32 flex flex-row justify-center lg:justify-start flex-wrap lg:flex-nowrap"
      >
        <!-- logo -->
        <div class="m-6 lg:mb-0 grid grid-cols-1 place-content-center md:basis-1/3">
          <img src="img/lseg.svg" alt="London Stock Exchange Logo" width="100%" />
        </div>
        <!-- info -->
        <div class="flex flex-wrap justify-center text-center lg:text-left lg:block md:basis-2/3">
          <h3 class="text-white text-3xl font-semibold">London Stock Exchange Group</h3>

          <div class="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
            <div class="badge">Oct 21 - Current</div>
            <div class="badge">Digital Enablement Manager</div>
          </div>

          <p class="text-secondary">
            Acting as product owner for all marketing websites in the group. Working with multiple development
            teams to support, maintain & enhance the Adobe & Drupal platforms.
          </p>
        </div>
      </div>

      <!-- work -->
      <div
        class="w-full border border-nav p-16 lg:px-16 lg:py-20 lg:space-x-32 flex flex-row justify-center lg:justify-start flex-wrap lg:flex-nowrap"
      >
        <!-- logo -->
        <div class="m-6 lg:mb-0 grid grid-cols-1 place-content-center md:basis-1/3">
          <img src="img/refinitiv.jpeg" alt="London Stock Exchange Logo" width="100%" />
        </div>
        <!-- info -->
        <div class="flex flex-wrap justify-center text-center lg:text-left lg:block md:basis-2/3">
          <h3 class="text-white text-3xl font-semibold">Refinitiv</h3>

          <div class="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
            <div class="badge">Jan 19 - Oct 21</div>
            <div class="badge">Digital Localisation Manager</div>
          </div>

          <p class="text-secondary">
            Responsible for management of 6 local langauge websites built using Adobe Experience Manager.
            Secondary responsibility for website perfromance channels such as SEO, Paid Search & Social.
          </p>
        </div>
      </div>

      <!-- work -->
      <div
        class="w-full border border-nav p-16 lg:px-16 lg:py-20 lg:space-x-32 flex flex-row justify-center lg:justify-start flex-wrap lg:flex-nowrap"
      >
        <!-- logo -->
        <div class="m-6 lg:mb-0 grid grid-cols-1 place-content-center md:basis-1/3">
          <img src="img/thomson-reuters.png" alt="London Stock Exchange Logo" width="100%" />
        </div>
        <!-- info -->
        <div class="flex flex-wrap justify-center text-center lg:text-left lg:block md:basis-2/3">
          <h3 class="text-white text-3xl font-semibold">Thomson Reuters</h3>

          <div class="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
            <div class="badge">Dec 16 - Jan 19</div>
            <div class="badge">Head of Digital - Middle East</div>
          </div>

          <p class="text-secondary">
            Lead & revenue generating responsibility for the MENA region of Thomson Reuters using all
            available digtial channels. Digital analytics and reporting dashboard integrated into CRM and
            sales dashboards.
          </p>
        </div>
      </div>
    </div>
  </section>
</div>
