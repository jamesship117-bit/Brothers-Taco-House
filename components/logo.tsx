type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <div
      role="img"
      aria-label="Brothers Taco House logo"
      className={`inline-flex items-center rounded-2xl bg-[#fff8ea] p-2 ${className ?? ""}`}
    >
      <img src="/logo-mascot-clean.png" alt="" aria-hidden="true" className="h-full w-auto object-contain" />
      <img
        src="/logo-mascot-clean.png"
        alt=""
        aria-hidden="true"
        className="h-full w-auto -scale-x-100 object-contain"
      />
    </div>
  );
}
