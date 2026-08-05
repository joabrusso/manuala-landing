export default function Logo({ className }: { className?: string }) {
  return (
    <span className={`font-heading lowercase font-extrabold tracking-tight ${className ?? ""}`}>
      manu
      <span className="text-mustard">ala</span>
    </span>
  );
}
