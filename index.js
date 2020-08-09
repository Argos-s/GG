const { Telegraf } = require('telegraf')
const bot = new Telegraf('');
const Keyboard = require('telegraf-keyboard');
const { keyboard }= require('telegraf/markup');

const mainMenuKeyboard = (new Keyboard())
    .add('Цены', 'Вузы')
    .add('Экономическое положение')

const hopp = new Keyboard()
    .add('Назад')

bot.start((ctx) => {
    ctx.reply('Напиши страну')
})

.hears('Дания', (ctx) => {
    ctx.reply('Что бы ты хотел узнать о ней', mainMenuKeyboard.draw())
})
.hears('Цены', ctx => {
    ctx.reply('\nПоездка в общ. транс - $4,43 \nПроездной на мес - $44,25 \n \nХлеб - $0,79 \nМолоко - $1,03 \nЯица (10) - $2,69 \nКартофель (кг) - $1,30 \nРис (кг) - $2,21 \nПомидоры (кг) - $3,16 \nЯблоки (кг) - $2,21 \nБананы (кг) - $2,37 \nАпельсины (кг) - $2,37 \nСыр - $3,16 \nФиле - $6,01 \nФарш - $5,82 \nСэндвич - $3,95 \nГотовые наборы еды - $7,89 \nSnickers 50г - $1,58', hopp.draw())
})
.hears('Назад', (ctx) => {
    ctx.reply('Окей', mainMenuKeyboard.draw())
})
.hears('Экономическое положение', (ctx) => {
    ctx.reply('\nВВП (ППС) - $286,8 млрд \nППС - $49 883 \nРост ВВП - 2,1% \nСр з/п после налогов - €3256,87 \nИнфляция - 1,1% \nБезработица - 5,8%', hopp.draw())
})
.hears('Вузы', (ctx) => {
    ctx.reply('Университет Тон - 20 000$/год', hopp.draw())
})

.on('callback_query', (ctx) => {
    ctx.answerCbQuery(ctx.callbackQuery.data)
})

bot.startPolling()
