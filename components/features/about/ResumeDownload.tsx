"use client";

import React from "react";

export default function ResumeDownload() {
  const handleOpenResume = () => {
    // Open the printable resume HTML we added to /public/resume.html
    window.open('/resume.html', '_blank');
  };

  return (
    <button
      onClick={handleOpenResume}
      className="inline-flex items-center px-4 py-2 rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm shadow-md"
    >
      Download Resume
    </button>
  );
}
