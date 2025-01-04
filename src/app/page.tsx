import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import TechStack from "@/components/TechStack";
import TechnologiesSection from "@/components/TechStack/TechnologiesSection";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AdGuru | Aapke Business Ki Jarurat!",
  description: "Digital Marketing Agency",
};

const servicesData = [
  {
    title: "Strategic Marketing",
    paragraph:
      "Ready to give your brand the spotlight it deserves? Dive into our Paid Ads extravaganza and let your message shine in the digital universe!",
    darkImage: "/images/hero/marketing.avif",
    lightImage: "/images/hero/marketing.avif",
    lists1: ["Facebook Ads", "SEO Mastery", "Email Campaigns"],
    lists2: ["Google Ads", "Google Analytics", "Instagram Ads"],
  },
  {
    title: "Eye-catchy Designs",
    paragraph:
      "We craft visuals that speak to your ideal customers. Ready for an extraordinary brand transformation?",
    darkImage: "/images/hero/creative.avif",
    lightImage: "/images/hero/creative.avif",
    lists1: ["Social Media", "Ads", "Video"],
    lists2: ["Banner Designs", "Interactive Landing Page"],
  },
  {
    title: "Social Media",
    paragraph:
      "Ready to make your brand the talk of the social town? Dive into our Social Media Management expertise and let your brand resonate across digital platforms!",
    darkImage: "/images/hero/smm.avif",
    lightImage: "/images/hero/smm.avif",
    lists1: ["Facebook Ads"],
    lists2: ["Google Ads"],
  },
  {
    title: "Automation",
    paragraph:
      "Automate the manual task, Save the time and energy, Only focus on delivering quality",
    darkImage: "/images/hero/automation.avif",
    lightImage: "/images/hero/automation.avif",
    lists1: ["CRM", "Lead Gen"],
    lists2: ["Business Flows"],
  },
  {
    title: "Web Development",
    paragraph:
      "From tech wizardry to seamless online experiences - enter the world of Technical Solutions. We transform digital hiccups into high-fives for your users.",
    darkImage: "/images/hero/webp.avif",
    lightImage: "/images/hero/webp.avif",
    lists1: ["Website Development"],
    lists2: ["Landing Pages"],
  },
  {
    title: "Robust SEO",
    paragraph:
      "Elevate your online presence, automate workflows, and define digital brilliance with hassle-free SEO  ",
    darkImage: "/images/hero/seo.avif",
    lightImage: "/images/hero/seo.avif",
    lists1: ["Social Media", "Ads"],
    lists2: ["Videos", "Email Marketing"],
  },
];

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <div id="pricing" />
      <Pricing />
      <div id="technologies" />
      <TechnologiesSection />
      {/* <Video /> */}
      <div id="clients" />
      {/* <Brands /> */}
      <div id="why-adguru" />
      {servicesData.map((serviceData, index) =>
        index % 2 === 0 ? (
          <AboutSectionOne key={index} sectionData={serviceData} />
        ) : (
          <AboutSectionTwo key={index} sectionData={serviceData} />
        ),
      )}
      {/* <Testimonials /> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}
