import { MapPin } from "lucide-react";

const nav = [
  { label: "Giới thiệu", href: "#gioi-thieu" },
  { label: "Phòng nghỉ", href: "#phong-nghi" },
  { label: "Tiện ích", href: "#tien-ich" },
  { label: "Không gian", href: "#khong-gian" },
  { label: "Thư viện", href: "#thu-vien" },
  { label: "Đánh giá", href: "#danh-gia" },
  { label: "Đặt phòng", href: "#dat-phong" },
];

export default function Footer() {
  return (
    <footer
      data-jiro-section="footer"
      data-jiro-label="Footer"
      className="bg-[#14130F] px-5 py-16 text-[#F3EEE4] md:px-10 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <p className="font-display text-2xl tracking-[0.22em] uppercase">Mai&apos;s Boutique</p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#F3EEE4]/55">
              Khách sạn boutique chăm sóc sức khỏe gần biển Mỹ Khê, Đà Nẵng. Nhận phòng 14:00 ·
              Trả phòng 12:00.
            </p>
          </div>

          <nav aria-label="Điều hướng chân trang" className="md:col-span-4">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {nav.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group relative inline-block text-[11px] tracking-[0.18em] text-[#F3EEE4]/60 uppercase transition-colors duration-[400ms] hover:text-[#F3EEE4] focus-visible:ring-2 focus-visible:ring-[#B8975A] focus-visible:outline-none"
                  >
                    {l.label}
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#B8975A] transition-all duration-[400ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="text-sm leading-relaxed text-[#F3EEE4]/55">
              104 Tô Hiến Thành, An Hải
              <br />
              Đà Nẵng 550000, Việt Nam
            </p>
            <p className="mt-4 text-sm text-[#F3EEE4]/55">
              <a
                href="tel:+84862298125"
                className="transition-colors duration-300 hover:text-[#B8975A] focus-visible:ring-2 focus-visible:ring-[#B8975A] focus-visible:outline-none"
              >
                +84 862 298 125
              </a>
            </p>
            <div className="mt-6">
              <a
                href="https://maps.app.goo.gl/DCpoRUmvEZXQbYPG7"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] text-[#F3EEE4]/60 uppercase transition-colors duration-[400ms] hover:text-[#B8975A] focus-visible:ring-2 focus-visible:ring-[#B8975A] focus-visible:outline-none"
              >
                <MapPin size={15} strokeWidth={1.1} />
                Google Maps · 4.7 ★
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[#F3EEE4]/10 pt-6 text-[10px] tracking-[0.18em] text-[#F3EEE4]/35 uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Mai&apos;s Boutique Đà Nẵng</p>
          <p>Không khói thuốc · 4.7 ★ Google (222 đánh giá)</p>
        </div>
      </div>
    </footer>
  );
}
