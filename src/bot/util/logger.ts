/**
 * @fileoverview Console and file logging system
 * @module util/logger
 * @author Georgi Slaveykov
 * @license GPL-3.0
 */

import { createLogger, transports, format } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const logger = createLogger({
	format: format.combine(
		format.timestamp({ format: 'YYYY/MM/DD HH:mm:ss' }),
		format.printf((info: any) => {
			const { timestamp, message, level, ...meta } = info;
			return `[${timestamp} - ${level}] ${message} ${Object.keys(meta).length ?
				`\n${JSON.stringify(meta, null, 2)}` : ''}`;
		}),
	),
	transports: [
		new transports.Console({ level: 'debug' }),
		new DailyRotateFile({
			format: format.combine(
				format.timestamp(),
				format.json()
			),
			filename: './logs/tsumugi-%DATE%.log',
			level: 'debug',
			maxSize: '20m',
			maxFiles: '14d'
		})
	]
});

export default logger;
