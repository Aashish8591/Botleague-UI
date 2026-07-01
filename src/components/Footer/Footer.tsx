import { Icon } from "@iconify/react";

function Footer() {
  return (
    <footer
      className="
        w-full
        bg-black
        py-[60px]
      "
    >
      <div
        className="
          max-w-[1440px]
          mx-auto
          px-[62px]
        "
      >
        {/* Divider */}

        <div
          className="
            w-full
            h-px
            bg-white/50
          "
        ></div>

        {/* Footer Content */}

        <div
          className="
            mt-[30px]
            flex
            justify-between
            items-start
          "
        >
          {/* ================= Left Side ================= */}

          <div>
            {/* Heading */}

            <h2
              className="
                text-white
                text-[30px]
                font-semibold
                font-['Roboto']
                tracking-[0.02em]
              "
            >
              QUICK LINKS
            </h2>

            {/* Links */}

            <div
              className="
                mt-[40px]
                flex
                gap-[110px]
              "
            >
              {/* Column 1 */}

              <div
                className="
                  flex
                  flex-col
                  gap-[10px]
                  text-[25px]
                  font-medium
                  font-['Roboto']
                  tracking-[0.04em]
                  text-white/55
                "
              >
                <p>The Arena</p>
                <p>Episodes</p>
                <p>National Rankings</p>
                <p>Programs</p>
                <p>Rulebooks</p>
              </div>

              {/* Column 2 */}

              <div
                className="
                  flex
                  flex-col
                  gap-[10px]
                  text-[25px]
                  font-medium
                  font-['Roboto']
                  tracking-[0.04em]
                  text-white/55
                "
              >
                <p>Join the Team</p>
                <p>Sponsorships</p>
                <p>Help Center</p>
                <p>Contact Us</p>
                <p>Legal</p>
              </div>
            </div>
          </div>

          {/* ================= Right Side ================= */}

          <div className="mr-[35px]">
            <h2
              className="
                text-white
                text-[30px]
                font-semibold
                font-['Roboto']
                tracking-[0.02em]
                text-center
              "
            >
              SOCIAL MEDIA
            </h2>

            <div
              className="
                mt-[45px]
                flex
                items-center
                justify-center
                gap-[34px]
              "
            >
              {/* Youtube */}

              <Icon
                icon="line-md:youtube"
                width="68"
                height="68"
                className="text-white/60"
              />

              {/* Instagram */}

              <Icon
                icon="mdi:instagram"
                width="50"
                height="50"
                className="text-white/60"
              />

              {/* Facebook */}

              <Icon
                icon="mdi:facebook"
                width="50"
                height="50"
                className="text-white/60"
              />

              {/* Twitter */}

              <Icon
                icon="mdi:twitter"
                width="47"
                height="47"
                className="text-white/60"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;