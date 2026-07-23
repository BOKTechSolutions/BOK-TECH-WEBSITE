import React from "react";
import assets from "../assets/assets";
import { motion } from "motion/react";

const Footer = ({ theme }) => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-slate-50 dark:bg-gray-900 pt-12 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40"
    >
      {/* Footer Top */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-5 text-sm text-gray-700 dark:text-gray-400"
        >
          <img
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            className="w-40"
            alt="BOK Tech Solutions"
          />

          <p className="leading-7">
            We help businesses grow through innovative digital solutions,
            including website development, mobile applications, UI/UX design,
            branding, cloud solutions, and IT consulting.
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-700 dark:text-gray-400"
        >
          <h3 className="text-lg font-semibold mb-5 text-gray-900 dark:text-white">
            Contact Information
          </h3>

          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">
                📍 Office
              </p>
              <p>Accra, Ghana</p>
            </div>

            <div>
              <p className="font-semibold text-gray-900 dark:text-white">
                📞 Phone
              </p>
              <a
                href="tel:+233591114973"
                className="hover:text-primary transition"
              >
                +233 59 111 4973
              </a>
            </div>

            <div>
              <p className="font-semibold text-gray-900 dark:text-white">
                ✉️ Email
              </p>
              <a
                href="mailto:boktechsolution@gmail.com"
                className="hover:text-primary transition"
              >
                boktechsolution@gmail.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-gray-700 dark:text-gray-400"
        >
          <h3 className="text-lg font-semibold mb-5 text-gray-900 dark:text-white">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <a href="/privacy-policy" className="hover:text-primary transition">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="/terms-and-conditions" className="hover:text-primary transition">
                Terms & Conditions
              </a>
            </li>

            <li>
              <a href="/cookie-policy" className="hover:text-primary transition">
                Cookie Policy
              </a>
            </li>

            <li>
              <a href="#contact-us" className="hover:text-primary transition">
                Get a Quote
              </a>
            </li>

            <li>
              <a href="#services" className="hover:text-primary transition">
                Our Services
              </a>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Divider */}
      <hr className="border-gray-300 dark:border-gray-700 my-8" />

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="pb-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500"
      >
        <p>
          © {new Date().getFullYear()} BOK Tech Solutions. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-5">
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={assets.facebook_icon}
              alt="Facebook"
              className="w-5 hover:scale-110 transition"
            />
          </a>

          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={assets.twitter_icon}
              alt="X"
              className="w-5 hover:scale-110 transition"
            />
          </a>

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={assets.instagram_icon}
              alt="Instagram"
              className="w-5 hover:scale-110 transition"
            />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={assets.linkedin_icon}
              alt="LinkedIn"
              className="w-5 hover:scale-110 transition"
            />
          </a>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;