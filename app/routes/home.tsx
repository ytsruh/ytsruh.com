import { Link } from "react-router";
import ContactIcons from "~/components/ContactIcons";
import { projects } from "./projects";

export default function Home() {
  return (
    <section className="flex w-full flex-col gap-y-5">
      {/* HERO SECTION*/}
      <div id="hero" className="container mx-auto flex w-full items-center justify-between">
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="flex flex-row items-center">
            <div className="basis-full lg:basis-1/2">
              <h1 className="text-center text-5xl font-bold md:text-left md:text-6xl lg:text-7xl">
                Chris Hurst
              </h1>
              <h2 className="text-center text-3xl font-bold md:text-left md:text-4xl lg:text-5xl">
                Digital Marketer & TypeScript / Go Developer
              </h2>
              <div className="flex w-full justify-center md:justify-start">
                <Link
                  to="/projects"
                  className="mt-12 flex items-center space-x-3 bg-theme px-8 py-4 font-bold text-white">
                  <div>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14.4375 11C14.4375 11.9117 14.0753 12.786 13.4307 13.4307C12.786 14.0753 11.9117 14.4375 11 14.4375C10.0883 14.4375 9.21398 14.0753 8.56932 13.4307C7.92466 12.786 7.5625 11.9117 7.5625 11C7.5625 10.0883 7.92466 9.21398 8.56932 8.56932C9.21398 7.92466 10.0883 7.5625 11 7.5625C11.9117 7.5625 12.786 7.92466 13.4307 8.56932C14.0753 9.21398 14.4375 10.0883 14.4375 11Z"
                        fill="white"></path>
                      <path
                        d="M0 11C0 11 4.125 3.4375 11 3.4375C17.875 3.4375 22 11 22 11C22 11 17.875 18.5625 11 18.5625C4.125 18.5625 0 11 0 11ZM11 15.8125C12.2764 15.8125 13.5004 15.3055 14.403 14.403C15.3055 13.5004 15.8125 12.2764 15.8125 11C15.8125 9.72365 15.3055 8.49957 14.403 7.59705C13.5004 6.69453 12.2764 6.1875 11 6.1875C9.72365 6.1875 8.49957 6.69453 7.59705 7.59705C6.69453 8.49957 6.1875 9.72365 6.1875 11C6.1875 12.2764 6.69453 13.5004 7.59705 14.403C8.49957 15.3055 9.72365 15.8125 11 15.8125Z"
                        fill="white"></path>
                    </svg>
                  </div>
                  <span>View my Projects</span>
                </Link>
              </div>
            </div>

            <div className="hidden lg:block lg:basis-1/2">
              <img src="/img/computer.webp" alt="Computer screen" className="-z-1 right-0 mt-12" />
            </div>
          </div>
        </div>
      </div>
      {/* END HERO SECTION*/}
      {/* MY PROJECTS SECTION */}
      <div className="container mx-auto flex w-full items-center justify-between">
        <section className="w-full">
          <span className="mb-1 block h-2 w-12 bg-theme"></span>
          <h2 id="projects" className="text-3xl font-bold">
            Projects
          </h2>
          <p className="my-6 w-full text-lg text-secondary">
            I've worked on a number of projects, both client & server side. I have featured some of them below
            to show new technologies that have been used or where a project is deployed.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.id}>
                <h3 className="py-5 text-center text-2xl text-white">{project.name}</h3>
                <img
                  src={project.img}
                  className="h-36 w-full bg-nav object-cover xl:h-56"
                  alt={project.description}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
      {/* END PROJECTS SECTION */}
      {/* WORK SECTION */}
      <div className="container mx-auto flex w-full items-center justify-between py-10">
        <section className="w-full">
          <span className="mb-1 block h-2 w-12 bg-theme"></span>
          <h2 id="work" className="text-3xl font-bold">
            Work History
          </h2>
          <p className="my-6 w-full text-lg text-secondary">
            With over 10 years of expereince in digital marketing I am a strong and well rounded leader of
            teams. I have a range of experience working in digital agenices as well multinational companies in
            various disiplines of digital & marketing.
          </p>
          <div className="my-16 space-y-12">
            {/* work */}
            <div className="flex w-full flex-row flex-wrap justify-center border border-nav p-16 lg:flex-nowrap lg:justify-start lg:space-x-32 lg:px-16 lg:py-16">
              {/* logo */}
              <div className="m-6 grid grid-cols-1 place-content-center md:basis-1/3 lg:mb-0">
                <img src="/img/lseg.webp" alt="London Stock Exchange Logo" width="100%" />
              </div>
              {/* info */}
              <div className="flex flex-wrap justify-center text-center md:basis-2/3 lg:block lg:text-left">
                <h3 className="text-3xl font-semibold text-white">London Stock Exchange Group</h3>
                <div className="mb-8 mt-6 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start">
                  <div className="badge">Oct 21 - Current</div>
                  <div className="badge">Digital Strategy & Enablement Manager</div>
                </div>
              </div>
            </div>

            {/* work */}
            <div className="flex w-full flex-row flex-wrap justify-center border border-nav p-16 lg:flex-nowrap lg:justify-start lg:space-x-32 lg:px-16 lg:py-20">
              {/* logo */}
              <div className="m-6 grid grid-cols-1 place-content-center md:basis-1/3 lg:mb-0">
                <img src="/img/refinitiv.webp" alt="Refinitiv Logo" width="100%" />
              </div>
              {/* info */}
              <div className="flex flex-wrap justify-center text-center md:basis-2/3 lg:block lg:text-left">
                <h3 className="text-3xl font-semibold text-white">Refinitiv</h3>
                <div className="mb-8 mt-6 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start">
                  <div className="badge">Jan 19 - Oct 21</div>
                  <div className="badge">Digital Localisation Manager</div>
                </div>
              </div>
            </div>

            {/* work */}
            <div className="flex w-full flex-row flex-wrap justify-center border border-nav p-16 lg:flex-nowrap lg:justify-start lg:space-x-32 lg:px-16 lg:py-20">
              {/* logo */}
              <div className="m-6 grid grid-cols-1 place-content-center md:basis-1/3 lg:mb-0">
                <img src="/img/thomson-reuters.webp" alt="Thomson Reuters Logo" width="100%" />
              </div>
              {/* info */}
              <div className="flex flex-wrap justify-center text-center md:basis-2/3 lg:block lg:text-left">
                <h3 className="text-3xl font-semibold text-white">Thomson Reuters</h3>
                <div className="mb-8 mt-6 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start">
                  <div className="badge">Dec 16 - Jan 19</div>
                  <div className="badge">Head of Digital - Middle East</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* END WORK SECTION */}
      {/* CONTACT ME SECTION */}
      <div className="container mx-auto flex w-full items-center justify-between">
        <section className="w-full">
          <span className="mb-1 block h-2 w-12 bg-theme"></span>
          <h2 id="contact" className="text-3xl font-bold">
            Contact me
          </h2>
          <p className="my-6 w-full text-lg text-secondary">
            Feel free to to contact me through any of the below methods.
          </p>
          <ContactIcons />
        </section>
      </div>
      {/* END CONTACT ME SECTION */}
    </section>
  );
}
