export default function Footer() {
  return (
    <footer className="px-4 pb-8 md:px-8">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-2 border-t border-line py-7 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>Sohaib Aboosbua</p>
        <p>© {new Date().getFullYear()} Built with care.</p>
      </div>
    </footer>
  );
}
