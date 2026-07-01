import { upcomingEvents, pastResults } from "../../data/eventsData";

function Events() {
  return (
    <section 
    id="events"
    className="relative w-full bg-[#1A1A1A] overflow-hidden pt-[70px] pb-[110px]">

      {/* Left Blur Ellipse */}
      <div
        className="
          absolute
          w-[733px]
          h-[675px]
          left-[-401px]
          top-[143px]
          rounded-full
          bg-[#5F2F2F6B]
          blur-[100px]
          pointer-events-none
        "
      />

      {/* Right Blur Ellipse */}
      <div
        className="
          absolute
          w-[733px]
          h-[675px]
          left-[839px]
          top-[-50px]
          rounded-full
          bg-[#5F2F2F6B]
          blur-[100px]
          pointer-events-none
        "
      />

      {/* Main Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-[40px]">

        {/* Section Title */}

        <h2
          className="
            font-['Orbitron']
            font-bold
            text-[50px]
            tracking-[2px]
            text-white
            ml-0
          "
        >
          COMPETITIONS & EVENTS
        </h2>

        {/* Headings */}

        <div className="grid grid-cols-[480px_412px_409px] gap-[44px] mt-[40px]">

          <div>
            <h3
              className="
                font-['Orbitron']
                text-[30px]
                font-medium
                tracking-[2px]
                text-[#FF4C4C]
                mb-[36px]
              "
            >
              LIVE NOW
            </h3>
          </div>

          <div>
            <h3
              className="
                font-['Orbitron']
                text-[30px]
                font-medium
                tracking-[2px]
                text-white
                mb-[36px]
              "
            >
              UPCOMING
            </h3>
          </div>

          <div>
            <h3
              className="
                font-['Orbitron']
                text-[30px]
                font-medium
                tracking-[2px]
                text-white
                mb-[36px]
              "
            >
              PAST RESULTS
            </h3>
          </div>

        </div>

        {/* Cards Row */}

        <div
          className="
            grid
            grid-cols-[480px_412px_409px]
            gap-[32px]
            items-start
          "
        >

          {/* Live Card */}

          <div
            className="
              w-[480px]
              h-[480px]
              rounded-[10px]
              border
              border-[#D9D9D95C]
              bg-[#1E1E1E]
              px-[25px]
              pt-[20px]
            "
          >
            {/* Header */}

            <div className="flex justify-between items-start">

              <div>
                <h4
                  className="
                    text-white
                    font-['Roboto']
                    font-medium
                    text-[30px]
                    tracking-[2%]
                  "
                >
                  Bengaluru Regionals
                </h4>

                <p
                  className="
                    mt-[6px]
                    text-[25px]
                    text-[#FFFFFF66]
                    font-['Roboto']
                    font-normal
                  "
                >
                  Lorem Ipsum
                </p>
              </div>

              <div
                className="
                  w-[80px]
                  h-[23px]
                  mt-[4px]
                  rounded-[5px]
                  bg-[#FF4C4C]
                  flex
                  items-center
                  justify-center
                "
              >
                <span
                  className="
                    text-white
                    text-[15px]
                    font-medium
                    font-['Roboto']
                  "
                >
                  Ongoing
                </span>
              </div>

            </div>

            <div className="mt-[14px] border-b border-[#D9D9D966]" />

            {/* Tournament Area */}

            <div className="relative mt-[30px] h-[300px]">

              {/* ---------- Connector Lines ---------- */}

{/* Box 1 -> Semi Final 1 */}
<div className="absolute left-[121px] top-[19px] w-[23px] border-t-2 border-[#FF4C4C]" />

{/* Box 2 -> Semi Final 1 */}
<div className="absolute left-[121px] top-[102px] w-[23px] border-t-2 border-[#FF4C4C]" />

{/* Vertical Line */}
<div className="absolute left-[144px] top-[19px] h-[83px] border-l-2 border-[#FF4C4C]" />

{/* Horizontal to Semi Final 1 */}
<div className="absolute left-[144px] top-[60px] w-[21px] border-t-2 border-[#FF4C4C]" />

{/* ------------------------------ */}

{/* Box 3 -> Semi Final 2 */}
<div className="absolute left-[121px] top-[185px] w-[23px] border-t-2 border-[#FF4C4C]" />

{/* Box 4 -> Semi Final 2 */}
<div className="absolute left-[121px] top-[268px] w-[23px] border-t-2 border-[#FF4C4C]" />

{/* Vertical Line */}
<div className="absolute left-[144px] top-[185px] h-[83px] border-l-2 border-[#FF4C4C]" />

{/* Horizontal to Semi Final 2 */}
<div className="absolute left-[144px] top-[226px] w-[21px] border-t-2 border-[#FF4C4C]" />

{/* ------------------------------ */}

{/* Semi Final 1 -> Final */}
<div className="absolute left-[258px] top-[60px] w-[30px] border-t-2 border-[#FF4C4C]" />

{/* Semi Final 2 -> Final */}
<div className="absolute left-[258px] top-[225px] w-[30px] border-t-2 border-[#FF4C4C]" />

{/* Vertical Line */}
<div className="absolute left-[288px] top-[60px] h-[165px] border-l-2 border-[#FF4C4C]" />

{/* Horizontal to Final */}
<div className="absolute left-[288px] top-[142px] w-[42px] border-t-2 border-[#FF4C4C]" />

{/* Left Side Boxes */}

<div className="absolute left-0 top-0 w-[121px] h-[40px] rounded-[5px] bg-[#FFFFFF63]" />

<div className="absolute left-0 top-[83px] w-[121px] h-[40px] rounded-[5px] bg-[#FFFFFF63]" />

<div className="absolute left-0 top-[166px] w-[121px] h-[40px] rounded-[5px] bg-[#FFFFFF63]" />

<div className="absolute left-0 top-[249px] w-[121px] h-[40px] rounded-[5px] bg-[#FFFFFF63]" />

{/* Middle Boxes */}

<div
  className="
    absolute
    left-[165px]
    top-[40px]
    w-[93px]
    h-[40px]
    rounded-[5px]
    bg-[#FFFFFF63]
  "
/>

<div
  className="
    absolute
    left-[165px]
    top-[205px]
    w-[93px]
    h-[40px]
    rounded-[5px]
    bg-[#FFFFFF63]
  "
/>

{/* Final Winner Box */}

<div
  className="
    absolute
    left-[330px]
    top-[122px]
    w-[93px]
    h-[40px]
    rounded-[5px]
    bg-[#FFFFFF63]
  "
/>

            </div>

          </div>
                    {/* Upcoming */}

          <div className="flex flex-col gap-[18px]">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="
                  w-[412px]
                  h-[230px]
                  rounded-[10px]
                  border
                  border-[#D9D9D95C]
                  bg-[#1E1E1E]
                  px-[22px]
                  pt-[20px]
                "
              >
                <h4
                  className="
                    text-white
                    text-[30px]
                    font-medium
                    font-['Roboto']
                  "
                >
                  {event.title}
                </h4>

                <div className="flex justify-between mt-[18px]">

                  <div>
                    <p className="text-[20px] text-[#FFFFFF99] font-medium">
                      Date
                    </p>

                    <p className="text-[20px] text-white font-medium mt-[5px]">
                      {event.date}
                    </p>
                  </div>

                  <div>
                    <p className="text-[20px] text-[#FFFFFF99] font-medium">
                      Location
                    </p>

                    <p className="text-[20px] text-white font-medium mt-[5px]">
                      {event.location}
                    </p>
                  </div>

                  <div>
                    <p className="text-[20px] text-[#FFFFFF99] font-medium">
                      Category
                    </p>

                    <p className="text-[20px] text-white font-medium mt-[5px]">
                      {event.category}
                    </p>
                  </div>

                </div>

                <div className="flex justify-center mt-[25px]">
                  <button
                    className="
                      w-[316px]
                      h-[47px]
                      rounded-[5px]
                      bg-[#FF4C4C]
                      shadow-[0_4px_4px_rgba(0,0,0,0.25)]
                      text-white
                      text-[20px]
                      font-medium
                      hover:bg-red-600
                      transition
                    "
                  >
                    REGISTER NOW
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* Past Results */}

          <div
            className="
              w-[409px]
              h-[480px]
              rounded-[10px]
              border
              border-[#D9D9D95C]
              bg-[#1E1E1E]
              px-[24px]
              pt-[20px]
            "
          >
            {pastResults.map((result, index) => (
              <div key={index}>

                <div className={index !== 0 ? "mt-[22px]" : ""}>
                  <h4
                    className="
                      text-white
                      text-[30px]
                      font-medium
                      font-['Roboto']
                    "
                  >
                    {result.title}
                  </h4>

                  <p
                    className="
                      mt-[6px]
                      text-[25px]
                      text-[#FFFFFF66]
                      font-normal
                      font-['Roboto']
                    "
                  >
                    {result.description}
                  </p>
                </div>

                {index !== pastResults.length - 1 && (
                  <div className="mt-[16px] border-b border-[#D9D9D966]" />
                )}

              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}

export default Events;