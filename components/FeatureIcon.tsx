import type { ReactNode } from "react";

const PATHS: Record<string, ReactNode> = {
  template: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="9" x2="9" y2="21" />
    </>
  ),
  branch: (
    <>
      <circle cx="6" cy="6" r="2.25" />
      <circle cx="6" cy="18" r="2.25" />
      <circle cx="18" cy="12" r="2.25" />
      <path d="M6 8.25V15.75" />
      <path d="M6 12h5a4 4 0 0 0 4-4" />
    </>
  ),
  quiz: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.2 9.8a2.8 2.8 0 1 1 3.7 2.6c-.6.3-.9.9-.9 1.5v.4" />
      <circle cx="12" cy="17" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="8" y1="3" x2="8" y2="7" />
      <line x1="16" y1="3" x2="16" y2="7" />
    </>
  ),
  link: (
    <>
      <path d="M9.5 14.5l5-5" />
      <path d="M11 6.5l1-1a4 4 0 0 1 5.7 5.7l-1.2 1.2" />
      <path d="M13 17.5l-1 1a4 4 0 0 1-5.7-5.7l1.2-1.2" />
    </>
  ),
  upload: (
    <>
      <path d="M12 16V4" />
      <path d="M8 8l4-4 4 4" />
      <path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
    </>
  ),
};

export default function FeatureIcon({ name, className }: { name: keyof typeof PATHS; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {PATHS[name]}
    </svg>
  );
}
