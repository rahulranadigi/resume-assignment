import React from "react";
import Heading from "./Heading";
import Link from "./Link";
import Line from "./Line";
import LabelData from "./LabelData";

const Header = () => {
  const linkData = [
    {
      name: "rahul-rana.com",
      href: "https://my-personal-portfolio-gamma.vercel.app/",
      width: "2px",
      height: "16px",
      visibility: true,
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/rahul-rana-663877241/",
      width: "2px",
      height: "16px",
      visibility: true,
    },
    {
      name: "Github",
      href: "https://github.com/RahulRana0707",
      width: "2px",
      height: "16px",
      visibility: true,
    },
    {
      name: "Leetcode",
      href: "https://leetcode.com/Rahul_Rana07/",
      width: "2px",
      height: "16px",
      visibility: false,
    },
  ];
  return (
    <section className="header__section">
      <div className="user__intro">
        <Heading name={"Rahul Ramdev Rana"} size={"1.8rem"} />
        <div className="user__intro_links">
          {linkData.map((data, index) => {
            return (
              <>
                <Link name={data.name} href={data.href} key={index} />
                <Line
                  key={index}
                  width={data.width}
                  height={data.height}
                  visibility={data.visibility}
                />
              </>
            );
          })}
        </div>
      </div>
      <div className="user__data">
        <LabelData
          labelName={"Loaction"}
          labelData={"Boisar, Maharashtra, India"}
          isLink={false}
        />
        <div className="data__wrapper">
          <LabelData
            labelName={"Email"}
            labelData={"rr8407084@gmail.com"}
            isLink={true}
            href={""}
          />
          <Line height={"15px"} width={"2px"} visibility={true} />
          <LabelData
            labelName={"Mobile"}
            labelData={"+91 8600639680"}
            isLink={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
