/**
 * @fileoverview Pre-defined methods to help with the bot's embed messages
 * @author Georgi Slaveykov
 * @license GPL-3.0
 */

import { CommandMessage } from 'discord.js-commando';
import { BOT_AVATAR } from '../bot/util/config';
import { Message } from 'discord.js';

/**
 * Send an embed based on different arguments
 * @param message - Message to use as promise base
 * @param title - The embed's title
 * @param content - The embed's content. (uses 'embed.description')
 * @param color - The embed's color
 * @returns Promise '<Message | Message[]>' object
 * @example sendEmbed(msg, `This is a title`, 'This is the embed's content', 0xf2a15a);
 */
export function sendEmbed(message: CommandMessage, title: string, content: string, color: number) {
		const promise: Promise<Message | Message[]> = message.embed({
			author: {
				name: title,
				icon_url: BOT_AVATAR
			},
			description: content,
			color,
			timestamp: new Date()
		});

		return promise;
}

/**
 * Send an error embed
 * @param message - Message to use as promise base
 * @param error - The error's message
 * @param color - The embed's color
 * @returns function - sendEmbed(message, error, color);
 * @example sendErrorEmbed(msg, 'Error message', 0xFF0000);
 */
export function sendErrorEmbed(message: CommandMessage, error: string, color: number) {
	return sendEmbed(message, 'An error has occurred!', `❌ **Error:**  ${error} `, color);
}
