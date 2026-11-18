import Reveal from "./Reveal";

const IMG = "/images/intro-atrium.jpg";

export default function Intro() {
  return (
    <section
      id="gioi-thieu"
      data-jiro-section="intro"
      data-jiro-label="Giới thiệu"
      className="bg-[#FAF8F4] px-5 py-20 md:px-10 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-12 md:gap-20">
        <Reveal className="md:col-span-7">
          <p className="text-[11px] tracking-[0.3em] text-[#B8975A] uppercase">Mai&apos;s Boutique</p>
          <h2 className="mt-6 font-display text-4xl leading-[1.15] font-light md:text-5xl">
            Yên tĩnh giữa khu phố biển,
            <br className="hidden md:block" /> xanh mát quanh giếng trời.
          </h2>
          <p className="mt-8 max-w-prose leading-relaxed text-[#6F6A62]">
            Ẩn mình tại số 104 Tô Hiến Thành, chỉ vài phút đi bộ ra bãi biển Mỹ Khê, Mai&apos;s
            Boutique mang đến không gian nghỉ dưỡng gần gũi với giếng trời phủ dây leo, hồ bơi
            sân trong, gạch bông cổ điển và chất liệu gỗ mây ấm áp.
          </p>
          <div className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
            {[
              { k: "4.7 ★", v: "222 đánh giá Google" },
              { k: "Mỹ Khê", v: "Đi bộ ra biển" },
              { k: "14:00", v: "Nhận phòng · Trả 12:00" },
            ].map((s) => (
              <div key={s.v}>
                <p className="font-display text-3xl font-light text-[#1C1B19]">{s.k}</p>
                <p className="mt-1 text-[10px] tracking-[0.18em] text-[#6F6A62] uppercase">{s.v}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-5">
          <div className="group relative overflow-hidden">
            <img
              key={IMG}
              src={IMG}
              alt="Giếng trời thông tầng phủ đầy dây leo xanh và hồ bơi sân trong tại Mai's Boutique"
              width={900}
              height={1200}
              loading="lazy"
              className="aspect-[3/4] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.05]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
