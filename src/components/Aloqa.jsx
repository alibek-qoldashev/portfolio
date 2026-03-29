import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Aloqa = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [forma, formaYangilash] = useState({
    ism: "",
    telegram: "",
    xabar: "",
  });

  const [yuborilmoqda, yuborilmoqdaYangilash] = useState(false);

  const taqiqlanganSozlar = [
    "gay", "gey", "yban", "qotoq", "qo'toq", "am", "om", "dalbayop",
    "pidaraz", "jalab", "foxisha", "ass", "pussy", "bitch", "fuck",
    "dick", "trans", "lesbian", "qotoqbosh", "ambosh"
  ];

  const formaOzgarishi = (e) => {
    formaYangilash({ ...forma, [e.target.name]: e.target.value });
  };

  const yuborish = async (e) => {
    e.preventDefault();

    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      alert("Bot token yoki chat ID topilmadi!");
      return;
    }

    if (forma.xabar.length < 5) {
      alert("Iltimos, aniqroq xabar kiriting!");
      return;
    }

    const xabarSozlari = forma.xabar
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .split(/\s+/);

    const taqiqlangan = xabarSozlari.some((soz) =>
      taqiqlanganSozlar.includes(soz)
    );

    if (taqiqlangan) {
      alert("❌ Xabaringizda taqiqlangan so'zlar mavjud!");
      return;
    }

    const telegramUsername = forma.telegram.startsWith("@")
      ? forma.telegram
      : `@${forma.telegram}`;

    const yuboriladiganXabar = `📥Alibek yangi xabar keldi!\n\n👤 Ismi: ${forma.ism}\n\n📨 Telegram: ${telegramUsername}\n\n📝 Xabar: ${forma.xabar}`;

    yuborilmoqdaYangilash(true);

    try {
      const javob = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: yuboriladiganXabar,
          }),
        }
      );

      if (javob.ok) {
        alert("✅ Xabaringiz muvaffaqiyatli yuborildi!");
        formaYangilash({ ism: "", telegram: "", xabar: "" });
      } else {
        const xatolikMatni = await javob.text();
        console.log("Telegram javobi:", xatolikMatni);
        alert("❌ Xabar yuborilmadi. Iltimos, qayta urinib ko‘ring.");
      }
    } catch (xatolik) {
      console.error("Xatolik:", xatolik);
      alert("❌ Internetda muammo bo‘lishi mumkin.");
    } finally {
      yuborilmoqdaYangilash(false);
    }
  };

  return (
    <section id="Aloqa" className="scroll-mt-20 mt-20 px-4   ">
      <h1
        className="text-5xl font-bold mb-6 text-[#31ddff] cursor-default select-none text-center"
        data-aos="zoom-in-down"
        data-aos-delay="100"
        data-aos-duration="1200"
      >
        Contact
      </h1>

      <form
        onSubmit={yuborish}
        className="flex flex-col gap-4 max-w-md mx-auto"
      >
        <input
          name="ism"
          value={forma.ism}
          onChange={formaOzgarishi}
          placeholder="Name"
          required
          className="p-3 rounded-xl text-black bg-white"
        />
        <input
          name="telegram"
          value={forma.telegram}
          onChange={formaOzgarishi}
          placeholder="Your contact info"
          required
          className="p-3 rounded-xl text-black bg-white"
        />
        <textarea
          name="xabar"
          value={forma.xabar}
          onChange={formaOzgarishi}
          placeholder="Type here"
          required
          rows={4}
          className="p-3 rounded-xl text-black bg-white"
        />
        <button
          type="submit"
          disabled={yuborilmoqda}
          className="w-50 mx-auto text-white py-3 rounded-xl  transition font-semibold bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg text-xl"
        >
          {yuborilmoqda ? "Yuborilmoqda..." : "Yuborish"}
        </button>
      </form>
    </section>
  );
};

export default Aloqa;