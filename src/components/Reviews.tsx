import { Star, ExternalLink } from "lucide-react";
import Reveal from "./Reveal";

const reviews = [
  {
    author: "Quân Lê Đình Anh",
    meta: "5/5 · 1 tháng trước",
    quote:
      "Nhân viên thân thiện, luôn mỉm cười chào chúng tôi. Họ rất tinh tế để ý khách cần gì và hỗ trợ kịp thời đặc biệt là các bạn nữ lễ tân. Ngoài ra khách sạn gần bãi biển, nhiều nhà hàng quán cà phê dễ dàng di chuyển đến các địa điểm trung tâm.",
  },
  {
    author: "Haixiong Jiang",
    meta: "5/5 · Local Guide · 1 tháng trước",
    quote:
      "I was attended by Ms Thu during check-in and Ms Nhi during checkout. I am pleased and happy with their hospitality and assistance. I stayed in room 303 and had no complaints. The room smells great, which was a good touch. Nice little oasis among the alleys.",
  },
  {
    author: "Aiko Kitane",
    meta: "5/5 · Local Guide · 3 tuần trước",
    quote:
      "We had the best stay here. It felt like home. Place was always clean, all the staff were so accommodating, helpful and patient. You can tell how true by their parting gift to us. Additionally, when you use the pool, staff always observe privacy for you as a guest.",
  },
  {
    author: "Siripapan Ratchawong",
    meta: "5/5 · Local Guide · 1 tháng trước",
    quote:
      "The staff were lovely, polite, helpful, and friendly. The atmosphere was peaceful and quiet, with no disturbances, and the property felt safe and clean. The bedroom was spacious, the bed was soft and comfortable, and the overall stay was very relaxing.",
  },
  {
    author: "Phuong thu Nguyễn thị",
    meta: "5/5 · 4 tháng trước",
    quote:
      "Phòng rất sạch sẽ, đầy tiện nghi, view đẹp và rất gần biển, nhân viên thân thiện, vui vẻ, nhiệt tình, tôi rất hài lòng.",
  },
  {
    author: "Tú Nguyễn",
    meta: "5/5 · 2 tháng trước",
    quote:
      "Phòng sạch sẽ, tiện nghi. Hồ bơi khá đẹp. Nhân viên dễ thương còn phụ mình hành lý nữa dù trông có vẻ nhỏ con hơn mình.",
  },
];

export default function Reviews() {
  return (
    <section
      id="danh-gia"
      data-jiro-section="reviews"
      data-jiro-label="Đánh giá"
      className="bg-[#F0EBE2] px-5 py-20 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] tracking-[0.3em] text-[#B8975A] uppercase">
              Đánh giá từ Google Maps
            </p>
            <h2 className="mt-5 font-display text-4xl leading-tight font-light md:text-5xl">
              4.7 / 5 từ 222 lượt khách lưu trú
            </h2>
            <p className="mt-4 text-sm text-[#6F6A62]">
              194 đánh giá 5★ · Khách sạn chăm sóc sức khỏe được yêu thích tại khu biển Mỹ Khê
            </p>
          </div>

          <a
            href="https://maps.app.goo.gl/DCpoRUmvEZXQbYPG7"
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 border border-[#1C1B19]/20 px-5 py-3 text-[11px] tracking-[0.18em] text-[#1C1B19] uppercase transition-colors duration-[400ms] hover:border-[#B8975A] hover:bg-[#B8975A] hover:text-[#FAF8F4] focus-visible:ring-2 focus-visible:ring-[#B8975A] focus-visible:outline-none"
          >
            Xem trên Google Maps
            <ExternalLink size={14} strokeWidth={1.2} />
          </a>
        </Reveal>

        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.author} delay={(i % 3) * 0.08}>
              <article className="flex h-full flex-col justify-between border border-[#1C1B19]/10 bg-[#FAF8F4] p-7">
                <div>
                  <div className="flex items-center gap-1 text-[#B8975A]" aria-label="5 trên 5 sao">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} size={13} fill="currentColor" strokeWidth={1} />
                    ))}
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-[#1C1B19]/85">
                    &ldquo;{r.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-6 border-t border-[#1C1B19]/10 pt-4">
                  <p className="font-display text-xl font-light text-[#1C1B19]">{r.author}</p>
                  <p className="mt-1 text-[10px] tracking-[0.18em] text-[#6F6A62] uppercase">
                    {r.meta}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 text-xs leading-relaxed text-[#6F6A62]">
            Lưu ý lưu trú: Mai&apos;s Boutique thiết kế theo dạng nhà phố 4 tầng với cầu thang bộ
            ngoài trời bên giếng trời (chưa có thang máy); đội ngũ lễ tân luôn sẵn sàng hỗ trợ hành
            lý khi nhận và trả phòng.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
