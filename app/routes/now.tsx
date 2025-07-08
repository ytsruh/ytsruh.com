import PageTitle from "~/components/PageTitle";
import { Tag } from "lucide-react";

export default function Now() {
  return (
    <section className="w-full">
      <PageTitle
        title="Now"
        description="A now page. An overview of whats going on right now and what the plans are for the year."
      />
      <ul className="space-y-4 py-5">
        <li className="flex items-center">
          <div className="icon mr-5">
            <Tag size="36" />
          </div>
          <p>
            Working at <a href="http://www.lseg.com" className="text-theme/75" target="_blank">LSEG</a> in the
            digital team
          </p>
        </li>
        <li className="flex items-center">
          <div className="icon mr-5">
            <Tag size="36" />
          </div>
          <p>Improving my fitness</p>
        </li>
        <li className="flex items-center">
          <div className="icon mr-5">
            <Tag size="36" />
          </div>
          <p>Improving my Go skills</p>
        </li>
      </ul>
      <div className="grid grid-cols-1 gap-5 py-5 md:grid-cols-2 md:py-10 lg:grid-cols-3">
        <div>
          <span className="mb-1 block h-2 w-12 bg-theme"></span>
          <h2 className="text-3xl font-bold">Project</h2>
          <p className="py-2">
            My main goal in 2025 is to build out finly into a viable & usable project. Personal & market
            finances are a hobby of mine and I want to build something that can help others. I'm also
            using it as an opportunity to build my Go skills.
          </p>
        </div>
        <div>
          <span className="mb-1 block h-2 w-12 bg-theme"></span>
          <h2 className="text-3xl font-bold">TypeScript</h2>
          <p className="py-2">
            After falling out of love with React, NextJS and the JavaScript ecosystem in 2024, I've been
            using Svelte wherever I've felt JS/TS is needed / the best tool.
          </p>
        </div>
        <div>
          <span className="mb-1 block h-2 w-12 bg-theme"></span>
          <h2 className="text-3xl font-bold">Fitness</h2>
          <p className="py-2">
            My fitness goal this year is to run a 10k in under 60 minutes. Despite doing numerous 5k's
            and beeating 30 mins in 2024, I was not able to beat 60 mins.
          </p>
        </div>
      </div>
      <p className="py-10 text-lg">
        What is a now page? Click <a className="text-secondary" href="https://nownownow.com/about">here</a> to
        find out.
      </p>
    </section>
  );
}