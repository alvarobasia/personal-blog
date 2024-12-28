"use client";

import { useTheme } from "next-themes";
import AsideMenu from "./aside-menu";
import { Button } from "./ui/button";
import { Sun, Moon } from "lucide-react";
const linkClass = {
  class:
    "text-blue-400 text-[20px] hover:font-mono hover:italic hover:text-blue-500",
};

export default function Header() {
  const { setTheme, theme } = useTheme();

  const switchTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <header className="dark:bg-black w-[100vw] px-8 m-0 h-fit border-b-2 border-blue-500 flex items-center justify-between font-sans max-[720px]:justify-center">
      <AsideMenu />
      <div className="flex items-center p-4">
        <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
          <span className="text-white text-[28px] font-bold">
            Á<span className="font-mono italic">d</span>
          </span>
        </div>
        <div className="flex flex-col ml-4">
          <h1 className="text-[24px] max-[720px]:text-[20px]">
            Álvaro <span className="font-mono italic">dev</span>
          </h1>
          <p className="font-mono text-slate-600 italic max-[720px]:text-[12px]">
            Fullstack developer
          </p>
        </div>
      </div>
      <div className="max-[720px]:hidden flex flex-row items-center space-x-4">
        <nav className="flex items-center space-x-4 ">
          <a href="#" className={linkClass.class}>
            Home
          </a>
          <a href="#" className={linkClass.class}>
            Sobre
          </a>
          <a href="#" className={linkClass.class}>
            Contato
          </a>
        </nav>
        <Button variant={"ghost"} size="sm" onClick={switchTheme}>
          {theme === "light" && <Sun color="blue" size={"25"} />}
          {theme === "dark" && <Moon color="blue" size={"25"} />}
        </Button>
      </div>
    </header>
  );
}
