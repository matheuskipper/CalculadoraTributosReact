import logo from "/src/images/logo.png";

function Header() {
  return (
    <header className="bg-[#b8b7b7] text-[#252525] mb-4 top-0 w-full flex p-3">
      <h4 className=" flex items-center text-left ml-15 font-[600]">
        <span>
          <img
            className="rounded-md mr-2 "
            width={115}
            height={115}
            src={logo}
          />
        </span>
        | Matheus - Contabilidade
      </h4>
      <button
        className="bg-[#666666] hover:bg-[#888888] cursor-pointer text-white 
          font-bold py-1 px-2 rounded-sm ml-auto mr-8 text-[15px]"
        onClick={() => {
          window.open("https://github.com/matheuskipper", "_blank");
        }}
      >
        Acesse meu GitHub
      </button>

      <button
        className="bg-[#666666] hover:bg-[#888888] cursor-pointer text-white 
          font-bold py-1 px-2 rounded-sm mr-8 text-[15px]"
        onClick={() => {
          window.open(
            "https://github.com/matheuskipper?tab=repositories",
            "_blank"
          );
        }}
      >
        Outros projetos
      </button>
    </header>
  );
}

export default Header;
