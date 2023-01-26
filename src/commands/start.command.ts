import {Command} from "./comand.class";
import {Markup, Telegraf} from "telegraf";
import {IBotContext} from "../context/context/context.interface";
import {ServiceApi} from "../service/service.api";

export class StartCommand extends Command {
    constructor(bot: Telegraf<IBotContext>) {
        super(bot);
    }

    handle(): void {
        this.bot.start((ctx) => {
            ctx.reply('Вы любите андрюху?',
                Markup.inlineKeyboard([
                    Markup.button.callback("Da", "yes"),
                    Markup.button.callback("НИЕТ", "no"),
                    Markup.button.callback("ХОЧУ АНЕКДОТ", "anekdot"),
                    Markup.button.callback("меня зовут Олег", "oleg")
                ])
            )
        });

        this.bot.action("oleg", (ctx) => {
            ctx.session.andruLove = true;
            ctx.editMessageText('Олеги хороши!')
        })

        this.bot.action("yes", (ctx) => {
            ctx.session.andruLove = true;
            ctx.editMessageText('Я ЗНАЮ АХАХАХАХААХХА')
        })

        this.bot.action("no", (ctx) => {
            ctx.session.andruLove = false;
            ctx.editMessageText('ОБМАНЩИК ПОДУМОЙ')
        })

        this.bot.action("anekdot", async (ctx) => {
            let dog = await ServiceApi.getRandomDog()
            ctx.session.andruLove = false;
            ctx.sendPhoto(dog)
            ctx.editMessageText("ПОКА В РАЗРАБОТКЕ, ТАК ЧТО ДЕРЖИ ПЕСУ")
            ctx.reply('А ХОТИТЕ И КОШЕЧКУ ?',
                Markup.inlineKeyboard([
                    Markup.button.callback("Da", "koshka"),
                    Markup.button.callback("НИЕТ", "koshka_NET"),
                ])
            )
        })

        this.bot.action('koshka_NET', async (ctx) => {
            let cat = await ServiceApi.getRandomCat();
            ctx.sendPhoto(cat);
            ctx.sendMessage('ВРЕШЬ, ВСЕ ЛЮБЯТ КОШЕК.ДЕРЖИ ЕЩЕ КОШКУ!!!!!')
            ctx.session.andruLove = true;
        })

        this.bot.action('koshka', async (ctx) => {
            let cat = await ServiceApi.getRandomCat();
            ctx.sendPhoto(cat);
            ctx.reply('Нравятся ли вам КИСКИ',
                Markup.inlineKeyboard([
                    Markup.button.callback('DA', 'koshkam_da'),
                    Markup.button.callback('ОЧЕНЬ', 'koshkam_da')
                ])
            )
        })

        this.bot.action("koshkam_da", async (ctx) => {
            let cat = await ServiceApi.getRandomCat();
            ctx.sendPhoto(cat);
            ctx.sendMessage('ДЕРЖИ ЕЩЕ КОШКУ!!!!!')
            ctx.session.andruLove = true;
        })


    }
}