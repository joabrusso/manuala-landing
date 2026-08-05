export default function Blob({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        transform="translate(100 100)"
        d="M45.4,-58.3C58.3,-49.6,67.7,-34.9,71.4,-18.7C75.1,-2.5,73.1,15.2,64.9,29.8C56.7,44.4,42.3,55.9,26.2,62.8C10.1,69.7,-7.7,72,-24.8,67.7C-41.9,63.4,-58.3,52.5,-67.5,37.3C-76.7,22.1,-78.7,2.6,-74.5,-14.8C-70.3,-32.2,-59.9,-47.5,-46,-56.4C-32.1,-65.3,-14.7,-67.8,1.7,-70.1C18.1,-72.4,32.5,-67,45.4,-58.3Z"
      />
    </svg>
  );
}
