import Image from "next/image";
import List from "./List";

const sectionDefaultData = {
  title: "Strategic Marketing",
  paragraph:
    "Ready to give your brand the spotlight it deserves? Dive into our Paid Ads extravaganza and let your message shine in the digital universe!",
  darkImage: "/images/hero/marketing.avif",
  lightImage: "/images/hero/marketing.avif",
  lists1: ["Facebook Ads", "SEO Mastery", "Email Campaigns"],
  lists2: ["Google Ads", "Google Analytics", "Instagram Ads"],
};

const AboutSectionTwo = ({ sectionData = sectionDefaultData }) => {
  const { title, paragraph, darkImage, lightImage, lists1, lists2 } =
    sectionData;
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src={lightImage}
                alt="about image"
                fill
                className="rounded-3xl drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src={darkImage}
                alt="about image"
                fill
                className="hidden rounded-3xl drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  {title}
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  {paragraph}
                </p>
              </div>
            </div>
            <div
              className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
              data-wow-delay=".15s"
            >
              <div className="mx-[-12px] flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  {lists1.map((list, index) => (
                    <List text={list} key={index} />
                  ))}
                </div>

                <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  {lists2.map((list, index) => (
                    <List text={list} key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
