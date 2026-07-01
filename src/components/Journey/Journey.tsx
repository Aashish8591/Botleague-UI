import { LuWrench } from "react-icons/lu";
import { GiIndianPalace } from "react-icons/gi";
import { PiRankingLight } from "react-icons/pi";
import { BiGroup } from "react-icons/bi";

function Journey() {
  return (
    <section className="relative w-full bg-black rounded-[10px] py-[67px] overflow-hidden">

      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto">

        {/* Small Heading */}
        <h3
          className="
            text-center
            text-[#FF4C4C]
            text-[30px]
            font-medium
            tracking-[2px]
            font-['Roboto']
          "
        >
          USER JOURNEY
        </h3>

        {/* Main Heading */}
        <h2
          className="
            mt-[10px]
            text-center
            text-white
            text-[45px]
            font-bold
            tracking-[2px]
            font-['Orbitron']
          "
        >
          YOUR PATH TO THE LEAGUE
        </h2>

        {/* Description */}
        <p
          className="
            mt-[12px]
            text-center
            text-[#D9D9D966]
            text-[25px]
            font-medium
            tracking-[2px]
            font-['Roboto']
          "
        >
          Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </p>

 
{/* Journey Timeline */}

<div className="relative mt-[85px]">

  {/* Blue Connecting Line */}
  <div
    className="
      absolute
      top-[88px]
      left-1/2
      -translate-x-1/2
      w-[860px]
      h-[5px]
      bg-[#1101D4]
      z-0
    "
  />

  {/* All Steps */}

  <div className="relative z-10 flex justify-center gap-[95px]">

    {/* ================= STEP 1 ================= */}

    <div className="flex flex-col items-center">

      <div className="w-[180px] h-[186px] rounded-full bg-[#2D2D2D] flex items-center justify-center">
        <div className="w-[140px] h-[140px] rounded-full border-[5px] border-[#1101D4] bg-[#000000B0] flex items-center justify-center">
          <LuWrench size={65} className="text-white" />
        </div>
      </div>

      <div className="w-[2px] h-[35px] bg-[#FFFFFFBF]" />

      <h4 className="mt-[12px] text-[#FF4C4C] text-[30px] font-medium tracking-[2px] font-['Roboto']">
        STEP 1
      </h4>

      <p className="mt-[18px] w-[150px] text-center text-white text-[26px] font-medium leading-[100%] tracking-[2px] font-['Roboto']">
        BUILD YOUR
        <br />
        TEAM
      </p>

    </div>

    {/* ================= STEP 2 ================= */}

    <div className="flex flex-col items-center">

      <div className="w-[180px] h-[186px] rounded-full bg-[#2D2D2D] flex items-center justify-center">
        <div className="w-[140px] h-[140px] rounded-full border-[5px] border-[#1101D4] bg-[#000000B0] flex items-center justify-center">
          <GiIndianPalace size={65} className="text-white" />
        </div>
      </div>

      <div className="w-[2px] h-[35px] bg-[#FFFFFFBF]" />

      <h4 className="mt-[12px] text-[#FF4C4C] text-[30px] font-medium tracking-[2px] font-['Roboto']">
        STEP 2
      </h4>

      <p className="mt-[18px] w-[233px] text-center text-white text-[26px] font-medium leading-[100%] tracking-[2px] font-['Roboto']">
        COMPETE ACROSS
        <br />
        INDIA
      </p>

    </div>

    {/* ================= STEP 3 ================= */}

    <div className="flex flex-col items-center">

      <div className="w-[180px] h-[186px] rounded-full bg-[#2D2D2D] flex items-center justify-center">
        <div className="w-[140px] h-[140px] rounded-full border-[5px] border-[#1101D4] bg-[#000000B0] flex items-center justify-center">
          <PiRankingLight size={65} className="text-white" />
        </div>
      </div>

      <div className="w-[2px] h-[35px] bg-[#FFFFFFBF]" />

      <h4 className="mt-[12px] text-[#FF4C4C] text-[30px] font-medium tracking-[2px] font-['Roboto']">
        STEP 3
      </h4>

      <p className="mt-[18px] w-[246px] text-center text-white text-[26px] font-medium leading-[100%] tracking-[2px] font-['Roboto']">
        EARN NATIONAL
        <br />
        RANKING & VALUE
      </p>

    </div>

    {/* ================= STEP 4 ================= */}

    <div className="flex flex-col items-center">

      <div className="w-[180px] h-[186px] rounded-full bg-[#2D2D2D] flex items-center justify-center">
        <div className="w-[140px] h-[140px] rounded-full border-[5px] border-[#1101D4] bg-[#000000B0] flex items-center justify-center">
          <BiGroup size={65} className="text-white" />
        </div>
      </div>

      <div className="w-[2px] h-[35px] bg-[#FFFFFFBF]" />

      <h4 className="mt-[12px] text-[#FF4C4C] text-[30px] font-medium tracking-[2px] font-['Roboto']">
        STEP 4
      </h4>

      <p className="mt-[18px] w-[124px] text-center text-white text-[26px] font-medium leading-[100%] tracking-[2px] font-['Roboto']">
        JOIN THE
        <br />
        LEAGUE
      </p>

    </div>

  </div>

</div>


      </div>

    </section>
  );
}

export default Journey;