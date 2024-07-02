import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

const _config = {
	PRIVATE_KEY: process.env.PRIVATE_KEY,
	ADMIN_ADDRESS: process.env.ADMIN_ADDRESS,
	BROKER_ID: process.env.BROKER_ID,
};

export const config = Object.freeze(_config);
