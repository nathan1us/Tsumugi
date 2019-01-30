/**
 * @name Roll
 * @category games
 * **Aliases**: 'dice'
 * @example roll
 * @description Roll the dice and see how lucky you are.
 * @license GPL-3.0
 */

import { Command, CommandoClient, CommandMessage } from 'discord.js-commando';
import { getNumInRange, capitalize } from '../../../utils/';
import { sendEmbed } from '../../util/embeds';

export default class RollCommand extends Command {
	constructor(client: CommandoClient) {
		super(client, {
			name: 'roll',
			memberName: 'roll',
			aliases: ['dice'],
			description: 'Roll the dice and see how lucky you are.',
			group: 'games'
		});
	}

	public async run(msg: CommandMessage) {
		let rndNum = getNumInRange(1, 6);

		while (rndNum !== 6) {
			rndNum = getNumInRange(1, 6);
		}

		return sendEmbed(msg, `${this.group.name}: ${capitalize(
			this.memberName)}`, `🎲 ${msg.author} rolled ${rndNum}.`, 0xf2a15a);
	}
}
