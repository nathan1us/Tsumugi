/**
 * @name Ping
 * @category util
 * **Aliases**: 'ms'
 * @example ping
 * @description Check the bot's ping to your Discord server.
 * @license GPL-3.0
 */

import { Command, CommandoClient, CommandMessage } from 'discord.js-commando';
import { Message } from 'discord.js';
import { sendEmbed } from '../../../misc/embeds';

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
			const description: string = `🏓 Poong!\n
			⏱️ **RTT**: ${Math.round(secondMessage.createdTimestamp - msg.createdTimestamp)} ms
			💓 **Heartbeat**: ${Math.round(msg.client.ping)} ms`;

			await secondMessage.delete(1000);

			return sendEmbed(msg, `${this.group.name}: ${this.memberName}`, description, 0xf2a15a);
		}
	}
}
