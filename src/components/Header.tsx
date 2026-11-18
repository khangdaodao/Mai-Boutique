import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Giới thiệu", href: "#gioi-thieu" },
  { label: "Phòng nghỉ", href: "#phong-nghi" },
  { label: "Tiện ích", href: "#tien-ich" },
  { label: "Không gian", href: "#khong-gian" },
  { label: "Thư viện", href: "#thu-vien" },
  { label: "Đánh giá", href: "#danh-gia" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-jiro-section="header"
      data-jiro-label="Header"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-[600ms] ease-[cubic-bezier(.22,1,.36,1)] ${
        scrolled || open
          ? "border-b border-[#1C1B19]/10 bg-[#FAF8F4]/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Điều hướng chính"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-10"
      >
        <a
          href="#hero"
          className={`font-display text-lg tracking-[0.22em] whitespace-nowrap uppercase transition-colors duration-500 focus-visible:ring-2 focus-visible:ring-[#B8975A] focus-visible:outline-none sm:text-xl md:text-2xl ${
            scrolled || open ? "text-[#1C1B19]" : "text-[#F3EEE4]"
          }`}
        >
          Mai&apos;s Boutique
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`group relative text-[11px] tracking-[0.18em] uppercase transition-colors duration-500 focus-visible:ring-2 focus-visible:ring-[#B8975A] focus-visible:outline-none ${
                  scrolled ? "text-[#6F6A62] hover:text-[#1C1B19]" : "text-[#F3EEE4]/80 hover:text-[#F3EEE4]"
                }`}
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-[#B8975A] transition-all duration-[400ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#dat-phong"
            className={`hidden border px-5 py-2.5 text-[11px] tracking-[0.18em] uppercase transition-all duration-[400ms] ease-[cubic-bezier(.22,1,.36,1)] focus-visible:ring-2 focus-visible:ring-[#B8975A] focus-visible:outline-none sm:inline-block ${
              scrolled || open
                ? "border-[#B8975A] text-[#1C1B19] hover:bg-[#B8975A] hover:text-[#FAF8F4]"
                : "border-[#F3EEE4]/50 text-[#F3EEE4] hover:border-[#B8975A] hover:bg-[#B8975A]"
            }`}
          >
            Đặt phòng
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Đóng menu" : "Mở menu"}
            className={`p-2 transition-colors duration-500 focus-visible:ring-2 focus-visible:ring-[#B8975A] focus-visible:outline-none lg:hidden ${
              scrolled || open ? "text-[#1C1B19]" : "text-[#F3EEE4]"
            }`}
          >
            {open ? <X size={20} strokeWidth={1.2} /> : <Menu size={20} strokeWidth={1.2} />}
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-t border-[#1C1B19]/5 bg-[#FAF8F4] transition-[max-height] duration-[600ms] ease-[cubic-bezier(.22,1,.36,1)] lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="px-5 py-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-[11px] tracking-[0.18em] text-[#6F6A62] uppercase transition-colors duration-300 hover:text-[#B8975A] focus-visible:ring-2 focus-visible:ring-[#B8975A] focus-visible:outline-none"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#dat-phong"
              onClick={() => setOpen(false)}
              className="mt-3 block border border-[#B8975A] px-5 py-3 text-center text-[11px] tracking-[0.18em] text-[#1C1B19] uppercase transition-colors duration-300 hover:bg-[#B8975A] hover:text-[#FAF8F4]"
            >
              Đặt phòng
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
