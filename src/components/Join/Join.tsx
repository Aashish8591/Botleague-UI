import { joinCards } from "../../data/join";

function Join() {
  return (
    <section
     id="join"
      className="
        w-full
        py-[90px]
        relative
        bg-black
      "
    >
      <div
        className="
          max-w-[1440px]
          mx-auto
          px-[92px]
        "
      >
        {/* Heading */}

        <h2
          className="
            font-['Orbitron']
            text-white
            text-[50px]
            font-bold
            leading-none
            tracking-[0.04em]
          "
        >
          JOIN THE ECOSYSTEM
        </h2>

        {/* Cards */}

        <div
          className="
            mt-[105px]
            flex
            justify-between
            items-start
            gap-[34px]
          "
        >
          {joinCards.map((card, index) => (
            <div
              key={index}
              className="
                w-[396px]
                h-[460px]
                rounded-[15px]
                border
                border-white/40
                bg-[rgba(255,255,255,0.06)]
                pt-[48px]
                px-[23px]
                flex
                flex-col
                items-center
              "
            >
              {/* Title */}

              <h3 className={card.titleClass}>
                {card.title}
              </h3>

              {/* Name */}

              <input
                type="text"
                placeholder="Name"
                className="
                  mt-[36px]
                  w-[303px]
                  h-[60px]
                  rounded-[10px]
                  border
                  border-white/40
                  bg-[#1E1E1E]
                  px-[18px]
                  text-[25px]
                  font-normal
                  font-['Roboto']
                  text-white
                  placeholder:text-[#FFFFFFA1]
                  outline-none
                "
              />

              {/* Location */}

              <input
                type="text"
                placeholder="Location"
                className="
                  mt-[21px]
                  w-[303px]
                  h-[60px]
                  rounded-[10px]
                  border
                  border-white/40
                  bg-[#1E1E1E]
                  px-[18px]
                  text-[25px]
                  font-normal
                  font-['Roboto']
                  text-white
                  placeholder:text-[#FFFFFFA1]
                  outline-none
                "
              />

              {/* Enroll */}

              <input
                type="text"
                placeholder="Enroll"
                className="
                  mt-[20px]
                  w-[303px]
                  h-[60px]
                  rounded-[10px]
                  border
                  border-white/40
                  bg-[#1E1E1E]
                  px-[18px]
                  text-[25px]
                  font-normal
                  font-['Roboto']
                  text-white
                  placeholder:text-[#FFFFFFA1]
                  outline-none
                "
              />

              {/* Button */}

              <button
                className="
                  mt-[21px]
                  w-[351px]
                  h-[67px]
                  rounded-[10px]
                  bg-[#FF4C4C]
                  shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
                  text-white
                  text-[35px]
                  font-medium
                  font-['Roboto']
                  tracking-[0.04em]
                  hover:bg-red-600
                  transition
                "
              >
                SIGN UP
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Join;