"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * Interactive SVG hero network — everything locked to SVG coordinate system.
 * The logo is inside a foreignObject so it stays perfectly aligned with
 * the SVG nodes at any screen size.
 */

// SVG viewBox is 400x460 — all positions in these units
const CENTER_X = 200;
const CENTER_Y = 230;
const NODE_RADIUS = 40;        // size of outer nodes (bumped up)
const NODE_ORBIT = 165;        // distance from center to nodes (bumped out)
const LOGO_SIZE = 155;         // diameter of center logo container (bumped up)

// 6 service nodes — proper Heroicons outline paths
const services = [
  {
    label: "Housing",
    color: "#3DAA5C",
    angleDeg: -90,
    // House with heart
    icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
  },
  {
    label: "Healthcare",
    color: "#E8751A",
    angleDeg: -30,
    // Plus in circle (medical cross)
    icon: "M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    label: "Food",
    color: "#F5A623",
    angleDeg: 30,
    // Shopping bag / basket
    icon: "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
  },
  {
    label: "Jobs",
    color: "#2E8BC0",
    angleDeg: 90,
    // Briefcase
    icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0",
  },
  {
    label: "Education",
    color: "#3DAA5C",
    angleDeg: 150,
    // Academic cap / graduation cap
    icon: "M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
  },
  {
    label: "Community",
    color: "#E8751A",
    angleDeg: 210,
    // Users / people group
    icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
  },
];

// Calculate node positions from angles
const nodesWithPositions = services.map((s) => {
  const rad = (s.angleDeg * Math.PI) / 180;
  return {
    ...s,
    x: CENTER_X + Math.cos(rad) * NODE_ORBIT,
    y: CENTER_Y + Math.sin(rad) * NODE_ORBIT,
  };
});

export default function HeroNetworkSVG() {
  return (
    <div className="relative w-full max-w-[620px] aspect-[400/460] mx-auto">
      {/* Ambient glow behind the whole thing */}
      <div className="absolute inset-0 bg-gradient-radial from-brand-orange/15 via-brand-blue/5 to-transparent blur-3xl" />

      <svg
        viewBox="0 0 400 460"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <radialGradient id="logoGlow" cx="50%" cy="50%">
            <stop offset="0%" stopColor="rgba(232,117,26,0.4)" />
            <stop offset="50%" stopColor="rgba(46,139,192,0.15)" />
            <stop offset="100%" stopColor="rgba(15,21,53,0)" />
          </radialGradient>
        </defs>

        {/* Orbit rings */}
        {[NODE_ORBIT - 20, NODE_ORBIT, NODE_ORBIT + 30].map((r, i) => (
          <motion.circle
            key={`ring-${i}`}
            cx={CENTER_X}
            cy={CENTER_Y}
            r={r}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="0.8"
            strokeDasharray={i === 1 ? "2 5" : "none"}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: i * 0.2 }}
            style={{ transformOrigin: `${CENTER_X}px ${CENTER_Y}px` }}
          />
        ))}

        {/* Logo glow background */}
        <circle
          cx={CENTER_X}
          cy={CENTER_Y}
          r={LOGO_SIZE * 0.7}
          fill="url(#logoGlow)"
        />

        {/* Connection lines from logo edge to each node edge */}
        {nodesWithPositions.map((node, i) => {
          const dx = node.x - CENTER_X;
          const dy = node.y - CENTER_Y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const ux = dx / dist;
          const uy = dy / dist;
          // Start just outside the logo circle
          const startX = CENTER_X + ux * (LOGO_SIZE / 2 + 4);
          const startY = CENTER_Y + uy * (LOGO_SIZE / 2 + 4);
          // End just before the node
          const endX = node.x - ux * (NODE_RADIUS + 2);
          const endY = node.y - uy * (NODE_RADIUS + 2);

          return (
            <g key={`conn-${i}`}>
              <motion.line
                x1={startX} y1={startY} x2={endX} y2={endY}
                stroke={node.color}
                strokeWidth="1.5"
                strokeOpacity="0.45"
                strokeDasharray="3 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5 + i * 0.12 }}
              />
              {/* Animated data particle */}
              <circle r="2.5" fill={node.color} opacity="0">
                <animateMotion
                  dur={`${3 + i * 0.3}s`}
                  repeatCount="indefinite"
                  begin={`${1 + i * 0.2}s`}
                  path={`M${startX},${startY} L${endX},${endY}`}
                />
                <animate
                  attributeName="opacity"
                  values="0;0.9;0"
                  dur={`${3 + i * 0.3}s`}
                  repeatCount="indefinite"
                  begin={`${1 + i * 0.2}s`}
                />
              </circle>
            </g>
          );
        })}

        {/* Service nodes — drawn after lines so they sit on top */}
        {nodesWithPositions.map((node, i) => (
          <motion.g
            key={`node-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: `${node.x}px ${node.y}px` }}
          >
            {/* Subtle outer glow */}
            <circle cx={node.x} cy={node.y} r={NODE_RADIUS + 8} fill={node.color} opacity="0.08" />
            {/* Pulse ring */}
            <circle cx={node.x} cy={node.y} r={NODE_RADIUS} fill="none" stroke={node.color} strokeWidth="1" opacity="0.4">
              <animate attributeName="r" values={`${NODE_RADIUS - 2};${NODE_RADIUS + 6};${NODE_RADIUS - 2}`} dur="3s" repeatCount="indefinite" begin={`${i * 0.5}s`} />
              <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" begin={`${i * 0.5}s`} />
            </circle>
            {/* Main node circle */}
            <circle
              cx={node.x}
              cy={node.y}
              r={NODE_RADIUS - 2}
              fill="rgba(15,21,53,0.95)"
              stroke={node.color}
              strokeWidth="2"
              filter="url(#nodeGlow)"
            />
            {/* Icon centered above text */}
            <g transform={`translate(${node.x - 10}, ${node.y - 18})`}>
              <svg x="0" y="0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={node.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d={node.icon} />
              </svg>
            </g>
            {/* Label below icon */}
            <text
              x={node.x}
              y={node.y + 16}
              textAnchor="middle"
              fill="#ffffff"
              fontSize="7.5"
              fontWeight="700"
              fontFamily="system-ui, sans-serif"
              letterSpacing="0.02em"
            >
              {node.label}
            </text>
          </motion.g>
        ))}

        {/* Central logo — native SVG image element locked to SVG coordinates */}
        {/* Backdrop circle for the logo */}
        <circle
          cx={CENTER_X}
          cy={CENTER_Y}
          r={LOGO_SIZE / 2}
          fill="rgba(255,255,255,0.04)"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
        />
        {/* The logo image — SVG <image> element, not HTML <img> */}
        <image
          href="/images/logo-web.png"
          x={CENTER_X - (LOGO_SIZE / 2 - 14)}
          y={CENTER_Y - (LOGO_SIZE / 2 - 14)}
          width={LOGO_SIZE - 28}
          height={LOGO_SIZE - 28}
          preserveAspectRatio="xMidYMid meet"
          style={{
            filter: "drop-shadow(0 0 16px rgba(232,117,26,0.4))",
          }}
        />

        {/* Pulse ring around logo — inside SVG so it stays locked */}
        <motion.circle
          cx={CENTER_X}
          cy={CENTER_Y}
          r={LOGO_SIZE / 2}
          fill="none"
          stroke="rgba(232,117,26,0.35)"
          strokeWidth="1.5"
          animate={{
            r: [LOGO_SIZE / 2, LOGO_SIZE / 2 + 10, LOGO_SIZE / 2],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
}
