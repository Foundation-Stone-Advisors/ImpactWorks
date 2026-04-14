"use client";

import { motion } from "framer-motion";

/**
 * Animated SVG arcs inspired by the Impact Works logo swooshes.
 * Blue, green, orange, gold arcs orbit and pulse — the signature visual.
 */
export default function HeroArcs() {
  const arcs = [
    { color: "#2E8BC0", rx: 280, ry: 260, rotation: -15, delay: 0 },
    { color: "#3DAA5C", rx: 250, ry: 230, rotation: 10, delay: 0.3 },
    { color: "#E8751A", rx: 220, ry: 200, rotation: 35, delay: 0.6 },
    { color: "#F5A623", rx: 310, ry: 290, rotation: -35, delay: 0.9 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 800 600"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-30"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Glowing center point */}
        <circle cx="400" cy="300" r="4" fill="#E8751A" opacity="0.6">
          <animate attributeName="r" values="3;6;3" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
        </circle>

        {/* Orbiting arcs — like the logo swooshes */}
        {arcs.map((arc, i) => (
          <g key={i}>
            {/* Arc path */}
            <motion.ellipse
              cx="400"
              cy="300"
              rx={arc.rx}
              ry={arc.ry}
              fill="none"
              stroke={arc.color}
              strokeWidth="1.5"
              strokeDasharray="80 400"
              initial={{ rotate: arc.rotation, opacity: 0 }}
              animate={{ rotate: arc.rotation + 360, opacity: 1 }}
              transition={{
                rotate: { duration: 40 + i * 5, repeat: Infinity, ease: "linear" },
                opacity: { duration: 1.5, delay: arc.delay },
              }}
              style={{ transformOrigin: "400px 300px" }}
            />

            {/* Glowing node on each arc */}
            <motion.circle
              r="3"
              fill={arc.color}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 3, delay: arc.delay, repeat: Infinity }}
            >
              <animateMotion
                dur={`${20 + i * 3}s`}
                repeatCount="indefinite"
                path={`M${400 - arc.rx},300 A${arc.rx},${arc.ry} 0 1,1 ${400 + arc.rx},300 A${arc.rx},${arc.ry} 0 1,1 ${400 - arc.rx},300`}
              />
            </motion.circle>
          </g>
        ))}

        {/* Connection lines from center to outer nodes */}
        {[
          { x: 580, y: 180, color: "#2E8BC0", label: "Housing" },
          { x: 620, y: 380, color: "#3DAA5C", label: "Healthcare" },
          { x: 200, y: 150, color: "#E8751A", label: "Food" },
          { x: 180, y: 420, color: "#F5A623", label: "Jobs" },
          { x: 400, y: 80, color: "#2E8BC0", label: "Education" },
          { x: 400, y: 520, color: "#3DAA5C", label: "Childcare" },
        ].map((node, i) => (
          <g key={`node-${i}`}>
            {/* Connection line */}
            <motion.line
              x1="400" y1="300" x2={node.x} y2={node.y}
              stroke={node.color}
              strokeWidth="0.5"
              strokeDasharray="4 6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 2, delay: 0.5 + i * 0.2 }}
            />
            {/* Endpoint node */}
            <motion.circle
              cx={node.x} cy={node.y} r="6"
              fill="none"
              stroke={node.color}
              strokeWidth="1"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.5 }}
              transition={{ duration: 0.5, delay: 1.5 + i * 0.15 }}
              style={{ transformOrigin: `${node.x}px ${node.y}px` }}
            />
            <motion.circle
              cx={node.x} cy={node.y} r="2"
              fill={node.color}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 2.5, delay: i * 0.3, repeat: Infinity }}
            />
          </g>
        ))}

        {/* Ambient floating particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <circle
            key={`particle-${i}`}
            cx={100 + Math.random() * 600}
            cy={50 + Math.random() * 500}
            r="1"
            fill="#2E8BC0"
            opacity="0.2"
          >
            <animate
              attributeName="opacity"
              values="0.1;0.3;0.1"
              dur={`${3 + Math.random() * 3}s`}
              begin={`${Math.random() * 3}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>
    </div>
  );
}
