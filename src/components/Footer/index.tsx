"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="m-4 lg:px-40 px-5 w-full rounded-lg bg-white shadow dark:bg-gray-800 flex justify-between xs:justify-center items-center flex-wrap content-center">
        <div className="flex items-center justify-center gap-4 p-4">
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          Follow: 
          </span>
        <div className="flex items-center gap-1">
          <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <a href="https://www.instagram.com/adguruofficial" target="_blank" className="flex justify-center items-center">
            <Image width={20} height={20} src="/images/logo/instagram.png" alt="" />
            </a>
          </button>
          <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
          <div className="flex justify-center items-center">
            <Image width={20} height={20} src="/images/logo/linkedin.png" alt="" />
            </div>
          </button>
          <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
          <div className="flex justify-center items-center">
            <Image width={20} height={20} src="/images/logo/whatsapp.png" alt="" />
            </div>
          </button>
        </div>
        </div>
        <div className=" p-4 text-right">
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            © 2024{" "}
            <span>
              Adguru™
            </span>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
