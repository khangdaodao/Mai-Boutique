import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const rooms = [
  {
    name: "Phòng Tiêu Chuẩn Giường Đôi",
    size: "Giường đôi · 2 khách",
    price: "820.000đ",
    img: "/images/room-queen-stone.jpg",
    w: 1600,
    h: 1200,
    alt: "Phòng giường đôi với mảng tường đá mộc, đầu giường nan gỗ và cửa trượt gỗ ấm cúng",
  },
  {
    name: "Phòng Hướng Hồ Bơi",
    size: "Tầng trệt & ban công · 2 khách",
    price: "980.000đ",
    img: "/images/pool-balconies.jpg",
    w: 1200,
    h: 1600,
    alt: "Phòng hướng hồ bơi giếng trời với ban công cây xanh và cửa kính khung gỗ",
  },
  {
    name: "Phòng Deluxe Cửa Sổ Gỗ",
    size: "Giường Queen · 2 khách",
    price: "1.150.000đ",
    img: "/images/room-queen-lattice.jpg",
    w: 960,
    h: 639,
    alt: "Phòng Queen với cửa sổ chạm gỗ Đông Dương, bàn làm việc gỗ và rèm sáo nhìn ra vườn",
  },
  {
    name: "Phòng Studio Có Bếp Nhỏ",
    size: "Bếp nhỏ riêng · 2 khách",
    price: "1.270.000đ",
    img: "/images/room-kitchenette.jpg",
    w: 900,
    h: 1200,
    alt: "Phòng Studio có góc bếp nhỏ ốp nan gỗ, mặt đá tối màu và đèn lồng mây ấm áp",
  },
  {
    name: "Phòng Gia Đình 2 Giường Đôi",
    size: "2 giường đôi · 4 khách",
    price: "1.450.000đ",
    img: "/images/room-family-twin.jpg",
    w: 960,
    h: 639,
    alt: "Phòng gia đình rộng rãi với hai giường đôi lớn, trần gỗ dốc, gạch bông và hệ tủ mây đan",
  },
];

export default function Rooms() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 640), behavior: "smooth" });
  };

  return (
    <section
      id="phong-nghi"
      data-jiro-section="rooms"
      data-jiro-label="Phòng nghỉ"
      className="bg-[#F0EBE2] py-20 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="flex items-end justify-between gap-8">
          <div>
            <p className="text-[11px] tracking-[0.3em] text-[#B8975A] uppercase">Lưu trú</p>
            <h2 className="mt-5 font-display text-4xl leading-tight font-light md:text-5xl">
              Phòng nghỉ
            </h2>
          </div>
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Xem phòng trước"
              className="border border-[#1C1B19]/15 p-3 text-[#1C1B19] transition-colors duration-[400ms] hover:border-[#B8975A] hover:bg-[#B8975A] hover:text-[#FAF8F4] focus-visible:ring-2 focus-visible:ring-[#B8975A] focus-visible:outline-none"
            >
              <ArrowLeft size={16} strokeWidth={1.2} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Xem phòng tiếp theo"
              className="border border-[#1C1B19]/15 p-3 text-[#1C1B19] transition-colors duration-[400ms] hover:border-[#B8975A] hover:bg-[#B8975A] hover:text-[#FAF8F4] focus-visible:ring-2 focus-visible:ring-[#B8975A] focus-visible:outline-none"
            >
              <ArrowRight size={16} strokeWidth={1.2} />
            </button>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div
          ref={trackRef}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-2 md:mt-16 md:gap-8 md:px-10"
        >
          {rooms.map((r) => (
            <article
              key={r.name}
              className="group w-[78vw] max-w-[420px] shrink-0 snap-start sm:w-[52vw] lg:w-[32vw]"
            >
              <div className="overflow-hidden bg-[#1C1B19]">
                <img
                  key={r.img}
                  src={r.img}
                  alt={r.alt}
                  width={r.w}
                  height={r.h}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.05]"
                />
              </div>
              <div className="flex items-baseline justify-between gap-4 border-b border-[#1C1B19]/10 pt-5 pb-4">
                <div>
                  <h3 className="font-display text-2xl font-light">{r.name}</h3>
                  <p className="mt-1 text-[10px] tracking-[0.18em] text-[#6F6A62] uppercase">{r.size}</p>
                </div>
                <p className="shrink-0 text-right text-sm text-[#1C1B19]">
                  <span className="block text-[10px] tracking-[0.18em] text-[#6F6A62] uppercase">Từ</span>
                  {r.price}
                </p>
              </div>
              <a
                href="#dat-phong"
                className="group/link mt-4 inline-block text-[11px] tracking-[0.18em] text-[#1C1B19] uppercase focus-visible:ring-2 focus-visible:ring-[#B8975A] focus-visible:outline-none"
              >
                Đặt phòng
                <span className="mt-1 block h-px w-0 bg-[#B8975A] transition-all duration-[400ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover/link:w-full" />
              </a>
            </article>
          ))}
          <div className="w-1 shrink-0 md:w-6" aria-hidden="true" />
        </div>
      </Reveal>
    </section>
  );
}
