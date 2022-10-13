import { Client } from 'discord.js-selfbot-v13';

const ReadyEvent = {
  name: 'ready',
  once: true,
  async execute(client: Client) {
    console.log('Ready!');
  },
};

module.exports = ReadyEvent;
