import { createLogger, transports, format } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const logger = createLogger({
	format: format.combine(
		format.timestamp({ format: 'YYYY/MM/DD HH:mm:ss' }),
		format.printf((info: any) => {
			const { timestamp, message, level } = info;
			return `[${timestamp} - ${level}] ${message}`;
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
