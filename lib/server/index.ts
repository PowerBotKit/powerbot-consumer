import * as restify from 'restify';

// Import required bot services.
// See https://aka.ms/bot-services to learn more about the different parts of a bot.
import { RedisUtil } from '../utils/redisUtil';
import logger from '../utils/logger';

export enum Channel {
	TEAMS = 'TEAMS',
	GOOGLE_CHAT = 'GOOGLE_CHAT'
}

export interface BotConfig {
	channel: Channel;
	appId: string;
	appSecret: string;
}

export interface BotServerConfig {
	redisConfig?: any; // TODO
}

export class BotServer {
	// operation conversion saving
	public db: any; // types define
	// operation redis
	public redis: any; // types define
	constructor(config: BotServerConfig) {}
}

export const createServer = async (
	config: BotServerConfig
): Promise<BotServer> => {
	return new BotServer(config);
};
