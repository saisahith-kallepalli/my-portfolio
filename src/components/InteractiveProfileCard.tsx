"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface InteractiveProfileCardProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function InteractiveProfileCard({
  className = "",
  style = {},
}: InteractiveProfileCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt position
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate rotation (-10deg to 10deg)
    const rX = (mouseY / height - 0.5) * -16;
    const rY = (mouseX / width - 0.5) * 16;

    setRotateX(rX);
    setRotateY(rY);
    setGlarePos({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      className={`interactive-profile-wrapper ${className}`}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        ...style,
      }}
    >
      {/* Ambient background aura */}
      <div
        style={{
          position: "absolute",
          width: "85%",
          height: "85%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(136, 136, 136, 0.18) 0%, rgba(0, 0, 0, 0.08) 60%, transparent 80%)",
          filter: "blur(50px)",
          transition: "background 0.7s ease",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Orbiting Tech Badge: Top Left */}
      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: [-1, 2, -1],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: "2%",
          left: "-6%",
          zIndex: 10,
          background: "var(--color-bg-surface)",
          border: "1px solid var(--color-border)",
          padding: "0.45rem 0.85rem",
          borderRadius: "999px",
          display: "flex",
          alignItems: "center",
          gap: "0.45rem",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.35)",
          backdropFilter: "blur(12px)",
          cursor: "default",
        }}
        className="hover-badge"
      >
        <span
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "var(--color-text-primary)",
            boxShadow: "0 0 10px var(--color-text-primary)",
          }}
        />
        <span
          style={{
            fontSize: "0.78rem",
            fontWeight: 700,
            fontFamily: "var(--font-mono)",
            color: "var(--color-text-primary)",
          }}
        >
          React 19 &bull; Next.js 14
        </span>
      </motion.div>

      {/* Orbiting Tech Badge: Bottom Right */}
      <motion.div
        animate={{
          y: [0, 8, 0],
          rotate: [1, -2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
        style={{
          position: "absolute",
          bottom: "18%",
          right: "-5%",
          zIndex: 10,
          background: "var(--color-bg-surface)",
          border: "1px solid var(--color-border)",
          padding: "0.45rem 0.9rem",
          borderRadius: "999px",
          display: "flex",
          alignItems: "center",
          gap: "0.45rem",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.35)",
          backdropFilter: "blur(12px)",
          cursor: "default",
        }}
        className="hover-badge"
      >
        <span
          style={{
            fontSize: "0.78rem",
            fontWeight: 700,
            fontFamily: "var(--font-mono)",
            color: "var(--color-text-primary)",
          }}
        >
          Enterprise UI/UX &bull; SSR
        </span>
      </motion.div>

      {/* Main 3D Tilt Card Container */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
          scale: isHovered ? 1.025 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 24,
        }}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "380px",
          aspectRatio: "4 / 5",
          borderRadius: "28px",
          padding: "8px",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.04) 100%)",
          boxShadow: isHovered
            ? "0 25px 60px rgba(0, 0, 0, 0.65), 0 0 35px rgba(255, 255, 255, 0.15)"
            : "0 18px 45px rgba(0, 0, 0, 0.5)",
          transformStyle: "preserve-3d",
          cursor: "pointer",
          zIndex: 2,
          transition: "box-shadow 0.3s ease, background 0.5s ease",
        }}
      >
        {/* Inner Card Frame */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            borderRadius: "22px",
            overflow: "hidden",
            background: "var(--color-bg-primary)",
          }}
        >
          {/* Live Availability Banner Overlay */}
          <div
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              zIndex: 5,
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.35rem 0.75rem",
              borderRadius: "999px",
              background: "var(--color-bg-surface)",
              border: "1px solid var(--color-border)",
              backdropFilter: "blur(10px)",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                backgroundColor: "#10B981",
                boxShadow: "0 0 8px #10B981",
                display: "inline-block",
                animation: "pulseDot 1.6s infinite",
              }}
            />
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                color: "var(--color-text-primary)",
                letterSpacing: "0.04em",
              }}
            >
              AVAILABLE FOR HIRE
            </span>
          </div>

          {/* Rotating Circular Text String Badge ("String on rotate") */}
          

          {/* Executive Photo Showcase */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src="/profile-real.png"
              alt="Sai Sahith Kallepalli - Professional Headshot"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 15%",
                filter: "contrast(1.04) saturate(1.05)",
                transition: "transform 0.5s ease, filter 0.5s ease",
              }}
            />
          </div>

          {/* Specular Glare Overlay that tracks mouse position */}
          {isHovered && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.28) 0%, transparent 65%)`,
                pointerEvents: "none",
                mixBlendMode: "overlay",
                transition: "background 0.1s ease",
                zIndex: 4,
              }}
            />
          )}

          {/* Bottom Gradient Vignette */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "42%",
              background:
                "linear-gradient(to top, rgba(10, 11, 13, 0.95) 0%, rgba(10, 11, 13, 0.4) 60%, transparent 100%)",
                pointerEvents: "none",
              zIndex: 3,
            }}
          />

          {/* Bottom Identity Overlay inside Card */}
          <div
            style={{
              position: "absolute",
              bottom: "1.25rem",
              left: "1.25rem",
              right: "1.25rem",
              zIndex: 6,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 800,
                  color: "#fff",
                  lineHeight: 1.2,
                  textShadow: "0 2px 10px rgba(0,0,0,0.8)",
                }}
              >
                Sai Sahith Kallepalli
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "var(--color-text-secondary)",
                  fontWeight: 600,
                  marginTop: "0.2rem",
                }}
              >
                Senior Full Stack Engineer
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes pulseDot {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.35);
            opacity: 0.7;
          }
        }
        @keyframes rotateString {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
