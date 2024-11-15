import React from 'react';

const AboveFooterDownload = () => {
  return (
    <div className="w-full p-4 text-center bg-black border border-gray-700 rounded-lg shadow sm:p-8">
      <h5 className="mb-2 text-3xl font-bold text-white">Work fast from anywhere</h5>
      <p className="mb-5 text-base text-gray-400 sm:text-lg">
        Stay up to date and move work forward with New York Softwares on iOS & Android. Download the app today.
      </p>
      <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
        <a
          href="#"
          className="w-full sm:w-auto bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-700 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5"
        >
          <svg
            className="me-3 w-7 h-7"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google-play"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
            ></path>
          </svg>
          <div className="text-left rtl:text-right">
            <div className="mb-1 text-xs">Get in on</div>
            <div className="-mt-1 font-sans text-sm font-semibold">Google Play</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default AboveFooterDownload;
