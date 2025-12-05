import React from "react";
import { useNavigate } from "react-router-dom";

type BlogItem = {
  title: string;
  date: string;
  image: string;
};

const blogs: BlogItem[] = [
  {
    title: "Cybersecurity Study Jam/Google Cybersecurity Campaign",
    date: "AUGUST 16, 2024",
    image: "src/assets/blog-cybersecurity.jpg",
  },
  {
    title: "Alli Serona Campaign",
    date: "JULY 12, 2025",
    image: "src/assets/blog-alli-serona.jpg",
  },
  {
    title: "google-devfest",
    date: "NOVEMBER 12, 2023",
    image: "src/assets/blog-google-devfest.jpg",
  },
  {
    title: "Unacademy Compete",
    date: "SEPTEMBER 12, 2025",
    image: "src/assets/blog-unacademy-compete.jpg",
  },
  {
    title: "xiaomi-smarter-living",
    date: "APRIL 11, 2025",
    image: "src/assets/blog-xiaomi-smarter-living.jpg",
  },
];

const Blog: React.FC = () => {
  const navigate = useNavigate();

  const handleRedirect = (index: number) => {
    if (index === 0) {
      navigate("/blog1");
    }
  };

  return (
    <section
      className="w-full flex justify-center px-4 sm:px-8 py-16"
      style={{
        backgroundColor: "#050505",
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "6px 6px",
        fontFamily: `"Clash Display", "Clash Display Placeholder", sans-serif`,
      }}
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid gap-y-12 gap-x-10 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((item, index) => (
            <article
              key={item.title}
              className="group flex flex-col cursor-pointer"
              onClick={() => handleRedirect(index)}
            >
              {/* Image */}
              <div className="rounded-[32px] overflow-hidden shadow-[0_22px_40px_rgba(0,0,0,0.55)] transform transition-transform duration-500 group-hover:-translate-y-1.5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[230px] md:h-[260px] lg:h-[280px] object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>

              {/* Text + Arrow */}
              <div className="flex items-start justify-between mt-4">
                <div className="max-w-xs">
                  <h3 className="text-white text-[1.05rem] leading-snug font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs tracking-[0.16em] text-white/60 uppercase">
                    {item.date}
                  </p>
                </div>

                {/* Arrow */}
                <div className="mt-1 ml-4 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center overflow-hidden">
                    <svg
                      className="w-4 h-4 text-white transform transition-transform duration-300 group-hover:translate-x-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12h12M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
