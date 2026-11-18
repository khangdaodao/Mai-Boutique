import { Waves, Coffee, UtensilsCrossed, Car, Bike, Wifi } from "lucide-react";
import Reveal from "./Reveal";

const items = [
  { icon: Waves, label: "Hồ bơi giếng trời" },
  { icon: Coffee, label: "Bữa sáng & Lounge" },
  { icon: UtensilsCrossed, label: "Bếp nhỏ tại phòng" },
  { icon: Car, label: "Đưa đón sân bay" },
  { icon: Bike, label: "Thuê xe máy & Giặt là" },
  { icon: Wifi, label: "Wi-Fi & Đỗ xe miễn phí" },
];

export default function Amenities() {
  return (
    <section
      id="tien-ich"
      data-jiro-section="amenities"
      data-jiro-label="Tiện ích"
      className="bg-[#FAF8F4] px-5 py-20 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="text-[11px] tracking-[0.3em] text-[#B8975A] uppercase">Tiện ích</p>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl leading-tight font-light md:text-5xl">
            Mọi thứ bạn cần, không gì thừa.
          </h2>
        </Reveal>

        <ul className="mt-14 grid grid-cols-2 gap-px border border-[#1C1B19]/10 bg-[#1C1B19]/10 md:mt-20 md:grid-cols-3">
          {items.map((it, i) => (
            <li key={it.label}>
              <Reveal delay={i * 0.08}>
                <div className="group flex h-full flex-col items-center justify-center gap-5 bg-[#FAF8F4] px-4 py-12 text-center transition-colors duration-[400ms] ease-[cubic-bezier(.22,1,.36,1)] hover:bg-[#F0EBE2] md:py-16">
                  <it.icon
                    size={30}
                    strokeWidth={0.9}
                    className="text-[#B8975A] transition-transform duration-[600ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-1"
                  />
                  <span className="text-[10px] tracking-[0.18em] text-[#6F6A62] uppercase md:text-[11px]">
                    {it.label}
                  </span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
