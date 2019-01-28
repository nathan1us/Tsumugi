/**
 * @file PingCommand - Check the bot's ping to your Discord server.
 * **Aliases**: 'ms'
 * @category util
 * @name Ping
 * @example ping
 */

import { Command, CommandoClient, CommandMessage } from 'discord.js-commando';
import { Message } from 'discord.js';

export default class PingCommand extends Command {

	constructor(client: CommandoClient) {
		super(client, {
			group: 'util',
			memberName: 'ping',
			name: 'ping',
			description: 'Check the bot\'s ping to your Discord server.',
			guarded: true,
		});
	}

	public async run(msg: CommandMessage) {
		if (msg.editedTimestamp == null) {
			return msg.channel.send('Pinging...')
				.then((sent: Message) => {
					const rtt = Math.round(sent.createdTimestamp - msg.createdTimestamp);
					const heartbeat = msg.client.ping;
					return sent.edit(`RTT: ${rtt} ms\nPing: ${heartbeat} ms`);
				});
		}
	}
}
