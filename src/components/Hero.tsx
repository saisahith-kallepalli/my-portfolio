"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Terminal, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import InteractiveProfileCard from "@/components/InteractiveProfileCard";

const ROLES = [
  "SENIOR FULL STACK ENGINEER",
  "SOFTWARE ENGINEER",
  "MERN & NEXT.JS SPECIALIST",
  "CLOUD & DATABASE ARCHITECT",
  "UI/UX ENGINEERING EXPERT",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText.length < currentRole.length) {
      // Typing characters
      timer = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }, 70);
    } else if (!isDeleting && displayText.length === currentRole.length) {
      // Pause before deleting
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting characters
      timer = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      }, 35);
    } else if (isDeleting && displayText.length === 0) {
      // Move to next role
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="intro"
      style={{
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "7rem",
        paddingBottom: "5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background ambient glow circles */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "750px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(0,242,254,0.12) 0%, rgba(127,0,255,0.08) 50%, rgba(0,0,0,0) 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1180px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Responsive Two-Column Hero Grid */}
        <div className="hero-grid">
          {/* Left Column: Typography, Roles & Actions */}
          <div className="hero-text-col">
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1.8rem",
              }}
            >
              <span className="badge">
                <Sparkles size={14} />
                AVAILABLE FOR SENIOR FULL STACK &amp; MERN ENGINEERING
              </span>
            </motion.div>

            {/* Main Name Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="hero-name-heading"
            >
              SAI SAHITH <span className="gradient-text">KALLEPALLI</span>
            </motion.h1>

            {/* Dynamic Typewriter Title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hero-typewriter-wrap"
            >
              <div className="hero-typewriter-text">
                {displayText}
                <span className="cursor-blink" />
              </div>
            </motion.div>

            {/* Full-Width Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hero-description"
            >
              Senior Full Stack Software Engineer with nearly 5 years of experience
              architecting high-performance web &amp; enterprise applications using{" "}
              <strong style={{ color: "var(--color-text-primary)" }}>
                React 18
              </strong>
              ,{" "}
              <strong style={{ color: "var(--color-text-primary)" }}>
                Next.js 14
              </strong>
              ,{" "}
              <strong style={{ color: "var(--color-text-primary)" }}>
                Node.js
              </strong>
              , and{" "}
              <strong style={{ color: "var(--color-text-primary)" }}>
                MongoDB
              </strong>
              . Proven track record in performance optimization (+35% LCP
              reduction), SSR/SSG caching, and scalable UI architecture.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="hero-actions"
            >
              <a
                href="#projects"
                className="btn-primary"
                style={{ padding: "0.85rem 2.2rem", fontSize: "1rem" }}
              >
                <span>Explore Projects</span>
                <ArrowRight size={19} />
              </a>

              <a
                href="#contact"
                className="btn-secondary"
                style={{ padding: "0.85rem 2.2rem", fontSize: "1rem" }}
              >
                <Terminal size={18} />
                <span>Contact me</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Interactive & Transitional Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hero-image-col"
          >
            <InteractiveProfileCard />
          </motion.div>
        </div>

        {/* Full-Width Metrics & Certifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.2rem",
            width: "100%",
          }}
        >
          <div
            className="glass-card"
            style={{
              padding: "1.6rem",
              textAlign: "center",
              borderRadius: "16px",
            }}
          >
            <div
              style={{
                fontSize: "2.2rem",
                fontWeight: 800,
                color: "var(--color-text-primary)",
                fontFamily: "var(--font-mono)",
              }}
            >
              +35%
            </div>
            <div
              style={{
                fontSize: "0.82rem",
                color: "var(--color-text-secondary)",
                fontWeight: 700,
                marginTop: "0.4rem",
              }}
            >
              LCP SPEED IMPROVEMENT
            </div>
          </div>

          <div
            className="glass-card"
            style={{
              padding: "1.6rem",
              textAlign: "center",
              borderRadius: "16px",
            }}
          >
            <div
              style={{
                fontSize: "2.2rem",
                fontWeight: 800,
                color: "var(--color-text-primary)",
                fontFamily: "var(--font-mono)",
              }}
            >
              +18%
            </div>
            <div
              style={{
                fontSize: "0.82rem",
                color: "var(--color-text-secondary)",
                fontWeight: 700,
                marginTop: "0.4rem",
              }}
            >
              USER RETENTION LIFT
            </div>
          </div>

          <div
            className="glass-card"
            style={{
              padding: "1.6rem",
              textAlign: "center",
              borderRadius: "16px",
            }}
          >
            <div
              style={{
                fontSize: "2.2rem",
                fontWeight: 800,
                color: "var(--color-text-primary)",
                fontFamily: "var(--font-mono)",
              }}
            >
              99.9%
            </div>
            <div
              style={{
                fontSize: "0.82rem",
                color: "var(--color-text-secondary)",
                fontWeight: 700,
                marginTop: "0.4rem",
              }}
            >
              ENTERPRISE SLA &amp; UPTIME
            </div>
          </div>

          <div
            className="glass-card"
            style={{
              padding: "1.6rem",
              textAlign: "center",
              borderRadius: "16px",
            }}
          >
            <div
              style={{
                fontSize: "2.2rem",
                fontWeight: 800,
                color: "var(--color-text-primary)",
                fontFamily: "var(--font-mono)",
              }}
            >
              30+
            </div>
            <div
              style={{
                fontSize: "0.82rem",
                color: "var(--color-text-secondary)",
                fontWeight: 700,
                marginTop: "0.4rem",
              }}
            >
              UI DESIGN SYSTEM COMPONENTS
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          align-items: center;
          gap: 3.5rem;
          width: 100%;
          margin-bottom: 4.5rem;
        }
        .hero-text-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          width: 100%;
        }
        .hero-image-col {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }
        .hero-name-heading {
          font-size: clamp(2.6rem, 5.5vw, 4.8rem);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.04em;
          margin-bottom: 1rem;
          color: var(--color-text-primary);
          width: 100%;
        }
        .hero-typewriter-wrap {
          min-height: 3.2rem;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin-bottom: 2rem;
          width: 100%;
        }
        .hero-typewriter-text {
          font-size: clamp(1.2rem, 2.5vw, 2.1rem);
          font-weight: 800;
          font-family: var(--font-mono);
          color: var(--color-accent-cyan);
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.45);
          letter-spacing: 0.04em;
        }
        .cursor-blink {
          display: inline-block;
          width: 3px;
          height: 1.1em;
          background-color: var(--color-text-primary);
          margin-left: 6px;
          vertical-align: middle;
          animation: cursorBlink 1s infinite;
        }
        .hero-description {
          font-size: clamp(1.05rem, 1.3vw, 1.25rem);
          color: var(--color-text-secondary);
          line-height: 1.7;
          margin-bottom: 2.8rem;
          max-width: 650px;
          width: 100%;
        }
        .hero-actions {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 1.25rem;
          flex-wrap: wrap;
          width: 100%;
        }
        @media (max-width: 950px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
            margin-bottom: 3.5rem;
          }
          .hero-text-col {
            align-items: center;
            text-align: center;
          }
          .hero-typewriter-wrap {
            justify-content: center;
          }
          .hero-actions {
            justify-content: center;
          }
          .hero-description {
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
          }
        }
        @keyframes cursorBlink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}

