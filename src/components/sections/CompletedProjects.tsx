import Image from "next/image";
import { COMPLETED_PROJECTS } from "@/lib/constants";
import { ExternalLink } from "lucide-react";

const CompletedProjects = () => {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Tamamlanan İşlerden Bazıları
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Farklı sektörlerden müşterilerimiz için hayata geçirdiğimiz projelerden bazıları.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COMPLETED_PROJECTS.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
            >
              {/* Browser Header Mockup */}
              <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-50 border-b border-gray-200">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                </div>
                <div className="ml-2 flex-1 rounded bg-white px-3 py-1 text-[10px] text-gray-400 border border-gray-200 truncate">
                  {project.url.replace("https://", "")}
                </div>
                <ExternalLink className="h-3 w-3 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>

              {/* Image Container (Cropped View) */}
              <div className="relative h-[240px] overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-top transition-transform duration-700 group-hover:scale-105"
                  priority={false}
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-300" />
              </div>

              {/* Project Title */}
              <div className="p-5 flex items-center justify-between">
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  Canlı Site
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompletedProjects;
