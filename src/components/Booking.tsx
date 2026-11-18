import { useState } from "react";
import { MapPin, Phone, Clock, Check, Copy } from "lucide-react";
import Reveal from "./Reveal";

const roomTypes = [
  "Phòng Tiêu Chuẩn Giường Đôi",
  "Phòng Hướng Hồ Bơi",
  "Phòng Deluxe Cửa Sổ Gỗ",
  "Phòng Studio Có Bếp Nhỏ",
  "Phòng Gia Đình 2 Giường Đôi",
];

const fieldClass =
  "mt-2 w-full border-b border-[#1C1B19]/20 bg-transparent py-2.5 text-sm text-[#1C1B19] outline-none transition-colors duration-[400ms] ease-[cubic-bezier(.22,1,.36,1)] focus:border-[#B8975A] focus-visible:ring-0";
const labelClass = "block text-[10px] tracking-[0.18em] text-[#6F6A62] uppercase";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    arrive: "",
    depart: "",
    guests: "2",
    room: roomTypes[0],
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const summaryText = [
    "Yêu cầu đặt phòng — Mai's Boutique Đà Nẵng",
    `Họ tên: ${form.name}`,
    `Liên hệ: ${form.contact}`,
    `Ngày đến: ${form.arrive || "Chưa chọn"}`,
    `Ngày đi: ${form.depart || "Chưa chọn"}`,
    `Số khách: ${form.guests} khách`,
    `Loại phòng: ${form.room}`,
  ].join("\n");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setCopied(false);
  };

  const copySummary = async () => {
    try {
      await navigator.clipboard.writeText(summaryText);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="dat-phong"
      data-jiro-section="booking"
      data-jiro-label="Đặt phòng / Liên hệ"
      className="bg-[#FAF8F4] px-5 py-20 md:px-10 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:gap-20">
        <Reveal>
          <p className="text-[11px] tracking-[0.3em] text-[#B8975A] uppercase">Đặt phòng &amp; Liên hệ</p>
          <h2 className="mt-5 font-display text-4xl leading-tight font-light md:text-5xl">
            Liên hệ trực tiếp lễ tân Mai&apos;s Boutique.
          </h2>

          <form onSubmit={onSubmit} className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2">
            <label className="sm:col-span-1">
              <span className={labelClass}>Họ và tên</span>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Nguyễn Minh Anh"
                className={fieldClass}
              />
            </label>
            <label className="sm:col-span-1">
              <span className={labelClass}>Email hoặc điện thoại</span>
              <input
                required
                type="text"
                value={form.contact}
                onChange={(e) => setForm({ ...form, contact: e.target.value })}
                placeholder="minhanh@email.com"
                className={fieldClass}
              />
            </label>
            <label>
              <span className={labelClass}>Ngày đến</span>
              <input
                type="date"
                value={form.arrive}
                onChange={(e) => setForm({ ...form, arrive: e.target.value })}
                className={fieldClass}
              />
            </label>
            <label>
              <span className={labelClass}>Ngày đi</span>
              <input
                type="date"
                value={form.depart}
                onChange={(e) => setForm({ ...form, depart: e.target.value })}
                className={fieldClass}
              />
            </label>
            <label>
              <span className={labelClass}>Số khách</span>
              <select
                value={form.guests}
                onChange={(e) => setForm({ ...form, guests: e.target.value })}
                className={fieldClass}
              >
                {["1", "2", "3", "4", "5+"].map((n) => (
                  <option key={n} value={n}>
                    {n} khách
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span className={labelClass}>Loại phòng</span>
              <select
                value={form.room}
                onChange={(e) => setForm({ ...form, room: e.target.value })}
                className={fieldClass}
              >
                {roomTypes.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </label>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full bg-[#B8975A] px-8 py-4 text-[11px] tracking-[0.18em] text-[#14130F] uppercase transition-colors duration-[400ms] ease-[cubic-bezier(.22,1,.36,1)] hover:bg-[#1C1B19] hover:text-[#F3EEE4] focus-visible:ring-2 focus-visible:ring-[#1C1B19] focus-visible:outline-none sm:w-auto"
              >
                Tạo yêu cầu đặt phòng
              </button>
              <p className="mt-4 text-xs leading-relaxed text-[#6F6A62]">
                Tạo tóm tắt thông tin lưu trú để gọi trực tiếp lễ tân (+84 862 298 125) hoặc đặt qua
                liên kết đối tác trên Google Maps.
              </p>

              {submitted && (
                <div className="mt-6 border border-[#B8975A]/40 bg-[#F0EBE2] p-5">
                  <p className="text-[10px] tracking-[0.18em] text-[#B8975A] uppercase">
                    Thông tin yêu cầu đã sẵn sàng
                  </p>
                  <pre className="mt-3 font-body text-xs leading-relaxed whitespace-pre-wrap text-[#1C1B19]">
                    {summaryText}
                  </pre>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href="tel:+84862298125"
                      className="inline-flex items-center gap-2 bg-[#1C1B19] px-4 py-2.5 text-[10px] tracking-[0.18em] text-[#F3EEE4] uppercase transition-colors duration-300 hover:bg-[#B8975A] hover:text-[#14130F]"
                    >
                      <Phone size={13} strokeWidth={1.2} />
                      Gọi +84 862 298 125
                    </a>
                    <button
                      type="button"
                      onClick={copySummary}
                      className="inline-flex items-center gap-2 border border-[#1C1B19]/20 px-4 py-2.5 text-[10px] tracking-[0.18em] text-[#1C1B19] uppercase transition-colors duration-300 hover:border-[#B8975A] hover:text-[#B8975A]"
                    >
                      {copied ? <Check size={13} strokeWidth={1.4} /> : <Copy size={13} strokeWidth={1.2} />}
                      {copied ? "Đã sao chép" : "Sao chép nội dung"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </form>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="overflow-hidden border border-[#1C1B19]/10">
            <iframe
              title="Bản đồ vị trí Mai's Boutique — 104 Tô Hiến Thành, Đà Nẵng"
              src="https://www.google.com/maps?q=Mai%27s+Boutique,+104+T%C3%B4+Hi%E1%BA%BFn+Th%C3%A0nh,+An+H%E1%BA%A3i,+%C4%90%C3%A0+N%E1%BA%B5ng&output=embed"
              width="600"
              height="400"
              loading="lazy"
              className="h-[280px] w-full grayscale-[0.3] md:h-[340px]"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <ul className="mt-10 space-y-6">
            <li className="flex gap-4">
              <MapPin size={18} strokeWidth={1.1} className="mt-0.5 shrink-0 text-[#B8975A]" />
              <p className="text-sm leading-relaxed text-[#6F6A62]">
                104 Tô Hiến Thành, An Hải
                <br />
                Đà Nẵng 550000, Việt Nam
              </p>
            </li>
            <li className="flex gap-4">
              <Phone size={18} strokeWidth={1.1} className="mt-0.5 shrink-0 text-[#B8975A]" />
              <a
                href="tel:+84862298125"
                className="group text-sm text-[#1C1B19] transition-colors duration-300 hover:text-[#B8975A] focus-visible:ring-2 focus-visible:ring-[#B8975A] focus-visible:outline-none"
              >
                +84 862 298 125
              </a>
            </li>
            <li className="flex gap-4">
              <Clock size={18} strokeWidth={1.1} className="mt-0.5 shrink-0 text-[#B8975A]" />
              <div className="text-sm leading-relaxed text-[#6F6A62]">
                <p>Nhận phòng 14:00 · Trả phòng 12:00</p>
                <a
                  href="https://maps.app.goo.gl/DCpoRUmvEZXQbYPG7"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-block text-xs tracking-[0.12em] text-[#1C1B19] uppercase underline decoration-[#B8975A]/60 underline-offset-4 transition-colors duration-300 hover:text-[#B8975A]"
                >
                  Xem chỉ đường &amp; giá phòng trên Google Maps
                </a>
              </div>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
