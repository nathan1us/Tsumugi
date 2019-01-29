/**
 * @name Ping
 * @category util
 * **Aliases**: 'ms'
 * @example ping
 * @description Check the bot's ping to your Discord server.
 * @license GPL-3.0
 */

import { Command, CommandoClient, CommandMessage } from 'discord.js-commando';
import { Message, RichEmbed } from 'discord.js';

export default class PingCommand extends Command {

	constructor(client: CommandoClient) {
		super(client, {
			group: 'util',
			memberName: 'ping',
			name: 'ping',
			aliases: ['ms'],
			description: 'Check the bot\'s ping to your Discord server.',
			guarded: true,
		});
	}

	public async run(msg: CommandMessage) {
		if (!msg.editable) {
			const secondMessage = await msg.channel.send('Pinging...') as Message;
			const pingEmbed = new RichEmbed()
				.setAuthor('Ping command')
				.setColor(0xf2a15a)
				.setDescription(`🏓 Poong!\n
				⏱️ **RTT**: ${Math.round(secondMessage.createdTimestamp - msg.createdTimestamp)} ms\n
				💓 **Heartbeat**: ${Math.round(msg.client.ping)} ms`)
				.setTimestamp();

			return secondMessage.edit(pingEmbed);
		}
	}
}
