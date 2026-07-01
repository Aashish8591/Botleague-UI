import { sponsorRowOne, sponsorRowTwo } from "../../data/sponsors";

function Sponsors() {
  return (
    <section
      className="
        w-full
        bg-black
        py-[90px]
      "
    >
      <div
        className="
          max-w-[1440px]
          mx-auto
          px-[90px]
        "
      >
        <h2
          className="
            font-['Orbitron']
            text-white
            text-[35px]
            font-bold
            tracking-[0.02em]
            leading-none
          "
        >
          SPONSORS
        </h2>

        <div
          className="
            mt-[40px]
            flex
            flex-col
            gap-[30px]
          "
        >
          {/* Row 1 */}

          <div
            className="
              grid
              grid-cols-3
              items-center
              gap-x-[50px]
            "
          >
            {sponsorRowOne.map((item, index) => (
              <div
                key={index}
                className={item.wrapperClass}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className={item.imageClass}
                />

                <h3 className={item.titleClass}>
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Row 2 */}

          <div
            className="
              grid
              grid-cols-3
              items-center
              gap-x-[50px]
            "
          >
            {sponsorRowTwo.map((item, index) => (
              <div
                key={index}
                className={item.wrapperClass}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className={item.imageClass}
                />

                <h3 className={item.titleClass}>
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Sponsors;