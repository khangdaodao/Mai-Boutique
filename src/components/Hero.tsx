import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HERO_IMG = "/images/hero-pool-evening.jpg";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      data-jiro-section="hero"
      data-jiro-label="Hero"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#14130F]"
    >
      <div className="absolute inset-0">
        <img
          key={HERO_IMG}
          src={HERO_IMG}
          alt="Hồ bơi giếng trời tại Mai's Boutique vào buổi tối với ánh đèn ấm và ban công phủ cây xanh"
          width={2048}
          height={1362}
          loading="eager"
          className="ken-burns h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#14130F]/60 via-[#14130F]/35 to-[#14130F]/75" />
      </div>

      <div className="relative z-10 w-full max-w-5xl px-5 text-center md:px-10">
        <motion.p
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="text-[11px] tracking-[0.32em] text-[#B8975A] uppercase"
        >
          Wellness Boutique · Mỹ Khê, Đà Nẵng
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          className="mt-6 font-display text-[2.75rem] leading-[1.08] font-light tracking-[0.02em] text-[#F3EEE4] sm:text-6xl md:text-7xl"
        >
          Ốc đảo xanh
          <br />
          giữa lòng phố biển
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          className="mx-auto mt-10 max-w-3xl border border-[#F3EEE4]/20 bg-[#F3EEE4]/10 p-2 backdrop-blur-md md:mt-14"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              document.getElementById("dat-phong")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4"
          >
            <label className="px-4 py-3 text-left">
              <span className="block text-[10px] tracking-[0.18em] text-[#F3EEE4]/60 uppercase">Ngày đến</span>
              <input
                type="date"
                className="mt-1 w-full bg-transparent text-sm text-[#F3EEE4] outline-none [color-scheme:dark] focus-visible:ring-1 focus-visible:ring-[#B8975A]"
              />
            </label>
            <label className="px-4 py-3 text-left">
              <span className="block text-[10px] tracking-[0.18em] text-[#F3EEE4]/60 uppercase">Ngày đi</span>
              <input
                type="date"
                className="mt-1 w-full bg-transparent text-sm text-[#F3EEE4] outline-none [color-scheme:dark] focus-visible:ring-1 focus-visible:ring-[#B8975A]"
              />
            </label>
            <label className="px-4 py-3 text-left">
              <span className="block text-[10px] tracking-[0.18em] text-[#F3EEE4]/60 uppercase">Số khách</span>
              <select
                defaultValue="2"
                className="mt-1 w-full bg-transparent text-sm text-[#F3EEE4] outline-none focus-visible:ring-1 focus-visible:ring-[#B8975A]"
              >
                {["1", "2", "3", "4"].map((n) => (
                  <option key={n} value={n} className="bg-[#14130F] text-[#F3EEE4]">
                    {n} khách
                  </option>
                ))}
              </select>
            </label>
            <button
              type="submit"
              className="bg-[#B8975A] px-6 py-4 text-[11px] tracking-[0.18em] text-[#14130F] uppercase transition-colors duration-[400ms] ease-[cubic-bezier(.22,1,.36,1)] hover:bg-[#F3EEE4] focus-visible:ring-2 focus-visible:ring-[#F3EEE4] focus-visible:outline-none"
            >
              Kiểm tra phòng
            </button>
          </form>
        </motion.div>
      </div>

      <motion.a
        href="#gioi-thieu"
        aria-label="Cuộn xuống phần giới thiệu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[#F3EEE4]/70 transition-colors duration-500 hover:text-[#B8975A] focus-visible:ring-2 focus-visible:ring-[#B8975A] focus-visible:outline-none"
      >
        <ChevronDown size={26} strokeWidth={1} />
      </motion.a>
    </section>
  );
}
