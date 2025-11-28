export function FooterWrapper({ children }: { children: React.ReactNode }) {
  return (
    <footer className="w-full bg-white bg-gradient-to-b from-[rgba(136,216,232,0.4)] via-[rgba(136,216,232,0.1)] to-transparent  sm:px-side-space flex flex-col gap-6">
      {children}
    </footer>
  );
}
