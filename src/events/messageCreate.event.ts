import { Message } from 'discord.js-selfbot-v13';

const MessageCreateEvent = {
  name: 'messageCreate',
  once: false,
  async execute(message: Message) {},
};

module.exports = MessageCreateEvent;
