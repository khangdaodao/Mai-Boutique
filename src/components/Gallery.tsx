import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Reveal from "./Reveal";

const photos = [
  {
    src: "/images/facade-entrance.jpg",
    alt: "Mặt tiền Mai's Boutique tại 104 Tô Hiến Thành phủ cây xanh và gạch bông gió",
    w: 1200,
    h: 1600,
  },
  {
    src: "/images/pool-day-wide.jpg",
    alt: "Hồ bơi sân trong với ghế gỗ thư giãn và tán cây hoa sứ",
    w: 960,
    h: 639,
  },
  {
    src: "/images/breakfast-pancake.jpg",
    alt: "Bữa sáng pancake sô-cô-la cùng dâu tây và chuối tươi tại lounge",
    w: 900,
    h: 1200,
  },
  {
    src: "/images/room-tiles-balcony.jpg",
    alt: "Góc phòng nghỉ lát gạch bông cổ điển nhìn ra ban công cây xanh",
    w: 675,
    h: 1200,
  },
  {
    src: "/images/breakfast-noodles.jpg",
    alt: "Tô bún phở nóng hổi dùng bữa sáng bên hồ bơi",
    w: 962,
    h: 1200,
  },
  {
    src: "/images/pool-balconies.jpg",
    alt: "Ban công các tầng nhìn xuống hồ bơi giếng trời xanh mát",
    w: 1200,
    h: 1600,
  },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = active !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section
      id="thu-vien"
      data-jiro-section="gallery"
      data-jiro-label="Thư viện ảnh"
      className="bg-[#FAF8F4] px-5 py-20 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="text-[11px] tracking-[0.3em] text-[#B8975A] uppercase">Thư viện</p>
          <h2 className="mt-5 font-display text-4xl leading-tight font-light md:text-5xl">
            Một ngày ở Mai&apos;s Boutique
          </h2>
        </Reveal>

        <div className="mt-12 columns-2 gap-4 md:mt-20 md:columns-3 md:gap-6">
          {photos.map((p, i) => (
            <Reveal key={p.src} delay={(i % 3) * 0.08} className="mb-4 break-inside-avoid md:mb-6">
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Phóng to ảnh: ${p.alt}`}
                className="group relative block w-full overflow-hidden bg-[#1C1B19] focus-visible:ring-2 focus-visible:ring-[#B8975A] focus-visible:outline-none"
              >
                <img
                  key={p.src}
                  src={p.src}
                  alt={p.alt}
                  width={p.w}
                  height={p.h}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.05]"
                />
                <span className="absolute inset-0 bg-[#14130F]/0 transition-colors duration-[400ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:bg-[#14130F]/25" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-[#14130F]/95 p-4 backdrop-blur-sm md:p-10"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Ảnh phóng to"
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Đóng ảnh"
              className="absolute top-5 right-5 p-2 text-[#F3EEE4]/70 transition-colors duration-300 hover:text-[#B8975A] focus-visible:ring-2 focus-visible:ring-[#B8975A] focus-visible:outline-none md:top-8 md:right-8"
            >
              <X size={24} strokeWidth={1.2} />
            </button>
            <motion.img
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              key={photos[active].src}
              src={photos[active].src}
              alt={photos[active].alt}
              width={photos[active].w}
              height={photos[active].h}
              loading="lazy"
              className="max-h-[85vh] w-auto max-w-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
