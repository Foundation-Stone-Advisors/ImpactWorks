/**
 * DarkBackdrop — shared backdrop system for all dark surfaces.
 *
 * Three variants, all sharing the same color tokens:
 *   - hero-symmetric: paired #212749 circles at top-left + bottom-right.
 *     Default for secondary page heros (no mascot to anchor composition).
 *   - hero-asymmetric: paired circles top-left only. Use when there's a
 *     focal element on the right side (e.g. /platform's Linksi mascot
 *     section that follows). Mirrors the home hero pattern.
 *   - stats: smaller paired circles at corners + centered subtle warm
 *     glow. For inside-flow stats sections — slightly more contained
 *     atmosphere than full heros.
 *
 * All variants share:
 *   - Layered warm-tinted dark gradient base (#15132C → #080B1A)
 *   - Subtle warm corner accent (small radial, top-right by default)
 *   - Vignette for cinematic edge focus
 *   - Optional editorial top + bottom hairlines (brand-orange/30)
 *
 * The home hero is NOT a variant here — its composition (mascot + sun
 * + chips + connection wires) is unique enough that inline code stays
 * cleaner than parameterizing this component to handle it.
 */
type Variant = "hero-symmetric" | "hero-asymmetric" | "stats";

type Props = {
  variant?: Variant;
  /** Show top hairline (sits at nav-bar bottom, ~72px). Default: true. */
  topHairline?: boolean;
  /** Show bottom hairline. Default: true for stats, false for heros. */
  bottomHairline?: boolean;
};

export default function DarkBackdrop({
  variant = "hero-symmetric",
  topHairline = true,
  bottomHairline,
}: Props) {
  const isStats = variant === "stats";
  const showBottom = bottomHairline ?? isStats;

  return (
    <>
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#15132C] via-[#0E1126] to-[#080B1A]" />

      {/* Paired circles — geometry varies by variant */}
      {variant === "hero-symmetric" && (
        <>
          <div className="absolute -top-44 -left-44 w-[720px] h-[720px] border-[2px] border-[#212749]/60 rounded-full pointer-events-none" />
          <div className="absolute -top-24 -left-24 w-[480px] h-[480px] border-[2px] border-[#212749]/35 rounded-full pointer-events-none" />
          <div className="absolute -bottom-48 -right-48 w-[800px] h-[800px] border-[2px] border-[#212749]/60 rounded-full pointer-events-none" />
          <div className="absolute -bottom-28 -right-28 w-[560px] h-[560px] border-[2px] border-[#212749]/35 rounded-full pointer-events-none" />
        </>
      )}
      {variant === "hero-asymmetric" && (
        <>
          <div className="absolute -top-44 -left-44 w-[720px] h-[720px] border-[2px] border-[#212749]/60 rounded-full pointer-events-none" />
          <div className="absolute -top-24 -left-24 w-[480px] h-[480px] border-[2px] border-[#212749]/35 rounded-full pointer-events-none" />
        </>
      )}
      {variant === "stats" && (
        <>
          <div className="absolute -top-32 -left-32 w-[520px] h-[520px] border-[2px] border-[#212749]/55 rounded-full pointer-events-none" />
          <div className="absolute -top-16 -left-16 w-[340px] h-[340px] border-[2px] border-[#212749]/30 rounded-full pointer-events-none" />
          <div className="absolute -bottom-36 -right-36 w-[580px] h-[580px] border-[2px] border-[#212749]/55 rounded-full pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] border-[2px] border-[#212749]/30 rounded-full pointer-events-none" />
        </>
      )}

      {/* Warm accent — small directional gradient. Stats variant uses centered glow instead. */}
      {!isStats ? (
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-gradient-radial from-brand-orange/15 via-brand-orange/4 to-transparent rounded-full blur-3xl pointer-events-none" />
      ) : (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[600px] bg-gradient-radial from-brand-orange/14 via-brand-orange/4 to-transparent blur-3xl pointer-events-none" />
      )}

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_transparent_45%,_rgba(0,0,0,0.45)_100%)]" />

      {/* Editorial hairlines */}
      {topHairline && (
        <div className={`absolute ${isStats ? "top-0" : "top-[72px]"} inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent z-[5]`} />
      )}
      {showBottom && (
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent z-[5]" />
      )}
    </>
  );
}
