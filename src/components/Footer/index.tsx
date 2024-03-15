"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="m-4 rounded-lg bg-white shadow dark:bg-gray-800">
        <div className="mx-auto w-full max-w-screen-xl p-4 text-center">
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
