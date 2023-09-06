import React from "react";
import "./headerSection.css";
import Heading from "../global/Heading";
import Link from "../global/Link";
import Line from "../global/Line";
import LabelData from "../global/LabelData";

const HeaderSection = ({ name, links, details, fieldName }) => {
  return (
    <section className="header__section">
      <div className="user__intro">
        <Heading
          name={name}
          size={"1.8rem"}
          error={name ? name : "Username"}
          fieldName={fieldName}
        />
        <div className="user__intro_links">
          {links?.map((data, index) => {
            return (
              <div className="user__intro_links" key={links.id}>
                <Link name={data?.linkname} href={data?.url} key={data?.id} />
                <Line
                  width={"2px"}
                  height={"16px"}
                  visibility={index === links?.length - 1 ? false : true}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="user__data">
        <LabelData
          labelName={"Loaction"}
          labelData={
            details?.city || details?.state || details?.country
              ? `${details?.city ? `${details?.city}, ` : ""} ${
                  details?.state ? `${details?.state}, ` : ""
                } ${details?.country ? `${details?.country}` : ""}`
              : "*Mandatory"
          }
          isLink={false}
          isError={
            details?.city || details?.state || details?.country ? false : true
          }
        />
        <div className="data__wrapper">
          <LabelData
            fieldName={"email"}
            labelName={"Email"}
            labelData={details?.email ? details.email : "Required"}
            isLink={details?.email ? true : false}
            href={""}
            isError={details?.email ? false : true}
          />
          <Line height={"15px"} width={"2px"} visibility={true} />
          <LabelData
            fieldName={"mobile"}
            labelName={"Mobile"}
            labelData={details?.mobile ? details.mobile : "Required"}
            isLink={false}
            isError={details?.mobile ? false : true}
          />
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
