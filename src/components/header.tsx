export default function Header() {
  return (
    <header className="w-[100vw] h-24 border-b-2 p-8 border-blue-500 flex items-center justify-between font-sans max-[720px]:justify-center">
      <div className="flex items-center p-4">
        <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center">
          <span className="text-white text-[28px] font-bold">
            Á<span className="font-mono italic">d</span>
          </span>
        </div>
        <div className="flex flex-col ml-4">
          <h1 className="text-[28px]">
            Álvaro <span className="font-mono italic">dev</span>
          </h1>
          <p className="font-mono text-slate-600">Fullstack developer</p>
        </div>
      </div>
      <div className="max-[720px]:hidden">
        <nav className="flex items-center space-x-4 ">
          <a
            href="#"
            className="text-blue-400 text-[24px] hover:font-mono hover:italic"
          >
            Home
          </a>
          <a
            href="#"
            className="text-blue-400 text-[24px] hover:font-mono hover:italic"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-blue-400 text-[24px] hover:font-mono hover:italic"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-blue-400 text-[24px] hover:font-mono hover:italic"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
