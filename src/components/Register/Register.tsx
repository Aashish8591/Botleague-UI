import leader from "../../assets/images/leader.png";
import { Icon } from "@iconify/react";

function Register() {
  return (
    <section
    id="register"
      className="
        w-full
        py-[90px]
        relative
      "
    >
      <div
        className="
          max-w-[1440px]
          mx-auto
          px-[80px]
        "
      >
        {/* Heading */}

        <h3
          className="
            font-['Orbitron']
            text-[#FF4C4C]
            text-[45px]
            font-semibold
            leading-none
            tracking-[0.04em]
          "
        >
          WHY REGISTER ?
        </h3>

        <h2
          className="
            mt-[14px]
            font-['Orbitron']
            text-white
            text-[50px]
            font-bold
            leading-none
            tracking-[0.04em]
          "
        >
          THE LEAGUE ADVANTAGE
        </h2>

        {/* Content */}

        <div
          className="
            mt-[60px]
            grid
            grid-cols-[620px_1fr]
            items-start
            gap-[70px]
          "
        >
{/* LEFT SIDE */}

<div
  className="
    flex
    flex-col
    gap-[32px]
    pt-[8px]
  "
>

  {/* Benefit 1 */}

  <div className="flex items-start gap-[32px]">

    <Icon
      icon="mdi:medal"
      width="71"
      height="71"
      color="#FF4C4C"
      className="flex-shrink-0 mt-[4px]"
    />

    <div>

      <h3
        className="
          font-['Roboto']
          text-white
          text-[40px]
          font-medium
          leading-none
        "
      >
        NATIONAL RECOGNITION
      </h3>

      <p
        className="
          mt-[10px]
          w-[436px]
          font-['Roboto']
          text-[25px]
          font-normal
          leading-[30px]
          text-white/55
        "
      >
        "Benchmark your skills on India's
        <br />
        official robotics leaderboard."
      </p>

    </div>

  </div>



  {/* Benefit 2 */}

  <div className="flex items-start gap-[32px]">

    <Icon
      icon="mdi:gavel"
      width="88"
      height="55"
      color="#FF4C4C"
      className="flex-shrink-0 mt-[8px]"
    />

    <div>

      <h3
        className="
          font-['Roboto']
          text-white
          text-[40px]
          font-medium
          leading-none
        "
      >
        FAIR JUDGING
      </h3>

      <p
        className="
          mt-[10px]
          w-[436px]
          font-['Roboto']
          text-[25px]
          font-normal
          leading-[30px]
          text-white/55
        "
      >
        "Compete with confidence under
        <br />
        standardized, expert-led evaluation."
      </p>

    </div>

  </div>



  {/* Benefit 3 */}

  <div className="flex items-start gap-[32px]">

    <Icon
      icon="mdi:briefcase-outline"
      width="72"
      height="69"
      color="#FF4C4C"
      className="flex-shrink-0 mt-[4px]"
    />

    <div>

      <h3
        className="
          font-['Roboto']
          text-white
          text-[40px]
          font-medium
          leading-none
        "
      >
        CAREER OPS
      </h3>

      <p
        className="
          mt-[10px]
          w-[436px]
          font-['Roboto']
          text-[25px]
          font-normal
          leading-[30px]
          text-white/55
        "
      >
        "Bridge the gap between arena
        <br />
        victories and top-tier tech placements."
      </p>

    </div>

  </div>



  {/* Benefit 4 */}

  <div className="flex items-start gap-[52px]">

    <Icon
      icon="mdi:lightning-bolt-outline"
      width="50"
      height="77"
      color="#FF4C4C"
      className="flex-shrink-0 mt-[2px]"
    />

    <div>

      <h3
        className="
          font-['Roboto']
          text-white
          text-[40px]
          font-medium
          leading-none
        "
      >
        HIGH - ENERGY ECO
      </h3>

      <p
        className="
          mt-[10px]
          w-[436px]
          font-['Roboto']
          text-[25px]
          font-normal
          leading-[30px]
          text-white/55
        "
      >
        "Join a nationwide community of elite
        <br />
        innovators and robotics athletes."
      </p>

    </div>

  </div>

</div>


{/* RIGHT SIDE */}

<div
className="
flex-1
relative
flex
justify-end
"
>
<img
src={leader}
className="
w-full
max-w-[831px]
h-auto
object-contain
"
/>
</div>
        </div>
      </div>
    </section>
  );
}

export default Register;