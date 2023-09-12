import React, { useState } from "react";
import "./headerSection.css";
import Heading from "../global/Heading";
import Link from "../global/Link";
import Line from "../global/Line";
import LabelData from "../global/LabelData";
import InputComponent from "../global/InputComponent";
import { AiFillEdit } from "react-icons/ai";
import ProfileLink from "../global/ProfileLink";
import ProfileLinkComponent from "../global/ProfileLinkComponent";

const HeaderSection = ({ name, links, details }) => {
  const [isLocationEdit, setIsLoactionEdit] = useState(false);
  const [isEmailEditable, setIsEmailEditable] = useState(false);
  const [isMobileEditable, setIsMobileEditable] = useState(false);
  const [isHeadingEditable, setIsHeadingEditable] = useState(false);
  return (
    <section className="header__section">
      <div className="user__intro">
        {isHeadingEditable ? (
          <InputComponent
            data={name}
            placeholder={"User name"}
            fieldName={"name"}
            type={"text"}
            setEditable={setIsHeadingEditable}
          />
        ) : (
          <div
            className="flex"
            style={{ alignItems: "center", justifyContent: "flex-start" }}
          >
            <Heading
              name={name}
              size={"1.5rem"}
              error={name ? name : "Username"}
            />
            <AiFillEdit
              onClick={() => {
                setIsHeadingEditable(true);
              }}
            />
          </div>
        )}
        <div className="user__intro_links">
          {links?.map((data, index) => {
            return (
              <div className="user__intro_links" key={data?.id}>
                <ProfileLinkComponent
                  index={index}
                  name={data?.linkname}
                  href={data?.url}
                />
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
        {isLocationEdit ? (
          <InputComponent
            type={"text"}
            data={
              details?.city || details?.state || details?.country
                ? `${details?.city ? `${details?.city}, ` : ""} ${
                    details?.state ? `${details?.state}, ` : ""
                  } ${details?.country ? `${details?.country}` : ""}`
                : ""
            }
            fieldName={"details"}
            setEditable={setIsLoactionEdit}
            isLocation={true}
            placeholder={"city, state, country"}
          />
        ) : (
          <div className="flex">
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
                details?.city || details?.state || details?.country
                  ? false
                  : true
              }
            />
            <AiFillEdit
              onClick={() => {
                setIsLoactionEdit(true);
              }}
            />
          </div>
        )}
        <div className="data__wrapper">
          {isEmailEditable ? (
            <InputComponent
              type={"email"}
              data={details?.email ? details.email : ""}
              fieldName={"details.email"}
              setEditable={setIsEmailEditable}
              placeholder={"email"}
              isEmail={true}
            />
          ) : (
            <div className="flex">
              <LabelData
                fieldName={"email"}
                labelName={"Email"}
                labelData={details?.email ? details.email : "Required"}
                isLink={details?.email ? true : false}
                href={""}
                isError={details?.email ? false : true}
              />
              <AiFillEdit
                onClick={() => {
                  setIsEmailEditable(true);
                }}
              />
            </div>
          )}
          <Line height={"15px"} width={"2px"} visibility={true} />
          {isMobileEditable ? (
            <InputComponent
              data={details?.mobile ? details.mobile : ""}
              fieldName={"details.mobile"}
              placeholder={"Mobile no"}
              setEditable={setIsMobileEditable}
              type={"tel"}
              isMobile={true}
            />
          ) : (
            <div className="flex">
              <LabelData
                fieldName={"mobile"}
                labelName={"Mobile"}
                labelData={details?.mobile ? details.mobile : "Required"}
                isLink={false}
                isError={details?.mobile ? false : true}
              />
              <AiFillEdit
                onClick={() => {
                  setIsMobileEditable(true);
                }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
