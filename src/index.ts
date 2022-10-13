import { Client } from 'discord.js-selfbot-v13';
import { readdirSync } from 'fs';
import { join } from 'path';
require('dotenv').config();

const client = new Client({
  intents: ['GUILDS', 'GUILD_MESSAGES', 'MESSAGE_CONTENT'],
  presence: { status: 'invisible' },
  checkUpdate: false,
});

async function main() {
  // load events
  const eventsPath = join(__dirname, 'events');
  const eventFiles = readdirSync(eventsPath).filter((file) =>
    file.endsWith('.js')
  );

  for (const file of eventFiles) {
    const filePath = join(eventsPath, file);
    const event = require(filePath);
    if (event.once) {
      client.once(event.name, (...args) => event.execute(...args));
    } else {
      client.on(event.name, (...args) => event.execute(...args));
    }
  }

  await client.login();
}

main();
