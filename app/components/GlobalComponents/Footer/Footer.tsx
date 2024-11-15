import React from 'react';
import SamSblackLogo from '@/app/Images/NewYorkSoftLogoBlack.png'; // Import your PNG image here
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Link from 'next/link'; // Assuming you're using Next.js for link navigation

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="text-center lg:text-left">
            <div className="flex justify-center text-teal-300 sm:justify-start">
              <img alt="Newyorksoftwares logo" className="h-10" src={SamSblackLogo.src} width="40" />
            </div>
            <p className="mt-6 max-w-md leading-relaxed text-gray-400 sm:max-w-xs">
             We build from cheapest Web app, Mobile app and Sites to expensive products, as per requirements.
            </p>
            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              <li>
                <Link
                  href="/facebook" // Add correct internal paths
                  className="transition hover:text-gray-300"
                >
                  <span className="sr-only">Facebook</span>
                  <FaFacebook className="text-white size-6" />
                </Link>
              </li>
              <li>
                <Link
                  href="/instagram" // Add correct internal paths
                  className="transition hover:text-gray-300"
                >
                  <span className="sr-only">Instagram</span>
                  <FaInstagram className="text-white size-6" />
                </Link>
              </li>
              <li>
                <Link
                  href="/twitter" // Add correct internal paths
                  className="transition hover:text-gray-300"
                >
                  <span className="sr-only">Twitter</span>
                  <FaTwitter className="text-white size-6" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            {[
              {
                title: 'About Us',
                links: ['Meet the Team'],
              },
              {
                title: 'Our Services',
                links: [
                  'Web Development',
                  'Mobile Application Development',
                  'Marketing',
                ],
              },
              {
                title: 'Helpful Links',
                links: ['FAQs', 'Support'],
              },
              {
                title: 'Contact Us',
                links: ['Facebook', 'Instagram', 'Twitter'],
                icons: [FaFacebook, FaInstagram, FaTwitter],
              },
            ].map((section, index) => (
              <div className="text-center sm:text-right" key={index}>
                <p className="text-lg font-medium text-white">{section.title}</p>
                <ul className="mt-8 space-y-4 text-sm">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {link === 'FAQs' ? (
                        <Link
                          href="/faqs" // Add the correct link to the FAQs page here
                          className="text-white transition hover:text-white/75"
                        >
                          {link}
                        </Link>
                      ) : link === 'Web Development' ? (
                        <Link
                          href="/Services/WebDevelopment" // Correct internal link for Web Development
                          className="text-white transition hover:text-white/75"
                        >
                          {link}
                        </Link>
                      ) : link === 'Mobile Application Development' ? (
                        <Link
                          href="/Services/MobileDevelopment" // Correct internal link for Mobile Application Development
                          className="text-white transition hover:text-white/75"
                        >
                          {link}
                        </Link>
                      ) : link === 'Marketing' ? (
                        <Link
                          href="/Services/MarketingTeam" // Correct internal link for Marketing
                          className="text-white transition hover:text-white/75"
                        >
                          {link}
                        </Link>
                      ) : link === 'Google Ads' ? (
                        <Link
                          href="/Services/GoogleAds" // Correct internal link for Google Ads
                          className="text-white transition hover:text-white/75"
                        >
                          {link}
                        </Link>
                      ) : (
                        <Link
                          href={`/${link.toLowerCase().replace(/\s+/g, '-')}`} // Example internal path for other links
                          className="text-white transition hover:text-white/75"
                        >
                          {link}
                        </Link>
                      )}
                    </li>
                  ))}
                  {section.icons && (
                    <li className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                      {section.icons.map((Icon, iconIndex) => (
                        <Link
                          href={`/${section.links[iconIndex].toLowerCase()}`} // Example internal paths for icons
                          className="transition hover:text-gray-300"
                          key={iconIndex}
                        >
                          <span className="sr-only">{section.links[iconIndex]}</span>
                          <Icon className="text-white size-6" />
                        </Link>
                      ))}
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-400">
              <span className="block sm:inline">All rights reserved.</span>
              <Link
                className="inline-block text-teal-500 transition hover:text-teal-500/75"
                href="/TermsAndConditions"
              >
                Terms & Conditions
              </Link>
              <span className="mx-1">&middot;</span>
              <Link
                className="inline-block text-teal-500 transition hover:text-teal-500/75"
                href="/PrivacyPolicy"
              >
                Privacy Policy
              </Link>
            </p>
            <p className="mt-4 text-sm text-gray-400 sm:order-first sm:mt-0">
              <time dateTime="2024">© 2024 New York Softwares</time>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
