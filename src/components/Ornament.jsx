// Mongolian endless knot (Ulzii) — symbol of eternity
export function EndlessKnot({ className = 'h-8 w-8', stroke = 'currentColor' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke={stroke} strokeWidth="1.2">
      <path d="M20 20 L44 20 L44 28 L36 28 L36 36 L44 36 L44 44 L20 44 L20 36 L28 36 L28 28 L20 28 Z" />
      <path d="M12 32 L20 32 M44 32 L52 32 M32 12 L32 20 M32 44 L32 52" />
      <circle cx="32" cy="32" r="28" strokeDasharray="2 2" opacity="0.4" />
    </svg>
  );
}

// Cloud / khee uguljin pattern — stylized Mongolian cloud
export function CloudOrnament({ className = 'h-6 w-12', stroke = 'currentColor' }) {
  return (
    <svg viewBox="0 0 120 30" className={className} fill="none" stroke={stroke} strokeWidth="1">
      <path d="M5 15 Q15 5, 25 15 T45 15 T65 15 T85 15 T105 15 T115 15" />
      <path d="M5 20 Q15 30, 25 20 T45 20 T65 20 T85 20 T105 20 T115 20" />
    </svg>
  );
}

// Soyombo-inspired sun & moon mark
export function SunMoon({ className = 'h-12 w-12', stroke = 'currentColor' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke={stroke} strokeWidth="1.5">
      <circle cx="32" cy="28" r="6" />
      <path d="M32 6 L32 14 M50 12 L46 18 M14 12 L18 18 M58 28 L50 28 M6 28 L14 28" strokeLinecap="round" />
      <path d="M16 46 Q32 38, 48 46" />
      <path d="M18 52 Q32 46, 46 52" opacity="0.5" />
    </svg>
  );
}

// Compass rose for contact section
export function Compass({ className = 'h-32 w-32', stroke = 'currentColor' }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" stroke={stroke} strokeWidth="1">
      <circle cx="100" cy="100" r="90" />
      <circle cx="100" cy="100" r="70" strokeDasharray="3 3" opacity="0.3" />
      <circle cx="100" cy="100" r="3" fill={stroke} />
      <path d="M100 10 L108 100 L100 105 L92 100 Z" fill={stroke} />
      <path d="M100 190 L92 100 L100 95 L108 100 Z" opacity="0.4" />
      <path d="M10 100 L100 92 L105 100 L100 108 Z" opacity="0.4" />
      <path d="M190 100 L100 108 L95 100 L100 92 Z" opacity="0.4" />
      <text x="100" y="6" textAnchor="middle" fontSize="8" fill={stroke} stroke="none">N</text>
      <text x="100" y="200" textAnchor="middle" fontSize="8" fill={stroke} stroke="none">S</text>
      <text x="6" y="103" textAnchor="middle" fontSize="8" fill={stroke} stroke="none">W</text>
      <text x="194" y="103" textAnchor="middle" fontSize="8" fill={stroke} stroke="none">E</text>
    </svg>
  );
}

// Dotted journey-path divider
export function JourneyDivider({ className = '' }) {
  return (
    <div className={`flex items-center gap-4 text-ember ${className}`}>
      <div className="flex-1 border-t border-dotted border-ember/40" />
      <EndlessKnot className="h-6 w-6 opacity-60" />
      <div className="flex-1 border-t border-dotted border-ember/40" />
    </div>
  );
}

// Ornamental rule — triple-line with nested diamond ornaments
// Inspired by Mongolian хээ geometric border patterns (hee.jfif reference)
export function OrnamentalRule({ className = '', bg = '#E8DCBA' }) {
  const xs = [49, 147, 245, 343, 441, 539, 637, 735, 833, 931];
  return (
    <svg
      viewBox="0 0 980 18"
      preserveAspectRatio="none"
      className={`w-full h-[18px] ${className}`}
      aria-hidden="true"
    >
      <line x1="0" y1="4"  x2="980" y2="4"  stroke="currentColor" strokeWidth="0.5"/>
      <line x1="0" y1="9"  x2="980" y2="9"  stroke="currentColor" strokeWidth="1.2"/>
      <line x1="0" y1="14" x2="980" y2="14" stroke="currentColor" strokeWidth="0.5"/>
      {xs.map((x) => (
        <g key={x} transform={`translate(${x},9) rotate(45)`}>
          <rect x="-6"   y="-6"   width="12"  height="12"  fill={bg}/>
          <rect x="-5"   y="-5"   width="10"  height="10"  fill="currentColor"/>
          <rect x="-2.5" y="-2.5" width="5"   height="5"   fill={bg}/>
          <rect x="-1.2" y="-1.2" width="2.4" height="2.4" fill="currentColor"/>
        </g>
      ))}
    </svg>
  );
}

// Khee corner bracket — L-shaped ornamental corner based on traditional Mongolian хээ scroll patterns
export function KheeCorner({ className = '', rotate = 0 }) {
  return (
    <svg
      viewBox="0 0 56 56"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
      aria-hidden="true"
    >
      {/* Outer L-frame */}
      <path d="M 4,52 L 4,4 L 52,4" strokeWidth="2"/>
      {/* Inner parallel */}
      <path d="M 9,47 L 9,9 L 47,9" strokeWidth="0.7"/>
      {/* Corner lotus pip */}
      <circle cx="4" cy="4" r="3" fill="currentColor" stroke="none"/>
      {/* Scroll — vertical arm upper */}
      <path d="M 6.5,22 C 6.5,16 13,14 15,19 C 17,24 12,27 9,23 C 6,19 10,15 14,18" strokeWidth="1.1"/>
      {/* Scroll — vertical arm lower */}
      <path d="M 6.5,38 C 6.5,32 13,30 15,35 C 17,40 12,43 9,39 C 6,35 10,31 14,34" strokeWidth="1.1"/>
      {/* Scroll — horizontal arm left */}
      <path d="M 22,6.5 C 16,6.5 14,13 19,15 C 24,17 27,12 23,9 C 19,6 15,10 18,14" strokeWidth="1.1"/>
      {/* Scroll — horizontal arm right */}
      <path d="M 38,6.5 C 32,6.5 30,13 35,15 C 40,17 43,12 39,9 C 35,6 31,10 34,14" strokeWidth="1.1"/>
    </svg>
  );
}
