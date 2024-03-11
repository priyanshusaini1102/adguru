import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className=" rounded-sm bg-gray-light px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mx-auto">
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
              </div>
              {/* TODO - have to complete this */}
              <div className=" text-center text-sm md:text-lg mt-8 text-gray-500 font-semibold">
                We are waiting for your company to be here... <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name, id } = brand;

  return (
    <div className="">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="w-full transition"
      >
        <div className={`h-16 w-16 md:h-20 md:w-20 relative rounded-full overflow-hidden cover p-4 `}>
          <Image src={imageLight} alt={name} fill />
        </div>
      </a>
    </div>
  );
};
