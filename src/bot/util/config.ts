/**
 * @fileoverview Bot configuration ( Environment variables, etc. )
 * @author Georgi Slaveykov
 * @license GPL-3.0
 */

import logger from './logger';
import dotenv from 'dotenv';
import fs from 'fs';

if (fs.existsSync('.env')) {
		logger.log('debug', 'Using .env to supply environment variables');
		dotenv.config({path: '.env'});
} else {
		logger.log('error', 'Your .env file is missing.');

		process.exit(1);
}

export const BOT_TOKEN = process.env.BOT_TOKEN;
export const BOT_AVATAR = process.env.BOT_AVATAR;

if (!BOT_TOKEN) {
		logger.log('error', 'Bot token is missing.');
		process.exit(1);
}
