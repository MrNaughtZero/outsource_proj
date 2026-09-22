export default function ChatIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M10 14h44a4 4 0 0 1 4 4v22a4 4 0 0 1-4 4H30l-12 10v-10h-8a4 4 0 0 1-4-4V18a4 4 0 0 1 4-4Z" />
      <path d="M20 24h28M20 33h18" />
    </svg>
  );
}
