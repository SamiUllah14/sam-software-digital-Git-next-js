import React from 'react'
import SamSblackLogo from '@/app/Images/NewYorkSoftLogoBlack.png'; // Import your PNG image here
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';


const Footer = () => {
  return (

  <footer className="bg-black">
    <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div>
          <div className="flex justify-center text-teal-600 sm:justify-start dark:text-teal-300">
            <img alt="Bitfactory logo" className="h-10" src={SamSblackLogo.src} width="40" /> {/* Use the imported PNG image */}

          </div>
  
          <p
            className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left dark:text-gray-400"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa
            cum itaque neque.
          </p>
  
          <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
  <li>
    <a
      href="#"
      rel="noreferrer"
      target="_blank"
      className="text-teal-700 transition hover:text-teal-700/75 dark:text-teal-500 dark:hover:text-teal-500/75"
    >
      <span className="sr-only">Facebook</span>
      <FaFacebook className="size-6" />
    </a>
  </li>

  <li>
    <a
      href="#"
      rel="noreferrer"
      target="_blank"
      className="text-teal-700 transition hover:text-teal-700/75 dark:text-teal-500 dark:hover:text-teal-500/75"
    >
      <span className="sr-only">Instagram</span>
      <FaInstagram className="size-6" />
    </a>
  </li>

  <li>
    <a
      href="#"
      rel="noreferrer"
      target="_blank"
      className="text-teal-700 transition hover:text-teal-700/75 dark:text-teal-500 dark:hover:text-teal-500/75"
    >
      <span className="sr-only">Twitter</span>
      <FaTwitter className="size-6" />
    </a>
  </li>

  <li>
    <a
      href="#"
      rel="noreferrer"
      target="_blank"
      className="text-teal-700 transition hover:text-teal-700/75 dark:text-teal-500 dark:hover:text-teal-500/75"
    >
      <span className="sr-only">GitHub</span>
      <FaGithub className="size-6" />
    </a>
  </li>

  <li>
    <a
      href="#"
      rel="noreferrer"
      target="_blank"
      className="text-teal-700 transition hover:text-teal-700/75 dark:text-teal-500 dark:hover:text-teal-500/75"
    >
      <span className="sr-only">Dribbble</span>
      <FaDribbble className="size-6" />
    </a>
  </li>
</ul>

        </div>
  
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900 dark:text-white">About Us</p>
  
            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                  href="#"
                >
                  Company History
                </a>
              </li>
  
              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                  href="#"
                >
                  Meet the Team
                </a>
              </li>
  
              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                  href="#"
                >
                  Employee Handbook
                </a>
              </li>
  
              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                  href="#"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
  
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900 dark:text-white">Our Services</p>
  
            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                  href="#"
                >
                  Web Development
                </a>
              </li>
  
              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                  href="#"
                >
                  Web Design
                </a>
              </li>
  
              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                  href="#"
                >
                  Marketing
                </a>
              </li>
  
              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                  href="#"
                >
                  Google Ads
                </a>
              </li>
            </ul>
          </div>
  
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900 dark:text-white">Helpful Links</p>
  
            <ul className="mt-8 space-y-4 text-center md:text-start">
  <li>
    <a
      className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
      href="#"
    >
      FAQs
    </a>
  </li>

  <li>
    <a
      className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
      href="#"
    >
      Support
    </a>
  </li>
</ul>

          </div>
  
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900 dark:text-white">Contact Us</p>
            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
  <li>
    <a
      href="#"
      rel="noreferrer"
      target="_blank"
      className="text-teal-700 transition hover:text-teal-700/75 dark:text-teal-500 dark:hover:text-teal-500/75"
    >
      <span className="sr-only">Facebook</span>
      <FaFacebook className="size-6" />
    </a>
  </li>

  <li>
    <a
      href="#"
      rel="noreferrer"
      target="_blank"
      className="text-teal-700 transition hover:text-teal-700/75 dark:text-teal-500 dark:hover:text-teal-500/75"
    >
      <span className="sr-only">Instagram</span>
      <FaInstagram className="size-6" />
    </a>
  </li>

  <li>
    <a
      href="#"
      rel="noreferrer"
      target="_blank"
      className="text-teal-700 transition hover:text-teal-700/75 dark:text-teal-500 dark:hover:text-teal-500/75"
    >
      <span className="sr-only">Twitter</span>
      <FaTwitter className="size-6" />
    </a>
  </li>

  <li>
    <a
      href="#"
      rel="noreferrer"
      target="_blank"
      className="text-teal-700 transition hover:text-teal-700/75 dark:text-teal-500 dark:hover:text-teal-500/75"
    >
      <span className="sr-only">GitHub</span>
      <FaGithub className="size-6" />
    </a>
  </li>

  <li>
    <a
      href="#"
      rel="noreferrer"
      target="_blank"
      className="text-teal-700 transition hover:text-teal-700/75 dark:text-teal-500 dark:hover:text-teal-500/75"
    >
      <span className="sr-only">Dribbble</span>
      <FaDribbble className="size-6" />
    </a>
  </li>
</ul>

          </div>
        </div>
      </div>
  
      <div className="mt-12 border-t border-gray-100 pt-6 dark:border-gray-800">
  <div className="text-center sm:flex sm:justify-between sm:text-left">
    <p className="text-sm text-gray-500 dark:text-gray-400">
      <span className="block sm:inline">All rights reserved.</span>

      <a
        className="inline-block text-teal-600  transition hover:text-teal-600/75 dark:text-teal-500 dark:hover:text-teal-500/75"
        href="#"
      >
        Terms & Conditions
      </a>

      <span className="mx-1">&middot;</span>

      <a
        className="inline-block text-teal-600  transition hover:text-teal-600/75 dark:text-teal-500 dark:hover:text-teal-500/75"
        href="#"
      >
        Privacy Policy
      </a>
    </p>

    <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0 dark:text-gray-400">
      <time dateTime="2024">© 2024 New York Softwares</time>
    </p>
  </div>
</div>
</div>


  </footer>
  )
}

export default Footer