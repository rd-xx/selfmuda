import { Message } from 'discord.js-selfbot-v13';

let snipe = false;

const MessageCreateEvent = {
  name: 'messageCreate',
  once: false,
  async execute(message: Message) {
    if (message.guildId !== '978792304766754856') return;
    if (
      message.author.id === '321665807988031495' &&
      message.content === '$$$'
    ) {
      snipe = !snipe;
      await message.react(snipe ? '✅' : '❌');
      return;
    }
    if (message.author.id !== '432610292342587392') return;

    const refusedKakeras = [
      '469791929106956298',
      '609264180851376132',
      '609264166381027329'
    ];

    if (
      message.components[0] &&
      message.components[0].components[0] &&
      message.components[0].components[0].type === 'BUTTON'
    ) {
      const componentEmoji = message.components[0].components[0].emoji;
      if (!componentEmoji || !componentEmoji.id) return;
      else if (!refusedKakeras.includes(componentEmoji.id) && snipe) {
        await message.components[0].components[0].click(message);
        console.log('Kakera sniped!');
      }
    }

    return;
  }
};

module.exports = MessageCreateEvent;
