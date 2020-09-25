import { promisify } from 'util';
import { RedisClient, createClient } from 'redis';
import logger from './logger';

export class RedisUtil {
	public static client: RedisClient;
	public static connect() {
		return new Promise((resolve, reject) => {
			const client = createClient({
				port: 6379,
				host: process.env.REDISCACHEHOSTNAME,
				password: process.env.REDISCACHEKEY,
				tls: null
			});
			client.on('ready', () => {
				this.client = client;
				logger.info('[RedisWrapper] Redis connection established!');
				resolve();
			});
			client.on('error', err => {
				logger.error(err);
				reject(err);
			});
		});
	}
	public static promisify(methodName: string) {
		return promisify(this.client[methodName]).bind(this.client);
	}
	public static set(key: string, value: any, expireTime: number) {
		if (expireTime) {
			return this.promisify('set')(key, JSON.stringify(value), 'EX', expireTime);
		} else {
			return this.promisify('set')(key, JSON.stringify(value));
		}
	}
	public static async get(key: string) {
		const result = await this.promisify('get')(key);
		return JSON.parse(result);
	}
	public static delete(key: string) {
		return this.promisify('del')(key);
	}
	public static getDialogKey(id: string) {
		return `dialog-${id}`;
	}
}
