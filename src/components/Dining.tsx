import Reveal from "./Reveal";

const places = [
  {
    name: "Sảnh Ăn Sáng Đông Dương",
    kind: "Ẩm thực & Tiếp đón",
    line: "Bàn gỗ mộc, vách tủ mây tre đan và thực đơn sáng tươi ngon với phở, bún, pancake trái cây cùng cà phê Việt.",
    hours: "Mỗi ngày · Bữa sáng theo yêu cầu",
    img: "/images/lounge-indochine.jpg",
    alt: "Sảnh ăn sáng phong cách Đông Dương với bàn ghế gỗ, vách tủ mây tre đan và tường đá ấm",
  },
  {
    name: "Hồ Bơi Giếng Trời",
    kind: "Sân trong ngoài trời",
    line: "Làn nước xanh ngọc dưới tán cây hoa sứ và mảng tường dây leo, dịu mát ban trưa và rực ánh đèn ấm khi đêm xuống.",
    hours: "Mở cửa hàng ngày · Giữ trọn sự riêng tư",
    img: "/images/pool-frangipani.jpg",
    alt: "Hồ bơi giếng trời giữa lòng khách sạn dưới tán cây hoa sứ và tường gạch bông gió",
  },
  {
    name: "Phòng Nghỉ & Ban Công Xanh",
    kind: "Lưu trú tiện nghi",
    line: "Gạch bông cổ điển, góc bếp nhỏ ốp nan gỗ và ban công hướng vườn giếng trời — nơi bạn thong thả đón nắng sớm gần biển Mỹ Khê.",
    hours: "Không khói thuốc · 104 Tô Hiến Thành",
    img: "/images/room-suite-bath.jpg",
    alt: "Không gian phòng nghỉ với góc bếp nhỏ ốp nan gỗ, phòng tắm kính và ban công nhìn ra giếng trời",
  },
];

export default function Dining() {
  return (
    <section
      id="khong-gian"
      data-jiro-section="dining"
      data-jiro-label="Không gian"
      className="bg-[#14130F] px-5 py-20 text-[#F3EEE4] md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[11px] tracking-[0.3em] text-[#B8975A] uppercase">Không gian &amp; Ẩm thực</p>
          <h2 className="mt-5 max-w-xl font-display text-4xl leading-tight font-light md:text-5xl">
            Ba điểm chạm, một nhịp sống chậm.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-16 md:mt-24 md:space-y-28">
          {places.map((p, i) => (
            <Reveal key={p.name} delay={0.05}>
              <article
                className={`group grid items-center gap-8 md:grid-cols-2 md:gap-16 ${
                  i % 2 === 1 ? "md:[&>figure]:order-2" : ""
                }`}
              >
                <figure className="overflow-hidden bg-[#1C1B19]">
                  <img
                    key={p.img}
                    src={p.img}
                    alt={p.alt}
                    width={1400}
                    height={1000}
                    loading="lazy"
                    className="aspect-[7/5] w-full object-cover opacity-95 transition-transform duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.05]"
                  />
                </figure>
                <div>
                  <p className="text-[10px] tracking-[0.22em] text-[#B8975A] uppercase">{p.kind}</p>
                  <h3 className="mt-4 font-display text-3xl font-light md:text-4xl">{p.name}</h3>
                  <p className="mt-4 max-w-prose leading-relaxed text-[#F3EEE4]/65">{p.line}</p>
                  <p className="mt-6 text-[10px] tracking-[0.18em] text-[#F3EEE4]/45 uppercase">
                    {p.hours}
                  </p>
                  <a
                    href="#dat-phong"
                    className="group/link mt-8 inline-block text-[11px] tracking-[0.18em] text-[#F3EEE4] uppercase focus-visible:ring-2 focus-visible:ring-[#B8975A] focus-visible:outline-none"
                  >
                    Đặt phòng
                    <span className="mt-1 block h-px w-0 bg-[#B8975A] transition-all duration-[400ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover/link:w-full" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
