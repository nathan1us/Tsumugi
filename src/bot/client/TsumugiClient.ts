import { CommandoClient } from 'discord.js-commando';
import logger from '../../util/logger';

import * as path from 'path';

export class TsumugiClient {

	private client!: CommandoClient;

	public start(token: string): void {

		this.client = new CommandoClient({
			commandPrefix: '.',
			disableEveryone: true,
			owner: '263748137473146880',
			unknownCommandResponse: false,
		});

		this.client.registry
			.registerDefaultTypes()
			.registerGroups([['util', 'Utility commands']])
			.registerDefaultCommands({
				commandState: false,
				help: false,
				ping: false,
				prefix: false,
			})
			.registerCommandsIn(path.join(__dirname, '..', 'commands'));

		this.client.on('ready', () => {
			logger.log('debug', 'Tsumugi is ready! 🎉');
		});

		this.client.login(token);
	}
}
