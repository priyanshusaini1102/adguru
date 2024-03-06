import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[99]">
      {isVisible && (
        <Link
          href="https://wa.me/918006458809?text=Hi%20AdGuru%20Team,%20I'm%20interested%20in%20your%20services."
          aria-label="scroll to top"
          className="flex h-12 w-12 cursor-pointer bg-transparent items-center justify-center rounded-md text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
        >
          <Image src="/images/logo/whatsapp.png" alt="scroll to top" fill />
        </Link>
      )}
    </div>
  );
}
