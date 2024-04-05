"use client"
import React, { useState, useEffect } from "react";

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000); // Set a timeout of 5 seconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full h-screen mt-24">
      {loading && <div className="flex justify-center items-center h-screen">
  <div className="spinner border-4 border-t-4 border-gray-200 rounded-full animate-spin h-16 w-16"></div>
</div>}
      <iframe
        src="https://calendly.com/priyanshusaini1102/30min?hide_gdpr_banner=1"
        frameBorder="0"
        width="100%"
        height="100%"
        style={{ display: loading ? "none" : "block" }}
      ></iframe>
    </div>
  );
};

export default Page;
