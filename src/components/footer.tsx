import { SiX, SiLinkedin, SiGithub } from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="dark:bg-black  w-[100vw] px-8 m-0 h-[100px] border-t-2 border-blue-500 flex items-center justify-between font-sans max-[720px]:justify-center">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex space-x-4 my-2">
          <a
            href="https://x.com/alvaro_bda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            <SiX />
          </a>
          <a
            href="mailto:alvarobdaraujo@outlook.com"
            className="text-blue-500 hover:underline "
          >
            <Mail />
          </a>
          <a
            href="https://www.linkedin.com/in/alvaro-basilio/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline "
          >
            <SiLinkedin />
          </a>
          <a
            href="https://github.com/alvarobasia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline "
          >
            <SiGithub />
          </a>
        </div>
        <p className="dark:text-white text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
