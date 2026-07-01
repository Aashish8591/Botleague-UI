import { Icon } from "@iconify/react";
import { categories } from "../../data/categories";

function Categories() {
  return (
    <section 
    id="categories"
    className="w-full bg-[#1A1919] py-[90px]">
      <div className="max-w-[1440px] mx-auto px-[54px]">

        <h2
          className="
            text-white
            font-['Orbitron']
            font-bold
            text-[50px]
            tracking-[4%]
          "
        >
          CATEGORIES
        </h2>

        <div className="flex gap-[26px] mt-[64px]">
          {categories.map((category, index) => (
            <div
              key={index}
              className="
                w-[310px]
                h-[391px]
                rounded-[20px]
                bg-[rgba(255,255,255,0.08)]
                px-[26px]
                pt-[36px]
                pb-[28px]
              "
              style={{
                border: `1px solid ${category.borderColor}`,
                boxShadow: category.shadow
                  ? category.shadow.replace(/_/g, " ")
                  : undefined,
              }}
            >
              <Icon
                icon={category.icon}
                width={category.iconWidth}
                height={category.iconHeight}
                color="#FFC702"
              />

              <h3
                className="
                  whitespace-pre-line
                  text-white
                  font-['Orbitron']
                  font-bold
                  text-[32px]
                  leading-none
                  tracking-[4%]
                "
                style={{ marginTop: category.titleMarginTop }}
              >
                {category.title}
              </h3>

              <p
                className="
                  mt-[14px]
                  w-[228px]
                  text-[20px]
                  font-medium
                  leading-tight
                  tracking-[4%]
                  text-white/55
                "
              >
                {category.description}
              </p>

              <button
                className="
                  mt-[42px]
                  flex
                  items-center
                  gap-3
                  text-[#FF4C4C]
                  text-[23px]
                  font-medium
                  tracking-[4%]
                  hover:text-red-400
                  transition
                "
              >
                LEARN MORE

                <span className="text-[28px]">
                  →
                </span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Categories;