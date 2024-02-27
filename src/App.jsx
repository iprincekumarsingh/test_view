import React, { useEffect, useState } from "react";
import bg from "./assets/cm.webp";
import logo from "./assets/logo.png";
import { TypeAnimation } from "react-type-animation";
export default function App() {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const textToType = "Coming Soon";
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      setTypedText((prevText) => {
        if (currentIndex < textToType.length) {
          return prevText + textToType[currentIndex++];
        } else {
          clearInterval(typingInterval);
          return prevText;
        }
      });
    }, 100);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        background: "black",
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <nav className="text-black">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-20" alt="Flowbite Logo" />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 items-center md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
              <li className="border border-white py-2 px-2 rounded-md">
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 "
                  aria-current="page"
                >
                  WhitePaper
                </a>
              </li>
              <li className="border bg-green-500 border-white py-2 px-2 rounded-md">
                <a
                  href="#"
                  className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700"
                >
                  Launch App
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="flex-grow flex flex-col items-center justify-center">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Coming Soon",
            3000, // wait 1s before replacing "Mice" with "Hamsters"
          ]}
          wrapper="h2"
          speed={50}
          style={{
            fontSize: "clamp(3rem, 8vw, 10rem)", // Responsive font size
            display: "inline-block",
            color: "white",
            fontWeight: 900,
          }}
          repeat={Infinity}
        />
        <h2 className="text-white text-center mt-10 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl underline ring-offset-1s">
          Catoff- usually in a bet
        </h2>
      </main>
      <footer className="bg-black rounded-lg shadow m-4">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline"></a>.
            All Rights Reserved.
          </span>
          <ul className="flex flex-wrap gap-2  items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                <img
                  className="bg-white rounded-r-md"
                  src="https://assets-global.website-files.com/6527c1b34fea32f3c88ebc27/652e5dd6d083f812766d5d70_x-icon.svg"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                <img
                  className="bg-white roundedmd"
                  src="https://assets-global.website-files.com/6527c1b34fea32f3c88ebc27/652e5dd419b525ccffe13db5_telegram-icon%20(1).svg"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                <img
                  className="bg-white roundedmd"
                  src="https://assets-global.website-files.com/6527c1b34fea32f3c88ebc27/652e5dd5582082213dc673b9_discord-icon%20(1).svg"
                  alt=""
                />
              </a>
            </li>
            {/* ... (other list items) */}
          </ul>
        </div>
      </footer>
    </div>
  );
}
