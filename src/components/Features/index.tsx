import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Our Services"
            paragraph=""
            center
          />

          <div className="mb-12 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
          <div className="border border-grey rounded-md p-3 w-fit text-center mx-auto">
            Want to discuss? <Link href={"/contact"} className="underline text-center leading-3">Let&apos;s schedule a call</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
