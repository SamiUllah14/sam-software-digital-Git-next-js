import React from "react";
import Image from "next/image"; // Import Image component from next/image

const Carousel = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-3 relative">
      <div className="w-96 mx-auto" style={{ scrollSnapType: "x mandatory" }}>
        {/* First Carousel Item */}
        <div>
          <input className="sr-only peer" type="radio" name="carousel" id="carousel-1" defaultChecked />
          <div className="w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0">
            {/* Using Image component instead of img */}
            <Image
              className="rounded-t-lg"
              src="https://images.unsplash.com/photo-1628788835388-415ee2fa9576?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=384&q=80"
              alt="Carousel Image"
              width={384} // Add width and height for better optimization
              height={256} // Set height based on aspect ratio
            />
            <div className="py-4 px-8">
              <h1 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h1>
              <p className="hover:cursor-pointer py-3 text-gray-600 leading-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="absolute top-1/2 w-full flex justify-between z-20">
              <label htmlFor="carousel-3" className="inline-block text-red-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                </svg>
              </label>
              <label htmlFor="carousel-2" className="inline-block text-red-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
              </label>
            </div>
          </div>
        </div>
        
        {/* Additional carousel items would go here */}

      </div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="md:absolute bottom-0 right-0 p-4 float-right animate-bounce"
      >
        <Image
          src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg"
          alt="Buy Me A Coffee"
          width={56} // Set width and height for better optimization
          height={56}
          className="transition-all rounded-full -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white"
        />
      </a>
    </div>
  );
};

export default Carousel;
