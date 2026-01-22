const TelegramBot = require("node-telegram-bot-api");

const token = "8228483139:AAG_TsvA4s3sOv2Bq0Oxf5GJ-YvIwUbdK4g";
const bot = new TelegramBot(token, { polling: true });

// When user clicks START
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, "Welcome 👋\nClick below to open the website", {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "🌐 Open Website",
                        web_app: {
                            url: "https://cozy-creponne-09ce7b.netlify.app"
                        }
                    }
                ]
            ]
        }
    });
});
