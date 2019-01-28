import { CommandoClient } from 'discord.js-commando';

import * as path from 'path';

export class TsumugiClient {

	private client!: CommandoClient;

	public start(token: string): void {

		// 1) Create the fucking client
	this.client = new CommandoClient({
	commandPrefix: '.',
	disableEveryone: true,
	owner: '263748137473146880',
	unknownCommandResponse: false,
	});

	// 2) Register types, groups, commands, etc/
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
	console.log('Tsumugi is ready! 🎉');
});

	// 3) Start bot
	this.client.login(token);
}
}
