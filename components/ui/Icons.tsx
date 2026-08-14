type IconProps = { className?: string; size?: number };

export function TagIcon({ className = "", size = 14 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path
        d="M8.4 1.5H3a1.5 1.5 0 00-1.5 1.5v5.4c0 .4.16.78.44 1.06l6.1 6.1a1.5 1.5 0 002.12 0l4.9-4.9a1.5 1.5 0 000-2.12l-6.1-6.1a1.5 1.5 0 00-1.06-.44z"
        fill="currentColor"
      />
      <circle cx="5" cy="5" r="1" fill="var(--pale-yellow)" />
    </svg>
  );
}

export function SearchIcon({ className = "", size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M17 17l-3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function UserIcon({ className = "", size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <circle cx="10" cy="6.5" r="3.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.5 17c1.2-3.2 4-5 6.5-5s5.3 1.8 6.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function CartIcon({ className = "", size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M4 6h13l-1.2 8.4a1.5 1.5 0 01-1.48 1.28H6.68A1.5 1.5 0 015.2 14.4L4 6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M6.5 6V5a3.5 3.5 0 017 0v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function MenuIcon({ className = "", size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M3 5.5h14M3 10h14M3 14.5h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function CloseXIcon({ className = "", size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronDownIcon({ className = "", size = 14 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" className={className} aria-hidden="true">
      <path d="M2.5 5l4.5 4.5L11.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PlusMinusIcon({ open, size = 16 }: { open: boolean; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M8 2v12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="origin-center transition-transform duration-200"
        style={{ transform: open ? "scaleY(0)" : "scaleY(1)" }}
      />
    </svg>
  );
}

export function CheckIcon({ className = "", size = 14 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" className={className} aria-hidden="true">
      <path d="M2.5 7.5l3 3 6-6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GoogleIcon({ className = "", size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" className={className} aria-hidden="true">
      <path
        d="M19.6 10.23c0-.68-.06-1.32-.17-1.94H10v3.9h5.38a4.6 4.6 0 01-2 3.02v2.5h3.23c1.9-1.75 2.99-4.32 2.99-7.48z"
        fill="#4285F4"
      />
      <path
        d="M10 20c2.7 0 4.96-.9 6.61-2.42l-3.23-2.5c-.9.6-2.04.96-3.38.96-2.6 0-4.8-1.75-5.59-4.12H1.07v2.59A10 10 0 0010 20z"
        fill="#34A853"
      />
      <path
        d="M4.41 11.92a6 6 0 010-3.84V5.49H1.07a10 10 0 000 9.02l3.34-2.59z"
        fill="#FBBC05"
      />
      <path
        d="M10 3.96c1.47 0 2.79.5 3.83 1.5l2.87-2.87C14.95.99 12.7 0 10 0A10 10 0 001.07 5.49l3.34 2.59C5.2 5.71 7.4 3.96 10 3.96z"
        fill="#EA4335"
      />
    </svg>
  );
}

export function ArrowIcon({ className = "", size = 16, direction = "right" }: IconProps & { direction?: "left" | "right" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      style={{ transform: direction === "left" ? "rotate(180deg)" : undefined }}
      aria-hidden="true"
    >
      <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
