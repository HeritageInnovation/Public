export function IconExtLink({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export function IconArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

export function IconSparkle({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
    </svg>
  );
}

export function IconLogo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <defs>
        <linearGradient
          id="logoG"
          x1="0"
          y1="0"
          x2="40"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#67E8F9" />
          <stop offset="0.6" stopColor="#A78BFA" />
          <stop offset="1" stopColor="#F0ABFC" />
        </linearGradient>
      </defs>
      <path
        d="M20 3 L34.5 11 V29 L20 37 L5.5 29 V11 Z"
        stroke="url(#logoG)"
        strokeWidth="1.4"
        opacity="0.9"
      />
      <circle
        cx="20"
        cy="20"
        r="7"
        stroke="url(#logoG)"
        strokeWidth="0.9"
        opacity="0.55"
      />
      <circle cx="20" cy="20" r="2.6" fill="#FFFFFF" />
      <circle cx="20" cy="13" r="1.4" fill="#67E8F9" />
      <circle cx="26.2" cy="23.5" r="1.4" fill="#A78BFA" />
      <circle cx="13.8" cy="23.5" r="1.4" fill="#67E8F9" />
    </svg>
  );
}
