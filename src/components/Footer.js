import React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer class="bg-white">
      <div class="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          <div class="pb-6">
            <a
              href="#"
              class="text-sm leading-6 text-gray-600 hover:text-gray-900"
            >
              Home
            </a>
          </div>

          <div class="pb-6">
            <a
              href="#"
              class="text-sm leading-6 text-gray-600 hover:text-gray-900"
            >
              About Us
            </a>
          </div>

          <div class="pb-6">
            <a
              href="#"
              class="text-sm leading-6 text-gray-600 hover:text-gray-900"
            >
              FAQs
            </a>
          </div>

          <div class="pb-6">
            <a
              href="#"
              class=" text-sm leading-6 text-gray-600 hover:text-gray-900"
            >
              Tuition & Openings
            </a>
          </div>
        </nav>
        <p class="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; Designed & Built by Uchenna{" "}
        </p>
      </div>
    </footer>
  );
};
export default Footer;
