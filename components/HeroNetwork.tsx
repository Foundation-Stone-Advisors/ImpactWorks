"use client";

const nodes = [
  { label: "Housing", x: 200, y: 40, color: "#14B8A6" },
  { label: "Healthcare", x: 360, y: 100, color: "#1F4ED8" },
  { label: "Food", x: 380, y: 260, color: "#14B8A6" },
  { label: "Jobs", x: 240, y: 360, color: "#1F4ED8" },
  { label: "Nonprofits", x: 60, y: 300, color: "#14B8A6" },
  { label: "Government", x: 40, y: 140, color: "#1F4ED8" },
];

const center = { x: 210, y: 200 };

export default function HeroNetwork() {
  return (
    <svg viewBox="0 0 420 400" className="w-full max-w-md md:max-w-full" aria-label="Impact Works network connecting community organizations">
      {/* Connection lines */}
      {nodes.map((node, i) => (
        <line
          key={`line-${i}`}
          x1={center.x}
          y1={center.y}
          x2={node.x}
          y2={node.y}
          stroke={node.color}
          strokeWidth={1.5}
          strokeOpacity={0.3}
          strokeDasharray="6 4"
        />
      ))}
      {/* Faint cross-connections */}
      {nodes.map((a, i) =>
        nodes.slice(i + 1).map((b, j) => (
          <line
            key={`cross-${i}-${j}`}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="#ffffff"
            strokeWidth={0.5}
            strokeOpacity={0.08}
          />
        ))
      )}
      {/* Center hub */}
      <circle cx={center.x} cy={center.y} r={48} fill="#1E3A8A" stroke="#14B8A6" strokeWidth={2.5} />
      <circle cx={center.x} cy={center.y} r={44} fill="#1E3A8A" opacity={0.9} />
      <text x={center.x} y={center.y - 6} textAnchor="middle" fill="white" fontSize={14} fontWeight={700}>Impact</text>
      <text x={center.x} y={center.y + 12} textAnchor="middle" fill="#14B8A6" fontSize={14} fontWeight={700}>Works</text>
      {/* Outer nodes */}
      {nodes.map((node, i) => (
        <g key={i}>
          <circle cx={node.x} cy={node.y} r={32} fill={node.color} fillOpacity={0.15} stroke={node.color} strokeWidth={1.5} />
          <circle cx={node.x} cy={node.y} r={5} fill={node.color}>
            <animate attributeName="r" values="4;6;4" dur="3s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
          </circle>
          <text x={node.x} y={node.y + 20} textAnchor="middle" fill="white" fontSize={11} fontWeight={600} opacity={0.9}>
            {node.label}
          </text>
        </g>
      ))}
      {/* Decorative small dots */}
      {[
        { x: 120, y: 80 }, { x: 310, y: 50 }, { x: 390, y: 180 },
        { x: 330, y: 340 }, { x: 100, y: 370 }, { x: 20, y: 230 },
        { x: 160, y: 310 }, { x: 300, y: 160 },
      ].map((dot, i) => (
        <circle key={`dot-${i}`} cx={dot.x} cy={dot.y} r={2} fill="white" opacity={0.2}>
          <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}
