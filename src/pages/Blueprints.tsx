import { useEffect, useRef } from "react";
import { useLenis } from "@/hooks/useLenis";
import Navigation from "@/components/Navigation";
import DecorativeElements from "@/components/DecorativeElements";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    id: "b7-sector-04",
    title: "B7 / SECTOR-04",
    subtitle: "TECTONIC SHIFT",
    description:
      "A study in concrete massing and light penetration. The structure appears to emerge from the earth itself, with cantilevered forms defying traditional load expectations.",
    specs: [
      { label: "LOCATION", value: "41.4034° N, 2.1741° E" },
      { label: "AREA", value: "4,250 M²" },
      { label: "STATUS", value: "IN PROGRESS" },
    ],
    images: [
      "https://images.unsplash.com/photo-1654898160944-9c01392d9b90?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1713515483794-78770ca00003?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: "a3-sector-12",
    title: "A3 / SECTOR-12",
    subtitle: "VERTICAL HORIZON",
    description:
      "Challenging the relationship between structure and envelope. The exoskeleton becomes both structural element and solar shading device.",
    specs: [
      { label: "LOCATION", value: "40.4168° N, 3.7038° W" },
      { label: "AREA", value: "8,750 M²" },
      { label: "STATUS", value: "COMPLETED 2024" },
    ],
    images: [
      "https://images.unsplash.com/photo-1656058050399-3f51f0dceb8c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1686467287619-b0300f8b75ed?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: "c9-sector-08",
    title: "C9 / SECTOR-08",
    subtitle: "LIGHT WEAVER",
    description:
      "An exploration of transparency and reflection. A facade of dichroic glass fins creates a constantly shifting veil of color, responding to the changing light.",
    specs: [
      { label: "LOCATION", value: "34.0522° N, 118.2437° W" },
      { label: "AREA", value: "6,200 M²" },
      { label: "STATUS", value: "PROPOSAL" },
    ],
    images: [
      "https://images.unsplash.com/photo-1635657157495-b8af4f935723?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1543363897-db27e2d67b5a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: "d2-sector-01",
    title: "D2 / SECTOR-01",
    subtitle: "MONOLITHIC VOID",
    description:
      "A single, massive form carved from black granite, its interior spaces defined by subtraction. The project explores the relationship between solid and void.",
    specs: [
      { label: "LOCATION", value: "35.6895° N, 139.6917° E" },
      { label: "AREA", value: "2,800 M²" },
      { label: "STATUS", value: "CONCEPT" },
    ],
    images: [
      "https://images.unsplash.com/photo-1598138967311-98e4bdc1fea1?q=80&w=1484&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595658511703-2cad160de181?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
];

gsap.registerPlugin(ScrollTrigger);

const Blueprints = () => {
  useLenis();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = document.querySelector(".hero-section");
    const handleMouseMove = (e: MouseEvent) => {
      if (!hero) return;
      const { clientX, clientY } = e;
      const x = clientX / window.innerWidth - 0.5;
      const y = clientY / window.innerHeight - 0.5;

      gsap.to(".hero-parallax", {
        x: x * 50,
        y: y * 30,
        stagger: 0.05,
        ease: "power1.out",
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    gsap.fromTo(
      ".hero-title-char",
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        stagger: 0.05,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      },
    );
    gsap.fromTo(
      ".hero-sub",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 1 },
    );

    const sections = gsap.utils.toArray(".project-section");
    sections.forEach((section: any, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        pin: true,
        pinSpacing: false,
        scrub: 1,
        snap: {
          snapTo: 1 / (sections.length - 1),
          duration: { min: 0.8, max: 1.5 },
          ease: "power3.inOut",
          delay: 0.2,
        },
      });

      const content = section.querySelector(".project-content");
      const images = section.querySelectorAll(".project-image");
      const title = section.querySelector(".project-title");

      gsap.from(title, {
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: { trigger: section, start: "top 60%" },
      });
      gsap.from(content, {
        opacity: 0,
        delay: 0.2,
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: { trigger: section, start: "top 50%" },
      });
      gsap.from(images, {
        opacity: 0,
        scale: 1.05,
        stagger: 0.2,
        delay: 0.4,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: { trigger: section, start: "top 60%" },
      });
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const renderLayout = (project: any, index: number) => {
    const commonText = (
      <div className="project-content p-4 lg:p-8">
        <span className="font-manrope text-sm text-slate-400 tracking-widest mb-4 block">
          {project.subtitle}
        </span>
        <h1 className="project-title font-libre-caslon text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-none text-white mb-8">
          {project.title}
        </h1>
        <p className="font-manrope text-slate-300 text-base max-w-md leading-relaxed mb-12">
          {project.description}
        </p>
        <div className="font-mono text-xs text-slate-500 space-y-2">
          {project.specs.map((spec: any) => (
            <div key={spec.label}>
              {spec.label}: {spec.value}
            </div>
          ))}
        </div>
      </div>
    );

    switch (index % 4) {
      case 0:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 h-full items-center">
            <div className="lg:col-span-5 h-full flex items-center">
              {commonText}
            </div>
            <div className="lg:col-span-7 h-full flex flex-col gap-4 p-4">
              <div className="project-image flex-1 relative">
                <img
                  src={project.images[0]}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="project-image flex-1 relative">
                <img
                  src={project.images[1]}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 h-full items-center">
            <div className="lg:col-span-8 h-full flex flex-col p-4">
              <div className="project-image flex-1 relative">
                <img
                  src={project.images[0]}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-4 h-full flex flex-col justify-between p-4">
              {commonText}
              <div className="project-image h-1/3 relative mt-8">
                <img
                  src={project.images[1]}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 h-full items-center">
            <div className="lg:col-span-6 h-full flex p-4">
              <div className="project-image w-1/2 relative self-start">
                <img
                  src={project.images[0]}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="project-image w-1/2 relative self-end">
                <img
                  src={project.images[1]}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-6 h-full flex items-center">
              {commonText}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="project-image absolute inset-0">
              <img
                src={project.images[0]}
                className="w-full h-full object-cover opacity-30"
              />
            </div>
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {commonText}
              <div className="project-image relative h-[50vh] w-full p-4">
                <img
                  src={project.images[1]}
                  className="w-full h-full object-cover border-4 border-black"
                />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="relative min-h-screen w-screen bg-black text-white">
      <Navigation />

      {/* Decorative Elements */}
      <DecorativeElements />

      {/* Background Image with Parallax */}
      <div className="fixed inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Blueprints background"
          className="absolute inset-0 w-full h-full object-cover scale-110"
          style={{ transform: "translateZ(0)" }}
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      {/* Hero Section */}
      <div className="relative z-10 h-screen flex items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto text-left">
          <div className="animate-fade-in [animation-delay:200ms]">
            <h1 className="font-libre-caslon text-7xl sm:text-9xl lg:text-[12rem] font-light tracking-tight leading-none text-white">
              BLUEPRINTS
            </h1>
          </div>
          <p className="hero-sub font-manrope text-sm text-slate-400 tracking-[0.3em] mt-4">
            ARCHIVAL RECORD
          </p>
        </div>
      </div>

      <div ref={containerRef}>
        {projects.map((project, index) => (
          <section
            key={project.id}
            className="project-section h-screen w-screen relative overflow-hidden bg-black"
          >
            <div className="relative z-10 h-full w-full max-w-screen-2xl mx-auto">
              {renderLayout(project, index)}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Blueprints;
