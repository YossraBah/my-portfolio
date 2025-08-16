"use client";
import Image from "next/image";
import profle from "@/public/profile.png";
import Link from "next/link";

import Blog from "./_components/Blogs";
import ContactForm from "./_components/ContactForm";
import Portfolio from "./_components/Portfolio";
import Typewriter from "typewriter-effect";



import {
  ArrowDownTrayIcon,
  ArrowRightIcon,
  CodeBracketSquareIcon,
  NewspaperIcon,
  CircleStackIcon,
  CloudIcon,
} from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <>
      <div
        className="pt-4 lg:pt-8 bg-gradient-to-bl from-[#EADFF8] via-[#fff] to-[#E5F8F7]"
        id="about"
      >
        <div className="container mx-auto mb-32">
          <div
            className="container mx-auto bg-white rounded-2xl shadow-[0_36px_105px_0_rgba(43,56,76,0.10)] relative -mb-32"
            id="about"
          >
            <div className="flex items-center flex-col lg:flex-row lg:gap-x-32 p-4 lg:p-28">
              <div className="lg:w-2/5 flex justify-center items-center bg-[#F0F1F3] rounded-md">
                <div className="relative aspect-square flex flex-col justify-center max-h-[460px]">
                  <Image
                    src={profle}
                    alt="profile - Picto Free NextJS & Tailwindcss Template"
                    className="object-contain h-full w-auto max-w-full"
                  />
                  <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-9 flex gap-1 bg-white w-auto mx-auto  p-3 rounded shadow-[0_12px_64px_0_rgba(28,25,25,0.12)]">
                    <Link
                      href="https://www.facebook.com/yossra.bahloul/"
                      target="_blank"
                      className="flex justify-center items-center p-3 no-underline rounded group hover:bg-primary-500"
                    >
                      <i className="pi pi-facebook group-hover:text-white text-primary-500  text-2xl leading-none"></i>
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/yossra-bahloul-a49343234/"
                      target="_blank"
                      className="flex justify-center items-center p-3 no-underline rounded group hover:bg-primary-500 "
                    >
                      <i className="pi pi-linkedin group-hover:text-white text-primary-500  text-2xl leading-none"></i>
                    </Link>
                    <Link
                      href="https://github.com/YossraBah"
                      target="_blank"
                      className="flex justify-center items-center p-3 no-underline rounded group hover:bg-primary-500 "
                    >
                      <i className="pi pi-github group-hover:text-white text-primary-500  text-2xl leading-none"></i>
                    </Link>
                    <Link
                      href="https://x.com/yossra2025"
                      target="_blank"
                      className="flex justify-center items-center p-3 no-underline rounded group hover:bg-primary-500 "
                    >
                      <i className="pi pi-twitter group-hover:text-white text-primary-500  text-2xl leading-none"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="lg:w-3/5 grid mt-16 lg:mt-0">
                <div>
                  <h1 className="font-semibold text-2xl md:text-5xl flex gap-2 justify-start items-end text-primary-500">
                    <span className="font-semibold text-gray-900  md:text-[3.5rem]">
                      I'm{" "}
                    </span>
                    <Typewriter
                      options={{
                        strings: ["Yosra Bahloul", "Web developer"],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </h1>
                  <div className="text-lg text-gray-600 my-6">
                    <p className="mb-3">
                      I am a full-stack web developer entering my final year of
                      engineering studies, with a growing interest in cloud
                      technologies and DevOps.
                    </p>
                    <p>
                      I’m currently looking for a final-year internship where I
                      can deepen my cloud knowledge while contributing to
                      impactful, high-quality software solutions.
                    </p>
                  </div>
                  <div className="flex flex-col lg:flex-row items-center gap-6">
                    <Link
                      href="#projects"
                      className="p-button bg-primary-500 hover:bg-primary-600 border-primary-500 hover:border-primary-600 font-bold no-underline"
                    >
                      My Projects
                    </Link>
                    <a
                      href="/CV_Yosra_Bahloul.pdf"
                      className="p-button p-button-outlined text-primary-500 font-bold no-underline"
                      download="Yosra_Bahloul_CV.pdf"
                    >
                      <ArrowDownTrayIcon className="size-6 text-primary-500 mr-3" />
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 pb-10 lg:pb-36 pt-24 lg:pt-52" id="skills">
        <div className="container mx-auto">
          <div className="flex items-center flex-col lg:flex-row lg:gap-x-32">
            <div className="lg:w-1/2">
              <div className="">
                <h2 className="text-gray-900 font-semibold text-4xl lg:text-5xl mb-6">
                  Skills & Technologies
                </h2>
                <div className="text-gray-500 text-lg">
                  <p className="mb-4">
                    I have developed a versatile skill set through real-life
                    projects, blending frontend, backend, databases, DevOps, and
                    Agile practices. Here’s a snapshot of my technical
                    expertise:
                  </p>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla purus arcu, varius eget velit non.
                  </p> */}
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/2">
                <div className="flex flex-col gap-6 mt-8 lg:-mt-6">
                  <div className="bg-white p-8 rounded-xl group hover:shadow-[32px_32px_124px_0_rgba(43,56,76,0.10)]">
                    <div className="w-16 h-16 p-5 rounded-md bg-[#edd8ff80] group-hover:bg-primary-500 mb-8">
                      <NewspaperIcon className="size-6 text-primary-500 group-hover:text-white" />
                    </div>
                    <div className="text-xl font-semibold text-gray-900 mb-3">
                      1. Frontend Development
                    </div>
                    <p className="text-gray-600">
                      React, Next.js, Angular, Tailwind CSS, Shadcn UI, Redux
                      Toolkit, Jotai
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-xl group hover:shadow-[32px_32px_124px_0_rgba(43,56,76,0.10)]">
                    <div className="w-16 h-16 p-5 rounded-md bg-[#edd8ff80] group-hover:bg-primary-500 mb-8">
                      <CodeBracketSquareIcon className="size-6 text-primary-500 group-hover:text-white" />
                    </div>
                    <div className="text-xl font-semibold text-gray-900 mb-3">
                      2. Backend Development
                    </div>
                    <p className="text-gray-600">
                      Node.js, Express.js, NestJS, Python, REST APIs
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="flex flex-col gap-6">
                  <div className="bg-white p-8 rounded-xl group hover:shadow-[32px_32px_124px_0_rgba(43,56,76,0.10)]">
                    <div className="w-16 h-16 p-5 rounded-md bg-[#edd8ff80] group-hover:bg-primary-500 mb-8">
                      <CircleStackIcon className="size-6 text-primary-500 group-hover:text-white" />
                    </div>
                    <div className="text-xl font-semibold text-gray-900 mb-3">
                      3. Databases & SGBD
                    </div>
                    <p className="text-gray-600">
                      SQL: PostgreSQL
                    </p>
                     <p className="text-gray-600">
                      NoSQL: MongoDB, Firebase
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-xl group hover:shadow-[32px_32px_124px_0_rgba(43,56,76,0.10)]">
                    <div className="w-16 h-16 p-5 rounded-md bg-[#edd8ff80] group-hover:bg-primary-500 mb-8">
                      <CloudIcon className="size-6 text-primary-500 group-hover:text-white" />
                    </div>
                    <div className="text-xl font-semibold text-gray-900 mb-3">
                      4. DevOps & Cloud
                    </div>
                    <p className="text-gray-600">
                      Docker, GitLab CI/CD, Git, GitHub, GitLab
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 lg:py-24 bg-white" id="projects">
        <div className="container mx-auto">
          <h2 className="text-gray-900 font-semibold text-4xl lg:text-5xl mb-6 text-center">
            Projects
          </h2>
          <div className="text-gray-400 text-center text-lg lg:w-1/2 mx-auto">
            <p>
              I’ve worked on several real-life projects—both independently and
              as part of Agile teams following the Scrum framework.
            </p>
          </div>
          <Portfolio />
          {/* <div className="mt-12 text-center">
            <Link
              href="#"
              className="p-button bg-primary-500 hover:bg-primary-600 border-primary-500 hover:border-primary-600 font-bold no-underline"
            >
              More Projects
            </Link>
          </div> */}
        </div>
      </div>

      <div className="py-10 lg:py-24 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-white font-semibold text-4xl lg:text-5xl mb-6 text-center w-full lg:w-1/2 mx-auto">
            Do you have Project Idea? Let&apos;s discuss your project!
          </h2>
          <div className="text-gray-300 text-center text-lg w-full lg:w-1/2 mx-auto">
            <p>
              I’m always open to collaborating on exciting projects, let’s
              connect and make your idea into reality.
            </p>
          </div>
          <div className="mt-12 text-center">
            <Link
              href="#contact"
              className="p-button bg-primary-500 hover:bg-primary-600 border-primary-500 hover:border-primary-600 font-bold no-underline"
            >
              <span className="inline-block mr-3"> Let’s work Together</span>
              <ArrowRightIcon className="size-6 text-white" />
            </Link>
          </div>
        </div>
      </div>
      <div
        className="py-10 lg:py-24 bg-gradient-to-bl from-[#E5F8F7] via-[#fff] to-[#EADFF8]"
        id="certifications"
      >
        <div className="container mx-auto">
          <h2 className="text-gray-900 font-semibold text-4xl lg:text-5xl mb-6 text-center">
            Certifications
          </h2>
          <div className="text-gray-400 text-center text-lg w-full lg:w-1/2 mx-auto">
            These certifications reflect the skills I've gained and the areas
            I'm actively exploring.
          </div>
          <div className="mt-16">
            <Blog />
          </div>
        </div>
      </div>
      {/* <div className="py-10 lg:py-24 bg-gray-50" id="services">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-32 items-center">
            <div>
              <h3 className="text-gray-950 text-4xl lg:text-5xl font-semibold">
                What I do?
              </h3>
              <div className="text-gray-400 text-lg mt-6">
              </div>
              <div className="text-gray-400 text-lg mt-4">

              </div>

              <Link
                href="#"
                className="p-button bg-primary-500 hover:bg-primary-600 border-primary-500 hover:border-primary-600 font-bold no-underline mt-12"
              >
                Say Hello!
              </Link>
            </div>
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-md border-0 border-white hover:border-primary-500 hover:shadow-[0_32px_96px_0_rgba(28,25,25,0.16)] border-l-4 border-solid p-8">
                <h3>User Experience (UX)</h3>
                <div className="text-gray-700 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  purus arcu, varius eget velit non, laoreet imperdiet orci.
                  Mauris ultrices eget lorem ac vestibulum.
                </div>
              </div>
              <div className="bg-white rounded-md border-0 border-white hover:border-primary-500 hover:shadow-[0_32px_96px_0_rgba(28,25,25,0.16)] border-l-4 border-solid p-8">
                <h3>User Interface (UI)</h3>
                <div className="text-gray-700 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  purus arcu, varius eget velit non, laoreet imperdiet orci.
                  Mauris ultrices eget lorem ac vestibulum.
                </div>
              </div>
              <div className="bg-white rounded-md border-0 border-white hover:border-primary-500 hover:shadow-[0_32px_96px_0_rgba(28,25,25,0.16)] border-l-4 border-solid p-8">
                <h3>Web Development</h3>
                <div className="text-gray-700 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  purus arcu, varius eget velit non, laoreet imperdiet orci.
                  Mauris ultrices eget lorem ac vestibulum.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="pt-10 lg:pt-24 pb-10 lg:pb-12">
        <div className="container mx-auto">
          <h2 className="text-gray-900 font-semibold text-4xl lg:text-5xl mb-6 text-center">
            Happy Clients
          </h2>
          <div className="text-gray-400 text-center text-lg w-full lg:w-1/2 mx-auto">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </div>
          <div>
            <Clients />
          </div>
        </div>
      </div> */}
      {/* <div className="lg:pt-12 pb-10 lg:pb-24">
        <div className="container mx-auto">
          <h2 className="text-gray-900 font-semibold text-4xl lg:text-5xl mb-6 text-center">
            Testimonial
          </h2>
          <div className="text-gray-400 text-center text-lg w-full lg:w-1/2 mx-auto">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </div>
          <div className="mt-16">
            <Testimonial />
          </div>
        </div>
      </div> */}
      <div className="container mx-auto" id="contact">
        <div className="p-8 lg:p-20 bg-white rounded-2xl shadow-[0_59px_124px_0_rgba(0,0,0,0.12)] relative z-10 -mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-32 items-center">
            <div>
              <h3 className="text-gray-900 text-4xl font-semibold">
                Let’s discuss your Project
              </h3>
              <div className="text-gray-400 text-lg mt-4 mb-4 lg:mb-0">
                Fill out the contact form for any quesions or potential
                collaboration.{" "}
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 group hover:bg-white rounded-lg hover:border-primary-500 hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] p-6 lg:w-4/5">
                  <div className="flex justify-center items-center p-3 rounded group-hover:bg-primary-500 bg-[rgba(237,216,255,0.50)]">
                    <i className="pi pi-map-marker group-hover:text-white text-primary-500 text-2xl leading-none"></i>
                  </div>
                  <div>
                    <div className="text-gray-700 text-sm">Address:</div>
                    <div className="text-gray-900 font-medium mt-1">
                      Sousse, Tunisia
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 group hover:bg-white rounded-lg hover:border-primary-500 hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] p-6 lg:w-4/5">
                  <div className="flex justify-center items-center p-3 rounded group-hover:bg-primary-500 bg-[rgba(237,216,255,0.50)]">
                    <i className="pi pi-at group-hover:text-white text-primary-500 text-2xl leading-none"></i>
                  </div>
                  <div>
                    <div className="text-gray-700 text-sm">My Email:</div>
                    <div className="text-gray-900 font-medium mt-1">
                      Bahloulyossra@gmail.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 group hover:bg-white rounded-lg hover:border-primary-500 hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] p-6 lg:w-4/5">
                  <div className="flex justify-center items-center p-3 rounded group-hover:bg-primary-500 bg-[rgba(237,216,255,0.50)]">
                    <i className="pi pi-phone group-hover:text-white text-primary-500 text-2xl leading-none"></i>
                  </div>
                  <div>
                    <div className="text-gray-700 text-sm">Call Me Now:</div>
                    <div className="text-gray-900 font-medium mt-1">
                      +216 22 393 677
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-1 mt-8">
                <Link
                  href="https://www.facebook.com/yossra.bahloul/"
                  target="_blank"
                  className="flex justify-center items-center p-3 no-underline rounded group hover:bg-primary-500"
                >
                  <i className="pi pi-facebook group-hover:text-white text-primary-500  text-2xl leading-none"></i>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/yossra-bahloul-a49343234/"
                  target="_blank"
                  className="flex justify-center items-center p-3 no-underline rounded group hover:bg-primary-500 "
                >
                  <i className="pi pi-linkedin group-hover:text-white text-primary-500  text-2xl leading-none"></i>
                </Link>
                <Link
                  href="https://github.com/YossraBah"
                  target="_blank"
                  className="flex justify-center items-center p-3 no-underline rounded group hover:bg-primary-500 "
                >
                  <i className="pi pi-github group-hover:text-white text-primary-500  text-2xl leading-none"></i>
                </Link>
                <Link
                  href="https://x.com/yossra2025"
                  target="_blank"
                  className="flex justify-center items-center p-3 no-underline rounded group hover:bg-primary-500 "
                >
                  <i className="pi pi-twitter group-hover:text-white text-primary-500  text-2xl leading-none"></i>
                </Link>
              </div>
            </div>
            <div>
              {/* <div className="text-gray-400 text-lg">
                Fill out the contact form for any quesions or potential collaboration.
              </div> */}
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
