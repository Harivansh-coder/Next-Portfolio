import Image from "next/image";
import React from "react";
import userData from "../constants/data";

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-24 text-center md:text-left">
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900 h-full px-6 py-12 lg:flex lg:justify-center lg:items-center">
        <div className="grid lg:grid-cols-3 gap-5">
          {userData.projects.map((proj) => (
            <div className="w-full max-w-md mx-auto" key={proj.id}>
              <ProjectCard
                title={proj.title}
                link={proj.link}
                imgUrl={proj.imgUrl}
                number={proj.id}
                key={proj.id}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({
  title,
  link,
  imgUrl,
  number,
}: {
  title: string;
  link: string;
  imgUrl: string;
  number: any;
}) => {
  return (
    <a href={link} className="w-full block shadow-2xl">
      <div className="relative overflow-hidden">
        <div className="h-72 object-cover">
          <Image
            src={imgUrl}
            alt="portfolio"
            width={500}
            height={500}
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full "
          />
        </div>
        <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
          {title}
        </h1>
        <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
          {number.length === 1 ? "0" + number : number}
        </h1>
      </div>
    </a>
  );
};
