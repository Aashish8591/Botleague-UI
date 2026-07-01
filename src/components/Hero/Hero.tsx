import heroBg from "../../assets/images/hero-bg.png";

function Hero() {
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

  
  return (
    <section
  id="home"
  className="relative w-full h-[621px] overflow-hidden bg-black mt-[103px]"
>

      {/* Right Image */}
      <div className="absolute right-0 top-0 w-[1077px] h-[641px]">
        <img
          src={heroBg}
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Black Gradient */}
      <div className="absolute top-0 left-[294px] w-[453px] h-[621px] bg-gradient-to-l from-transparent to-black z-20"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">

        <div className="ml-[81px]">

          {/* Live Badge */}

        {/* Live Badge */}
        <div
          className="
            absolute
            top-[33px]
            left-[900px]
            w-[448px]
            h-[39px]
            rounded-[5px]
            border
            border-[#D9D9D966]
            bg-[#1A1919]
            flex
            items-center
            justify-between
            px-4
            whitespace-nowrap
            z-30
          "
        >
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="text-[#FF4C4C] text-[16px] font-semibold">
              ● LIVE :
            </span>

            <span className="text-white text-[16px] font-semibold">
              Episode 14 · Bengaluru Regionals
            </span>
          </div>

          <span className="text-[#FF4C4C] text-[18px] font-semibold whitespace-nowrap">
            WATCH LIVE
          </span>
        </div>

          {/* Heading */}

          <h1
            className="
            w-[781px]
            text-white
            font-['Orbitron']
            font-semibold
            text-[72px]
            leading-[100%]
            tracking-[2%]
          "
          >
            INDIA'S ULTIMATE
            <br />
            ROBOTICS ARENA
          </h1>

          {/* Description */}

          <p
            className="
            mt-[22px]
            w-[427px]
            text-[#D9D9D9]
            text-[28px]
            font-medium
            leading-[100%]
            font-['Roboto']
          "
          >
            Build.Compete.Rank.The National
            <br />
            Ecosystem for Robotics Arena
          </p>

          {/* Buttons */}

          <div className="flex gap-[13px] mt-[33px]">

            <button
             onClick={() => handleScroll("register")}
              className="
              w-[236px]
              h-[52px]
              rounded-[5px]
              bg-gradient-to-r
              from-[#FF4C4C]
              to-[#992E2E]
              text-white
              text-[21px]
              font-medium
              font-['Roboto']
              shadow-lg
              hover:scale-105
              transition
            "
            >
              CREATE ACCOUNT
            </button>

            <button
            onClick={() => handleScroll("events")}
              className="
              w-[236px]
              h-[52px]
              rounded-[5px]
              border
              border-white
              text-white
              text-[21px]
              font-medium
              font-['Roboto']
              shadow-lg
              hover:bg-white
              hover:text-black
              transition
            "
            >
              EXPLORE EVENTS
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;