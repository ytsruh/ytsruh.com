<script context="module">
  import PageTitle from "$lib/PageTitle.svelte";
  import WorkItem from "$lib/WorkItem.svelte";
  // Since there's no dynamic data here, we can prerender
  // it so that it gets served as a static asset in prod
  export const prerender = true;

  const introText =
    "With over 10 years of expereince in digital marketing I am a strong and well rounded leader of teams. I have a range of experience working in digital agenices as well multinational companies in various disiplines of digital & marketing.";
</script>

<svelte:head>
  <title>Work History | ytsruh.com</title>
  <meta name="description" content={introText} />
</svelte:head>

<div class="container mt-32 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
  <section class="w-full">
    <PageTitle title="Work History" intro={introText} />
    <div class="space-y-12 my-16">
      <WorkItem
        title="Digital Enablement Manager"
        company="London Stock Exchange"
        time="Oct 21 - Current"
        desc="Acting as product owner for all marketing websites in the group. Working with multiple development teams to support, maintain & enhance the Adobe & Drupal platforms."
        logo="img/lseg.svg"
      />
      <WorkItem
        title="Digital Localisation Manager"
        company="Refinitiv"
        time="Jan 19 - Oct 21"
        desc="Responsible for management of 6 local langauge websites built using Adobe Experience Manager. Secondary responsibility for website perfromance channels such as SEO, Paid Search & Social."
        logo="img/refinitiv.jpeg"
      />
      <WorkItem
        title="Head of Digital - Middle East"
        company="Thomson Reuters"
        time="Dec 16 - Jan 19"
        desc="Lead & revenue generating responsibility for the MENA region of Thomson Reuters using all available digtial channels. Digital analytics and reporting dashboard integrated into CRM and sales dashboards."
        logo="img/thomson-reuters.png"
      />
      <WorkItem
        title="Account Manager - Middle East"
        company="Latitude Digital Marketing"
        time="Jun 17 - Jan 19"
        desc="Responsible for account management for a selection of key strategic accounts in the region across Travel, Ecommerce & Financial sectors. Advising clients on all Paid & Organic Digital channels to increase business & website performance"
        logo="img/latitude.png"
      />
    </div>
  </section>
</div>
