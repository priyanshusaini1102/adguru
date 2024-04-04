"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const formattedPrice: (price: number) => string = (price: number) =>
price.toLocaleString("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const pricingData: {
  name: string;
  description: string;
  features: string[];
  price: number;
}[] = [
  {
    name: "Basic Plan",
    description:
      "Great for startups/small businesses. Includes managing one social media platform (choose from Instagram, Facebook, or Google), basic Google Ads, and monthly performance reports.",
    features: [
      "Social Media Management",
      "Basic Google Ads Campaign",
      "Local SEO",
      "Monthly Performance Report",
    ],
    price: 15000,
  },
  {
    name: "Standard Plan",
    description:
      "Perfect for growing businesses. Provides management for two social media platforms (choose from Instagram, Facebook, or Google), basic SEO, email marketing, monthly strategy calls, and a standard website landing page.",
    features: [
      "Social Media Management",
      "Targeted Facebook/Instagram/Google Ads Campaign",
      "Local SEO",
      "Email Marketing",
      "Standard Website Landing Page",
      "Monthly Strategy Call",
      "Monthly Performance Report",
    ],
    price: 30000,
  },
  {
    name: "Premium Plan",
    description:
      "Tailored for businesses aiming for online dominance. Includes management for all three social media platforms (Instagram, Facebook, and Google), comprehensive SEO, advanced Google Ads, website analysis, bi-weekly strategy calls, custom website design and development, and dedicated landing page creation.",
    features: [
      "Social Media Management",
      "Comprehensive SEO",
      "Advanced Facebook/Instagram/Google Ads Campaign",
      "Website Analysis and Recommendations",
      "Bi-weekly Strategy Calls",
      "Custom Website Design and Development",
      "Dedicated Landing Page Creation",
      "Monthly Performance Report",
    ],
    price: 50000,
  },
];


const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="Opt for our yearly plans and enjoy an exclusive 5% discount today!
          Limited time offer. Don't miss out on these savings!"
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {pricingData.map((currPricingData, index) => (
            <PricingBox
              key={index}
              packageName={currPricingData.name}
              price={isMonthly
                ? formattedPrice(currPricingData.price)
                : formattedPrice(Math.round(currPricingData.price * 12 - currPricingData.price * 12 * 0.05))}
              
              duration={isMonthly ? "mo" : "yr"}
              subtitle={currPricingData.description}
            >
              {currPricingData.features.map((feature, index) => (
                <OfferList
                  key={feature.slice(0, 10) + index}
                  text={feature}
                  status="active"
                />
              ))}
            </PricingBox>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
