import background from "../../assets/images/background.png";
import { firstRow, secondRow } from "../../data/disciplines";

function Disciplines() {
  return (
    <section
      className="
        w-full
        h-[1058px]
        bg-black
        rounded-[10px]
        relative
        overflow-hidden
      "
    >
      {/* Background */}

      <img
        src={background}
        alt="Background"
        className="
          absolute
          right-[350px]
          bottom-[-100px]
          w-[353px]
          h-[707px]
          object-contain
          opacity-80
          pointer-events-none
          select-none
          z-0
        "
        style={{
          transform: "rotate(90.71deg)",
          transformOrigin: "center",
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto pt-[91px] px-[68px]">

        <h3
          className="
            text-[#FF4C4C]
            font-['Orbitron']
            font-semibold
            text-[30px]
            tracking-[4%]
            leading-none
          "
        >
          SPORTS
        </h3>

        <h2
          className="
            mt-[18px]
            text-white
            font-['Orbitron']
            font-bold
            text-[50px]
            tracking-[4%]
            leading-none
          "
        >
          COMPETITION DISCIPLINES
        </h2>

        {/* First Row */}

        <div className="mt-[50px] flex justify-between">
          {firstRow.map((item, index) => (
            <div
              key={index}
              className="
                w-[300px]
                h-[317px]
                rounded-[15px]
                border
                border-[#D9D9D95C]
                overflow-hidden
                bg-[#1A1A1A]
              "
            >
              <img
                src={item.image}
                alt={item.imageAlt}
                className="
                  w-[300px]
                  h-[236px]
                  object-cover
                "
              />

              {index === 3 ? (
                <div className="px-5 py-3">
                  <h3 className={item.titleClass}>
                    {item.title}
                  </h3>
                </div>
              ) : (
                <div className="h-[81px] flex items-center justify-center">
                  <h3 className={item.titleClass}>
                    {item.title}
                  </h3>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Second Row */}

        <div className="mt-[55px] flex gap-[25px]">
          {secondRow.map((item, index) => (
            <div
              key={index}
              className="
                w-[300px]
                h-[317px]
                rounded-[15px]
                border
                border-[#D9D9D95C]
                overflow-hidden
                bg-[#1A1A1A]
              "
            >
              <img
                src={item.image}
                alt={item.imageAlt}
                className="
                  w-full
                  h-[236px]
                  object-cover
                "
              />

              <div className="h-[81px] flex items-center justify-center">
                <h3 className={item.titleClass}>
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Disciplines;