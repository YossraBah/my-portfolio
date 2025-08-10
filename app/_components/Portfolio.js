import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Page() {
  const portfolioData = [
    {
      id: 1,
      imageUrl: "portfolio-7.PNG",
      category: "EY",
      title: "OMS",
      description:
        "Official platform developed in collaboration with the Tunisian Ministry of Health to manage and streamline the specialty and internship allocation process for medical residents nationwide.",
      link: "https://oms-residents.dev.addinn-group.com/",
    },
    {
      id: 2,
      imageUrl: "portfolio-1.PNG",
      category: "Deloitte",
      title: "Copa Transforme",
      description:
        "Platform for managing calls for applications for young entrepreneurs in Congo, in partnership with the World Bank.",
      link: "https://copa.transforme.cd/",
    },
    {
      id: 3,
      imageUrl: "portfolio-2.PNG",
      category: "Ennoconn technologies",
      title: "Aispro",
      description:
        "Fully dynamic website using Strapi headless CMS to manage data structure and content.",
      link: "https://aispro.com/",
    },
    {
      id: 4,
      imageUrl: "portfolio-5.PNG",
      category: "Reno-services",
      title: "Reno Services website",
      description: "A website dedicated for the presentation of Reno services.",
      link: "https://reno.service.agri-net.space/",
    },

    {
      id: 5,
      imageUrl: "portfolio-4.PNG",
      category: "Reno-services",
      title: "Reno services Administration",
      description:
        "Administration panel for Reno services to manage requests and send quotes.",
      link: "o.service.admin.agri-net.space",
    },
    {
      id: 6,
      imageUrl: "portfolio-3.PNG",
      category: "Level",
      title: "Level",
      description: "An online training platform.",
      link: "https://www.dev.level.l-wa.com/",
    },

    {
      id: 7,
      imageUrl: "portfolio-6.PNG",
      category: "Next.js tutorial",
      title: "Invoice management",
      description:
        "Practice Nextjs with this project along with the documentation.",
      link: "https://invoice-management-dashboard.vercel.app/",
    },
    {
      id: 8,
      imageUrl: "portfolio-8.PNG",
      category: "Responsive design practice",
      title: "VR headset",
      description: "Responsive web design practice.",
      link: "https://yossrabah.github.io/index",
    },
    {
      id: 9,
      imageUrl: "portfolio-9.PNG",
      category: "Responsive design practice",
      title: "Simple Life",
      description: "Responsive web design practice.",
      link: "https://yossrabah.github.io/SimpleLife/index.html",
    },
  ];
  return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16">
        {portfolioData.map((portfolio) => (
          <div
            key={portfolio.id}
            className="bg-white rounded-lg border border-solid border-[#E6E8EB] overflow-hidden  transform transition duration-300 hover:scale-105 "
          >
            <div className="relative h-[248px]">
              <Image
                src={`portfolio/${portfolio.imageUrl}`}
                fill
                className="object-cover"
                alt="blog"
              />
            </div>
            <div className="p-8">
              <div className="text-gray-400 text-xs font-medium">
                {portfolio.category}
              </div>
              <div className="text-gray-900 text-lg font-semibold mb-1">
                {portfolio.title}
              </div>
              <div className="text-gray-600 text-sm mt-3">
                {portfolio.description}
              </div>

              <Link
                href={`${portfolio.link}`}
                target="_blank"
                className="p-button p-button-outlined mt-5 text-primary-500 font-bold no-underline"
              >
                Case Study
                <ArrowRightIcon className="size-6 text-primary-500 ml-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>
  );
}
