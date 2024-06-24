const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");

const bot = new Telegraf("7450726336:AAF8Eq4NmhJP9u5-aHp09YFsKeObfCMGsoI");

const isMemberFunc = async (ctx) => {
  const id = ctx.chat.id;

  const member = await ctx.telegram
    .getChatMember(`-100${2018020256}`, id)
    .then((s) => s.status)
    .catch((e) => console.log(e));

  const member1 = await ctx.telegram
    .getChatMember(`-100${1873339742}`, id)
    .then((s) => s.status)
    .catch((e) => console.log(e));

  if (member == "creator" || member == "member") {
    if (member1 == "creator" || member1 == "member") {
      if (member == "creator" || member == "member") {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
};

bot.on("text", async (ctx) => {
  const azo = await isMemberFunc(ctx);
  if (azo) {
    const text = ctx.message.text;
    if (text == "/start") {
      try {
        ctx.reply(
          `<b>Hurmatli foydalanuvchi. Botimizdan bemalol foydalanishingiz mumkin 😉</b>
    
    -Ushbu bot orqali Telegram o'yinlarni abuz(buzish) qilishni o'rganishingiz,
    -Eng so'ngi airdroplar haqida ma'lumot olishingiz mumkin`,
          {
            parse_mode: "HTML",
            reply_markup: {
              keyboard: [[{ text: "Blum Abuz 👨‍💻" }]],
              resize_keyboard: true,
            },
          }
        );
      } catch (e) {
        console.log(e);
      }
    } else if (text == "Blum Abuz 👨‍💻") {
      try {
        await ctx.telegram.sendDocument(
          ctx.chat.id,
          "https://t.me/Bot_kinolar_kodi/32",
          {
            caption: `Ushbu file Blumni hak qilish uchun. Ban olmasligingizga biz javob bermaymiz. Iloji boricha kamroq foydalanishni tavsiya qilamiz.

@TgOyinlar_bot ✅           `,
          }
        );
        ctx.reply("Ushbu joyda sizning reklamangiz bo'lishi mumkin edi 😊");
      } catch (e) {
        console.log(e);
      }
    }
  } else {
    try {
      ctx.reply(
        "Botdan to'liq foydalanish uchun quyidagi kanallarga obuna bo'ling",
        {
          reply_markup: {
            inline_keyboard: [
              [{ text: "1-Kanal 📢", url: "t.me/Tg_Loyihalar" }],
              [{ text: "2-Kanal 📢", url: "t.me/Onedrop_uz" }],
            ],
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
  }
});

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
