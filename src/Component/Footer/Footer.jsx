import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-base-200 border-t-1 text-base-content px-6 py-10">
      {/* Bottom Copyright */}
      <div className="text-center text-sm text-base-content/70">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-primary">Siddikur Rahman</span> —
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
