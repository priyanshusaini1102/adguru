import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
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

const AboutSectionOne = ({ sectionData = sectionDefaultData }) => {
  const { title, paragraph, darkImage, lightImage, lists1, lists2 } = sectionData;
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-col-reverse flex-wrap items-center lg:flex-row">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle title={title} paragraph={paragraph} mb="44px" />

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

            <div className="mb-8 w-full px-4 lg:mb-0 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src={lightImage}
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full rounded-3xl drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src={darkImage}
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full rounded-3xl drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
