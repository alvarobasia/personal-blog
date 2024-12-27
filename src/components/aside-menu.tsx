"use client";

import React, { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import "tailwindcss/tailwind.css";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

const menuOptions = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "Sobre",
    link: "#about",
  },
  {
    name: "Contato",
    link: "#contact",
  },
];

const AsideMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { setTheme, theme } = useTheme();

  const switchTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-[720px]:hidden">
      <button onClick={toggleMenu} className="p-2">
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-white dark:bg-slate-900 shadow-lg z-50 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-2">
            <Button variant={"ghost"} onClick={toggleMenu} className="p-2">
              <X className="w-6 h-6" />
            </Button>
            <Button variant={"ghost"} size="sm" onClick={switchTheme}>
              {theme === "light" && <Sun color="blue" size={"25"} />}
              {theme === "dark" && <Moon color="blue" size={"25"} />}
            </Button>
          </div>

          <nav className="mt-10">
            <ul>
              {menuOptions.map((option) => (
                <li
                  key={option.name}
                  className="group p-4 border-b border-gray-200 hover:bg-gray-900 dark:hover:bg-gray-100 bg-transparent transition-all duration-500 cursor-pointer"
                >
                  <a
                    href={option.link}
                    className="text-gray-700 dark:text-gray-300 group-hover:text-gray-300 dark:group-hover:text-gray-900"
                  >
                    {option.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AsideMenu;
