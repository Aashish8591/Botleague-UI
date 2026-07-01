import logo from "../../assets/images/logo.png";

const navLinks = [
  { name: "Events", id: "events" },
  { name: "Programs", id: "categories" },
  { name: "Community", id: "join" },
  { name: "Ranks", id: "register" },
];

function Navbar() {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);

    if (!section) return;

    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      100; // Navbar height

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        h-[103px]
        bg-[#1A1A1A]
        z-50
        shadow-md
      "
    >
      <nav className="relative w-full h-full">

        {/* Logo */}

        <div
          onClick={scrollToTop}
          className="absolute left-[27px] top-[26px] cursor-pointer"
        >
          <img
            src={logo}
            alt="BotLeague Logo"
            className="w-[290px] h-[58px] object-contain"
          />
        </div>

        {/* Navigation */}

        <ul className="absolute left-[368px] top-[38px] flex items-center gap-[55px]">
          {navLinks.map((item) => (
            <li
              key={item.name}
              onClick={() => handleScroll(item.id)}
              className="
                relative
                cursor-pointer
                font-['Orbitron']
                text-[22px]
                leading-none
                text-white
                transition-all
                duration-300
                hover:text-[#FF4C4C]
                after:absolute
                after:left-0
                after:-bottom-[15px]
                after:h-[3px]
                after:w-0
                after:bg-[#FF4C4C]
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Buttons */}

        <div className="absolute right-[23px] top-[31px] flex gap-[25px]">

          {/* Login */}

          <button
          onClick={() => handleScroll("register")}
            className="
              w-[121px]
              h-[43px]
              rounded-[8px]
              border
              border-white
              text-white
              font-semibold
              text-[18px]
              font-['Roboto']
              shadow-[0_4px_4px_rgba(0,0,0,0.25)]
              hover:bg-white
              hover:text-black
              transition-all
              duration-300
            "
          >
            LOGIN
          </button>

          {/* Register */}

          <button
            onClick={() => handleScroll("register")}
            className="
              w-[163px]
              h-[43px]
              rounded-[8px]
              bg-[#FF4C4C]
              text-white
              font-semibold
              text-[18px]
              font-['Roboto']
              shadow-[0_4px_4px_rgba(0,0,0,0.25)]
              hover:bg-red-600
              transition-all
              duration-300
            "
          >
            REGISTER NOW
          </button>

        </div>

      </nav>
    </header>
  );
}

export default Navbar;