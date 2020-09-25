import * as restify from 'restify';

// Import required bot services.
// See https://aka.ms/bot-services to learn more about the different parts of a bot.
import { RedisUtil } from './utils/redisUtil';
import logger from './utils/logger';
// tslint:disable-next-line: no-commented-code
// import Repository from './models';

export default BotServer;

(async () => {
	// Redis
	await RedisUtil.connect();
	// Database
	// tslint:disable-next-line: no-commented-code
	// await Repository.initRepositories();
	// Create HTTP server.
	const server = restify.createServer();
	server.use(restify.plugins.queryParser());
	server.listen(process.env.port || process.env.PORT || 3978, '0.0.0.0', () => {
		logger.info(`✈️  ${server.name} listening to ${server.url}`);
	});
})();
