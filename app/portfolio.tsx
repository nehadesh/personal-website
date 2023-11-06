// pages/portfolio.tsx
"use client";
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import { BrandColors } from "./Colors";
import { CSSProperties, Component, HTMLAttributes } from "react";
import Link from "next/link";

const space_grotesk_font = Space_Grotesk({ weight: "400", subsets: ["latin"] });

const mainContentStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  fontFamily: space_grotesk_font.style.fontFamily,
  flexWrap: "wrap",
  alignItems: "center",
  alignContent: "center",
  paddingLeft: "5vw",
  paddingRight: "5vw",
};

const columnStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  padding: "20px",
};

const rowStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  flex: "100%",
  width: "100%",
};

const personalImageStyle: CSSProperties = {
  width: "auto",
  height: "auto",
  minWidth: "200px",
};

const logoImageStyle: CSSProperties = {
  width: "auto",
  height: "auto",
  marginLeft: "1vw",
  marginRight: "1vw",
  marginTop: "1vh",
  marginBottom: "1vh",
  minWidth: "3vw",
  maxWidth: "5vw",
  opacity: "50%",
};

const nameStyle: CSSProperties = {
  fontFamily: space_grotesk_font.style.fontFamily,
  color: BrandColors.TimberWolf,
  fontSize: "6vw",
  marginTop: "6vh",
};

const taglineStyle: CSSProperties = {
  fontFamily: space_grotesk_font.style.fontFamily,
  color: BrandColors.RoseQuartz,
  fontSize: "4vw",
  marginLeft: "0vw",
};

const workSummaryBoxStyle: CSSProperties = {
  backgroundColor: BrandColors.DarkestPurple,
  borderRadius: 8,
  padding: "10px 20px 10px 20px",
  color: BrandColors.RoseQuartz,
  width: "100%",
};

const workTitleStyle: CSSProperties = {
  fontSize: "3vw",
  textAlign: "center",
};

const workSummarySubtext: CSSProperties = {
  fontSize: "1.5vw",
  textAlign: "left",
  marginTop: "1.5vh",
  marginRight: "1.5vw",
  color: BrandColors.RoseQuartz,
};

export default class Portfolio extends Component {
  render() {
    return (
      <div style={mainContentStyle}>
        <div style={rowStyle}>
          <div style={{ ...columnStyle, flex: "30%" }}>
            <div>
              <Image
                src="/neha_deshpande_resized.png"
                alt="Neha Deshpande"
                width={500}
                height={100}
                priority
                style={personalImageStyle}
              />
            </div>
            <div style={workSummaryBoxStyle}>
              <h5 style={workTitleStyle}>Software Engineer</h5>
            </div>
            <div
              style={{
                ...rowStyle,
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <Link href="https://github.com/nehadesh" target="_blank">
                <Image
                  src="/github-mark-white.svg"
                  alt="Github Logo"
                  width={40}
                  height={40}
                  priority
                  style={logoImageStyle}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/nehadesh/"
                target="_blank"
              >
                <Image
                  src="/linkedin.svg"
                  alt="Linkedin Logo"
                  width={50}
                  height={50}
                  priority
                  style={{ ...logoImageStyle, maxWidth: "5.5vw" }}
                />
              </Link>
              <a href="mailto:neha.n.deshpande@gmail.com">
                <Image
                  src="/email.png"
                  alt="Email"
                  width={100}
                  height={100}
                  priority
                  style={{ ...logoImageStyle, maxWidth: "5.5vw" }}
                />
              </a>
            </div>
          </div>
          <div style={{ ...columnStyle, flex: "70%" }}>
            <h1 style={nameStyle}>Neha Deshpande</h1>
            <h2 className="line-1 anim-typewriter" style={taglineStyle}>
              I am a Developer
            </h2>
            <p style={workSummarySubtext}>
              Hi! I am a full-stack software engineer with a passion for
              building products that make a difference.
            </p>
            <p style={workSummarySubtext}>
              My most recent role at Convoy gave me 2+ years of industry
              experience at a large startup across the full stack. I am
              currently looking for new opportunities where I can use my skills
              to make a positive impact on the world.
            </p>
            <div style={rowStyle}>
              <div style={{ ...columnStyle, flex: "50%" }}>
                <h3 style={{ ...workTitleStyle, marginTop: "5vh" }}>Skills</h3>
                <p style={workSummarySubtext}>
                  <b>Languages:</b> Javascript, Typescript, Python, Java, C++,
                  C, SQL
                </p>
                <p style={workSummarySubtext}>
                  <b>Frameworks:</b> React, Redux, Node.js, Express, Flask,
                  Django, Spring
                </p>
                <p style={workSummarySubtext}>
                  <b>Tools:</b> Git, Docker, Kubernetes, AWS, GCP, Jenkins,
                  CircleCI, Terraform, Postman
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
