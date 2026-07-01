import structure from "../../assets/images/structure.png";

function About() {
  return (
    <section className="w-full bg-[#1A1919] py-[90px]">

      <div className="max-w-[1440px] mx-auto px-[60px]">

        {/* Heading */}

        <h2
          className="
            text-white
            font-['Orbitron']
            font-bold
            text-[50px]
            tracking-[2%]
          "
        >
          WHAT IS BOTLEAGUE?
        </h2>

        {/* Top Content */}

        <div className="mt-[70px] flex justify-between">

          {/* Left Column */}

          <div className="w-[420px]">

            {/* Point 1 */}

            <div>

              <h3 className="text-[#FF4C4C] text-[40px] font-semibold">
                1.
              </h3>

              <h4
                className="
                  mt-2
                  text-white
                  text-[40px]
                  font-semibold
                  tracking-[2%]
                  leading-none
                "
              >
                STRUCTURED EVENTS
              </h4>

              <p
                className="
                  mt-5
                  w-[389px]
                  text-[25px]
                  font-normal
                  tracking-[2%]
                  text-white/55
                  leading-tight
                "
              >
                "From one-off events to a year-round competitive season."
              </p>

            </div>

            {/* spacing before Point 3 */}

            {/* Point 3 */}

<div className="mt-[50px]">

  <h3 className="text-[#FF4C4C] text-[40px] font-semibold">
    3.
  </h3>

  <h4
    className="
      mt-2
      text-white
      text-[40px]
      font-semibold
      tracking-[2%]
      leading-none
    "
  >
    NATIONAL RANKING
  </h4>

  <p
    className="
      mt-5
      w-[368px]
      text-[25px]
      font-normal
      tracking-[2%]
      text-white/55
      leading-tight
    "
  >
    "Benchmark your skills against the best engineers in India."
  </p>

</div>

          </div>

          {/* Middle Column */}

          <div className="w-[420px]">

            {/* Point 2 */}

            <div>

              <h3 className="text-[#FF4C4C] text-[40px] font-semibold">
                2.
              </h3>

              <h4
                className="
                  mt-2
                  text-white
                  text-[40px]
                  font-semibold
                  tracking-[2%]
                  leading-none
                "
              >
                DIGITAL IDENTITY
              </h4>

              <p
                className="
                  mt-5
                  w-[343px]
                  text-[25px]
                  font-normal
                  tracking-[2%]
                  text-white/55
                  leading-tight
                "
              >
                "Your professional robotics legacy, tracked and verified."
              </p>

            </div>

            {/* Point 4 */}

<div className="mt-[50px]">

  <h3 className="text-[#FF4C4C] text-[40px] font-semibold">
    4.
  </h3>

  <h4
    className="
      mt-2
      text-white
      text-[40px]
      font-semibold
      tracking-[2%]
      leading-none
    "
  >
    CAREER PATHWAY
  </h4>

  <p
    className="
      mt-5
      w-[389px]
      text-[25px]
      font-normal
      tracking-[2%]
      text-white/55
      leading-tight
    "
  >
    "Turning arena victories into real-world industry opportunities."
  </p>

</div>

          </div>

          {/* Right Side Image */}

<div
  className="
    w-[375px]
    flex
    items-center
    justify-center
    mt-[30px]
  "
>
  <img
    src={structure}
    alt="BotLeague Structure"
    className="
      w-[375px]
      h-[386px]
      object-contain
      select-none
    "
  />
</div>

        </div>

      </div>

    </section>
  );
}

export default About;