import React, { useState } from "react";

const COLLAPSED_HEIGHT = 380;
const EXPANDED_HEIGHT = 600;

const sectionBaseStyle = {
  width: "100vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  background: `url('/image/p11.jpg') center center/cover no-repeat`,
  color: "#fff",
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  zIndex: 1,
  marginLeft: "calc(50% - 50vw)",
  marginRight: "calc(50% - 50vw)",
  marginTop: "-62px",
  paddingTop: 0,
  transition: "min-height 0.6s cubic-bezier(.77,0,.18,1)",
  overflow: "hidden",
};

const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(10,10,10,0.68)",
  zIndex: 2,
  pointerEvents: "none",
};

const contentStyle = {
  position: "relative",
  zIndex: 3,
  maxWidth: "900px",
  padding: "2.5rem 2rem 1.5rem 2rem",
  textAlign: "center",
};

const headingStyle = {
  fontSize: "2.5rem",
  fontWeight: 800,
  letterSpacing: "-1px",
  marginBottom: "1.2rem",
  color: "#fff",
  textShadow: "0 2px 16px rgba(0,0,0,0.25)",
};

const highlightStyle = {
  color: "#ff5400",
  background: "linear-gradient(90deg, #ff5400 60%, #ff1e1e 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: 900,
};

const descStyle = {
  fontSize: "1.25rem",
  color: "#e5e7eb",
  fontWeight: 400,
  lineHeight: 1.6,
  marginBottom: "0.5rem",
  textShadow: "0 2px 8px rgba(0,0,0,0.18)",
};

const buttonStyle = {
  marginTop: "1.5rem",
  padding: 0,
  fontSize: "1rem",
  fontWeight: 400,
  borderRadius: "999px",
  border: "none",
  background: "transparent",
  color: "#fff",
  cursor: "pointer",
  boxShadow: "none",
  transition: "text-decoration 0.2s, color 0.2s",
  zIndex: 4,
  letterSpacing: "-0.2px",
  outline: "none",
  display: "inline-block",
  fontFamily: 'inherit',
  textDecoration: "none",
};

const buttonHoverStyle = {
  textDecoration: "underline",
  color: "#ffb366",
};

const expandedTextStyle = {
  fontSize: "1.15rem",
  color: "#f3f4f6",
  fontWeight: 400,
  lineHeight: 1.6,
  marginTop: "1.5rem",
  marginBottom: "0.5rem",
  textShadow: "0 2px 8px rgba(0,0,0,0.18)",
  opacity: 1,
  transition: "opacity 0.5s",
};

const EYCyberConsultingIntro = () => {
  const [expanded, setExpanded] = useState(false);
  const [hover, setHover] = useState(false);

  const sectionStyle = {
    ...sectionBaseStyle,
    minHeight: expanded ? EXPANDED_HEIGHT : COLLAPSED_HEIGHT,
  };

  return (
    <section style={sectionStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h1 style={headingStyle}>
          EY Cybersecurity <span style={highlightStyle}>Consulting</span>
        </h1>
        <p style={descStyle}>
          Safeguard your business with world-class expertise. EY's Cybersecurity Consulting practice delivers end-to-end protection, from strategy and risk assessment to advanced threat detection, incident response, and regulatory compliance.
        </p>
        <p style={descStyle}>
          Our global team of professionals helps organizations build resilience, manage cyber risk, and stay ahead of evolving threats—empowering you to innovate and grow with confidence.
        </p>
        {expanded && (
          <div style={expandedTextStyle}>
            <strong>Why choose EY for Cybersecurity?</strong><br />
            <ul style={{margin: "1rem auto", maxWidth: 700, textAlign: "left", listStyle: "disc inside", color: "#fff"}}>
              <li>Proven experience with Fortune 500 and global enterprises</li>
              <li>Comprehensive services: strategy, risk, compliance, cloud, identity, and managed security</li>
              <li>Cutting-edge threat intelligence and incident response capabilities</li>
              <li>Industry-recognized frameworks and regulatory expertise</li>
              <li>Collaborative approach tailored to your business needs</li>
            </ul>
            <span style={{color: "#fff"}}>
              EY helps you turn cybersecurity into a business enabler—protecting your reputation, assets, and future growth.
            </span>
          </div>
        )}
        <button
          style={hover ? {...buttonStyle, ...buttonHoverStyle} : buttonStyle}
          onClick={() => setExpanded(e => !e)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      </div>
    </section>
  );
};

export default EYCyberConsultingIntro;
