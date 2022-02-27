<script context="module">
  export const prerender = true;
  import Project from "../lib/Project.svelte";
  import projects from "../lib/projects.json";
</script>

<svelte:head>
  <title>Home | ytsruh.com</title>
  <meta name="description" content="ytsruh.com Homepage" />
</svelte:head>

<section>
  <!-- HERO SECTION-->
  <div class="container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
    <div class="flex flex-wrap md:flex-nowrap">
      <nav class=" lg:mr-24 lg:w-4 fixed left-percentage hidden xl:block">
        <div class="absolute left-50 transform -translate-x-1/2 space-y-6 mt-36">
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a href="#" class="nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav bg-body">
            <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Home</span>
          </a>
          <a href="#projects" class="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
            <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Projects</span>
          </a>
          <a href="#work" class="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
            <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Work</span>
          </a>
          <a href="#contact" class="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
            <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Contact</span>
          </a>
        </div>
      </nav>
      <div class="flex flex-row items-center">
        <div class="basis-full lg:basis-1/2">
          <h1 class="font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left">Chris Hurst</h1>
          <h3 class="font-bold text-3xl md:text-4xl lg:text-5xl text-center md:text-left">
            Digital Marketer & Javascript Developer
          </h3>
          <div class="w-full flex justify-center md:justify-start">
            <a
              href="#projects"
              class="px-8 py-4 bg-theme text-white font-bold mt-12 flex items-center space-x-3"
            >
              <div>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4375 11C14.4375 11.9117 14.0753 12.786 13.4307 13.4307C12.786 14.0753 11.9117 14.4375 11 14.4375C10.0883 14.4375 9.21398 14.0753 8.56932 13.4307C7.92466 12.786 7.5625 11.9117 7.5625 11C7.5625 10.0883 7.92466 9.21398 8.56932 8.56932C9.21398 7.92466 10.0883 7.5625 11 7.5625C11.9117 7.5625 12.786 7.92466 13.4307 8.56932C14.0753 9.21398 14.4375 10.0883 14.4375 11Z"
                    fill="white"
                  />
                  <path
                    d="M0 11C0 11 4.125 3.4375 11 3.4375C17.875 3.4375 22 11 22 11C22 11 17.875 18.5625 11 18.5625C4.125 18.5625 0 11 0 11ZM11 15.8125C12.2764 15.8125 13.5004 15.3055 14.403 14.403C15.3055 13.5004 15.8125 12.2764 15.8125 11C15.8125 9.72365 15.3055 8.49957 14.403 7.59705C13.5004 6.69453 12.2764 6.1875 11 6.1875C9.72365 6.1875 8.49957 6.69453 7.59705 7.59705C6.69453 8.49957 6.1875 9.72365 6.1875 11C6.1875 12.2764 6.69453 13.5004 7.59705 14.403C8.49957 15.3055 9.72365 15.8125 11 15.8125Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span>View my Projects</span>
            </a>
          </div>
        </div>

        <div class="hidden lg:block lg:basis-1/2">
          <img src="img/computer.jpg" alt="Computer screen" class="mt-12 right-0 -z-1" />
        </div>
      </div>
    </div>
  </div>
  <!-- END HERO SECTION-->
  <!-- MY PROJECTS SECTION -->
  <div class="container mt-32 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
    <section class="w-full">
      <h2 id="projects" class="secondary-title">Projects</h2>
      <p class="section-paragraph">
        I've worked on a range of high impact marketing projects in my career, in both agencies as well major
        international companies. JavaScript has been used for projects in both a professional & personal
        capacity.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {#each projects as project}
          <Project data={project} />
        {/each}
      </div>
    </section>
  </div>
  <!-- END PROJECTS SECTION -->
  <!-- WORK SECTION -->
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
              Acting as product owner for all marketing websites in the group. Working with multiple
              development teams to support, maintain & enhance the Adobe & Drupal platforms.
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
  <!-- END WORK SECTION -->
  <!-- CONTACT ME SECTION -->
  <div class="container mt-32 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
    <section class="w-full">
      <h2 id="contact" class="secondary-title">Contact me</h2>
      <p class="section-paragraph">Feel free to to contact me through any of the below methods.</p>

      <div class="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-12">
        <div class="">
          <!-- Socials -->
          <div class="flex mt-20 space-x-6">
            <!-- Mail -->
            <a href="mailto:chris@ytsruh.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                class="w-8 h-8 lg:w-12 lg:h-12"
                width="42"
                height="42"
                viewBox="0 0 50 50"
                style="fill: #000000"
              >
                <path
                  d="M 14 4 C 8.4886661 4 4 8.4886661 4 14 L 4 36 C 4 41.511334 8.4886661 46 14 46 L 36 46 C 41.511334 46 46 41.511334 46 36 L 46 14 C 46 8.4886661 41.511334 4 36 4 L 14 4 z M 13 16 L 37 16 C 37.18 16 37.349766 16.020312 37.509766 16.070312 L 27.679688 25.890625 C 26.199688 27.370625 23.790547 27.370625 22.310547 25.890625 L 12.490234 16.070312 C 12.650234 16.020312 12.82 16 13 16 z M 11.070312 17.490234 L 18.589844 25 L 11.070312 32.509766 C 11.020312 32.349766 11 32.18 11 32 L 11 18 C 11 17.82 11.020312 17.650234 11.070312 17.490234 z M 38.929688 17.490234 C 38.979688 17.650234 39 17.82 39 18 L 39 32 C 39 32.18 38.979687 32.349766 38.929688 32.509766 L 31.400391 25 L 38.929688 17.490234 z M 20 26.410156 L 20.890625 27.310547 C 22.020625 28.440547 23.510234 29 24.990234 29 C 26.480234 29 27.959844 28.440547 29.089844 27.310547 L 29.990234 26.410156 L 37.509766 33.929688 C 37.349766 33.979688 37.18 34 37 34 L 13 34 C 12.82 34 12.650234 33.979687 12.490234 33.929688 L 20 26.410156 z"
                  fill="white"
                />
              </svg>
            </a>
            <!-- Twitter -->
            <a href="https://www.twitter.com/the_chrishurst" target="_blank">
              <svg
                class="w-8 h-8 lg:w-12 lg:h-12"
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 0C9.40313 0 0 9.40313 0 21C0 32.5969 9.40313 42 21 42C32.5969 42 42 32.5969 42 21C42 9.40313 32.5969 0 21 0ZM31.0922 15.8297C31.1062 16.05 31.1062 16.2797 31.1062 16.5047C31.1062 23.3859 25.8656 31.3125 16.2891 31.3125C13.3359 31.3125 10.5984 30.4547 8.29219 28.9781C8.71406 29.025 9.11719 29.0437 9.54844 29.0437C11.9859 29.0437 14.2266 28.2188 16.0125 26.8219C13.725 26.775 11.8031 25.275 11.1469 23.2125C11.9484 23.3297 12.6703 23.3297 13.4953 23.1188C12.3175 22.8795 11.2588 22.2398 10.4991 21.3084C9.73949 20.377 9.32572 19.2113 9.32812 18.0094V17.9437C10.0172 18.3328 10.8281 18.5719 11.6766 18.6047C10.9633 18.1293 10.3784 17.4854 9.97365 16.7298C9.5689 15.9743 9.35683 15.1306 9.35625 14.2734C9.35625 13.3031 9.60938 12.4172 10.0641 11.6484C11.3714 13.2578 13.0028 14.5741 14.8522 15.5117C16.7016 16.4493 18.7275 16.9873 20.7984 17.0906C20.0625 13.5516 22.7063 10.6875 25.8844 10.6875C27.3844 10.6875 28.7344 11.3156 29.6859 12.3281C30.8625 12.1078 31.9875 11.6672 32.9906 11.0766C32.6016 12.2812 31.7859 13.2984 30.7031 13.9406C31.7531 13.8281 32.7656 13.5375 33.7031 13.1297C32.9953 14.1703 32.1094 15.0938 31.0922 15.8297Z"
                  fill="white"
                />
              </svg>
            </a>
            <!-- Github -->
            <a href="https://github.com/ytsruh" target="_blank">
              <svg
                width="42px"
                height="42px"
                viewBox="0 0 16 16"
                class="w-8 h-8 lg:w-12 lg:h-12"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path
                  fill="white"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- END CONTACT ME SECTION -->
</section>

<style>
</style>
