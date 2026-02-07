'use client';

export default function Logo({ className = "", animated = true }: { className?: string; animated?: boolean }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 240 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          {/* Premium Gradient */}
          <linearGradient id="premiumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#00b4d8', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#0096c7', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#9333ea', stopOpacity: 1 }} />
          </linearGradient>

          {/* Glass Effect */}
          <linearGradient id="glassTop" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.4 }} />
            <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0 }} />
          </linearGradient>

          {/* Metallic Effect */}
          <linearGradient id="metallic" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#00f5ff', stopOpacity: 1 }} />
            <stop offset="25%" style={{ stopColor: '#00b4d8', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#0077b6', stopOpacity: 1 }} />
            <stop offset="75%" style={{ stopColor: '#7c3aed', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#9333ea', stopOpacity: 1 }} />
          </linearGradient>

          {/* Text Gradient */}
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#00b4d8', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#0077b6', stopOpacity: 1 }} />
          </linearGradient>

          {/* Glow Filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Soft Shadow */}
          <filter id="softShadow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
            <feOffset dx="0" dy="2" result="offsetblur"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Radial Glow */}
          <radialGradient id="radialGlow">
            <stop offset="0%" style={{ stopColor: '#00b4d8', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#00b4d8', stopOpacity: 0 }} />
          </radialGradient>
        </defs>

        {/* Background Glow */}
        <circle cx="40" cy="40" r="45" fill="url(#radialGlow)" opacity="0.6">
          {animated && (
            <animate
              attributeName="r"
              values="45;50;45"
              dur="3s"
              repeatCount="indefinite"
            />
          )}
        </circle>

        {/* Main Shield Shape - Back Layer */}
        <path
          d="M 40 8 L 60 18 L 60 52 L 40 66 L 20 52 L 20 18 Z"
          fill="url(#premiumGradient)"
          filter="url(#softShadow)"
          opacity="0.9"
        />

        {/* Shield Border */}
        <path
          d="M 40 8 L 60 18 L 60 52 L 40 66 L 20 52 L 20 18 Z"
          fill="none"
          stroke="url(#metallic)"
          strokeWidth="1.5"
          opacity="0.6"
        />

        {/* Glass Reflection */}
        <path
          d="M 40 8 L 60 18 L 60 52 L 40 66 L 20 52 L 20 18 Z"
          fill="url(#glassTop)"
          opacity="0.3"
        />

        {/* Central S Letter - Modern Design */}
        <g transform="translate(40, 37)">
          {/* S Shape - Elegant and Bold */}
          <path
            d="M -8 -12 Q -12 -12 -12 -8 Q -12 -4 -8 -4 L 8 -4 Q 12 -4 12 0 Q 12 4 8 4 L -4 4 Q -8 4 -8 8 Q -8 12 -4 12 L 8 12 Q 14 12 14 6 Q 14 0 8 0 L -8 0 Q -12 0 -12 -4 Q -12 -8 -8 -8 L 4 -8 Q 8 -8 8 -12 Q 8 -16 4 -16 L -8 -16 Q -14 -16 -14 -10 Q -14 -8 -12 -8"
            fill="#ffffff"
            opacity="0.95"
            filter="url(#softShadow)"
          />
        </g>

        {/* Corner Accents - Tech Details */}
        <circle cx="25" cy="23" r="2" fill="#00f5ff" opacity="0.7">
          {animated && (
            <animate
              attributeName="opacity"
              values="0.7;1;0.7"
              dur="2s"
              repeatCount="indefinite"
            />
          )}
        </circle>
        <circle cx="55" cy="23" r="2" fill="#00f5ff" opacity="0.7">
          {animated && (
            <animate
              attributeName="opacity"
              values="0.7;1;0.7"
              dur="2s"
              begin="0.5s"
              repeatCount="indefinite"
            />
          )}
        </circle>
        <circle cx="25" cy="57" r="2" fill="#9333ea" opacity="0.7">
          {animated && (
            <animate
              attributeName="opacity"
              values="0.7;1;0.7"
              dur="2s"
              begin="1s"
              repeatCount="indefinite"
            />
          )}
        </circle>
        <circle cx="55" cy="57" r="2" fill="#9333ea" opacity="0.7">
          {animated && (
            <animate
              attributeName="opacity"
              values="0.7;1;0.7"
              dur="2s"
              begin="1.5s"
              repeatCount="indefinite"
            />
          )}
        </circle>

        {/* SAS Text - Premium Typography */}
        <text
          x="85"
          y="40"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="32"
          fontWeight="800"
          fill="url(#textGradient)"
          letterSpacing="1"
          filter="url(#softShadow)"
        >
          SAS
        </text>

        {/* Highlight on S */}
        <text
          x="85"
          y="38"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="32"
          fontWeight="800"
          fill="#ffffff"
          letterSpacing="1"
          opacity="0.15"
        >
          SAS
        </text>

        {/* GROUP Text - Elegant Subtitle */}
        <text
          x="85"
          y="56"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="11"
          fontWeight="600"
          fill="#2d3748"
          letterSpacing="6"
        >
          GROUP
        </text>

        {/* Decorative Line */}
        <line
          x1="85"
          y1="62"
          x2="185"
          y2="62"
          stroke="url(#premiumGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* Small accent dots */}
        <circle cx="85" cy="62" r="2" fill="url(#premiumGradient)"/>
        <circle cx="185" cy="62" r="2" fill="url(#premiumGradient)"/>

        {/* Tagline - Optional Small Text */}
        <text
          x="85"
          y="72"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="7"
          fontWeight="500"
          fill="#2d3748"
          opacity="0.5"
          letterSpacing="2"
        >
          EXCELLENCE & INNOVATION
        </text>
      </svg>
    </div>
  );
}
